export interface IorderedListItems {
  item: {
    price: number;
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
