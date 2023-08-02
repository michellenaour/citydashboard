// Importa las categorías desde el archivo categoryData.js
import { categories } from "../Categorias/categoriasData.js";


// Función para cambiar los datos cada x segundos
export function simulateDataChanges(intervalInSeconds) {
  setInterval(() => {
    // Recorre todas las categorías
    for (const category of categories) {
      // Recorre todos los subtemas de la categoría actual
      for (const subtopic of category.subtopics) {
        // Genera valores aleatorios para pob_value y total_value
        const newPobValue = Math.floor(Math.random() * 100);
        const newTotalValue = Math.floor(Math.random() * 100);
        const newGrid = generateRandomGrid();
        subtopic.grid = newGrid;
        // Actualiza los valores en el subtema actual
        subtopic.pob_value = newPobValue;
        subtopic.total_value = newTotalValue;
  
        // Imprime los nuevos valores en la consola (opcional)
        console.log(`Nuevos valores para ${category.title} - ${subtopic.title}:`);
        console.log(`pob_value: ${newPobValue}`);
        console.log(`total_value: ${newTotalValue}`);
      }
    }
  }, intervalInSeconds * 1000);
}

// Función para generar un nuevo grid aleatorio
function generateRandomGrid() {
  
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
}
