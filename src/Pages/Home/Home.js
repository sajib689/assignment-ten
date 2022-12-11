import React from "react";
import { useLoaderData } from "react-router-dom";
import ShopSummaryCard from "../../Shared/ShopSummaryCard/ShopSummaryCard";
import { Col, Row } from "react-bootstrap";
import "../Home/Home.css";
const Home = () => {
  const allShop = useLoaderData();
  return (
    <div className="mt-5 ms-5  ">
      {allShop.map((shop) => (
        <ShopSummaryCard key={shop.id} shop={shop}></ShopSummaryCard>
      ))}
    </div>
  );
};

export default Home;
