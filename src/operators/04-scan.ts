import { from } from 'rxjs';
import { scan } from 'rxjs/operators';
const numbers = [1, 2, 3, 4, 5, 6];

from(numbers).pipe(scan((acc, cur) => acc + cur, 0)).subscribe(console.log);