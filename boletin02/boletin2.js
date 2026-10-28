// Act 1: Introduce un numero de segundos y un mensaje, 
// este debe aparecer por un alert despues de esos 
// segundos

function mensaje() {
    let segs = parseInt(window.prompt("Dame unos segundos"));
    segs *= 1000;

    window.setTimeout(() => window.alert(`Este mensaje ha sido mostrado tras ${segs / 1000} segundos`), segs);
}

// mensaje();

// Act 2: Modifica el ejercicio anterior para que muestras 
// muestra el mensaje se muestere por consola la cuenta 
// atras antes de pintarse el mensaje

function mensajeCuenta() {
    let segs = parseInt(window.prompt("Dame unos segundos"));
    let cont = segs;
    segs *= 1000;

    let intervalo = window.setInterval(() => {
        console.log(`Alerta en ${cont}`);
        cont--;
        if (cont == 0) {
            window.clearInterval(intervalo);
        }
    }, 1000);
    window.setTimeout(() => window.alert(`Este mensaje ha sido mostrado tras ${segs / 1000} segundos`), segs);
}

// mensajeCuenta();

// Act 3: pide por prompt una url y redirige la pagina a la misma

function url() {
    window.location.assign(window.prompt(`Dame una url`));
}

// url();

// Act 4: 
// Muestra un menu con varias opciones:
// a. Ir atras
// b. Ir hacia adelante
// c. Ir a una direccion
// d. Mostrar la direccion actual
// e. Actualizar la pagina
// f. Salir

function menu() {
    let salir = true;
    do {
        const option = window.prompt("Selecciona una de las opciones: \n"
            + "a. Ir atras \n"
            + "b. Ir hacia adelante \n"
            + "c. Ir a una direccion \n"
            + "d. Mostrar la direccion actual \n"
            + "e. Actualizar la pagina \n"
            + "f. Salir");

        switch (option) {
            case 'a':
                window.history.back();
                salir = false
                break;
            case 'b':
                window.history.forward();
                salir = false
                break;
            case 'c':
                window.location.assign(window.prompt(`Dame una url`, "https://www."));
                salir = false
                break;
            case 'd':
                console.log("Estás en " + window.location.href);
                salir = false
                break;
            case 'e':
                window.location.reload();
                salir = false
                break;
            case 'f':
                console.log("Saliendo");
                salir = false
                break;
            default:
                window.alert("Introduce una de las opciones dadas")
                break;
        }
    } while (salir);
}

// menu();

// Act 5: Al cargar la pagina consulta el nombre de usuario 
// (username) almacenando en el localStorage. Si existe saluda, 
// si no lo pide.
function nombre() {
    let nombre = window.localStorage.getItem("username");

    if (!nombre) {
        nombre = window.prompt("Introduce tu nombre")
    }

    window.localStorage.setItem("username", nombre);
    console.log(`Hola ${nombre}`);
}

// nombre();

//Ejercicio 6
//Contador de recargas. Cada vez que el usuario abra la página,
//acceda o actualice debe incrementar el numero de visitas.
function contadorRecargas(){
    let visitas = window.localStorage.getItem("visitas");
    let contador = visitas !=null ? parseInt(visitas) : 0;
    contador++;
    window.localStorage.setItem("visitas", contador);
    console.log(contador);
}

// contadorRecargas();

//