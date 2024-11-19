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

export type TCategory = {
  _id: string;
  name: string;
  image: string;
};

export type TMenuItems = {
  _id: string;
  id: string;
  name: string;
  description: string;
  shortDescription: string;
  price: number;
  category: TCategory;
  images: {
    key: string;
    url: string;
    _id: string;
  }[];
  stock: number;
  sales: number;
  size: string[];
  discount: number;
  color: string[];
  avgRating: number;
  brand: string;
  isDeleted: boolean;
  date: string;

  averageRating: number;
  reviews: any[];
  quantity?: number;
};

export type TMenuImage = {
  key: string;
  url: string;
  _id: string;
};
