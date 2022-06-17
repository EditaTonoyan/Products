import React, { useState, Fragment } from "react";
import { Button, Card, Row, Col } from "antd";

const { Meta } = Card;

export default function CartList(props) {
  const users = localStorage.getItem("authToken")
    ? JSON.parse(localStorage.getItem("authToken"))
    : [];
    const shoppingList = JSON.parse(localStorage.getItem("shoppingList"));

  const [addToCart, setAddToCart] = useState({
    list: props.list,
  });

  const addCart = (item) => {
    console.log("user=>".user);
    if (users.select == "user") {
      props.update({ item: item });
    }
  //  if( shoppingList.length  == 0) {
  //   setAddToCart({list})
  //  }

  };

  return (
    <Fragment>
      <div style={{ direction: "rft" }}>
        <Row gutter={10}>
          {addToCart.list.map((item, index) => (
            <Col key={index} xs={20} sm={16} md={12} lg={8} xl={4}>
              <Card
                hoverable
                actions={[
                  users.select == "user" && (
                    <Button type="shopping-cart" onClick={() => addCart(item)}>
                      Add
                    </Button>
                  ),
                ]}
                style={{ width: 200 }}
                cover={
                  <img
                    alt="example"
                    src={item.img}
                    style={{ height: 200, objectFit: "cover" }}
                  />
                }
              >
                <Meta title={item.title} description={item.description} />
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </Fragment>
  );
}
