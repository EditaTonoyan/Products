import React, { Fragment, useState, useEffect } from "react";
import { Drawer, Button, Row, Col, Badge } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import uuid from "react-uuid";

export default function Drawers(props) {
  const [addedList, setAddedList] = useState({
    shoppingCartList: props.shoppingCart,
    drawerVisible: false,
  });

  const loggedInUser = localStorage.getItem("authToken");
  const shoppingList = JSON.parse(localStorage.getItem("shoppingList"));
  const ordersList = JSON.parse(localStorage.getItem("orders"));

  useEffect(() => {
    setAddedList({
      shoppingCartList: props.shoppingCart,
    });
  }, [props.shoppingCart]);

  function update() {
    setAddedList({
      ...addedList,
      drawerVisible: addedList.drawerVisible ? false : true,
    });
  }
  localStorage.setItem(
    "shoppingList",
    JSON.stringify(addedList.shoppingCartList)
  );

  const orders = ordersList ? ordersList : [];
  const addOrder = () => {
    const { userName } = JSON.parse(loggedInUser);
    const trackingCode = uuid();
    const status = "ordered";

    orders.push({
      userName,
      trackingCode,
      status,
      item: shoppingList,
    });

    localStorage.setItem("shoppingList", JSON.stringify([]));
    props.clear();

    localStorage.setItem("orders", JSON.stringify(orders));
  };

  const DescriptionItem = ({ title, content, url }) => (
    <div
      style={{
        fontSize: 14,
        lineHeight: "22px",
        marginBottom: 7,
        color: "rgba(0,0,0,0.65)",
      }}
    >
      <img src={url} alt="example" width="50" height="50" />
      <p
        style={{
          marginLeft: 8,
          display: "inline-block",
          color: "rgba(0,0,0,0.85)",
        }}
      >
        {title}
      </p>
    </div>
  );

  return (
    <Fragment>
      <Button onClick={update}>
        <Badge
          count={addedList.shoppingCartList.length}
          style={{
            backgroundColor: "#fff ",
            color: "#999",
            boxShadow: "0 0 0 1px red inset",
          }}
        >
          <ShoppingCartOutlined
            style={{ width: 35, height: 50, fontSize: 20, color: "#0089ed" }}
          />
        </Badge>
      </Button>

      <Drawer
        title="Added Cart List"
        width={250}
        placement="right"
        closable
        onClose={() => setAddedList({ ...addedList, drawerVisible: false })}
        visible={addedList.drawerVisible}
      >
        {addedList.shoppingCartList.map((item, index) => (
          <Row key={index}>
            <Col span={12}>
              <DescriptionItem
                title={item.item.title}
                content={item.item.description}
                url={item.item.img}
              />
            </Col>
          </Row>
        ))}

        {addedList.shoppingCartList.length === 0 ? null : (
          <Fragment>
            <Button type="primary" style={{ margin: 5 }} onClick={addOrder}>
              Order
            </Button>
            <Button
              type="primary"
              style={{ margin: 5 }}
              onClick={() => props.clear()}
            >
              Clear
            </Button>
          </Fragment>
        )}
      </Drawer>
    </Fragment>
  );
}
