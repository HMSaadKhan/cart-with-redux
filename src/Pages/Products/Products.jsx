import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import axios from "axios";
// import productService from "../../Services/ProductServices";
// import { NameBar } from "../../Styles/NameBar";
import ProductCard from "./ProductCard";
import { useParams } from "react-router-dom";

const Products = (props) => {
  const product = useParams();
  console.log(product);

  const [products, setProducts] = useState([]);

  const getProductsbyCategory = () => {
    axios
      .get("https://fakestoreapi.com/products/category/" + product.id)
      .then((data) => {
        console.log(data);
        setProducts(data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  useEffect(getProductsbyCategory, [product.id]);

  return (
    <>
      <Typography
        ml={2}
        mt={2}
        color="primary"
        sx={{ fontWeight: "bold", cursor: "pointer" }}
        variant="h4"
      >
        {product.id}
      </Typography>
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
    </>
  );
};

export default Products;
