import { Product } from "./product";

/**
 * Project type definition for client projects
 */
export interface Project {
  id: string;
  name: string;
  clientName: string;
  lastUpdated: string;
  products: Product[];
}

/**
 * Offer item with pricing information
 */
export interface OfferItem {
  product: Product;
  price: number;
  quantity: number;
}
