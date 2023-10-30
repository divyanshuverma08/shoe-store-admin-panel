import { Api } from "../helper";

export const dashboard = {
  getDashboardDetails: async function ({auth}) {
    try {
      const response = await Api.get({url:`/api/v1/dashboard`,auth});
      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {
      throw error;
    }
  },
  getBestSellers: async function ({auth}) {
    try {
      const response = await Api.get({url:`/api/v1/dashboard/bestSellers`,auth});
      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {
      throw error;
    }
  },
  getOrdersByYear: async function ({auth}) {
    try {
      const response = await Api.get({url:`/api/v1/dashboard/orders/year`,auth});
      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {
      throw error;
    }
  },
  getOrdersByMonth: async function ({auth}) {
    try {
      const response = await Api.get({url:`/api/v1/dashboard/orders/month`,auth});
      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {
      throw error;
    }
  },
};
