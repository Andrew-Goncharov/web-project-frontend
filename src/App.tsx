import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router";
import "./App.css";
import { objectsAddOne } from "./app/features/entities/entitesSlice";
import { useAppDispatch } from "./app/hooks";
import { Footer, LoginModal, RegisterModal } from "./components";
import Header from "./components/Header/Header";
import Modal from "./components/Modal/Modal";
import {
  Category, Main, NotFound, Product,
} from "./pages";

function App() {
  // const navigate = useNavigate();
  // const page = window.location.href.split("/")[3];
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      objectsAddOne({
        id: "1",
        name: "category1",
        img: "img1",
        type: "CATEGORY",
        children: [],
        date: Date.now(),
        parentId: null,
        price: null,
      }),
    );
    dispatch(
      objectsAddOne({
        id: "2",
        name: "category2",
        img: "img2",
        type: "CATEGORY",
        children: [],
        date: Date.now(),
        parentId: null,
        price: null,
      }),
    );
    dispatch(
      objectsAddOne({
        id: "3",
        name: "product1",
        img: "img1",
        type: "OFFER",
        children: [],
        date: Date.now(),
        parentId: "1",
        price: 1000,
      }),
    );
  }, []);

  return (
    <div className="applicationWrapper">
      <Header />
      <div className="appContentWrapper">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/category/:categoryId" element={<Category />} />
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* {(page === "login" || page === "register") && ( */}
        <Modal />
        <Footer />
      </div>
    </div>
  );
}

export default App;
