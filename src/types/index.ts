export type TRestaurant = {
  _id: number;
  name: string;
  image: string;
  description: string;
  rating: number;
  location: string;
};

export type TMenu = {
  _id: number;
  name: string;
  image: string;
  description: string;
  price: number;
};
