import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [
    {
      id: "1",
      title: "Apple iPhone 15 Pro Max",
      price: 10,
      img: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-15-pro-max.jpg",
      amount: 1,
    },
    {
      id: "2",
      title: "Google Pixel 8 Pro",
      price: 20,
      img: "https://fdn2.gsmarena.com/vv/bigpic/google-pixel-8-pro.jpg",
      amount: 1,
    },
    {
      id: "3",
      title: "Samsung Galaxy S23 Ultra",
      price: 30,
      img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s23-ultra-5g.jpg",
      amount: 1,
    },
  ],
  amount: 0,
  total: 0,
};

// Crea un nuevo slice (característica)
const cartSlice = createSlice({
  name: "cart",
  initialState,
});

export default cartSlice.reducer;
