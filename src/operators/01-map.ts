import { range, fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

//Ejemplo 1
let observable = range(1, 10).pipe(
    map<number, number>(value => {
        return value * 10;
    })
);

observable.subscribe(value => {
    console.log(value);
});


//Ejemplo 2
let observable2 = fromEvent<KeyboardEvent>(document, 'keyup').pipe(map(event => {
    return event.code;
}));

observable2.subscribe(keyCode => {
    console.log('Tecla presionada: ' + keyCode);
});