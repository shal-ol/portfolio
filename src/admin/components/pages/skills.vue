<template lang="pug">
  div
    section.about
      .container.about__container
        .about__block
          section_header(
            section_header="Блок Обо мне"
          )
          button.about__btn-add Добавить группу
        ul.about__content(
          v-for="category in categories"
        )
            li.about__item
              skills_group(
                :category="category"
              )
</template>

<script>
import section_header from '../section_header'
import skills_group from '../skills-group.vue'
import SimpleVueValidator from 'simple-vue-validator'
import {mapAction, mapState} from 'vuex'


export default {
  mixins: [SimpleVueValidator.mixin],
  props:{
    category: Object
  },
  components:{    
    skills_group,
    section_header
  },
  computed: {
    ...mapState("categories",{
      categories: state => state.categories
    })
  },
  methods: {
    ...mapAction('categories', ["fetchCategories"])
  },
  created() {
    this.fetchCategories();
  }  
}
</script>
