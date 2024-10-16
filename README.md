# Proyecto de Aplicación React

Este proyecto es una aplicación React que sigue un enfoque basado en componentes y utiliza el patrón MVC (Modelo-Vista-Controlador). La aplicación está desarrollada con **React** para el frontend, **Go** para el backend, y **MongoDB** como base de datos.

- **Backend**: [https://backendmanageuserswithgo-production.up.railway.app](https://backendmanageuserswithgo-production.up.railway.app)
- **Frontend**: [https://manage-usersfront-end-react-laxza9xv0-1756096090s-projects.vercel.app](https://manage-usersfront-end-react-laxza9xv0-1756096090s-projects.vercel.app)
- **Usuario**: `isaac.cerda@example.com`
- **Contraseña**: `1234`

## Tecnologías Utilizadas

- **Frontend**: React
- **Backend**: Go
- **Base de Datos**: MongoDB

## Estructura del Proyecto

### 1. Componente Principal: `App.tsx`
El componente principal de la aplicación es `App.tsx`. Este componente actúa como el punto de entrada y contiene las rutas hacia las diferentes vistas. En React, cada vista es un componente, lo que permite la reutilización eficiente de los mismos en toda la aplicación.

### 2. Vistas (Views)
Las vistas de la aplicación están organizadas en la carpeta `views`, donde cada una representa una pantalla específica. En lugar de referirse a ellas estrictamente como vistas, se recomienda pensar en ellas como componentes reutilizables.

### 3. Controladores (Controllers)
La lógica de negocio está dividida en dos partes dentro de la carpeta `controllers`:
- **Controladores**: Gestionan la interacción entre las vistas y los servicios, respondiendo a las acciones del usuario.
- **Servicios**: Se encargan de realizar peticiones a APIs u otros servicios externos. Esta separación hace que el código sea más mantenible y escalable.

### 4. Modelos (Models)
La carpeta `models` contiene las definiciones de los modelos que representan la estructura de los datos utilizados en la aplicación. Estos modelos son fundamentales para la interacción con la base de datos y la validación de datos.

### 5. Configuración (Config)
La configuración, incluida la URL del backend, está centralizada en la carpeta `config`, permitiendo que cualquier cambio en la URL del backend se realice en un solo lugar.

## Conexión a la Base de Datos MongoDB

La conexión con MongoDB se maneja en el siguiente archivo `config/database.go`:

```go
package config

import (
    "context"
    "log"
    "go.mongodb.org/mongo-driver/mongo"
    "go.mongodb.org/mongo-driver/mongo/options"
)

var DB *mongo.Database

func ConnectDB() *mongo.Database {
    // Reemplazar con tus credenciales y cadena de conexión de MongoDB
    clientOptions := options.Client().ApplyURI("mongodb+srv://user_test:Ismacs2003@firstproyectwebengineer.b6xlw.mongodb.net/?retryWrites=true&w=majority&appName=FirstProyectWebEngineering")
    client, err := mongo.Connect(context.Background(), clientOptions)
    if err != nil {
        log.Fatal(err)
    }

    err = client.Ping(context.Background(), nil)
    if err != nil {
        log.Fatal(err)
    }
    log.Println("Conectado a MongoDB!")
    DB = client.Database("FirstProyectWebEngineering")
    return DB
} 
```

# Instrucciones para Ejecutar el Proyecto

## 1. Frontend (React)

### Requisitos:
- **Node.js** (Versión 18.x)

### Pasos:
1. Clonar el repositorio del frontend.
2. Instalar las dependencias
   `npm install`
3. Ejecutar la aplicación:
 `npm start`

## Backend(Go)
(https://github.com/1756096090/backendManageUsersWithGo )

### Requisitos:
Go instalado en el sistema.
### Pasos:
Clonar el repositorio del backend.

Ejecutar la aplicación:
`go run main.go`
## Notas:
- Asegúrate de tener Node.js versión 18 para el frontend.
- La base de datos se conecta automáticamente utilizando las credenciales proporcionadas en el archivo de configuración.

