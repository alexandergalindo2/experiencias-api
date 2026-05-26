Instrucciones para la foto de perfil

Opciones para agregar tu foto a la hoja de vida:

1) Subir por URL
- Sube tu imagen a un hosting (Imgur, Cloudinary, Google Drive público, tu hosting) y pega la URL en `data/cv.json` -> `persona.foto`.
- Ejemplo: "https://i.imgur.com/tuFoto.jpg"

2) Indicar que la enviarás por WhatsApp
- Si prefieres enviar la foto por WhatsApp primero, deja el campo `persona.foto` con el texto: `POR_PEGAR_URL_O_SUBIR_POR_WHATSAPP`.
- Cuando tengas la URL, reemplázala y vuelve a ejecutar el `seed` si necesitas reimportar.

3) Subir localmente (no recomendado para hosting)
- Puedes colocar la imagen en `frontend/public/images/mi-foto.jpg` y después en el campo `persona.foto` usar `/images/mi-foto.jpg`.

Cómo actualizar `data/cv.json`:
- Abre el archivo `data/cv.json` y edita el campo `persona.foto`.

Si quieres, puedo:
- Generar el `data/cv.json` con una URL de ejemplo.
- Esperar a que pegues la URL y luego actualizar el archivo por ti.
