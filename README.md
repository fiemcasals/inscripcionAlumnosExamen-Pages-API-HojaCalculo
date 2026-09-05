# Integración HTML + JavaScript + Google Apps Script 🚀

Este proyecto demuestra cómo conectar una página web estática a una base de datos gratuita usando Google Sheets y Google Apps Script.

## Paso 1: Configurar la Hoja de Cálculo
1. Entrá a [Google Sheets](https://sheets.google.com) y creá una hoja de cálculo en blanco.
2. Llamala como quieras (ej: "Inscripciones Finales").
3. En la Fila 1, escribí los encabezados en las primeras columnas:
   - **A1**: Marca Temporal
   - **B1**: Nombre Completo
   - **C1**: DNI
   - **D1**: Materia a Rendir

## Paso 2: Agregar el Código de Google Apps Script
1. En la misma hoja de cálculo, andá al menú superior y hacé clic en **Extensiones > Apps Script**.
2. Se abrirá un editor de código. Borrá todo lo que haya y pegá el contenido del archivo `codigo.gs` que está en esta carpeta.
3. Hacé clic en el ícono de **Guardar** (el disquete).

## Paso 3: Publicar la Aplicación (Obtener la URL)
1. En el editor de Apps Script, andá arriba a la derecha y hacé clic en el botón azul **Implementar > Nueva implementación**.
2. Hacé clic en la "Ruedita" (Seleccionar tipo) y elegí **Aplicación Web**.
3. Llená los campos así:
   - **Descripción**: "Sistema de Inscripción"
   - **Aplicación ejecutada como**: "Yo"
   - **Quién tiene acceso**: Cambialo a **"Cualquier persona"** (Muy importante para que no les pida iniciar sesión a los alumnos).
4. Hacé clic en **Implementar**.
5. Google te va a pedir autorizar accesos. Seguí los pasos (si te sale advertencia de seguridad, andá a Avanzado > Ir al proyecto).
6. Al final, te dará una **URL de la aplicación web**. Copiala.

## Paso 4: Conectar la Página Web
1. Abrí el archivo `index.html` de esta carpeta en tu editor de código.
2. Bajá hasta la línea donde está el JavaScript y buscá esto:
   `const SCRIPT_URL = 'ACA_VA_TU_URL_DE_GOOGLE';`
3. Reemplazá el texto de marcador con la URL que copiaste en el Paso 3. Asegurate de mantener las comillas.
4. ¡Listo! Guardá el archivo `index.html`.

## Paso 5: ¡Probarlo!
Abrí tu `index.html` en el navegador web, llená los datos y dale a Enviar.
Si hiciste todo bien, el cartelito se pondrá verde y si vas a tu hoja de cálculo, vas a ver los datos de la inscripción guardados mágicamente. ✨
