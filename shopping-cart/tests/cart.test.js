const {addItem, removeItem, getTotalItems} = require('../cart.js');



describe("Testing shopping Cart using HOF", ()=>{

    let cart ;

    beforeEach(() => {
    cart = []; // reset cart before each test
  });

    //Add Item tests
   describe("addItem", () => {

    //Positive case
    test("should add a new item with valid quantity", () => {
      cart = addItem(cart, "apple", 3);

      expect(cart).toEqual([{ item: "apple", quantity: 3 }]);
    });

   
   //Negative case

    test("should throw error for negative quantity", () => {
      expect(() => addItem(cart, "banana", -2)).toThrow("Quantity must be a positive number");
    });

    //Edge case

    test("should throw error for zero quantity", () => {
      expect(() => addItem(cart, "banana", 0)).toThrow("Quantity must be a positive number");
    });

   
});


// Remove items
 describe("removeItem", () => {

    //Positive case
    test("should remove an existing item", () => {
      cart = addItem(cart, "apple", 3);
      cart = removeItem(cart, "apple");
      expect(cart).toEqual([]);
    });

    //Negative case
    test("should throw error if item does not exist", () => {
      expect(() => removeItem(cart, "orange")).toThrow("Item not found in cart");
    });

    // Edge Case
  test("should remove the last item but keep others intact", () => {
  cart = addItem(cart, "apple", 2);
  cart = addItem(cart, "banana", 3);
  cart = addItem(cart, "cherry", 5);

cart.pop();
console.log(cart);
  expect(cart).toEqual([
    { item: "apple", quantity: 2 },
    { item: "banana", quantity: 3 }
  ]);
  expect(getTotalItems(cart)).toBe(5);
});

  });

  // getTotalItems Tests
  describe("getTotalItems", () => {

    //Positive case
    test("should return total quantity of all items", () => {
      cart = addItem(cart, "apple", 2);
      cart = addItem(cart, "banana", 5);
      expect(getTotalItems(cart)).toBe(7);
    });


    //Negative case
    test("should return 0 for an empty cart", () => {
      expect(getTotalItems(cart)).toBe(0);
    });

    //Edge case
    test("should handle large quantities ", () => {
    const largeQuantity = 1_000_000_000; // 1 billion

    cart = addItem(cart, "apples", largeQuantity);
    cart = addItem(cart, "bananas", largeQuantity);
    cart = addItem(cart, "cherries", largeQuantity);

    expect(getTotalItems(cart)).toBe(3_000_000_000);
  });
  });
});
  

