import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  total: 0,
  isLoading: false,
  error: null,
};

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addItem(state, action) {
      const { payload } = action;
      state.items.push(payload);
      state.total += payload.totalPrice;
    },
    deleteItem(state, action) {
      const { totalPrice, codeOfGood, capacityKey } = action.payload;

      if (state.items.length === 1) {
        state.total = initialState.total;
      } else {
        state.total -= totalPrice;
      }
      state.items = state.items.filter(
        item =>
          item.codeOfGood !== codeOfGood && item.capacityKey !== capacityKey
      );
    },
    increaseQuantity(state, action) {
      const { codeOfGood, capacityKey } = action.payload;

      for (const item of state.items) {
        if (
          item.codeOfGood === codeOfGood &&
          item.capacityKey === capacityKey
        ) {
          item.quantityOrdered += 1;
          item.totalPrice += item.price;
          state.total += item.price;
          break;
        }
      }
    },
    decreaseQuantity(state, action) {
      const { codeOfGood, capacityKey } = action.payload;

      for (const item of state.items) {
        if (
          item.codeOfGood === codeOfGood &&
          item.capacityKey === capacityKey
        ) {
          if (item.quantityOrdered > 1) {
            item.quantityOrdered -= 1;
            item.totalPrice += item.price;
            state.total += item.price;
            break;
          }
          break;
        }
      }
    },
    changeQuantity(state, action) {
      const { codeOfGood, capacityKey, totalPrice, quantityOrdered } =
        action.payload;

      for (const item of state.items) {
        if (
          item.codeOfGood === codeOfGood &&
          item.capacityKey === capacityKey
        ) {
          state.total = state.total - item.totalPrice + totalPrice;
          item.quantityOrdered = quantityOrdered;
          break;
        }
      }
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseQuantity,
  decreaseQuantity,
  changeQuantity,
} = basketSlice.actions;
export const basketReducer = basketSlice.reducer;