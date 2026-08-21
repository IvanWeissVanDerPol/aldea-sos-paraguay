# Política de Protección de Datos de Niños y Adolescentes

> **Propósito**: Cómo Aldea SOS Paraguay recopila, almacena, usa, comparte y elimina datos personales de niños, niñas y adolescentes bajo su cuidado.
>
> **Audiencia**: Personal de Aldea, equipo de IT, padrinos, Comité Nacional de Salvaguardia.

---

## 1. Alcance

Esta política aplica a **todos los datos personales** de niños, niñas y adolescentes menores de 18 años que:

- Están bajo cuidado residencial de Aldea SOS Paraguay
- Participan en programas de prevención (Ojoykére)
- Son referidos por la organización a través de cualquier programa
- Son apadrinados por donantes individuales

Datos cubiertos incluyen:
- Nombre completo, fecha de nacimiento, cédula
- Información médica y psicológica
- Historial familiar y situación legal
- Ubicación de la Aldea donde reside
- Material fotográfico, de audio o video
- Desempeño escolar y actividades
- Información de contacto de familia biológica
- Información de padrinos o cuidadores

---

## 2. Principios rectores

### 2.1 Interés superior del niño
Toda decisión sobre datos de un niño se toma priorizando su **interés superior**, su **seguridad**, y su **dignidad**.

### 2.2 Recopilación mínima
Solo recopilamos los datos **estrictamente necesarios** para cumplir nuestros objetivos de cuidado, educación, protección, y desarrollo.

### 2.3 Consentimiento
Los datos se recopilan con **consentimiento informado** de los padres, tutores, o del propio niño cuando es mayor de 12 años (según la Convención de los Derechos del Niño).

### 2.4 Limitación de uso
Los datos se usan **solo para los fines** para los que fueron recopilados (cuidado, educación, salud, apadrinamiento).

### 2.5 Seguridad
Los datos se almacenan con **encriptación en tránsito y en reposo**, acceso **limitado al personal autorizado**, y **respaldo regular**.

### 2.6 Retención limitada
Los datos se conservan solo durante el período necesario (ver sección 6).

### 2.7 Derecho al olvido
El niño, su familia, o el padrino pueden **solicitar la eliminación** de sus datos en cualquier momento.

---

## 3. Categorías de datos y su tratamiento

### 3.1 Datos identificables personales
- **Nombre completo, cédula, fecha de nacimiento**
- **Almacenamiento**: servidor con encriptación AES-256
- **Acceso**: solo personal directo de la Aldea + Comité
- **Retención**: 25 años después de que el niño deje la Aldea
- **Eliminación**: trituración segura de documentos físicos + eliminación criptográfica de digitales

### 3.2 Datos médicos y psicológicos
- **Historial clínico, evaluaciones, tratamientos**
- **Almacenamiento**: historia clínica con encriptación
- **Acceso**: solo profesionales de salud autorizados
- **Retención**: 25 años
- **Eliminación**: según normativa del MSP y BS

### 3.3 Datos escolares
- **Calificaciones, asistencia, comportamiento**
- **Almacenamiento**: sistema educativo del Ministerio de Educación + registro interno
- **Acceso**: cuidadores + equipo pedagógico
- **Retención**: hasta que el niño termine sus estudios

### 3.4 Datos familiares
- **Historia familiar, situación socioeconómica, vínculo con familia biológica**
- **Almacenamiento**: servidor con encriptación
- **Acceso**: solo personal autorizado
- **Retención**: 25 años
- **Eliminación**: según el caso

### 3.5 Datos visuales (fotos, videos)
- **Imágenes del niño en actividades cotidianas, de grupo, con consentimiento**
- **Almacenamiento**: servidor con encriptación + respaldo offline
- **Acceso**: solo equipo de comunicaciones + Comité
- **Retención**: indefinida, salvo solicitud de eliminación
- **Eliminación**: cuando se solicita, se eliminan de todos los sistemas (CRMs, redes sociales, archivos)

### 3.6 Datos de padrinos
- **Nombre, email, teléfono, historial de donaciones, comunicación**
- **Almacenamiento**: CRM con encriptación
- **Acceso**: solo equipo de desarrollo
- **Retención**: mientras el padrino esté activo + 7 años (para auditoría financiera)
- **Eliminación**: a solicitud del padrino

---

## 4. Consentimiento

### 4.1 Quién debe consentir

| Edad del niño | Consentimiento válido |
|---|---|
| 0-11 años | Padres o tutores legales |
| 12-17 años | El niño + padres o tutores (asentimiento del niño es obligatorio) |
| 18+ años | El propio joven |

### 4.2 Información a proporcionar

El consentimiento debe ser **informado**, lo que significa que los padres/tutores/niño deben saber:

- **Qué datos** se recopilan
- **Para qué fines** se usan
- **Quiénes** tendrán acceso
- **Dónde** se almacenan
- **Por cuánto tiempo** se conservan
- **Cómo** se pueden revocar

### 4.3 Formato

- **Escrito y firmado** (preferentemente)
- **Renovable anualmente** (consentimiento activo)
- **Específico para cada uso** (no genérico)
- **Modificable** en cualquier momento

**Ver plantilla**: `consentimiento-de-imagen.md`

---

## 5. Almacenamiento y seguridad

### 5.1 Datos digitales

- **Servidor**: en la nube con encriptación AES-256
- **Acceso**: solo con autenticación de dos factores (2FA)
- **Respaldo**: copia offline con encriptación
- **Retención de respaldos**: 30 días en línea, 1 año offline
- **Auditoría**: revisión trimestral de accesos

