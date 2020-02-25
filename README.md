# Validación de tarjeta de crédito para Distribuidora Mayor

## Índice

* [1. Resumen](#1-Resumen)
* [2. Imagen final del proyecto](#2-imagen-final-del-proyecto)
* [3. Investigacion UX](#3-investigacion-ux)
* [4. Objetivos de aprendizaje](#4-objetivos-de-aprendizaje)


***

## 1. Resumen

El proyecto permite validar el número de tarjeta de crédito presentado por 
el cliente al momento de realizar el pago.

Utilizaremos el [algoritmo de Luhn](https://es.wikipedia.org/wiki/Algoritmo_de_Luhn),
también llamado algoritmo de módulo 10, es un método de suma de verificación.

Este algoritmo es simple. Obtenemos la reversa del número a verificar (que
solamente contiene dígitos [0-9]); a todos los números que ocupan una posición
par se les debe multiplicar por dos, si este número es mayor o igual a 10,
debemos sumar los dígitos del resultado; el número a verificar será válido si
la suma de sus dígitos finales es un múltiplo de 10.

## 2. Imagen final del proyecto

El proyecto consta de 2 pantallas:

![proyecto final pantalla 1](https://github.com/luzma-coder/LIM012-card-validation/blob/master/src/screen/imagenfinal1.jpg)   ![proyecto final pantalla 2](https://github.com/luzma-coder/LIM012-card-validation/blob/master/src/screen/imagenfinal2.jpg)

## 3. Investigacion UX

### 3.1 Usuarios y objetivos

Los usuarios personal de la Distribuidora Mayor buscan seguridad y rapidez
para validar las tarjetas de crédito durante el proceso de pago.

Su objetivo es captar más clientes dando un mejor servicio en el proceso de pago.

### 3.2 Como soluciona el problema

El producto soluciona los problemas de demora en la validacion de tarjeta de 
crédito, sino lo tendrian que realizar manualmente con riesgo de error. 

### 3.3 Primer prototipo en papel

![primer prototipo papel 1](https://github.com/luzma-coder/LIM012-card-validation/blob/master/src/screen/primprototipo1.jpg)  ![primer prototipo papel 2](https://github.com/luzma-coder/LIM012-card-validation/blob/master/src/screen/primprototipo2.jpg)

### 3.4 Feedback

En está etapa se vio la necesidad de incluir botones de retorno y mensajes 
adecuados para guiar al usuario sobre la informacion a ingresar.

### 3.5 Prototipo final

![prototipo final 1](https://github.com/luzma-coder/LIM012-card-validation/blob/master/src/screen/prototipofinal1.jpg)   ![prototipo final 2](https://github.com/luzma-coder/LIM012-card-validation/blob/master/src/screen/prototipofinal2.jpg)

## 4. Objetivos de aprendizaje

El objetivo principal de aprendizaje es adquirir experiencia desarrollando
aplicaciones web (WebApp) que interactúen con el usuario a través del navegador
y la lógica, utilizando HTML, CSS y JavaScript como herramientas.

Reflexiona y luego marca los objetivos que has llegado a **entender** y
**aplicar** en tu proyecto.

### UX

* [x] [Diseñar la aplicación pensando y entendiendo al usuario](https://lms.laboratoria.la/cohorts/lim-2020-01-bc-core-lim012/courses/intro-ux/01-el-proceso-de-diseno/00-el-proceso-de-diseno)
* [x] [Crear prototipos para obtener feedback e iterar](https://lms.laboratoria.la/cohorts/lim-2020-01-bc-core-lim012/courses/product-design/00-sketching/00-sketching)
* [x] [Aplicar los principios de diseño visual](https://lms.laboratoria.la/cohorts/lim-2020-01-bc-core-lim012/courses/product-design/01-visual-design/01-visual-design-basics)

### HTML y CSS

* [x] [Uso correcto de HTML semántico](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#Semantics_in_HTML)
* [x] [Uso de selectores de CSS](https://developer.mozilla.org/es/docs/Web/CSS/Selectores_CSS)
* [x] [Construir tu aplicación respetando el diseño realizado](https://lms.laboratoria.la/cohorts/lim-2020-01-bc-core-lim012/courses/css/01-css/02-boxmodel-and-display) (maquetación).

### DOM

* [x] [Uso de selectores de nodos del DOM](https://lms.laboratoria.la/cohorts/lim-2020-01-bc-core-lim012/courses/browser/02-dom/03-1-dom-methods-selection)
* [x] [Manejo de eventos del DOM](https://lms.laboratoria.la/cohorts/lim-2020-01-bc-core-lim012/courses/browser/02-dom/04-events)
* [ ] [Manipulación dinámica del DOM](https://developer.mozilla.org/es/docs/Referencia_DOM_de_Gecko/Introducci%C3%B3n)

### Javascript

* [x] [Manipulación de strings](https://lms.laboratoria.la/cohorts/lim-2020-01-bc-core-lim012/courses/javascript/06-strings/01-strings)
* [x] [Uso de condicionales](https://lms.laboratoria.la/cohorts/lim-2020-01-bc-core-lim012/courses/javascript/02-flow-control/01-conditionals-and-loops)
* [x] [Uso de bucles](https://lms.laboratoria.la/cohorts/lim-2020-01-bc-core-lim012/courses/javascript/02-flow-control/02-loops)
* [x] [Uso de funciones](https://lms.laboratoria.la/cohorts/lim-2019-09-bc-core-lim011/courses/javascript/02-flow-control/03-functions)
* [x] [Datos atómicos y estructurados](https://www.todojs.com/tipos-datos-javascript-es6/)
* [ ] Utilizar ES Modules (`import` | `export`).

### Testing

* [x] [Testeo de tus funciones](https://jestjs.io/docs/es-ES/getting-started)

### Git y GitHub

* [x] [Comandos de git](https://lms.laboratoria.la/cohorts/lim-2019-09-bc-core-lim011/courses/scm/01-git/04-commands)
  (`add` | `commit` | `pull` | `status` | `push`).
* [ ] [Manejo de repositorios de GitHub](https://lms.laboratoria.la/cohorts/lim-2019-09-bc-core-lim011/courses/scm/02-github/01-github)  (`clone` | `fork` | `gh-pages`).

### Buenas prácticas de desarrollo

* [ ] Organizar y dividir el código en módulos (Modularización).
* [x] Uso de identificadores descriptivos (Nomenclatura | Semántica).
* [ ] Uso de linter para seguir buenas prácticas (ESLINT).