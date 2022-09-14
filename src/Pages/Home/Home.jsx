import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import ProductCard from "../Products/ProductCard";
import axios from "axios";

export default function Home() {
  const [categories, setcategories] = useState([]);
  const [products, setproducts] = useState([]);

  const getCategories = () => {
    axios
      .get("https://fakestoreapi.com/products/categories/")
      .then((data) => {
        console.log(data);
        setcategories(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get("https://fakestoreapi.com/products/")
      .then((data) => {
        console.log(data);
        setproducts(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(getCategories, []);

  return (
    <>
      <Box p={5} m={2}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {categories.map((data) => {
              return (
                <Box key={data._id}>
                  <CategoryCard category={data} />
                </Box>
              );
            })}
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
            width: "100%",
          }}
        >
          {products.length > 0 ? (
            <>
              {products.map((product) => {
                return (
                  <Box key={product._id}>
                    <ProductCard product={product} />
                  </Box>
                );
              })}
            </>
          ) : (
            <></>
          )}
        </Box>
      </Box>
    </>
  );
}
