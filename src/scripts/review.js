import Vue from 'vue';
import Flickity from 'vue-flickity';

new Vue({
  el: "#review-component",
  template: "#reviews",
  components: {
    Flickity
  },
 
  data() {
    return {
      reviews:[],
      strafe:0,
      flickityOptions: {
      groupCells: 2,
      prevNextButtons: false,
      pageDots: false,
      wrapAround: false,
      freeScroll: false
      }
    }
  },
 
  methods: {
    images(array) {
      return array.map(item =>{
        const requiredPic = require(`../images/content/${item["author-pic"]}`);
        item["author-pic"] = requiredPic;

        return item;
      })
    },
    slide(direction){
      switch (direction){
        case'next':
        this.$refs.flickity.next();
        break;
  
      case 'previous':
        this.$refs.flickity.previous();
        break;
      }
    },
  },
  created(){
    const reviews = require("../data/reviews.json");
    this.reviews = this.images(reviews);
  }
});