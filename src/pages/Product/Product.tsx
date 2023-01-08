import React from "react";
import { useNavigate } from "react-router";
import { getEntityById } from "../../app/features/entities/getters";
import { useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import { Button } from "../../components/UIKit";
import styles from "./Product.module.css";

function Product() {
  const navigate = useNavigate();
  const product = useAppSelector((state: RootState) => getEntityById(state, window.location.href.split("/")[4]));
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.mainInfoContainer}>
        <img className={styles.productImage} src={product?.img} alt={product?.name} />
        <div className={styles.productMainInfo}>
          <h1>{product?.name}</h1>
          <p>{product?.price}</p>
        </div>
      </div>
      <div className={styles.productDetailedInfo}>
        <div className={styles.navigatonButtons}>
          <Button onClick={() => navigate("/")}>Back</Button>
        </div>
      </div>
    </div>
  );
}

export default Product;
