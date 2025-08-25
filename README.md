# Next.js Starter

Proyecto básico de Next.js configurado con TypeScript y CSS Modules.

## Comenzar

Primero, instala las dependencias:

```bash
npm install
# o
yarn install
# o
pnpm install
```

Luego, ejecuta el servidor de desarrollo:

```bash
npm run dev
# o
yarn dev
# o
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.

Puedes comenzar a editar la página modificando `src/pages/index.tsx`. La página se actualiza automáticamente cuando editas el archivo.

[API routes](https://nextjs.org/docs/api-routes/introduction) se pueden acceder en [http://localhost:3000/api/hello](http://localhost:3000/api/hello). Este endpoint se puede editar en `src/pages/api/hello.ts`.

El directorio `src/pages/api` se mapea a `/api/*`. Los archivos en este directorio se tratan como [API routes](https://nextjs.org/docs/api-routes/introduction) en lugar de páginas React.

## Características incluidas

- ⚡️ Next.js 14
- 🔧 TypeScript
- 🎨 CSS Modules
- 📱 Responsive design
- 🌙 Dark mode support
- 🚀 API routes
- 📝 ESLint configurado

## Estructura del proyecto

```
src/
├── pages/
│   ├── api/
│   │   └── hello.ts
│   ├── _app.tsx
│   └── index.tsx
└── styles/
    ├── globals.css
    └── Home.module.css
```

## Aprende más

Para aprender más sobre Next.js, echa un vistazo a los siguientes recursos:

- [Documentación de Next.js](https://nextjs.org/docs) - aprende sobre las características y API de Next.js
- [Aprende Next.js](https://nextjs.org/learn) - tutorial interactivo de Next.js

Puedes consultar [el repositorio de GitHub de Next.js](https://github.com/vercel/next.js/) - ¡tus comentarios y contribuciones son bienvenidos!

## Deploy en Vercel

La forma más fácil de desplegar tu aplicación Next.js es usar la [Plataforma Vercel](https://vercel.com/new) de los creadores de Next.js.

Consulta nuestra [documentación de deployment de Next.js](https://nextjs.org/docs/deployment) para más detalles.
