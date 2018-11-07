Este proyecto fue desarrollado con [Create React App](https://github.com/facebookincubator/create-react-app).

## Tabla de Contenidos

- [Estructura de Carpetas](#estructura-de-carpetas)
- [Scripts Disponibles](#scripts-disponibles)
  - [npm start](#npm-start)
  - [npm test](#npm-test)
  - [npm run build](#npm-run-build)
  - [npm run eject](#npm-run-eject)
- [Navegadores Soportados](#navegadores-soportados)
- [Depurando con el Editor](#depurando-con-el-editor)
- [Cambiando `<title>` en la página](#cambiando-title-en-la-pagina)
- [Instalando una Dependencia](#instalando-una-dependencia)
- [Agregar una hoja de estilos](#agregar-una-hoja-de-estilos)
- [Despliegue](#despliegue)
  - [Servidor Estático](#servidor-estatico)
  - [Otras Soluciones](#otras-soluciones)
  - [Sirviendo Apps con Enrutamiento de lado del cliente](#sirviendo-apps-con-enrutamiento-de-lado-del-cliente)
  - [Construyendo para Rutas Relativas](#construyendo-para-rutas-relativas)
- [Alternativas a Ejectar](#alternativas-a-ejectar)

## Estructura de Carpetas

Los archivos en el proyecto tienen la siguiente estructura:

```
my-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
```

Para el proyecto poder ser construido, **estos archivos deben existir con nombres exactos**:

* `public/index.html` es la plantilla de página;
* `src/index.js` es el punto de entrada de JavaScript.

Sólo los archivos dentro de `public` pueden ser usados desde `public/index.html`.<br>
Y los únicos archivos que son usados para construir el proyecto son los que están dentro de `src`.

## Scripts Disponibles

En el directorio del proyecto, puede ejecutar el comando:

### `npm start`

Esto corre la app en modo de desarrollo.<br>
Luego vaya a la dirección [http://localhost:3000](http://localhost:3000) para verlo en el navegador.

La página se recarga si se producen cambios y se guardan en el proyecto.<br>
También se pueden ver los errores en la consola.

### `npm test`

Lanza el generador de pruebas en modo de vista interactivo.<br>

### `npm run build`

Crea la app lista para producción en la carpeta `build`.<br>

Agrupa correctamente React en modo de producción y optimiza el build para obtener el mejor rendimiento.

El build es minificado y los nombres de archivos incluyen los hashes.<br>
Con esto la app esta lista para ser desplegada.

### `npm run eject`

Esta es una operación de una sola vía, una vez se usa ya no se puede volver atrás

En caso de que uno no se sienta satisfecho con la herramienta de build y las decisiones de configuración, se puede usar `eject`en cualquier momento. Este comando remueve la única dependencia de construcción del proyecto.

En su lugar lo que hace es copiar todos los archivos de configuración y las dependencias transitivas (Webpack, Babel, ESLint, etc) justo adentro del proyecto para que de esta forma uno tenga full control sobre ellas. Tener en cuenta que los demás comandos van a seguir sirviendo pero una vez esta operación es ejecutada. Es uno mismo el que tiene que hacer la configuración.

## Navegadores Soportados

Por defecto, el proyecto generado usa la última version de React.

Se puede referir [a la documentacion de React](https://reactjs.org/docs/react-dom.html#browser-support) para más información sobre navegadores soportados.

## Depurando con el Editor

**Esta característica es sólo soportada por el momento en [Visual Studio Code](https://code.visualstudio.com) y [WebStorm](https://www.jetbrains.com/webstorm/).**

Visual Studio Code y WebStorm soportan depuración de una sin configuración con Create React App. Esto permite a los desarrolladores a escribir y depurar el código de React sin salir del editor, y más importante también permite tener un flujo de trabajo de desarrollo continuo, donde el cambio de contexto es mínimo, dado que no hay necesidad de estar cambiando de herramientas constantemente.

### Visual Studio Code

Hay que tener la última versión de [VS Code](https://code.visualstudio.com) y VS Code [Chrome Debugger Extension](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome) instaladas.

Después, añadir el bloque de código siguiente al archivo `launch.json` y ponerlo adentro del folder `.vscode` en el directorio raíz de la app.

```json
{
  "version": "0.2.0",
  "configurations": [{
    "name": "Chrome",
    "type": "chrome",
    "request": "launch",
    "url": "http://localhost:3000",
    "webRoot": "${workspaceRoot}/src",
    "sourceMapPathOverrides": {
      "webpack:///src/*": "${webRoot}/*"
    }
  }]
}
```

Corra la app usando el comnado `npm start`, y puede empezar a depurar en VS Code presionando `F5` o clickeando el icono verde de depurar. Ahora se puede escribir código, poner puntos de quiebre, hacer cambios al código, y depurar el proyecto directamente desde el editor.

### WebStorm

Hay que tener [WebStorm](https://www.jetbrains.com/webstorm/) y la extensión de Chrome de [JetBrains IDE Support](https://chrome.google.com/webstore/detail/jetbrains-ide-support/hmhgeddbohgjknpmjagkdomcpobmllji) instalada.

En el menu `Run` de WebStorm seleccionar `Edit Configurations...`. Despúes clickear `+` y seleccionar `JavaScript Debug`. Pegar `http://localhost:3000` en el campo de de la URL y posteriormente guardar la configuración.

Corra la app usando el comnado `npm start`, luego presione `^D` en macOS o `F9` en Windows y Linux o clickee el icono verde de depurar para empezar la depuración en WebStorm.


## Cambiando `<title>` en la página

Se puede encontrar el código HTML base en el folder `public` del proyecto generado. Se puede editar la etiqueta `<title>` para cambiar el título de “React App” a cualquier otra cosa.

Note que normalmente no se editarían los archivos del folder `public` muy seguido. Por ejemplo, [añadir una hoja de estilos](#adding-a-stylesheet) es hecho sin tocar el HTML.

## Instalando una Dependencia

El proyecto generado incluye React y ReactDOM como dependencias. También un conjunto de scripts usados por Create React App dependencia de desarrollo. Se pueden instalar otras dependencias (por ejemplo, React Router) con `npm`:

```sh
npm install --save react-router
```

Alternativamente se puede usar `yarn`:

```sh
yarn add react-router
```

Esto funciona para cualquier paquete, no sólo `react-router`.


## Agregar una hoja de estilos

Esta configuración de proyecto usa [Webpack](https://webpack.js.org/) para manejar todos los archivos. Webpack ofrece una forma personalizada de “extender” el concepto de `import` más allá de JavaScript. Para expresar que un archivo JavaScript depende de un archivo de CSS, se necesita **importar el CSS desde el archivo JavaScript**:

### `Button.css`

```css
.Button {
  padding: 20px;
}
```

### `Button.js`

```js
import React, { Component } from 'react';
import './Button.css'; // Tell Webpack that Button.js uses these styles

class Button extends Component {
  render() {
    // You can use them as regular CSS styles
    return <div className="Button" />;
  }
}
```

## Despliegue

`npm run build` crea un directorio `build` con un build de producción de la app. Se puede configurar el servidor HTTP de preferencia para que un visitante al sitio sea servido el archivo `index.html`, y las peticiones a rutas estáticas como `/static/js/main.<hash>.js` sean servidas con los contenidos del archivo `/static/js/main.<hash>.js`.

### Servidor Estático

Para ambientes usando [Node](https://nodejs.org/), la forma más fácil de manejar esto es instalar [serve](https://github.com/zeit/serve) y dejarlo que maneje el resto:

```sh
npm install -g serve
serve -s build
```

Corriendo este comando se puede tener una lista completa de las opciones disponibles:

```sh
serve -h
```

### Otras Soluciones

La selección de software del servidor tampoco es importante. Siendo que Create React App es completamente agnostico a la plataforma, no hay necesidad de usar Node explicitamente.

El folder `build` con archivos estáticos es el único producido creado por Create React App.

Sin embargo, esto puede no ser suficiente si se usa enrutamiento del lado del cliente.

### Sirviendo Apps con Enrutamiento de lado del cliente

Si se usan enrutadores que usan la [`pushState` history API](https://developer.mozilla.org/en-US/docs/Web/API/History_API#Adding_and_modifying_history_entries) de HTML5 por debajo (por ejmplo, React Router con `browserHistory`), varios servidores de archivos estáticos van a fallar. Por ejmplo, si se usa React Router con una ruta de `/todos/42`, el servidor de desarrollo va a responder a `localhost:3000/todos/42` apropiadamente, pero un servidor Express sirviendo un build de producción no lo va a hacer.

Si se está usando [Apache HTTP Server](https://httpd.apache.org/), se necesita crear un archivo `.htaccess` en el folder `public` con el siguiente contenido:

```
    Options -MultiViews
    RewriteEngine On
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteRule ^ index.html [QSA,L]
```

Este se va a copiar al folder `build` cuando se ejecute el comando `npm run build`. 

Ahora las peticiones a `/todos/42` van a ser manejadas correctamente tanto en desarrollo como en producción.

En un build de producción, y un navegador que soporte [service workers](https://developers.google.com/web/fundamentals/getting-started/primers/service-workers),
el service worker va a manejar automaticamente todas las peticiones de navegación, como
`/todos/42`, siriviendo una copia en cache del `index.html`. Este
enrutamiento de navegación del service worker puede ser configurado o deshabilitado con
[`eject`](#npm-run-eject) y depués modificando las opciones
[`navigateFallback`](https://github.com/GoogleChrome/sw-precache#navigatefallback-string)
y [`navigateFallbackWhitelist`](https://github.com/GoogleChrome/sw-precache#navigatefallbackwhitelist-arrayregexp)
de la configuración del `SWPreachePlugin` .


### Construyendo para Rutas Relativas

Por defecto, Create React App produce un build asumiendo que la app está alojado en la raíz del servidor.<br>
Para sobreescribir esto, especifique el `homepage` en el `package.json`, por ejemplo:

```js
  "homepage": "http://mywebsite.com/relativepath",
```

Esto va a permitir a Create React App inferir correctamente el directorio raíz para usar en el archivo HTML generado.


## Alternativas a Ejectar

[Ejectar](#npm-run-eject) deja personalizar cualquier cosa, pero desde ese punto en adelante hay que mantener la configuración y los scripts por uno mismo. Esto puede ser desalentador si se tiene muchos proyectos similares. En dados casos en vez de ejectar es recomendable hacer un *fork* de`react-scripts` y cualquier otros paquetes que sean necesarios. 