### 5.2 Datos físicos

- **Archivos bajo llave**: caja fuerte en cada Aldea
- **Acceso**: solo personal autorizado
- **Transporte**: solo en sobre cerrado y firmado
- **Destrucción**: trituración segura al cumplir período de retención

### 5.3 Datos en tránsito

- **Email**: encriptación TLS (HTTPS)
- **Fotografías**: solo por canales encriptados
- **Videollamadas**: solo en plataformas encriptadas (Zoom Healthcare, Google Meet Enterprise)
- **Documentos**: solo por canales seguros (no WhatsApp ni SMS)

---

## 6. Retención y eliminación

| Tipo de dato | Retención | Eliminación |
|---|---|---|
| Identificación (cédula, nombre) | 25 años post-egreso | Trituración física + eliminación criptográfica |
| Historia médica | 25 años | Según normativa MSP y BS |
| Desempeño escolar | Hasta egreso + 5 años | Tras egreso definitivo |
| Historia familiar | 25 años | Tras egreso definitivo |
| Imágenes/video | Indefinida o hasta solicitud | Eliminación de todos los canales |
| Datos de padrinos | Mientras activo + 7 años | A solicitud del padrino |
| Datos de incidentes | 25 años | Tras resolución y revisión legal |
| Comunicaciones con padrinos | 7 años | Tras inactividad del padrino |

---

## 7. Compartir datos con terceros

### 7.1 Con quién sí se comparten

- **SNNA** (autoridad competente): obligatorio por ley
- **Ministerio Público**: cuando hay denuncia penal
- **Poder Judicial**: cuando hay orden judicial
- **Federación SOS International**: reportes consolidados anonimizados
- **Escuelas y centros de salud**: información necesaria para el cuidado

### 7.2 Con quién NO se comparten

- ❌ Otros niños, familias, o personal
- ❌ Padrinos (salvo el niño apadrinado por ellos)
- ❌ Donantes corporativos
- ❌ Medios de comunicación
- ❌ Público general

### 7.3 Para qué sí se comparten

- Cumplimiento legal
- Cuidado del niño (escuela, salud, etc.)
- Operación organizacional
- Reportes anonimizados a la Federación

### 7.4 Cómo se comparten

- **Email** encriptado (TLS)
- **Sistema de archivos compartido** con autenticación
- **Sobre cerrado** (para documentos físicos)
- **Nunca por WhatsApp, SMS, o redes sociales personales**

---

## 8. Derechos del niño y la familia

### 8.1 Derecho a saber

El niño (mayor de 12 años) y su familia tienen derecho a:
- Saber qué datos se recopilan sobre ellos
- Saber para qué se usan
- Saber quiénes tienen acceso
- Ver sus propios datos

### 8.2 Derecho a corregir

Pueden solicitar la **corrección** de datos incorrectos en cualquier momento.

### 8.3 Derecho a eliminar

Pueden solicitar la **eliminación** de datos, excepto:
- Si la ley exige conservarlos (ej: registros de salud)
- Si una investigación legal está en curso
- Si afectan la trazabilidad de la historia de cuidado

### 8.4 Derecho a revocar el consentimiento

Pueden **revocar el consentimiento** en cualquier momento. La organización debe cesar el uso de los datos inmediatamente, salvo cuando la ley exija conservarlos.

---

## 9. Capacitación del personal

Todo el personal nuevo:
- **Capacitación inicial** de 4 horas en protección de datos de niños
- **Firma de acuerdo de confidencialidad** antes de acceder a datos

Personal actual:
- **Capacitación anual** de 2 horas

Personal de IT:
- **Capacitación trimestral** específica en seguridad

---

## 10. Monitoreo y auditoría

- **Auditoría interna**: anual
- **Auditoría externa**: cada 2 años (por firma independiente)
- **Revisión de la política**: cada 2 años
- **Reporte de incidentes**: al Comité Nacional de Salvaguardia

---

## 11. Marco legal aplicable

- **Convención sobre los Derechos del Niño** (NNUU, 1989)
- **Código de la Niñez y la Adolescencia** (Paraguay, Ley 1680/01)
- **Ley de Protección de Datos Personales** (Paraguay, Ley 6534/2020)
- **COPPA** (Children's Online Privacy Protection Act, US — referencia para plataformas digitales)
- **GDPR-K** (referencia para la región europea)

---

## 12. Anexo A: definiciones

- **Dato personal**: cualquier información que identifica a una persona
- **Dato sensible**: dato personal que afecta la intimidad (salud, religión, orientación sexual, etc.)
- **Consentimiento informado**: permiso otorgado después de comprender los alcances del uso
- **Encriptación**: codificación de datos para que solo autorizados puedan leerlos
- **Anonimización**: eliminación de toda referencia identificable
- **Retención**: período durante el cual se conservan los datos antes de eliminarlos

## 13. Anexo B: referencias

- Carta de Salvaguardia de Aldea SOS Paraguay
- Política de Salvaguardia de SOS Children's Villages International
- Estrategia 2030
- COPPA — texto de referencia: https://www.ftc.gov/enforcement/rules/rulemaking-regulatory-reform-proceedings/childrens-online-privacy-protection-rule
- GDPR-K — texto de referencia: https://gdpr.eu/children/

---

*Versión: 1.0 (borrador — agosto 2026)*
*Adaptar y validar con el Comité Nacional de Salvaguardia y el asesor legal de SOS PY antes de adopción oficial.*