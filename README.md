# Validación de tarjeta de crédito para Distribuidora Mayor

## Índice

* [1. Resumen](#1-Resumen)
* [2. Imagen final del proyecto](#2-imagen-final-del-proyecto)
* [3. Investigacion UX](#3-investigacion-ux)


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

![proyecto final pantalla 1](https://github.com/luzma-coder/LIM012-card-validation/blob/master/src/screen/imagenfinal1.jpg)

![proyecto final pantalla 2](https://github.com/luzma-coder/LIM012-card-validation/blob/master/src/screen/imagenfinal2.jpg)

## 3. Investigacion UX

### Usuarios y objetivos

Los usuarios personal de la Distribuidora Mayor buscan seguridad y rapidez
para validar las tarjetas de crédito durante el proceso de pago.

Su objetivo es captar más clientes dando un mejor servicio en el proceso de pago.

### Como soluciona el problema

El producto soluciona los problemas de demora en la validacion de tarjeta de 
crédito, sino lo tendrian que realizar manualmente con riesgo de error. 

### Primer prototipo en papel

![primer prototipo papel 1](https://github.com/luzma-coder/LIM012-card-validation/blob/master/src/screen/primprototipo1.jpg)

![primer prototipo papel 2](https://github.com/luzma-coder/LIM012-card-validation/blob/master/src/screen/primprototipo2.jpg)

### Feedback

En está etapa se vio la necesidad de incluir botones de retorno y mensajes 
adecuados para guiar al usuario sobre la informacion a ingresar.

### Prototipo final

![prototipo final 1](https://github.com/luzma-coder/LIM012-card-validation/blob/master/src/screen/prototipofinal1.jpg)

![prototipo final 2](https://github.com/luzma-coder/LIM012-card-validation/blob/master/src/screen/prototipofinal2.jpg)

