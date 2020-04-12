import { of } from 'rxjs';
import { distinct } from 'rxjs/operators';

const observable = of(1, 1, 2, 3, 4, 4, 5, 6, 7, 1, 8).pipe(distinct());

observable.subscribe(console.log);