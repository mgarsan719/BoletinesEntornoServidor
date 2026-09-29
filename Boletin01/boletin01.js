// 1. Datos personales. Declara variables para almacenar tu nombre, edad y ciudad.
// Muestra por consola una frase con esos datos.
function datosPersonales() {
    let nombre = "Mario";
    let edad = 21;
    let ciudad = "Sevilla";

    console.log(`Hola, me llamo ${nombre}, tengo ${edad} años y soy de ${ciudad}`)
}

// datosPersonales();

// 2. Área de un rectángulo. Declara las variables necesarias para almacenar la base
// y la altura de un rectángulo y calcula su área.
function calculaAreaRectangulo() {
    let base = 10;
    let altura = 5;
    let area = base * altura;

    console.log(`El area del rectangulo es de ${area}cm`);
}

// calculaAreaRectangulo();

// 3. Conversión de temperatura. Dada una temperatura en grados Celsius, calcula y
// muestra su equivalente en grados Fahrenheit.
function temperaturas() {
    let celsius = 39;
    let Fahrenheit = celsius * 1.8 + 32;

    console.log(`${celsius} grados Celsius son ${Fahrenheit} grados Fahrenheit`)
}

// temperaturas();

// 4. Precio de una compra. Dado el precio de un producto y el número de unidades
// compradas, calcula y muestra el importe total.
function precioCompra() {
    let precio = 12;
    let unidades = 77;
    let resultado = precio * unidades;

    console.log(`El precio total es de ${resultado}`);
}

// precioCompra();

// 5. Nómina sencilla. Dado un salario bruto, calcula una retención del 15 % y muestra
// el salario neto.
function nomina() {
    let salarioBruto = 1800;
    let salarioNeto = salarioBruto - salarioBruto * 0.15;

    console.log(`Para tu salario bruto de ${salarioBruto}€, tu salario neto es de ${salarioNeto}€, disfruta de lo votado `)
}

// nomina();

// 6. Conversión de segundos. Dado un número de segundos, calcula cuántas horas,
// minutos y segundos representa.
function calculaTiempo(){
    let segundosInicial=59877;

    let horas= parseInt(segundosInicial/3600);
    let minutos= parseInt((segundosInicial%3600)/60);
    let segundos= parseInt((segundosInicial%3600)%60);

    console.log(`${segundosInicial} segundos son ${horas} horas, ${minutos} minutos y ${segundos} segundos`);
}

calculaTiempo();

// 7. Intercambio de valores. Declara dos variables a y b e intercambia sus valores.
// Muestra el resultado antes y después del intercambio.


// 8. Mayor de edad. Dada una edad, indica mediante un mensaje si la persona es
// mayor o menor de edad.


// 9. Número positivo, negativo o cero. Dado un número, indica si es positivo,
// negativo o igual a cero.


// 10. Número mayor. Dados dos números, muestra cuál de ellos es mayor o indica si
// son iguales.


// 11. Calificación. Dada una nota entre 0 y 10, muestra si corresponde a un suspenso,
// aprobado, notable o sobresaliente.


// 12. Año bisiesto. Dado un año, determina si es bisiesto.


// 13. Calculadora. Dados dos números y un operador (+, -, * o /), realiza la operación
// correspondiente utilizando una estructura de selección.


// 14. Números del 1 al 10. Muestra por consola los números del 1 al 10 utilizando una
// estructura de repetición.


// 15. Números pares. Muestra todos los números pares comprendidos entre 1 y 100.


// 16. Tabla de multiplicar. Dado un número, muestra su tabla de multiplicar del 1 al 10.


// 17. Suma hasta N. Dado un número N, calcula la suma de todos los números
// comprendidos entre 1 y N.


// 18. Factorial. Dado un número entero positivo, calcula y muestra su factorial.


// 19. Múltiplos de 3. Dado un número N, muestra todos los múltiplos de 3
// comprendidos entre 1 y N.


// 20. Función saludar. Crea una función saludar(nombre) que reciba un nombre como
// parámetro y muestre un saludo personalizado.


// 21. Función para calcular un área. Crea una función calcularArea(base, altura) que
// reciba la base y la altura de un rectángulo y devuelva su área.


// 22. Función para comprobar la mayoría de edad. Crea una función
// esMayorDeEdad(edad) que devuelva true si la edad es igual o superior a 18 y
// false en caso contrario.


// 23. Función para obtener el mayor. Crea una función que reciba dos números y
// devuelva el mayor de ellos.


// 24. Función de conversión. Crea una función que reciba una temperatura en grados
// Celsius y devuelva su equivalente en Fahrenheit.


// 25. Calculadora mediante funciones. Crea las funciones sumar(), restar(),
// multiplicar() y dividir(). Después, crea un programa que solicite dos números y una
// operación y utilice la función correspondiente.


// 26. Validador de notas. Crea una función que reciba una nota y devuelva un texto
// indicando si es «Suspenso», «Aprobado», «Notable» o «Sobresaliente». Utiliza
// después la función para comprobar varias notas.


// 27. Número primo. Crea una función esPrimo(numero) que determine si un número
// es primo. La función deberá devolver true o false.


