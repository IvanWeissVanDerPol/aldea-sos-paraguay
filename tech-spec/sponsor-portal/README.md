# Tech Spec — Sponsor Portal

> Especificaciones para el portal de apadrinamiento de Aldea SOS Paraguay.

## Archivos

- **`doc-de-diseno.md`** — diseño del producto, user flows, requisitos
- **`modelo-de-datos.md`** — esquema de base de datos
- **`wireframes.md`** — wireframes de las pantallas principales

## Resumen ejecutivo

El portal de apadrinamiento es la **plataforma de gestión de padrinos** que:

- Permite a padrinos registrarse, ver la casa o programa apadrinado, recibir actualizaciones
- Permite a Aldea SOS PY gestionar padrinos, casas, programas, actualizaciones
- Se integra con la pasarela de donación (Donorbox + Stripe + Bancard)
- Cumple con la política de salvaguarda (cero info identificable del niño)

## Modelo de la casa

Aldea SOS Paraguay NO debe usarse para apadrinamiento a **nivel de niño individual**. El modelo recomendado es a **nivel de casa o programa**:

- **Casa SOS** = 6-10 niños + 1-2 cuidadores
- **Programa** = becas, salud, etc.

¿Por qué?
- **Salvaguarda**: no exponer al niño individualmente
- **Logística**: un niño puede cambiar de casa; el apadrinamiento a la casa es estable
- **Beneficio colectivo**: todos los niños de la casa se benefician

## Plazo

| Hito | Plazo |
|---|---|
| Diseño y modelado | 2 semanas |
| Backend + DB | 4 semanas |
| Frontend | 3 semanas |
| Integración con donación gateway | 1 semana |
| Testing | 2 semanas |
| **Total** | **12 semanas** |

## Stack técnico recomendado

- **Backend**: Node.js + Express, o Python + FastAPI
- **DB**: PostgreSQL (relacional para padrinos, donaciones, casas)
- **Frontend**: Next.js o similar (React)
- **Auth**: Auth0 o Clerk (con SSO opcional)
- **Hosting**: Vercel (frontend) + Railway/Fly.io (backend) + Supabase (DB)
- **Storage**: S3 o Cloudflare R2 (para imágenes de niños)

---

*Última actualización: 2026-08-21*