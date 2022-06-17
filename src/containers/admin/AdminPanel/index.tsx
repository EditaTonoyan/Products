import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./adminPanel.module.scss";

const AdminPanel = () => {
  const navigate = useNavigate();

  const [ordersList, setOrdersList] = useState<any>([]);
  const [togglaed, setToggled] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("authAdminToken")) {
      navigate("/adminLogin");
    }

    const orders = localStorage.getItem("orders")
      ? JSON.parse(localStorage.getItem("orders") as string)
      : [];

    setOrdersList(orders);
  }, [navigate, togglaed]);

  const deleteOrder = (index: number) => {
    ordersList.splice(index, 1);
    localStorage.setItem("orders", JSON.stringify(ordersList));
    setToggled(true);
  };

  const confirmOrder = (index: number) => {
    ordersList[index].status = "confirmed";
    localStorage.setItem("orders", JSON.stringify(ordersList));

    setToggled(true);
  };

  const orderedList = ordersList.map(
    ({ userName, status, trackingCode, item }: any, index: number) => {
      return (
        <div key={index} className={styles.wrapper_admin__userInfo}>
          <div>
            <div className={styles.wrapper_admin__userInfo_item}>
              <span>User</span>

              <p>{userName}</p>
            </div>
            <div className={styles.wrapper_admin__userInfo_item}>
              <span>Tracking code</span>

              <p>{trackingCode}</p>
            </div>

            <div className={styles.wrapper_admin__userInfo_item}>
              <span>Status</span>
              {ordersList[index].status === "ordered" ? (
                <p>{status}</p>
              ) : (
                <p className={styles.wrapper_admin__userInfo_item_confirmed}>
                  {status}
                </p>
              )}
            </div>
          </div>
          <div className={styles.wrapper_admin__orderInfo}>
            {item.map(({ item }: any, ind: number) => {
              return (
                <div key={ind}>
                  <img
                    src={item.img}
                    alt="productImage"
                    style={{ width: 150, height: 150 }}
                  />
                  <p>{item.description}</p>
                  <p>{`price ${item.price}`}</p>
                </div>
              );
            })}
          </div>
          {ordersList[index].status === "ordered" && (
            <div className={styles.wrapper_admin__buttons}>
              <button
                className={styles.wrapper_admin__buttons_button}
                onClick={() => deleteOrder(index)}
              >
                Delete
              </button>

              <button
                className={styles.wrapper_admin__buttons_button}
                onClick={() => confirmOrder(index)}
              >
                Confirm
              </button>
            </div>
          )}
        </div>
      );
    }
  );
  return (
    <div className={styles.wrapper_admin}>
      <h1 className={styles.wrapper_admin_header}>Admin Panel</h1>
      <div className="container">{orderedList}</div>
    </div>
  );
};

export default AdminPanel;