// 28. Adivina el número. Genera un número aleatorio entre 1 y 10. El usuario deberá
// intentar adivinarlo. El programa indicará si ha acertado o si el número introducido
// es mayor o menor que el número secreto.


// 29. Menú de operaciones. Crea un programa que muestre un menú con las opciones
// «Sumar», «Restar», «Multiplicar», «Dividir» y «Salir». El usuario podrá seleccionar
// una opción y realizar la operación correspondiente. Utiliza funciones, estructuras
// de selección y estructuras de repetición.


// 30. Calculadora avanzada. Crea una calculadora que permita realizar operaciones
// de suma, resta, multiplicación, división y potencia. El programa deberá mostrar un
// menú, solicitar los datos necesarios y utilizar una función diferente para cada
// operación. El menú deberá repetirse hasta que el usuario seleccione la opción de
// salir. Controla también la división entre cero.


// 31. Sistema de calificaciones. Crea un programa que permita introducir las notas de
// un alumno. El programa deberá solicitar inicialmente el número de notas que se
// van a introducir y, mediante un bucle, solicitar cada una de ellas. Utiliza funciones
// para calcular la nota media y determinar la calificación final: Suspenso, Aprobado,
// Notable o Sobresaliente. Comprueba que las notas introducidas estén
// comprendidas entre 0 y 10.


// 32. Cajero automático. Simula el funcionamiento de un cajero automático. El usuario
// comienza con un saldo determinado y puede consultar su saldo, retirar dinero,
// ingresar dinero o salir. Crea una función para cada operación y utiliza un menú
// que se repita hasta seleccionar la opción de salida. El programa deberá impedir
// retirar una cantidad superior al saldo disponible y cantidades negativas o iguales a
// cero.


// 33. Juego de adivinanza. Crea un juego en el que el programa genere un número
// aleatorio entre 1 y 100 y el usuario tenga que adivinarlo. Después de cada intento,
// el programa indicará si el número introducido es mayor o menor que el número
// secreto. El juego deberá contar el número de intentos y finalizar cuando el jugador
// acierte. Organiza el programa utilizando funciones.


// 34. Conversor de unidades. Crea un programa que permita convertir diferentes
// unidades. El usuario podrá elegir entre convertir kilómetros a millas, grados
// Celsius a Fahrenheit, kilogramos a libras o euros a dólares. Utiliza un menú, una
// función para cada conversión y una estructura de repetición que permita realizar
// varias conversiones hasta seleccionar la opción de salir.


// 35. Control de acceso. Crea un programa que simule el acceso a una aplicación. El
// programa tendrá un usuario y una contraseña almacenados en variables. El
// usuario dispondrá de un máximo de tres intentos para introducir correctamente
// ambos datos. Crea una función que compruebe las credenciales y otra que
// muestre el resultado del acceso. Si se superan los tres intentos, el acceso deberá
// quedar bloqueado.


// 36. Facturación de un producto. Crea un programa que calcule el importe final de
// una compra. El usuario deberá introducir el precio del producto y la cantidad
// adquirida. El programa aplicará diferentes descuentos según el importe total: sin
// descuento para compras inferiores a 50 €, un 5 % entre 50 € y 100 €, un 10 %
// entre 100 € y 200 € y un 15 % para importes superiores a 200 €. Finalmente,
// deberá calcular el IVA del 21 % y mostrar el precio final. Utiliza funciones para
// separar los diferentes cálculos.


// 37. Menú de gestión de una cuenta. Diseña un pequeño programa que simule una
// cuenta bancaria. El programa deberá comenzar con un saldo inicial y mostrar un
// menú con las opciones consultar saldo, ingresar dinero, retirar dinero, consultar si
// la cuenta tiene saldo suficiente y salir. Cada operación deberá estar implementada
// mediante una función. El menú se repetirá hasta que el usuario decida salir y
// deberán controlarse las operaciones no válidas.


// 38. Estadísticas de números. Crea un programa que permita introducir una cantidad
// determinada de números. El programa deberá utilizar un bucle para procesarlos y
// calcular el mayor, el menor, la suma y la media. No se permite utilizar arrays.
// Organiza el código mediante funciones siempre que sea posible. Al finalizar,
// muestra todos los resultados por consola.


// 39. Programa integrador: gestión de notas. Desarrolla un programa completo para
// gestionar las calificaciones de un alumno. El programa deberá permitir introducir el
// nombre del alumno y varias notas, calcular la media, determinar la calificación
// final y mostrar si el alumno ha aprobado. Deberá existir un menú con diferentes
// opciones y el programa continuará funcionando hasta seleccionar «Salir». Utiliza
// funciones para realizar las operaciones principales y controla los posibles valores
// incorrectos introducidos por el usuario.


// 40. Reto final: simulador de tienda. Desarrolla un pequeño programa que simule
// una compra en una tienda. El usuario podrá consultar diferentes opciones de
// compra, introducir el precio y cantidad de un producto, calcular el subtotal, aplicar
// descuentos según el importe y calcular el IVA. El programa deberá disponer de un
// menú que permita realizar operaciones hasta seleccionar «Finalizar compra».

