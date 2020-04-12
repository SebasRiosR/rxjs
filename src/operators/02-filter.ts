import { range, from } from 'rxjs';
import { filter } from 'rxjs/operators';


//Filtrar números impares
let observable = range(1, 10).pipe(filter(value => {
    return value % 2 === 1;
}));

observable.subscribe(console.log);


//Filtrar heroes
const characters = [
    {
        type: 'hero',
        name: 'Batman',
    },
    {
        type: 'hero',
        name: 'Super man',
    },
    {
        type: 'villain',
        name: 'Joker',
    }
];

from(characters).pipe(filter(character => {
    return character.type === 'hero';
})).subscribe(console.log);