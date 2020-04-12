import { of } from 'rxjs';

const observable = of<number>(1, 2, 3, 4, 5, 6);

observable.subscribe(
    (value) => {
        console.log(value);
    }
);