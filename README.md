# Certum360

[Español](#español) · [English](#english) · [Sitio web / Live site](https://certum360-sitio-web.vercel.app/)

## Español

Sitio corporativo de Certum360. Presenta los servicios de evaluación de proveedores, gestión de expedientes y cumplimiento corporativo. En una sola página, los visitantes pueden explorar las soluciones por industria, conocer el proceso de trabajo y consultar las preguntas frecuentes.

### Interfaz y tecnologías

El sitio está construido con Angular 21, TypeScript y Tailwind CSS 4. Incluye navegación adaptable a móviles, animaciones al desplazarse y un selector de tema claro u oscuro que recuerda la preferencia en el navegador. El formulario de contacto está maquetado y su integración con un servicio de envío está pendiente.

### Desarrollo local

Con Node.js 22.12 o posterior de la serie 22 y npm instalados, ejecuta estos comandos desde la raíz del repositorio:

```sh
npm ci
npm start
```

Abre [localhost:4201](http://localhost:4201/). Para generar la versión de producción, ejecuta `npm run build`.

La [página principal](src/app/pages/landing/) reúne el contenido, el diseño y las animaciones. Las [imágenes del sitio](public/images/landing/) se encuentran en la carpeta pública. El proyecto parte de la [plantilla Angular de TailAdmin](https://github.com/TailAdmin/free-angular-tailwind-dashboard).

## English

Certum360’s corporate website presents its supplier assessment, records management, and corporate compliance services. Visitors can explore solutions by industry, learn how the team works, and browse frequently asked questions on a single page.

### Interface and technology

The site uses Angular 21, TypeScript, and Tailwind CSS 4. It includes mobile navigation, scroll animations, and a light and dark theme switcher that remembers the visitor’s preference. The contact form interface is in place. Connecting it to a delivery service is still pending.

### Local development

Install Node.js 22.12 or a later 22.x release and npm, then run these commands from the repository root:

```sh
npm ci
npm start
```

Open [localhost:4201](http://localhost:4201/). To create a production build, run `npm run build`.

The [landing page directory](src/app/pages/landing/) contains the page content, layout, and animations. The [site images](public/images/landing/) are in the public directory. The project is based on the [TailAdmin Angular template](https://github.com/TailAdmin/free-angular-tailwind-dashboard).
