
# Proyecto inicial RXJS

  
* Inicialmente ingresamos a la carpeta del proyecto con el comando:

```
cd curso-rxjs-inicio
```

* Luego, debemos ejecutar el comando:

  

```

npm install

```

Ese comando descargará todos los módulos de node necesarios para ejecutar el proyecto.

  
  

* Cuando termine de instalar los node_modules, entonces podermos ejecutar el proyecto de con el siguiente comando

  

```

npm start

```

Recuerden reemplazar el contenido del ```index.ts``` por el contenido del archivo que quieran ejecutar.

  

## Cambiar el puerto

Por defecto, el puerto que configuré para este proyecto es el ```8081```, pero si necesitan cambiarlo porque pueda que ese puerto lo use su computadora, pueden cambiarlo abriendo el ```package.json``` >> scripts. Ahí verán la instrucción que lanza el servidor de desarrollo

  

```

"start": "webpack-dev-server --mode development --open --port=8081"

```

  

Simplemente cambian el puerto por el que ustedes necesiten y listo. (graban los cambios y vuelven a ejecutar el ```npm start``` nuevamente)