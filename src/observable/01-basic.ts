import { Observable, Observer } from 'rxjs';

//Este observable retorna un hola mundo en dos emisiones
let observable = new Observable<string>(subs => {
    subs.next("Hola");
    subs.next("Mundo");
    // subs.error('Error inesperado'); //Para emitir un error
    subs.complete();
});


//Ejemplo incluyendo lógica de las emisiones dentro de la suscripcion
observable.subscribe(
    (value) => { console.log('Next: ' + value); },
    (error) => { console.error('Error: ' + error); },
    () => { console.log('Completado'); }
);


//Ejemplo creando un observer y enviandolo como parametro a la suscripcion
const observer: Observer<string> = {
    next: (value) => { console.log('Next: ' + value); },
    error: (error) => { console.error('Error: ' + error); },
    complete: () => { console.log('Completado'); }
}
observable.subscribe(observer);