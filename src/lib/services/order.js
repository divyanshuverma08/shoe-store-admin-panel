import { Api } from "../helper";

export const order = {
  getOrders: async function ({query,auth}) {
    try {
      const response = await Api.get({url:`/api/v1/orders/?${query}`,auth});
      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {
      throw error;
    }
  },
  getOrderById: async function ({id,auth}) {
    try {
      const response = await Api.get({url:`/api/v1/orders/${id}`,auth});
      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {
      throw error;
    }
  },
  updateOrderStatus: async function ({id,data,auth}) {
    try {
      const response = await Api.put({url:`/api/v1/orders/status/${id}`,data,auth});
      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {
      throw error;
    }
  },
  updatePaymentStatus: async function ({id,data,auth}) {
    try {
      const response = await Api.put({url:`/api/v1/orders/paymentStatus/${id}`,data,auth});
      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {
      throw error;
    }
  }
};
