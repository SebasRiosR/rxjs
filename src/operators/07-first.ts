import { fromEvent } from 'rxjs';
import { first } from 'rxjs/operators';

const observable = fromEvent<MouseEvent>(document, 'click');

//Con desestructuración
observable.pipe(
    first(({clientX}) => clientX > 500)
).subscribe({
    next: value => console.log(value),
    complete: () => console.log('complete')
});

//Sin desestructuración
observable.pipe(
    first(event => event.clientX > 500)
).subscribe({
    next: value => console.log(value),
    complete: () => console.log('complete')
});