import React, { useState } from "react";
import { Button, Card, Row, Col } from "antd";
import { IList } from "../types";

const { Meta } = Card;

const CartList = (props: { list: any[]; update: (arg0: any) => void }) => {
  const users = localStorage.getItem("authToken")
    ? JSON.parse(localStorage.getItem("authToken") as string)
    : [];

  const [addToCart, setAddToCart] = useState({
    list: props.list,
  });

  const addCart = (item: IList) => {
    if (users.select == "user") {
      props.update({ item: item });
    }
  };

  return (
    <Row gutter={10}>
      {addToCart.list.map(
        (
          item: {
            price: string;
            img: string;
            title: string;
            description: string;
          },
          index: number
        ) => (
          <Col key={index} xs={20} sm={16} md={12} lg={8} xl={4}>
            <Card
              hoverable
              actions={[
                users.select == "user" && (
                  <Button onClick={() => addCart(item)}>Add</Button>
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
        )
      )}
    </Row>
  );
};
export default CartList;
