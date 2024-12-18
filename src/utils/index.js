/**
 * this function calculates total price of a new order
 * @param {*Array} products cartProduct: Array of objects 
 * @returns {number} total price
 */

// export const totalPrice = (products) => {
//   let sum = 0
//   products.forEach(product => sum += product.price)
//   return sum
// }

export const totalPrice = (products) => {
  console.log("Productos recibidos:", products);
  
  if (!Array.isArray(products)) {
    console.error("El argumento debe ser un arreglo. Se recibió:", products);
    return 0;
  }

  return products.reduce((sum, product) => sum + (product.price || 0), 0);
};