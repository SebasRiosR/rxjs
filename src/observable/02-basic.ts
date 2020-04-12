import { Observable, Observer } from 'rxjs';

const observer: Observer<number> = {
    next: (value) => { console.log('num: ' + value); },
    error: (error) => { console.warn('Error: ' + error); },
    complete: () => { console.log('Completado'); }
}

//Ejemplo con problema del intervalo
//El problema consiste en que el setInterval no se detiene por si solo aunque la suscripcion haya terminado
const observable = new Observable<number>(subs => {
    let count = 1;
    setInterval(() => {
        subs.next(count++);
        console.log('intervalo');
    }, 1000);
});

//Me suscribo
let subscripcion = observable.subscribe(observer);

//Cancelo la suscripcion e igualmente se seguira imprimiendo la palabra "intervalo"
setTimeout(() => {
    subscripcion.unsubscribe();
}, 5000);


//Ejemplo solucionando el problema del intervalo
const observable2 = new Observable<number>(subs => {
    let count = 1;
    let interval = setInterval(() => {
        subs.next(count++);
        console.log('intervalo2');
    }, 1000);
    //Con esto me aseguro de que el intervalo se detenga cuando se termine la suscripcion
    return() => {
        clearInterval(interval);
    }
});

let subscripcion2 = observable2.subscribe(observer);

setTimeout(() => {
    subscripcion2.unsubscribe();
}, 5000);


//unsubscribe no es lo mismo que complete
const observable3 = new Observable<number>(subs => {
    let count = 1;
    let interval = setInterval(() => {
        subs.next(count++);
    }, 1000);
    return() => {
        clearInterval(interval);
    }
});

let subscripcion3 = observable3.subscribe(observer);
let subscripcion4 = observable3.subscribe(observer);

//Cuando cancelo una suscripcion el observable sigue emitiendo para el resto
//Cuando se completa un observable no transmite mas para ninguna suscripcion
setTimeout(() => {
    subscripcion3.unsubscribe();
}, 2000);

setTimeout(() => {
    subscripcion4.unsubscribe();
}, 5000);