/** @OnlyCurrentDoc */

function getHeaders(range) {
  let headers = [];
  // Recorre la primera fila del rango para obtener los encabezados
  for (let col = 1; col <= range.getNumColumns(); col++) {
    // Obtiene la celda actual
    const cell = range.getCell(1, col);
    // Agrega el texto de la celda al arreglo de encabezados
    headers.push(cell.getValue());
  }
  return headers;
}

function getArray(range, headers) {
  let result = [];
  // Recorre el rango desde la segunda fila (la primera fila tiene los titulos)
  for (let row = 2; row <= range.getNumRows(); row++) {
    let item = {};
    // Recorre la fila actual
    for (let col = 1; col <= range.getNumColumns(); col++) {
      // Obtiene la celda
      const cell = range.getCell(row, col);
      // Agrega la propiedad correrspondiente al encabezado
      item[headers[col - 1]] = cell.getValue();
    }
    // Agrega el nuevo item al arreglo final
    result.push(item);
  }
  return result;
}

function createFile(array) {
  // Genera el nombre del archivo
  const date = new Date();
  const fileName = `${date.getFullYear()}${date.getMonth()}${date.getDate()}${date.getHours()}${date.getMinutes()}${date.getSeconds()}.json`;
  fileSets = {
    title: fileName,
    mimeType: "application/json",
  };

  // Crea el contenido del archivo
  blob = Utilities.newBlob(
    JSON.stringify(array),
    "application/vnd.google-apps.script+json"
  );

  // Crea el archivo JSON en la raíz de la cuenta
  file = Drive.Files.insert(fileSets, blob);

  // Mueve el archivo al folder donde se encuentra la hoja de cálculo
  moveFile(file);
}

function moveFile(file) {
  // Obtiene una referencia a la hoja de cálculo
  const ss = SpreadsheetApp.getActiveSpreadsheet();

  // Obtiene el folder donde se guardará el archivo
  const folder = DriveApp.getFileById(ss.getId()).getParents().next();

  // Obtiene la referencia al archivo JSON creado
  let archivo = DriveApp.getFileById(file.id);

  // Mueve el archivo de la raíz "My Drive" al folder de la hoja de cálculo
  archivo.moveTo(folder);
}

function generateJSON() {
  // Obtiene la hoja actual
  let spreadsheet = SpreadsheetApp.getActive();

  // Obtiene el rango de datos
  spreadsheet.getRange("A1").activate();
  const range = spreadsheet.getActiveRange().getDataRegion().activate();

  // Obtiene los headers
  let headers = getHeaders(range);

  // Obtiene el arreglo JSON
  let array = getArray(range, headers);

  // Crea el archivo JSON en Google Drive
  createFile(array);

  // Se ubica en la celda inicial
  spreadsheet.getRange("A1").activate();

  // Mensaje de éxito
  var ui = SpreadsheetApp.getUi();
  ui.alert(
    "Proceso finalizado",
    "El archivo JSON se generó exitosamente en el folder de la hoja de cálculo.",
    ui.ButtonSet.OK
  );
}
