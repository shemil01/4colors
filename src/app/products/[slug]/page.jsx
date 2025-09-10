"use client";
import { useParams } from "next/navigation";
import React from "react";
import { products } from "@/data/products";
import ProductDetailsPage from "@/components/product/id/ProductDetails";
import Navbar from "@/components/layouts/Navbar";

const page = () => {
  const { slug } = useParams();
  const product = products.filter((p) => p.slug === slug);
  return (
    <div>
      <Navbar />
      {product.map((data) => (
        <ProductDetailsPage data={data} key={data.id} />
      ))}
    </div>
  );
};

export default page;
