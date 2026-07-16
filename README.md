# Premium Class Modeling Academy — Landing Page

Sitio construido con **React + Vite + Tailwind CSS + Framer Motion**.
El formulario de contacto envía correos con **EmailJS**, sin backend.

---

## 1. Instalar y correr en local

```bash
npm install
npm run dev
```

Abre `http://localhost:5173`.

---

## 2. Configurar EmailJS (para que el formulario envíe correos)

1. Crea una cuenta gratis en **https://www.emailjs.com**.
2. En el dashboard, ve a **Email Services → Add New Service** y conecta
   tu proveedor (Gmail, Outlook, etc). Copia el **Service ID**.
3. Ve a **Email Templates → Create New Template**. Este sitio envía un
   formulario con estos campos (usa `{{variable}}` en tu template):

   | Variable en el template | Contenido                     |
   |--------------------------|--------------------------------|
   | `{{user_name}}`          | Nombre completo                |
   | `{{user_phone}}`         | Teléfono                       |
   | `{{user_email}}`         | Correo (úsalo también como "Reply To" del template) |
   | `{{interest_level}}`     | Nivel de interés (Básico/Medio/Profesional) |
   | `{{message}}`            | Mensaje                        |

   Copia el **Template ID**.
4. Ve a **Account → General** y copia tu **Public Key**.
5. Copia `.env.example` a `.env` y pega tus tres valores:

   ```bash
   cp .env.example .env
   ```

   ```
   VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
   VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
   VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxx
   ```

6. Reinicia `npm run dev`. Prueba el formulario — el mensaje de éxito
   aparecerá debajo del botón "Enviar solicitud".

EmailJS free tier permite 200 correos/mes, suficiente para arrancar.

---

## 3. Desplegar en Vercel

**Opción A — desde la web de Vercel:**

1. Sube esta carpeta a un repositorio de GitHub.
2. En [vercel.com](https://vercel.com), **Add New → Project** e importa
   el repo. Vercel detecta Vite automáticamente
   (`npm run build`, carpeta de salida `dist`).
3. Antes de darle a Deploy, abre **Environment Variables** y agrega las
   tres variables de EmailJS (mismos nombres que en `.env`):
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`
4. Deploy. Cada vez que hagas push a `main`, Vercel vuelve a desplegar
   automáticamente.

**Opción B — desde la terminal:**

```bash
npm install -g vercel
vercel          # despliegue de prueba
vercel --prod   # despliegue a producción
```

Cuando te pregunte por variables de entorno, o si prefieres agregarlas
después, ve a **Project → Settings → Environment Variables** en el
dashboard de Vercel y agrega las tres llaves de EmailJS ahí — luego
vuelve a desplegar (`vercel --prod`) para que tomen efecto.

> ⚠️ Importante: como las variables empiezan con `VITE_`, Vite las
> incrusta en el código del navegador. Nunca pongas ahí una llave
> privada/secreta — el Public Key de EmailJS está diseñado para
> exponerse en el frontend, así que esto es seguro.



## 1. Estructura

```
src/
  components/     # una sección del sitio por archivo
  data/content.js # todo el copy editable
  index.css       # tokens de diseño (Tailwind)
public/images/    # fotografía real de la marca
```
