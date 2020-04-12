import { Observable, Subject } from 'rxjs';

const observable = new Observable<number>(subs => {
    const interval = setInterval(() => {
        subs.next(Math.random())
    }, 2000);
    return() => {
        clearInterval(interval);
    }
});


//Ejemplo observable tradicional
const observer1 = observable.subscribe(value => console.log('1: ' + value));
const observer2 = observable.subscribe(value => console.log('2: ' + value));

setTimeout(() => {
    observer1.unsubscribe();
    observer2.unsubscribe();
}, 10000);


//Ejemplo con subject
//El subject se encarga de que emita el mismo valor para todas las suscripciones
const sub = new Subject();
observable.subscribe(sub);

const observer3 = sub.subscribe(value => console.log('1: ' + value));
const observer4 = sub.subscribe(value => console.log('2: ' + value));

setTimeout(() => {
    observer3.unsubscribe();
    observer4.unsubscribe();
}, 10000);


//Ejemplo de hot observable
const sub2 = new Subject();
observable.subscribe(sub2);

const observer5 = sub2.subscribe(value => console.log('1: ' + value));

setTimeout(() => {
    sub2.next(3);
}, 3000);

setTimeout(() => {
    observer5.unsubscribe();
}, 10000);