import { interval, concat } from 'rxjs';
import { take } from 'rxjs/operators';

const observable = interval(1000);

concat(
    observable.pipe(take(3)),
    observable.pipe(take(2))
).subscribe(console.log);

