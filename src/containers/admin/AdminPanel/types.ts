export interface IorderedListItems {
  item: {
    price: string;
    title: string;
    description: string;
    img: string;
  };
}
export interface IOrdersList {
  userName: string;
  status: string;
  trackingCode: string;
  item: [IorderedListItems];
}
