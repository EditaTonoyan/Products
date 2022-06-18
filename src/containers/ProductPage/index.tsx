import React, { useState, useEffect } from "react";
import { Layout, message, Row, Col } from "antd";

import CartList from "./components/content";
import Drawers from "./components/drawer";
import { useNavigate } from "react-router-dom";

import { list } from "../../utils";

const { Header, Content } = Layout;

document.title = "Onex";

const ProductsPage = () => {


  const loggedInUser = localStorage.getItem("authToken");

  const [cart, setCart] = useState<any>({
    shoppingCart: [],
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (!loggedInUser) {
      navigate("/login");
    }
  });

  const updateField = (e: React.ChangeEvent<HTMLInputElement>) => {
    message.destroy();
    message.info("Added to cart");

    setCart({
      ...cart,
      shoppingCart: [...cart.shoppingCart, e],
    });
  };

  return (
    <Layout>
      <Header style={{ backgroundColor: "#0089ed" }}>
        <Row>
          <Col span={8}>
            <p
              style={{
                backgroundColor: "#0089ed",
                fontSize: 24,
                color: "white",
              }}
            >
              Onex
            </p>
          </Col>
          <Col style={{ textAlign: "right" }}>
            <Drawers
              shoppingCart={cart.shoppingCart}
              clear={() => {
                setCart({ ...cart, shoppingCart: [] });
                message.destroy();
                message.info("Cart Clear");
              }}
            />
          </Col>
        </Row>
      </Header>
      <Content style={{ padding: "0 50px", height: "auto" }}>
        <Layout style={{ background: "#fff" }}>
          <Content>
            <CartList update={updateField} list={list} />
          </Content>
        </Layout>
      </Content>
    </Layout>
  );
};

export default ProductsPage;
