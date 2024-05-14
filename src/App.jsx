import React, { createContext, useState } from 'react';
import Cart from './Components/Cart/Cart';
export const myContext = createContext('')
const App = () => {
  let products = [
    {
      id: 1,
      title: "iPhone 9",
      description: "An apple mobile which is nothing like apple",
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      images: [
        "/img1a.jpg",
        // "/public/img1b.jpg",
        // "/public/img1a.jpg",
        // "/public/img1b.jpg",
        // "/public/img1a.jpg",
      ],
    },
    {
      id: 2,
      title: "iPhone X",
      description:
        "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
      price: 899,
      discountPercentage: 17.94,
      rating: 4.44,
      stock: 34,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
      images: [
        "/img2a.jpg",
        // "/public/img2b.jpg",
        // "/public/img2c.jpg",
        // "/public/img2d.jpg",
      ],
    },
    {
      id: 3,
      title: "Samsung Universe 9",
      description:
        "Samsung's new variant which goes beyond Galaxy to the Universe",
      price: 1249,
      discountPercentage: 15.46,
      rating: 4.09,
      stock: 36,
      brand: "Samsung",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
      images: ["/img3a.jpg"],
    },
    {
      id: 4,
      title: "OPPOF19",
      description: "OPPO F19 is officially announced on April 2021.",
      price: 280,
      discountPercentage: 17.91,
      rating: 4.3,
      stock: 123,
      brand: "OPPO",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
      images: [
        "/img4a.jpg",
        // "/public/img4b.jpg",
        // "/public/img4c.jpg",
        // "/public/img4d.jpg",
        // "/public/img4b.jpg",
      ],
    },
    {
      id: 5,
      title: "Huawei P30",
      description:
        "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
      price: 499,
      discountPercentage: 10.58,
      rating: 4.09,
      stock: 32,
      brand: "Huawei",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
      images: [
        "/img5a.jpg",
        // "/public/img5b.jpg",
        // "/public/img5c.jpg",
      ],
    },
  ];
  const [data,setData]=useState(products);
  return (
    <div>
      <h1 className='text-center roboto-black-italic'>React useContext Task</h1>
      <myContext.Provider value={[data,setData]}>
        <Cart />
      </myContext.Provider>
    </div>
  );
};

export default App;