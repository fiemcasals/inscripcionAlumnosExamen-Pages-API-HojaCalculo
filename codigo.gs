function doPost(e) {
  // 1. Acceder a la hoja de cálculo activa
  var libro = SpreadsheetApp.getActiveSpreadsheet();
  var hoja = libro.getActiveSheet();
  
  // 2. Capturar los datos enviados desde el formulario HTML
  // (Los nombres deben coincidir exactamente con el atributo "name" de cada <input>)
  var nombre = e.parameter.nombre;
  var dni = e.parameter.dni;
  var materia = e.parameter.materia;
  
  // Generamos la fecha exacta del momento de la inscripción
  var fechaActual = new Date();
  
  // 3. Insertar una nueva fila al final de la hoja
  // El array representa las columnas: [Columna A, Columna B, Columna C, Columna D]
  hoja.appendRow([fechaActual, nombre, dni, materia]);
  
  // 4. Enviar una respuesta de éxito al navegador para que la página HTML sepa que terminó
  return ContentService.createTextOutput("Registro guardado exitosamente.")
                       .setMimeType(ContentService.MimeType.TEXT);
}
