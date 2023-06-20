export type Products = {
  id: string;
  name: string;
  image_url: string;
  price_in_cents: number;
  description?: string;
  category?: string;
};

export type ProductsFetchResponse = {
  data: {
    allProducts: Products[];
  };
};

export type ProductFetchResponse = {
  data: {
    Product: Products;
  };
};
