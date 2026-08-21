# Modelo de Datos — Sponsor Portal

> Esquema de base de datos del portal de apadrinamiento.

## Diagrama ER

```
┌──────────────┐       ┌──────────────┐       ┌──────────────┐
│   users      │       │   padrinos   │       │   aldeas     │
│              │       │              │       │              │
│ id           │ 1───* │ id           │       │ id           │
│ email        │       │ user_id      │       │ name         │
│ password_hash│       │ country      │       │ city         │
│ is_admin     │       │ joined_at    │       │ address      │
│ is_padrino   │       │ subscription_id│    │ created_at   │
│ created_at   │       │            │       └──────────────┘
└──────────────┘       │            │              │
                        │            │              │
                        │            │              │
                        │            │ 1          *
                        │            └─────────────┤
                        │                          │
                        │     ┌────────────────────┐
                        │     │                    │
                        │     │  padrinamientos    │
                        │     │                    │
                        │     │ * id              │
                        │     │   padrino_id (FK) │
                        │     │   casa_id (FK)    │
                        │     │   programa_id (FK)│
                        │     │   status          │
                        │     │   start_date      │
                        │     │   end_date        │
                        └─────┤   amount         │
                              │   frequency      │
                              └──────────────────┘
                                      │
                                      │
                                      │ *
                                      │
                                      │ 1
                              ┌──────────────────┐
                              │                  │
                              │   casas          │
                              │                  │
                              │ id              │
                              │  aldea_id (FK)  │
                              │  name           │
                              │  capacity       │
                              │  created_at    │
                              └──────────────────┘
                                      │
                                      │ 1
                                      │
                              ┌──────────────────┐
                              │                  │
                              │   programas       │
                              │                  │
                              │ id              │
                              │  name           │
                              │  description    │
                              │  budget         │
                              │  start_date    │
                              │  end_date      │
                              └──────────────────┘
```

## Tablas principales

### 1. users

```sql
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    is_admin BOOLEAN DEFAULT FALSE,
    is_padrino BOOLEAN DEFAULT FALSE,
    is_comite BOOLEAN DEFAULT FALSE,
    failed_login_count INT DEFAULT 0,
    locked_until TIMESTAMP,
    last_login_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 2. padrinos

```sql
CREATE TABLE padrinos (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id),
    full_name VARCHAR(255) NOT NULL,
    country VARCHAR(2),  -- ISO 3166-1 alpha-2
    language VARCHAR(5) DEFAULT 'es',  -- es, en, pt
    currency VARCHAR(3) DEFAULT 'PYG',  -- PYG, USD, EUR
    monthly_amount DECIMAL(12, 2) NOT NULL,
    recurrence VARCHAR(20),  -- 'monthly', 'quarterly', 'annual'
    payment_method VARCHAR(50),  -- 'donorbox', 'stripe', 'bancard'
    subscription_id VARCHAR(255),  -- ID externo del procesador
    status VARCHAR(20) DEFAULT 'active',  -- 'active', 'cancelled', 'paused'
    communication_preferences JSONB,  -- email, sms, language
    joined_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    cancelled_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 3. aldeas

