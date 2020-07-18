
export default {
  namespaced: true,
  state: {
    categories: []
  },
  mutations: {
    SET_CATEGORIES: (state, categories) => {
      state.categories = categories;
    },
    ADD_CATEGORY: (state, category) => {
      state.categories.push(category);
    },
    REMOVE_CATEGORY: (state, removedCategoryId) => {
      state.categories = state.categories.filter(category => category.id !== removedCategoryId);
    },
    EDIT_CATEGORY: (state, editedCat) => {
      state.categories = state.categories.map(category => {
        return category.id === editedCat.id ? editedCat : category});
    },
  },
  actions: {
    async fetchCategories({ commit }) {
      try {
        const response = await this.$axios.get(`/categories`);
        commit("SET_CATEGORIES", response.data.reverse());
        return response;
      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    },
    async addCat({ commit }, newCat){
      try {
        const {data: category} = await this.$axios.post('/categories', newCat);
        commit("ADD_CATEGORY", category);
        return response;
      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    },
    async removeCat({ commit }, CatId){
      try {
        const response = await this.$axios.delete(`/categories/${CatId}`);
        commit("REMOVE_CATEGORY", CatId);
        return response;
      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    },
    async modeCat({ commit }, category){
      try {
        const response = await this.$axios.post(`/categories/${category.id}`);
        commit("EDIT_CATEGORY", category);
        return response;
      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    }
  }
};