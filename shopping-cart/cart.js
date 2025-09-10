
// Cart will be array of objects
function addItem(cart, item, quantity){

     if (typeof item !== "string" || item.trim() === "") {
    throw new Error("Invalid item name");
  }

  if (typeof quantity !== "number" || quantity <= 0) {
    throw new Error("Quantity must be a positive number");
  }
  
  return[...cart, {item, quantity}];

}

function removeItem(cart, item){

     if (!cart.some((prod) => prod.item === item)) {
    throw new Error("Item not found in cart");
  }

  // filter out the item
  return cart.filter((prod) => prod.item !== item);
}


function getTotalItems(cart){

// reduce to sum all quantities
  return cart.reduce((total, prod) => total + prod.quantity, 0);
}

module.exports = {addItem, removeItem, getTotalItems};


