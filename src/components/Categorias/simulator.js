// Importa las categorías desde el archivo categoryData.js
import { categories } from "./categoryData.js";

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
  const numRows = 5; // Número de filas del grid
  const numCols = 6; // Número de columnas del grid

  const grid = [];

  // Genera aleatoriamente los valores (0 o 1) para cada celda del grid
  for (let i = 0; i < numRows; i++) {
    const row = [];
    for (let j = 0; j < numCols; j++) {
      const cellValue = Math.random() < 0.5 ? 0 : 1;
      row.push(cellValue);
    }
    grid.push(row);
  }

  return grid;
}
