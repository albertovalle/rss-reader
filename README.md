# README.MD
Lector de noticias RSS mediante el cúal, se escoge una rss para mostrar sus noticias pudiendose ver el detalle de las mismas. En este momento sólo hay un rss que es de AS.

## Demo


## Installation
· Instalar gestor de paquetes Node en su última versión sino está instalado

	npm install -g npm@latest
	
	Nota: -g es para que se instale de forma global y pueda ejecutarse desde cualquier lugar

· Instalar create-react-app interprete de consola para entre otras cosas sino lo tenemos instalado

	npm install -g create-react-app

· Creamos el proyecto rss-reader y después descargamos dentro los los archivos incluidos en este repositorio:

	create-react-app rss-reader

· Instalar bulma, dentro de la carpeta rss-reader, para algunos estilos,

	npm install bulma
	
· Instalar la versión 5 de la libreria react-router-dom, dentro de la carpeta rss-reader, para hacer la navegaciíb.

   	npm install react-router-dom@5.0.0

· Finalmente para arrancar con los archivos incluidos en este repositorio, podríamos en marcha el proyecto listo para listar las noticias:

	npm start
	
## Preview

![](/preview.jpg)

### Resumen

Se instala el gesto de paquetes npm. También la biblioteca externa create-react-app necesaria para crear de forma sencilla un proyecto pre-configurado con todo lo ilsto para usarse, se crea el proyecto y se instala el framework de estilos bulma usado para dotar de unos estilos básicos a las fichas de noticias y por último instalamos la libreria react-router-dom que he necesitado para crear la navegación de nuestra Single Page Application (SPA). También usamos la biblioteca prop-types, que viene dentro del paquete de React, sino se instala con el comando: npm install prop-types.

Nota: Faltaría crear el componente para añadir diferentes rss y en el combo principal, poder escogerlos para poder listar sus noticias.
