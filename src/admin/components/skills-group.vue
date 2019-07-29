<template lang="pug">
  .about__form.skill
    .skill__category
      input(type="text" placeholder="Название новой группы" :value="category").skill__category-input.text-field
      .skill__category-btn
        button.skill__category-btn__submit
        button.skill__category-btn__del
    ul.skill__list
      skills_item
    .skill__add
      input(type="text" placeholder="Новый навык").skill__add-input.text-field
      input(type="text" placeholder="100 %").skill__add-persent.text-field
      button.skill__add-btn
</template>

<script>
import SimpleVueValidator from 'simple-vue-validator';
import { mapActions } from "vuex";

export default {
  mixins: [SimpleVueValidator.mixin],
   props: {
    category: Object,
    skills: Array,
  },
  data() {
    return {
    }
  },
  components:{
    skills_item: () => import('./skills_item.vue')
  }
  
}
</script>
