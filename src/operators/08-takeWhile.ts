import { fromEvent } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

const observable = fromEvent<MouseEvent>(document, 'click');

observable.pipe(
    takeWhile(({clientX}) => clientX > 500)
).subscribe({
    next: value => console.log(value),
    complete: () => console.log('complete')
});