import { range, asyncScheduler } from 'rxjs';

//Sincrono
const observable = range(1, 10);
console.log('Inicio 1');
observable.subscribe(
    (value) => {
        console.log(value);
    }
);
console.log('Fin 1');

//Asincrono
const observable2 = range(1, 10, asyncScheduler);
console.log('Inicio 2');
observable2.subscribe(
    (value) => {
        console.log(value);
    }
);
console.log('Fin  2');