const {addItem, removeItem, getTotalItems} = require('../cart.js');



describe("Shopping Cart Testing using HOF", ()=>{

    let cart ;

    beforeEach(() => {
    cart = []; // reset cart before each test
  });

    //Add Item tests
   describe("addItem", () => {

    //Positive case
    test("should add a new item with valid quantity", () => {
      cart = addItem(cart, "Apple Watch", 3);

      expect(cart).toEqual([{ item: "Apple Watch", quantity: 3 }]);
    });

   
   //Negative case

    test("should throw error for negative quantity", () => {
      expect(() => addItem(cart, "IMac", -2)).toThrow("Quantity must be a positive number");
    });

    //Edge case

    test("should throw error for zero quantity", () => {
      expect(() => addItem(cart, "Airpod", 0)).toThrow("Quantity must be a positive number");
    });

   
});


// Remove items
 describe("removeItem", () => {

    //Positive case
    test("should remove an existing item", () => {
      cart = addItem(cart, "IPad", 3);
      cart = removeItem(cart, "IPad");
      expect(cart).toEqual([]);
    });

    //Negative case
    test("should throw error if item does not exist", () => {
      expect(() => removeItem(cart, "IMouse")).toThrow("Item not found in cart");
    });

    // Edge Case
  test("should remove the last item but keep others intact", () => {
  cart = addItem(cart, "IMac", 2);
  cart = addItem(cart, "Apple Watch", 3);
  cart = addItem(cart, "MacBook", 5);

cart.pop();
console.log(cart);
  expect(cart).toEqual([
    { item: "IMac", quantity: 2 },
    { item: "Apple Watch", quantity: 3 }
  ]);
  expect(getTotalItems(cart)).toBe(5);
});

  });

  // getTotalItems Tests
  describe("getTotalItems", () => {

    //Positive case
    test("should return total quantity of all items", () => {
      cart = addItem(cart, "IPhone", 2);
      cart = addItem(cart, "AirPOd", 5);
      expect(getTotalItems(cart)).toBe(7);
    });


    //Negative case
    test("should return 0 for an empty cart", () => {
      expect(getTotalItems(cart)).toBe(0);
    });

    //Edge case
    test("should handle large quantities ", () => {
    const largeQuantity = 1_000_000_000; // 1 billion

    cart = addItem(cart, "IPhone", largeQuantity);
    cart = addItem(cart, "IMac", largeQuantity);
    cart = addItem(cart, "Airpod", largeQuantity);

    expect(getTotalItems(cart)).toBe(3_000_000_000);
  });
  });
});
  

