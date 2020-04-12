import { of } from 'rxjs';
import { endWith } from 'rxjs/operators';

const observable = of(1, 2, 3, 4, 5).pipe(endWith(6, 7, 8));

observable.subscribe(console.log);