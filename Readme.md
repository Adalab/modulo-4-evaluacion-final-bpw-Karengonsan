# RecetAPI

**RecetAPI** es una aplicación web para gestionar recetas de cocina de forma fácil y moderna. Permite a los usuarios crear, editar, visualizar y “eliminar” recetas (marcándolas como eliminadas, sin borrar los datos de la base de datos).  

---

## Funcionalidades

- **Registro y login de usuarios** con autenticación mediante JWT.  
- **Listado de recetas** del usuario: solo se muestran aquellas que no han sido eliminadas (`deleted_at IS NULL`).  
- **Detalle de receta**: ingredientes, instrucciones y título.  
- **Crear y editar recetas** con un formulario intuitivo.  
- **Eliminar recetas “lógicamente”**: se marca la receta con fecha en `deleted_at`, pero no se borra de la base de datos.  
- **Frontend responsive**: adaptado para mobile y desktop.  
- **Buenas prácticas**: código modular en React, rutas protegidas, uso de `useState` y `useEffect`, y conexión segura al backend.

---

## Tecnologías utilizadas

- **Frontend:** React, React Router, CSS / Sass, FontAwesome  
- **Backend:** Node.js, Express  
- **Base de datos:** MySQL  
- **Autenticación:** JWT (JSON Web Tokens)  
- **Herramientas:** Vite, Postman  

---

## Estructura del proyecto

backend/

├─ src/

│  ├─ controllers/

│  ├─ database/

│  ├─ middlewares/

│  └─ utils

frontend/

├─ src/

│  ├─ components/

│  ├─ contexts

│  ├─ pages/

│  ├─ services/

│  └─ styles/

recipessapp.postman_collection.json

---

## Endpoints principales (backend)

- `POST /login` – Iniciar sesión
- `POST /register` – Registrar usuario
- `GET /recipes` – Obtener recetas del usuario (solo las activas)
- `GET /recipes/:id` – Detalle de receta
- `POST /recipes` – Crear receta
- `PATCH /recipes/:id` – Editar receta
- `PATCH /delete/:id` – Marcar receta como eliminada (`deleted_at = NOW()`)

> Todos los endpoints protegidos requieren token en header `Authorization`.

---

## Notas importantes

- Las recetas “eliminadas” se marcan con `deleted_at` y no aparecen en el listado.  
- El frontend filtra automáticamente estas recetas.  
- Se priorizó **simplicidad y buenas prácticas** en React y Express.

---

## Mejoras futuras

- Añadir búsqueda y filtrado de recetas.  
- Subir imágenes de las recetas y mostrar en el listado.  
- Categorías de recetas y tags.  
- Compartir recetas entre usuarios.

---

## Autora

**Karen González Sánchez** – Full Stack Developer en formación  
[GitHub](https://github.com/Karengonsan) | [LinkedIn](https://www.linkedin.com/in/karen-gonz%C3%A1lez-8185a3328/)