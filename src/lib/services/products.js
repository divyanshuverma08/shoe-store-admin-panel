import { Api } from "../helper";

export const products = {
  getProductsWithFiltersAndPagination: async function ({query,auth}) {
    try {
      const response = await Api.get({url:`/api/v1/products/?${query}`,auth});
      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {
      throw error;
    }
  },
  getProductById: async function ({id,auth}) {
    try {
      const response = await Api.get({url:`/api/v1/products/${id}`,auth});
      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {
      throw error;
    }
  },
  addProduct: async function ({data,auth}) {
    try {
      const response = await Api.post({url:`/api/v1/products`,data,auth});
      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {
      throw error;
    }
  },
  updateProduct: async function ({id,data,auth}) {
    try {
      const response = await Api.put({url:`/api/v1/products/${id}`,data,auth});
      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {
      throw error;
    }
  },
};
