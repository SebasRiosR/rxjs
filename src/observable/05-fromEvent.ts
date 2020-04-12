import { fromEvent } from 'rxjs';

//Este observable emite cuando ocurren eventos
//En este caso emite cuando presionen clic en el documento, es decir, en cualquier parte del HTML
//Pero tambien se le puede pasar la referencia de un boton o un elemento especifico 
const observable = fromEvent<MouseEvent>(document, 'click');

//Recibiendo el objeto completo
observable.subscribe(
    (click) => {
        console.log('X: ' + click.x + ' Y: ' + click.y);
    }
);

//Usando desestructuracion para recibir solo lo que me interesa
observable.subscribe(
    ({x, y}) => {
        console.log('Observer2 X: ' + x + ' Y: ' + y);
    }
);