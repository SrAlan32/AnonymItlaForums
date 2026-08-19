# AnonymItla Forums

Sistema web construido con React y Firebase que permite a los usuarios ver publicaciones, crear cuentas, iniciar sesión y publicar contenido en un foro anónimo.

## Tecnologías

- **Frontend:** React (ES6) + Vite
- **Backend:** Firebase (Authentication + Firestore)
- **Enrutamiento:** React Router DOM

## Funcionalidades

1. **Ver publicaciones** - Cualquier visitante puede ver todos los posts del muro (sin autenticación)
2. **Crear cuenta** - Registro con: usuario, contraseña, nombre y apellido
3. **Iniciar sesión** - Autenticación con Firebase Auth (Email/Password)
4. **Publicar posts** - Solo usuarios autenticados pueden crear nuevas publicaciones

## Estructura del proyecto

```
AnonymItlaForums/
├── src/
│   ├── firebase/
│   │   └── config.js          # Configuración de Firebase
│   ├── context/
│   │   └── AuthContext.jsx    # Context de autenticación
│   ├── components/
│   │   ├── Navbar.jsx         # Barra de navegación
│   │   ├── Login.jsx          # Formulario de inicio de sesión
│   │   ├── Register.jsx       # Formulario de registro
│   │   ├── Wall.jsx           # Muro de publicaciones
│   │   └── CreatePost.jsx     # Formulario para crear posts
│   ├── App.jsx                # Rutas principales
│   ├── App.css                # Estilos de la aplicación
│   ├── index.css              # Estilos globales
│   └── main.jsx               # Punto de entrada
└── package.json
```

## Instalación y ejecución

### Prerrequisitos

- Node.js (v16 o superior)
- npm o yarn

### Pasos

```bash
# Clonar el repositorio
git clone https://github.com/SrAlan32/AnonymItlaForums

# Entrar al directorio
cd anonymitla-forums

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

### Build para producción

```bash
npm run build
```

Los archivos generados estarán en la carpeta `dist/`.

## Estructura de datos en Firestore

### Colección `usuarios`
| Campo    | Tipo   | Descripción          |
|----------|--------|----------------------|
| email    | string | Correo electrónico   |
| username | string | Nombre de usuario    |
| nombre   | string | Nombre               |
| apellido | string | Apellido             |

### Colección `posts`
| Campo       | Tipo      | Descripción             |
|-------------|-----------|-------------------------|
| title       | string    | Título de la publicación|
| content     | string    | Contenido del post      |
| authorEmail | string    | Email del autor         |
| authorUid   | string    | UID del autor           |
| createdAt   | timestamp | Fecha de creación       |

## Scripts disponibles

| Comando           | Descripción                          |
|-------------------|--------------------------------------|
| `npm run dev`     | Ejecutar en modo desarrollo          |
| `npm run build`   | Generar build de producción          |
| `npm run preview` | Vista previa del build de producción |
| `npm run lint`    | Ejecutar linter                      |
