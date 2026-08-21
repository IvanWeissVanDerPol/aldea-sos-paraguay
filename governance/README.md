# Governance — Gobernanza del Repositorio

Esta carpeta contiene documentos de gobernanza, planificación y soporte de decisiones para el repo de investigación `aldea-sos-paraguay`.

## Archivos

- **[`INDEX.md`](./../INDICE.md)** — índice maestro de cada archivo del repo
- **[`GLOSSARY.md`](./glosario.md)** — acrónimos (SNNA, Ojoykére, Gs.), jerga, personas
- **[`STYLE-GUIDE.md`](./guia-de-estilo.md)** — convenciones de idioma y citación
- **[`RISK-REGISTER.md`](./registro-de-riesgos.md)** — seguimiento de riesgos vivo, incluyendo recaída del escándalo
- **[`STAKEHOLDER-MAP.md`](./mapa-de-stakeholders.md)** — quién es quién en SOS Paraguay, gobierno, aliados
- **[`ACTION-BOARD.md`](./tablero-de-acciones.md)** — Kanban vivo de próximas acciones
- **[`CHANGELOG.md`](./cambios.md)** — qué cambió cuándo
- **[`email-policy.md`](./politica-de-email.md)** — quién envía desde qué, reglas de idioma, frecuencia
- **[`RESTRUCTURE-PLAN.md`](./plan-de-reestructuracion.md)** — por qué el repo está estructurado así

## Qué NO es esta carpeta

- No es investigación (eso vive en `about/`, `benchmark/`, `research/`, `revenue/` después de la restructuración)
- No es pitch / outbound (eso vive en `pitch/` una vez agregado)
- No es especificación técnica (eso vive en `tech-spec/`)

Esta carpeta es **sobre** el repo en sí — su estructura, planes, riesgos, personas, glosario.

---

## Estado (2026-08-21)

El repo está completamente restructurado. Tiene:

```
aldea-sos-paraguay/
├── README.md              (top-level — punto de entrada principal)
├── INDEX.md               (índice maestro)
├── .gitignore
├── about/                 → 10 archivos (dossier SOS PY)
├── archive/               → vacío
├── benchmark/             → 13 archivos (comparación con pares)
├── competitive/           → vacío
├── evidence/              → 19 archivos (HTMLs + EXTRACTED-FACTS)
├── financial/             → vacío
├── governance/            → este folder
├── outreach/              → 5 cold-outreach + 3 plantillas + followup
├── pitch/                 → 7 archivos
├── policy/                → vacío — URGENTE
├── research/              → 31 archivos (catálogo 939 ONGs)
├── revenue/               → 19 archivos (65+ fuentes)
├── start-here/            → 6 archivos (puntos de entrada)
├── strategy/              → vacío
├── tech-spec/             → 3 archivos (email/)
└── _originals/            → safety net de originales

Total: ~135 archivos, 2.1 MB
```

**Todo el contenido en español** para servir al cliente (Aldea SOS Paraguay) que no habla inglés.