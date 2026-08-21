# FAQ — Preguntas anticipadas + Respuestas

> 20 preguntas más probables que nos harían, con respuestas breves.

---

## Sobre Aldea SOS Paraguay

### P1: ¿Por qué no lo hacen ellos mismos?
R: Tienen la voluntad pero no la capacidad de ingeniería digital. Su sitio web está en Duda CMS — una plantilla, no una plataforma custom. Construir la infraestructura que les falta (pasarela de donación, portal de apadrinamiento, dashboard de transparencia) es exactamente el tipo de proyecto en el que necesitan ayuda. Ofrecemos hacerlo por ellos, con su aprobación.

### P2: ¿No están recuperándose de un escándalo?
R: Sí, pero **no de uno propio**. El escándalo de octubre 2025 fue sobre Hermann Gmeiner (Austria, 1950-1980) y la rama austriaca fue suspendida. Paraguay es autónoma bajo ley paraguaya y **respondió en 24 horas**. Tienen un Comité Nacional de Salvaguardia. Nuestra propuesta de valor es ayudarles a liderar en transparencia post-escándalo, no tapar nada.

### P3: ¿Cuál es su presupuesto? ¿Pueden pagarlo?
R: Sus ingresos anuales estimados son USD 1.5-3M [evidencia: estimación basada en benchmarks de pares]. Varias de nuestras intervenciones propuestas son **gratuitas** (Google Ad Grants, Salesforce NPSP, Microsoft Philanthropies, AWS Imagine, Donorbox gratis para <1k donantes). Costo tecnológico total en Año 1 = ~USD 0-3k para ellos.

### P4: ¿Quién es el Director Nacional? ¿Quién decide realmente?
R: **Desconocido públicamente**. Conocemos dos personas: Ana Medina Zorrilla (Sostenibilidad) y Zunilda Baruja (Alianzas Corporativas, 0982 199 681). La primera reunión debería ser con ellas, que pueden presentarnos al Director Nacional.

### P5: ¿Cuál es el rol de la Federación?
R: SOS-Kinderdorf International (Innsbruck, Austria) define estrategia global + estándares de salvaguardia. Las asociaciones nacionales son entidades legales autónomas. Las subvenciones de la Federación son parte de los ingresos de SOS PY pero el monto exacto no es público.

## Sobre el proyecto

### P6: ¿Qué quieren de nosotros?
R: (a) Permiso para contactar a SOS PY primero, (b) presentación con Ana o Zunilda, (c) capacidad de ingeniería por 2-4 semanas, (d) opcional USD 15-30k seed para tecnología.

### P7: ¿Cuánto tarda la construcción?
R: 90 días para los top 5 rápido wins. 6-12 meses para el portal de apadrinamiento completo + micrositio de transparencia. Entrega por fases — no necesitamos todo para lanzar.

### P8: ¿Qué pasa si dicen que no?
R: Aprendemos algo valioso (sus prioridades reales), seguimos teniendo el catálogo de investigación para otros clientes, y re-enganchamos en 6 meses con el progreso de transparencia como puerta de entrada.

### P9: ¿Es esta investigación generalizable?
R: Sí — el mismo paquete (pasarela de donación + micrositio de transparencia + portal de apadrinamiento) podría venderse a otras ONGs paraguayas (TECHO, CIRD, Alda, Cimientos). Es una jugada de portafolio.

### P10: ¿Por qué ParaguAI / Aiw? ¿Por qué no una agencia especializada?
R: Tenemos contexto local + podemos movernos rápido. Las agencias especializadas serían más lentas y caras. Además, el momento post-escándalo requiere fluidez cultural que las agencias externas no tienen.

## Sobre el enfoque técnico

### P11: ¿Por qué Donorbox? ¿Por qué no Stripe / Bancard / Pix / Tigo Money?
R: Todos. Donorbox para el MVP porque es gratis bajo 1k donantes, tiene producto en español, soporta recurrentes nativamente. Stripe para internacional (USD/EUR). Bancard para tarjetas locales PY. Tigo Money + Pix + Wally para billeteras móviles. Usamos todos los rieles.

### P12: ¿Cómo aseguran la privacidad de los niños?
R: (a) Sin información identificable en los textos de recaudación. (b) Portal de apadrinamiento es a nivel CASA, no a nivel niño. (c) Formularios de consentimiento de imagen obligatorios. (d) Reporte trimestral de salvaguardia publicado.

### P13: ¿Qué hay del escándalo? ¿Nuestros materiales van a nombrar a Gmeiner?
R: Solo cuando sea directamente relevante y solo con revisión explícita. Por defecto hablamos de la respuesta autónoma de Paraguay, no del fundador.

### P14: ¿Qué es la carta de salvaguardia?
R: Modelo de política de protección infantil (en `../11-policy/`). Incluye: reporte de incidentes, canal de whistleblower, requisitos de capacitación, calendario de auditorías. La versión pública puede publicarse como diferenciador competitivo.

## Sobre el potencial de ingresos

### P15: ¿Las estimaciones de ingresos son reales?
R: Son **estimaciones** basadas en benchmarks de pares. NO son compromisos. Usar lenguaje como "potencial" y "basado en ONGs similares". El mayor motor es donación online, que todos los pares usan.

### P16: ¿Cuántas de las 65+ fuentes podemos activar realmente?
R: No todas. Meta realista en 18 meses: 5-7 fuentes activadas, incluyendo el top 5 de la lista priorizada. Potencial total: USD 70-275k/año extra.

### P17: ¿Cuánto vale realmente la diáspora?
R: La diáspora PY es ~600k en Argentina + 162k en España + grande en USA. Incluso 0.01% de participación = USD 100-500k/año. Los DAFs son el canal clave US.

### P18: ¿Qué hay de crypto / Web3?
R: Nicho. Recomendado NO priorizar. Bitso Paraguay es el exchange local; The Giving Block es la plataforma global. Podría agregarse después como momento de PR, no como canal principal.

## Sobre los próximos 30 días

### P19: ¿Qué pasa primero?
R: (1) Enviar email frío a Ana Medina o Zunilda Baruja (plantilla en `../07-outreach/email/`). (2) Seguimiento en 5 días hábiles. (3) Si responden: agendar discovery call de 30 min (4) Si no responden: pivotar a Tigo/Itaú/Ueno primero, que pueden presentar.

### P20: ¿Qué pasa si preguntan "¿por qué deberíamos trabajar con ustedes"?
R: "Hicimos la tarea. Catálogo de 939 ONGs. 65 fuentes de ingreso. Benchmark de pares. Sabemos qué hace el 99% de sus pares que ustedes no, y sabemos exactamente cuáles 5 cosas lanzar primero. Ya mapeamos sus gaps tecnológicos y su portafolio de aliados corporativos. Ofrecemos un plan de 90 días que les cuesta cero en el Año 1."

---

*Agregar a este FAQ cuando aparezcan nuevas preguntas.*