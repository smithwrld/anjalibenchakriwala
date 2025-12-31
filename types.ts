export interface Product {
  name: string;
  description: string;
  weightOptions: {
    weight: string;
    price: string;
  }[];
  ingredients: string;
  imageSeed: string;
  specialNote?: string;
}
