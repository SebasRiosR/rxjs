
import { fromEvent } from 'rxjs';
import { pluck } from 'rxjs/operators';

let observable2 = fromEvent<KeyboardEvent>(document, 'keyup').pipe(pluck('code'));

observable2.subscribe(keyCode => {
    console.log('Tecla presionada: ' + keyCode);
});