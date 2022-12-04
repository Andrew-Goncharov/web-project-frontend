import React from "react";
import { useParams } from "react-router";
import styles from "./Category.module.css";

function Category() {
  const params = useParams();

  return (
    <div>
      category
      {params.categoryId}
    </div>
  );
}

export default Category;
