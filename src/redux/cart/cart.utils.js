export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItems = cartItems.find(
    (cartItem) => cartItem.id == cartItemToAdd.id
  );

  if (existingCartItems) {
    return cartItems.map((cart) =>
      cartItem.id == cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
};
