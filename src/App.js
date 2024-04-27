import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./pages/SignIn.js";
import SpecificBookPage from "./pages/SpecificBook.js";
import BookList from "./pages/BookList.js";
import CartPage from "./pages/Cart.js";
import Page404Page from "./pages/Page404Page.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="books" element={<BookList />} />
          <Route path="books/:id" element={<SpecificBookPage />} />
          <Route path="cart" element={<CartPage />} />

          <Route path="*" element={<Page404Page />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
