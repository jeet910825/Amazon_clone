export const initialState = {
  basket: [],
  users: "",
};
export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn("cant remove product");
      }
      return {
        ...state,
        basket: newBasket,
      };
    case "EMPTY_BASKET":
      return {...state,basket:[]}

    case "SET_USER":
      return {
        ...state,
        users: action.user,
      };
    default: {
      return state;
    }
  }
};
