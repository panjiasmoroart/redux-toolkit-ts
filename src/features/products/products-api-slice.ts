import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const PRODUCT_API_KEY = 'no-api-key';
const PRODUCT_URL = 'https://fakestoreapi.com/products';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: PRODUCT_URL,
    prepareHeaders(headers) {
      headers.set('x-api-key', PRODUCT_API_KEY);
      return headers;
    }
  }),
  endpoints(builder) {
    return {
      fetchProducts: builder.query<Product[], number | void>({
        query(limit = 5) {
          return `https://fakestoreapi.com/products?limit=${limit}`;
        }
      })
    };
  }
});

export const { useFetchProductsQuery } = apiSlice;
