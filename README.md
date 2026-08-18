# Sistema de Gestión de Inventario de Equipos de Cómputo 💻

Este es un sistema completo (Frontend + Backend + Base de Datos) para la gestión del inventario de equipos de cómputo, desarrollado como prueba técnica. Cumple con todos los requerimientos solicitados, incluyendo operaciones CRUD, contenedorización completa con Docker y documentación interactiva.

## 🚀 Tecnologías Utilizadas

- **Frontend:** React, TypeScript, Vite, CSS Vanilla (Diseño Dark Glass).
- **Backend:** Node.js, Express, TypeScript, Sequelize (ORM).
- **Base de Datos:** PostgreSQL 15.
- **Documentación:** Swagger (OpenAPI 3.0).
- **Infraestructura:** Docker & Docker Compose.

## 🛠️ Funcionalidades

- ✅ **Crear:** Registrar nuevos equipos con detalles como nombre, marca, estado y número de serie.
- ✅ **Listar:** Ver todos los equipos registrados en una tabla moderna con insignias de estado.
- ✅ **Actualizar:** Modificar la información de un equipo existente (ej. cambiar estado).
- ✅ **Eliminar:** Borrar un equipo del sistema con previa confirmación.

## 📖 Documentación de la API (Swagger)

La API cuenta con una documentación interactiva generada con Swagger donde puedes probar todos los endpoints sin necesidad de Postman.

Una vez que el proyecto esté corriendo, accede a:
👉 `http://localhost:3000/api/docs`

## 🐳 Instrucciones de Ejecución con Docker (Paso a Paso)

El proyecto está completamente dockerizado. Para levantarlo en cualquier máquina, sigue estos pasos exactos:

1. **Clonar el repositorio:**
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd Inventarios_Equipos_computo
   ```

2. **Configurar las variables de entorno:**
   En la raíz del proyecto, renombra el archivo `.env.example` a `.env` (o simplemente copia su contenido) y asegúrate de que tenga estas variables base:
   ```env
   DB_HOST=postgres
   DB_USER=postgres
   DB_PASSWORD=EscribeTuContrasenaAqui
   DB_NAME=inventario_db
   DB_PORT=5432
   PORT=3000
   ```

3. **Levantar la aplicación con Docker Compose:**
   Abre tu terminal en la raíz del proyecto y ejecuta:
   ```bash
   docker-compose up --build
   ```

4. **¡Listo! Accede a los servicios:**
   - **Frontend (Web):** `http://localhost` (o `http://localhost:80`)
   - **Backend (API):** `http://localhost:3000`
   - **Documentación (Swagger):** `http://localhost:3000/api/docs`

---
*Desarrollado con ♥️ para la prueba técnica de Gestión de Inventarios.*

## 🌟 Estado del Proyecto
¡Todas las funcionalidades han sido completadas con éxito!
