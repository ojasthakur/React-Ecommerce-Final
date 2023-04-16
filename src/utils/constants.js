import React from "react";
import { GiCompass, GiDiamondHard, GiStabbedNote } from "react-icons/gi";
export const links = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "about",
    url: "/about",
  },
  {
    id: 3,
    text: "products",
    url: "/products",
  },
];

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: "World Wide Shipping",
    text: "A well lubricated machine of logistics, T-mart will deliver no matter where you are within 7 days or less",
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: "Product Quality",
    text: "All T-mart products go through rigorous quality analysis and only the finest materials from all over the world are used to guarantee a smile on our customers as the use our products!",
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: "Warranty",
    text: "All T-mart products are covered by a no questions asked, 3 year warranty. T-mart will find a solution to your product related issues and a replacement will be issues in case of product failure",
  },
];

export const products_url = "https://course-api.com/react-store-products";

export const single_product_url = `https://course-api.com/react-store-single-product?id=`;
