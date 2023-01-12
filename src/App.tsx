import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router";
import "./App.css";
import { objectsAddOne } from "./app/features/entities/entitesSlice";
import { getAllEntities } from "./app/features/entities/thunks";
import { useAppDispatch } from "./app/hooks";
import { Footer, LoginModal, RegisterModal } from "./components";
import Header from "./components/Header/Header";
import Modal from "./components/Modal/Modal";
import {
  Category, Main, NotFound, Product,
} from "./pages";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    // dispatch(
    //   objectsAddOne({
    //     id: "1",
    //     name: "category1",
    //     img: "img1",
    //     type: "CATEGORY",
    //     children: [],
    //     date: Date.now(),
    //     parentId: null,
    //     price: null,
    //   }),
    // );
    // dispatch(
    //   objectsAddOne({
    //     id: "2",
    //     name: "category2",
    //     img: "img2",
    //     type: "CATEGORY",
    //     children: [],
    //     date: Date.now(),
    //     parentId: null,
    //     price: null,
    //   }),
    // );
    // dispatch(
    //   objectsAddOne({
    //     id: "3",
    //     name: "product1",
    //     img: "img1",
    //     type: "OFFER",
    //     children: [],
    //     date: Date.now(),
    //     parentId: "1",
    //     price: 1000,
    //   }),
    // );
    // dispatch(
    //   objectsAddOne({
    //     id: "4",
    //     name: "product2",
    //     img: "img4",
    //     type: "OFFER",
    //     children: [],
    //     date: Date.now(),
    //     parentId: "2",
    //     price: 1012,
    //   }),
    // );
    // dispatch(
    //   objectsAddOne({
    //     id: "5",
    //     name: "product3",
    //     img: "img5",
    //     type: "OFFER",
    //     children: [],
    //     date: Date.now(),
    //     parentId: "1",
    //     price: 10112,
    //   }),
    // );
    // dispatch(
    //   objectsAddOne({
    //     id: "6",
    //     name: "product1",
    //     img: "img1",
    //     type: "OFFER",
    //     children: [],
    //     date: Date.now(),
    //     parentId: "1",
    //     price: 1000,
    //   }),
    // );
    // dispatch(
    //   objectsAddOne({
    //     id: "7",
    //     name: "product2",
    //     img: "img4",
    //     type: "OFFER",
    //     children: [],
    //     date: Date.now(),
    //     parentId: "2",
    //     price: 1012,
    //   }),
    // );
    // dispatch(
    //   objectsAddOne({
    //     id: "8",
    //     name: "product3",
    //     img: "img5",
    //     type: "OFFER",
    //     children: [],
    //     date: Date.now(),
    //     parentId: "1",
    //     price: 10112,
    //   }),
    // );

    dispatch(getAllEntities());
  }, []);

  return (
    <div className="applicationWrapper">
      <Header />
      <div className="appContentWrapper">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/category/:categoryId" element={<Category />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Modal />
        <Footer />
      </div>
    </div>
  );
}

export default App;
