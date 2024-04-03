## 📝 Table of Contents

- [📝 Table of Contents](#-table-of-contents)
- [🧐 About ](#-about-)
- [✨ Características ](#-características-)
- [🏁 Getting Started ](#-getting-started-)
- [🚀 Deployment ](#-deployment-)
- [🎈 Usage ](#-usage-)
- [⛏️ Built Using ](#️-built-using-)
- [✍️ Authors ](#️-authors-)
- [📌 Version ](#-version-)
- [🚀 Configuración y Ejecución del Servidor Cliente ](#-configuración-y-ejecución-del-servidor-cliente-)

## 🧐 About <a name = "about"></a>

**Simplenotes** es una aplicación de gestión de notas que permite a los usuarios crear, editar y eliminar notas, además de proporcionar funciones avanzadas de búsqueda, filtrado y clasificación. La interfaz es completamente responsiva, lo que garantiza una experiencia de usuario óptima en una amplia gama de dispositivos.

## ✨ Características <a name="features"></a>

- **Gestión de Notas**: Los usuarios pueden crear, editar y eliminar notas según sea necesario.
- **Búsqueda y Filtrado Avanzados**: La aplicación proporciona una barra de búsqueda con palabras clave y diferentes métodos de filtrado para encontrar rápidamente notas relevantes.
- **Clasificación de Notas**: Las notas se pueden clasificar por relevancia y estado (pendientes, en curso, finalizadas).
- **Interfaz Responsiva**: El entorno es compatible con múltiples dispositivos utilizando el modelo de cajas flexibles, garantizando una experiencia de usuario consistente en dispositivos móviles, tabletas y computadoras de escritorio.

## 🏁 Getting Started <a name = "getting_started"></a>

Para comenzar, asegúrate de tener Node.js y npm instalados en tu sistema. Luego, sigue estos pasos:

1. **Clonar el Repositorio**: Descarga o clona este repositorio desde GitHub.

2. **Instalar Dependencias**: Abre una terminal en la carpeta raíz del proyecto y ejecuta el siguiente comando para instalar las dependencias necesarias:

   ```bash
   npm install
   ```

3. **Configuración del archivo `.env.local`**: Sigue las instrucciones en la sección "Configuración y Ejecución del Servidor Cliente" para configurar el archivo `.env.local` con la dirección del servidor Simplenote.

## 🚀 Deployment <a name = "deployment"></a>

Actualmente, Simplenotes está desplegado en [Vercel](https://simplenotecliente.vercel.app/), un servicio de alojamiento gratuito. Ten en cuenta que el rendimiento de la aplicación puede verse afectado debido a las limitaciones de los servidores gratuitos.

## 🎈 Usage <a name="usage"></a>

Para obtener una vista previa de Simplenotes y aprender más sobre sus características, consulta nuestra promoción del programa en YouTube: [¡Haz clic aquí para ver la promo!](https://www.youtube.com/watch?v=uyt46YLQDhk)

## ⛏️ Built Using <a name = "built_using"></a>

- `@emotion/react`: ^11.11.1
- `@emotion/styled`: ^11.11.0
- `@fortawesome/fontawesome-svg-core`: ^6.5.1
- `@fortawesome/free-solid-svg-icons`: ^6.5.1
- `@fortawesome/react-fontawesome`: ^0.2.0
- `@mui/icons-material`: ^5.14.19
- `@mui/material`: ^5.14.20
- `animate.css`: ^4.1.1
- `react`: ^18.2.0
- `react-dom`: ^18.2.0
- `react-router-dom`: ^6.20.1

## ✍️ Authors <a name = "authors"></a>

- [Pablo Ferreño Veiga](https://www.linkedin.com/in/pablo-ferreno-veiga/) - Desarrollo inicial
  - [Portfolio](https://portfolio.ferreno.es/)
  - [YouTube](https://www.youtube.com/@PabloFerreno)
- **Mención Especial:** Diego González Ferreño por su increíble contribución al diseño del logo del programa a la temprana edad de diez años.

## 📌 Version <a name="version"></a>

- Versión 1.0.0

## 🚀 Configuración y Ejecución del Servidor Cliente <a name = "server_setup"></a>

1. **Configuración del archivo `.env.local`**:

   - Copia el archivo `.env.local.example` y pégalo en la misma ubicación, renombrándolo como `.env.local`.

   - Abre el archivo `.env.local` en un editor de texto y completa la dirección del servidor Simplenote. Por ejemplo:

     ```
     SIMPLENOTE_SERVER_URL=https://simplenote-server-url.com
     ```

2. **Ejecución del Servidor Cliente**:

   - Abre una terminal en la raíz del proyecto.

   - Ejecuta el siguiente comando para iniciar el servidor cliente:

     ```bash
     npm run dev
     ```

   Esto iniciará el servidor cliente y permitirá el acceso a la aplicación a través de un navegador web en `http://localhost:3000` (o en otro puerto especificado si se ha configurado de manera diferente).

   Si necesitas ajustar la configuración de puerto u otras opciones de ejecución, consulta el archivo `package.json` o la documentación del proyecto para obtener más información.
