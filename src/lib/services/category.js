import { Api } from "../helper";

export const category = {
  getAllCategories: async function ({auth}) {
    try {
      const response = await Api.get({url:`/api/v1/category`,auth});
      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {
      throw error;
    }
  }
};
