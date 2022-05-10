export const addToCart =
  (flavours, quantity, varient) => (dispatch, getState) => {
    var cartItem = {
      name: flavours.name,
      _id: flavours._id,
      image: flavours.image,
      varient: varient,
      quantity: Number(quantity),
      prices: flavours.prices,
      price: flavours.prices[0][varient] * quantity,
    };

    if (cartItem.quantity > 10) {
      alert("you cannot add more than 10 quantities");
    } else {
      if (cartItem.quantity < 1) {
        dispatch({ type: "DELETE_FROM_CART", payload: flavours });
      } else {
        dispatch({ type: "ADD_TO_CART", payload: cartItem });
      }
    }

    const cartItems = getState().cartReducer.cartItems;
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };
export const deleteFromCart = (flavours) => (dispatch, getState) => {
  dispatch({ type: "DELETE_FROM_CART", payload: flavours });
  const cartItems = getState().cartReducer.cartItems;
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};
