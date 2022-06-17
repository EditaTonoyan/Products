import React, { useState, useEffect } from "react";
import { Layout, message, Menu, Row, Col } from "antd";

import CartList from "./components/content";
import Drawers from "./components/drawer";
import { useNavigate } from "react-router-dom";

import { list } from "../../utils";

const { Header, Content } = Layout;

document.title = "Shopping Cart Demo";

const ProductsPage = () => {
  const loggedInUser = localStorage.getItem("authToken");

  const [cart, setCart] = useState({
    shoppingCart: [],
  });


  const navigate = useNavigate();

  useEffect(() => {
    if (!loggedInUser) {
      navigate("/login");
    }
  });

  console.log();

  const updateField = (e) => {
    message.destroy();
    message.info("Added to cart");

    setCart({
      ...cart,
      // shoppingCart: [...cart.shoppingCart, {item:{ ...e.item, userName} }],
      shoppingCart: [...cart.shoppingCart, e],
    });
  };

  return (
    <Layout>
      <Header className="header">
        <Row>
          <Col span={8}>
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={["2"]}
              style={{ lineHeight: "64px" }}
            >
              <Menu.Item key="1">Cart Demo</Menu.Item>
            </Menu>
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
