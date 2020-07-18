<template lang="pug">
  div
    section.about
      .container.about__container
        .about__block
          section_header(
            section_header="Блок Обо мне"
          )
          button.about__btn-add(@click="CatAddOn = true") Добавить группу
        ul.about__content
          skill_add(v-if="CatAddOn")
          li.about__item(
            v-for="category in categories"
            )
            skills_group(
              :category="category"
            )
</template>

<script>
import section_header from '../section_header'
import skills_group from '../skills-group.vue'
import skill_add from '../skill_add.vue'
import SimpleVueValidator from 'simple-vue-validator'
import {mapActions, mapState} from 'vuex'


export default {
  mixins: [SimpleVueValidator.mixin],
  props:{
    category: Object
  },
  components:{    
    skills_group,
    skill_add,
    section_header
  },
  data() {
    return{
      CatAddOn: false
    }
    
  },
  computed: {
    ...mapState("categories",{
      categories: state => state.categories
    })
  },
  methods: {
    ...mapActions('categories', ['fetchCategories'])
  },
  created() {
    this.fetchCategories();
  }  
}
</script>