```sql
CREATE TABLE aldeas (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    city VARCHAR(100) NOT NULL,
    department VARCHAR(100),  -- Central, Misiones, Itapúa, Concepción
    address TEXT,  -- dato sensible, acceso limitado
    public_address VARCHAR(255),  -- versión para padrinos
    capacity INT,
    established_at DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 4. casas

```sql
CREATE TABLE casas (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    aldea_id UUID REFERENCES aldeas(id),
    name VARCHAR(100) NOT NULL,
    capacity INT,
    current_children_count INT,
    cuidador_principal VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 5. programas

```sql
CREATE TABLE programas (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    description TEXT,
    category VARCHAR(50),  -- 'becas', 'salud', 'nutricion', 'educacion'
    budget DECIMAL(12, 2),
    start_date DATE,
    end_date DATE,  -- null = ongoing
    casa_id UUID REFERENCES casas(id),  -- opcional, programa puede ser a nivel aldea
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 6. padrinamiento (asociación)

```sql
CREATE TABLE padrinamientos (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    padrino_id UUID REFERENCES padrinos(id),
    casa_id UUID REFERENCES casas(id),
    programa_id UUID REFERENCES programas(id),  -- uno de los dos
    status VARCHAR(20) DEFAULT 'active',  -- 'active', 'cancelled', 'paused'
    start_date DATE NOT NULL,
    end_date DATE,
    cancelled_at TIMESTAMP,
    cancellation_reason TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CHECK ((casa_id IS NOT NULL) OR (programa_id IS NOT NULL))
);
```

### 7. donaciones

```sql
CREATE TABLE donaciones (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    padrino_id UUID REFERENCES padrinos(id),
    padrinamiento_id UUID REFERENCES padrinamientos(id),
    amount DECIMAL(12, 2) NOT NULL,
    currency VARCHAR(3) NOT NULL,
    amount_usd DECIMAL(12, 2),  -- convertido a USD para reportes
    payment_method VARCHAR(50),  -- 'donorbox', 'stripe', 'bancard'
    payment_id VARCHAR(255),  -- ID externo
    payment_status VARCHAR(20),  -- 'pending', 'completed', 'failed', 'refunded'
    payment_date TIMESTAMP NOT NULL,
    receipt_sent_at TIMESTAMP,
    is_recurring BOOLEAN DEFAULT FALSE,
    recurrence_period VARCHAR(20),  -- 'monthly', 'quarterly', 'annual'
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 8. actualizaciones (newsletters)

```sql
CREATE TABLE actualizaciones (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    casa_id UUID REFERENCES casas(id),
    programa_id UUID REFERENCES programas(id),
    title VARCHAR(255) NOT NULL,
    body TEXT NOT NULL,
    author_id UUID REFERENCES users(id),
    status VARCHAR(20) DEFAULT 'draft',  -- 'draft', 'pending_review', 'approved', 'published'
    reviewer_id UUID REFERENCES users(id),
    reviewed_at TIMESTAMP,
    published_at TIMESTAMP,
    media_urls TEXT[],  -- array de URLs de fotos/videos
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 9. padrinamiento_actualizaciones (asociación)

```sql
CREATE TABLE padrinamiento_actualizaciones (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    padrinamiento_id UUID REFERENCES padrinamientos(id),
    actualizacion_id UUID REFERENCES actualizaciones(id),
    sent_at TIMESTAMP,
    opened_at TIMESTAMP,
    clicked_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 10. mensajes

```sql
CREATE TABLE mensajes (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    padrino_id UUID REFERENCES padrinos(id),
    sender_id UUID REFERENCES users(id),  -- staff que responde
    subject VARCHAR(255),
    body TEXT NOT NULL,
    status VARCHAR(20) DEFAULT 'open',  -- 'open', 'replied', 'closed'
    replied_at TIMESTAMP,
    reply_body TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 11. reportes_trimestrales

```sql
CREATE TABLE reportes_trimestrales (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    casa_id UUID REFERENCES casas(id),
    programa_id UUID REFERENCES programas(id),
    quarter INT NOT NULL,  -- 1, 2, 3, 4
    year INT NOT NULL,
    pdf_url VARCHAR(255),
    is_public BOOLEAN DEFAULT FALSE,
    sent_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 12. audit_log

```sql
CREATE TABLE audit_log (
    id BIGSERIAL PRIMARY KEY,
    user_id UUID REFERENCES users(id),
    action VARCHAR(100) NOT NULL,
    resource_type VARCHAR(50),
    resource_id UUID,
    ip_address INET,
    user_agent TEXT,
    metadata JSONB,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 13. incidentes_salvaguarda

```sql
CREATE TABLE incidentes_salvaguarda (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    reporter_id UUID REFERENCES users(id),
    tipo VARCHAR(50),  -- 'abuso_fisico', 'abuso_sexual', 'negligencia', 'otro'
    descripcion TEXT,
    estado VARCHAR(20) DEFAULT 'reportado',  -- 'reportado', 'investigacion', 'cerrado'
    severidad VARCHAR(20),  -- 'baja', 'media', 'alta'
    reportado_a_snna BOOLEAN DEFAULT FALSE,
    reportado_a_fiscalia BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    closed_at TIMESTAMP
);
```

## Índices críticos

```sql
-- Búsquedas rápidas
CREATE INDEX idx_donaciones_padrino_id ON donaciones(padrino_id);
CREATE INDEX idx_donaciones_payment_date ON donaciones(payment_date);
CREATE INDEX idx_padrinos_status ON padrinos(status);
CREATE INDEX idx_padrinamientos_status ON padrinamientos(status);
CREATE INDEX idx_actualizaciones_status ON actualizaciones(status);
CREATE INDEX idx_actualizaciones_published ON actualizaciones(published_at);
CREATE INDEX idx_audit_log_user_id ON audit_log(user_id);
CREATE INDEX idx_audit_log_created ON audit_log(created_at);
```

## Consideraciones de seguridad

- **Encriptación en reposo**: usar pgcrypto o solución a nivel disco
- **Encriptación en tránsito**: TLS obligatorio
- **Backups**: encriptados, retención 30 días
- **Acceso**: row-level security (RLS) en PostgreSQL para limitar qué puede ver cada tipo de usuario
- **Auditoría**: log de toda acción en `audit_log`

## Consideraciones de privacidad

- **Datos de padrino**: encriptados en columnas sensibles
- **Datos de niños**: NO se almacenan en este portal (solo a nivel casa, anonimizado)
- **Retención**: padrinos 7 años post-cancelación; casas indefinido; donaciones 7 años (fiscal)
- **Eliminación**: procedimiento documentado en `policy/proteccion-de-datos-ninos.md`

## Stack de queries comunes

### Total donado por padrino en el año

```sql
SELECT SUM(amount_usd) as total_donado_usd
FROM donaciones
WHERE padrino_id = $1
  AND payment_date >= '2026-01-01'
  AND payment_status = 'completed';
```

### Padrinos activos por país

```sql
SELECT country, COUNT(*) as total_padrinos
FROM padrinos
WHERE status = 'active'
GROUP BY country
ORDER BY total_padrinos DESC;
```

### Casos con padrinos activos

```sql
SELECT c.id, c.name, a.name as aldea, COUNT(p.id) as num_padrinos
FROM casas c
JOIN aldeas a ON c.aldea_id = a.id
LEFT JOIN padrinamientos p ON c.id = p.casa_id AND p.status = 'active'
GROUP BY c.id, c.name, a.name
ORDER BY num_padrinos DESC;
```

---

*Última actualización: 2026-08-21*