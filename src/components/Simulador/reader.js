var grid = [
    [0, 1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10, 11],
    [12, 13, 14, 15, 16, 17],
    [18, 19, 20, 21, 22, 23],
    [24, 25, 26, 27, 28, 29],
  ];
  
  var bloquesInfluencia = [
    3, 5, 6, 9, 10, 14, 15, 17, 18, 19, 20, 21, 23, 24, 26, 27, 28, 29
  ];
  
  // Crear una nueva matriz para almacenar los resultados
  var result = [];
  
  // Recorrer cada fila del grid
  for (var i = 0; i < grid.length; i++) {
    var row = grid[i];
    var newRow = [];
  
    // Recorrer cada número en la fila
    for (var j = 0; j < row.length; j++) {
      var num = row[j];
  
      // Comprobar si el número está en el rango de influencia
      if (bloquesInfluencia.includes(num)) {
        newRow.push(1);
      } else {
        newRow.push(0);
      }
    }
  
    // Agregar la fila modificada al resultado
    result.push(newRow);
  }
  
  return result
  