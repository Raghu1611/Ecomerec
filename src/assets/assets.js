// Import all images from the assets folder
import carticon from './shopping-cart.png';
import menu from './menu-bar.png';
import downmenu from './down.png';
import deleteicon from './delete.png';

import blackshirt1 from './blackshirt1.jpg';
import blackshirt2 from './blackshirt2.jpg';
import blackshirt3 from './blackshirt3.jpg';
import blackshirt4 from './blackshirt4.jpg';
import blueshirt1 from './blueshirt1.jpg';
import blueshirt2 from './blueshirt2.jpg';
import blueshirt3 from './blueshirt3.jpg';
import blueshirt4 from './blueshirt4.jpg';
import violetshirt1 from './Violetlight1.jpg';
import violetshirt2 from './Violetlight2.jpg';
import violetshirt3 from './Violetlight3.jpg';
import violetshirt4 from './Violetlight4.jpg';
import violetshirt5 from './Violetlight5.jpg';
import whiteshirt1 from './whiteshirt1.jpg';
import whiteshirt2 from './whiteshirt2.jpg';
import whiteshirt3 from './whiteshirt3.jpg';
import whiteshirt4 from './whiteshirt4.jpg';

import women1 from './Women1.jpg';
import logo from './logo.jpg';

// Create an object named `assets` containing all images
export const assets2 = {
  logo,
  deleteicon,
  carticon,
  menu,
  downmenu,
  blackshirt1,
  blackshirt2,
  blackshirt3,
  blackshirt4,
  blueshirt1,
  blueshirt2,
  blueshirt3,
  blueshirt4,
  violetshirt1,
  violetshirt2,
  violetshirt3,
  violetshirt4,
  violetshirt5,
  whiteshirt1,
  whiteshirt2,
  whiteshirt3,
  whiteshirt4,
  women1
}

// Sample product list
export const product = [
  {
    id: 'aaa',
    name: "Men's Shirt Formal",
    description: "Good and fit",
    price: 2000,
    image: [whiteshirt1, whiteshirt2, whiteshirt3],
    size: ["s", "m", "xl", "xxl"],
    category: "men",
    subCategory: "shirt",
    date: 1232166,
    bestseller: true,
  },
  {
    id: 'bbbb',
    name: "Women's Dress",
    description: "Good and fit",
    price: 50,
    image: [women1],
    size: ["s", "m", "xl", "xxl"],
    category: "women",
    subCategory: "new",
    date: 56,
    bestseller: true,
  },
  {
    id: 'cccc',
    name: "Men's Shirt Formal",
    description: "Good and fit",
    price: 2500,
    image: [violetshirt1, violetshirt2],
    category: "men",
    subCategory: "shirt",
    size: ["s", "m", "xl", "xxl"],
    date: 5489898,
    bestseller: true,
  }
]
