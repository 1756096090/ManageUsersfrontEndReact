# Proyecto de Aplicación React

Este proyecto es una aplicación React que sigue un enfoque basado en componentes y utiliza el patrón MVC (Modelo-Vista-Controlador). Se usa react, go y mongo para el desarrollo de la web
## Estructura de la Aplicación

### Componente Principal: `App.tsx`

En la parte `App.tsx` se encuentra el componente principal de la aplicación. Este componente actúa como el componente padre que redirige a las diferentes rutas de la aplicación. Desde aquí, puedes acceder a todos los demás componentes que funcionan como vistas. Al utilizar React, es más eficiente referirse a ellos como componentes, ya que estos pueden ser reutilizados en diferentes partes de la aplicación.

### Vistas

Las vistas se encuentran en la carpeta `views`. Aquí es donde se organizan los diferentes componentes que representan las diferentes pantallas de la aplicación. Pero usamos la vista mejor en la parte de componentes al ser react.

### Controladores

La lógica de negocio se divide en dos partes en la carpeta `controllers`:

1. **Controladores**: Estos controladores se encargan de la interacción entre las vistas y los servicios. Son responsables de manejar las acciones del usuario y coordinar la respuesta apropiada.
   
2. **Servicios**: Los servicios son responsables de realizar las peticiones a otros servicios (como APIs externas). Esta separación permite que la lógica de negocio sea más escalable y fácil de mantener.

### Modelos

La carpeta `models` contiene las definiciones de los modelos que representan la estructura de los datos que se utilizan en la aplicación. 


