---
trigger: always_on
---

# Reglas técnicas básicas del entorno web

Documento operativo para mantenimiento, mejora y control de calidad de una web de artista tipo portafolio.

---

## 1. Revisión obligatoria de código

* Todas las respuestas he interacción deben español
* Ningún cambio se publica sin revisión previa.
* Todo cambio debe revisarse en:

  * sintaxis
  * estructura
  * impacto visual
* Prohibido modificar directamente en producción.
* Flujo recomendado: local → staging → producción.

## 2. Control de versiones

* Commits descriptivos y atómicos.
* Cada cambio debe quedar registrado.
* Prohibido editar archivos sin control de versiones.

## 3. Seguridad básica

* No exponer claves, tokens ni credenciales.
* No dejar directorios abiertos ni listables.
* Eliminar scripts y archivos no utilizados.
* Formularios con validación mínima.
* Uso obligatorio de HTTPS.

## 4. Revisión de vulnerabilidades

* Revisar dependencias periódicamente.
* Evitar librerías sin mantenimiento.
* No usar scripts externos sin trazabilidad.
* Reducir dependencias al mínimo necesario.

## 5. Integridad funcional

* Ningún cambio debe romper funciones existentes.
* Verificar:

  * navegación
  * carga de recursos
  * responsive
  * compatibilidad básica de navegador
* Si algo falla, se revierte el cambio.

## 6. Unidad visual

* Toda la web debe responder a un solo sistema visual.
* Respetar:

  * tipografías
  * escalas
  * colores
  * espaciados
* Prohibido introducir estilos aislados.

## 7. Diseño centrado en humanos

* Navegación clara e intuitiva.
* El usuario debe entender dónde está y cómo avanzar.
* Evitar interacciones ocultas.
* Priorizar legibilidad y jerarquía visual.

## 8. Accesibilidad mínima

* Contraste adecuado y tipografía legible.
* Navegación posible con teclado.
* Imágenes con texto alternativo.
* Evitar depender solo de color o movimiento.

## 9. Performance

* Optimizar imágenes, videos y modelos.
* Lazy loading obligatorio.
* Evitar scripts bloqueantes.
* Medir tiempos de carga periódicamente.

## 10. Consistencia técnica

* Un solo patrón para:

  * navegación
  * fichas de proyecto
  * estructura de texto
* No mezclar frameworks sin justificación.
* Código legible y mantenible.

## 11. Documentación mínima

* README con:

  * stack
  * estructura
  * instrucciones básicas
* Documentar decisiones técnicas críticas.
* Documentar el código constantemente y reorganizar de forma lógica que facilite su entendimiento y funcionamiento 

## 12. Aprobación de cambios

* Cambios mayores requieren aprobación explícita:

  * estructura
  * diseño global
  * navegación
  * stack tecnológico
* Sin aprobación, no se publica.

## 13. Reversibilidad

* Backups periódicos.
* Versiones etiquetadas.
* Ningún cambio irreversible sin copia previa.

## 14. Crecimiento controlado

* Nuevas secciones deben justificar su necesidad.
* Todo debe encajar en la estructura existente.
* Evitar acumulación innecesaria.

## 15. Estabilidad

* Priorizar estabilidad sobre novedad.

* La experiencia del usuario es prioritaria.