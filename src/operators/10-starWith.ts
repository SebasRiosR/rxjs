import { of } from 'rxjs';
import { startWith } from 'rxjs/operators';

const observable = of(1, 2, 3, 4, 5).pipe(startWith(0));

observable.subscribe(console.log);