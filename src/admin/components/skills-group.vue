<template lang="pug">
  .about__form.skill
    .skill__category(v-if="catNameEditON")
      input(v-if="catNameEditON" type="text" placeholder="Название новой группы" v-model="editedCategory.category").skill__category-input.text-field
      .skill__category-btn
        button.skill__category-btn__submit(
          @click.prevent = 'modExCat'
        ) Сохранить
        button.skill__category-btn__del(
          @click = "catNameEditON=false"
        ) Отмена
    .skill__category(v-else)
      h2.skill__category-input.text-field {{category.category}}
      .skill__category-btn
        button.skill__category-btn__submit(

          @click = "catNameEditON=true"
        ) Изменить
        button.skill__category-btn__del(
          @click.prevent = 'removeExCat'
        ) Удалить
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

export default {
  mixins: [SimpleVueValidator.mixin],
   props: {
    category: Object,
    skills: Array,
  },
  data() {
    return {
      editedCategory: {...this.category},
      catNameEditON: false
    }
  },
  components:{
    skills_item: () => import('./skills_item.vue')
  },
  methods: {
    ...mapActions('categories', ['removeCat'], ['modeCat']),
    async removeExCat(){
      try{
      await this.removeCat(this.category.id);
      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
      );
    }
  },
    async modExCat(){
      try{
      await this.modeCat(this.editedCategory);
      catNameEditON=false
      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
      );
    }
  }
  }
  
}
</script>
