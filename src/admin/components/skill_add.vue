<template lang="pug">
  .about__form.skill
    form.skill__category
      input(
        type="text" 
        placeholder="Название новой группы" 
        v-model="category.title"
        ).skill__category-input.text-field
      .skill__category-btn
        button.skill__category-btn__submit(
          @click.prevent='addNewCat'
        ) Добавить
        button.skill__category-btn__del(type="reset"
        ) Очистить
    ul.skill__list
      skills_item
    .skill__add
      input(type="text" placeholder="Новый навык").skill__add-input.text-field
      input(type="text" placeholder="100 %").skill__add-persent.text-field
      button.skill__add-btn
</template>

<script>
import SimpleVueValidator from 'simple-vue-validator';
import { mapActions, mapState } from "vuex";
import $axios from "../requests"

export default {
  mixins: [SimpleVueValidator.mixin],
   props: {
    skills: Array,
    CatModOn: Boolean
  },
  data() {
    return {
      category:{
        title:''
      },

    }
      
  },
  components:{
    skills_item: () => import('./skills_item.vue')
  },
  methods:{
    ...mapActions('categories', ['addCat']),
    async addNewCat(){
      try{
      await this.addCat(this.category);
      CatModOn = false;
      } catch (error) {
        error.response.data.error || error.response.data.message
      ;
    } finally {

    }
  }
}
}
</script>
