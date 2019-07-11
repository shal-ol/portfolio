import Vue from 'vue';

const imgmin = {
  template: "#slider-imgmin",
  props: {
    works: Array,
    currentWork: Object
  }
}

const btns = {
  template: "#slider-btns"
}

const display = {
  template: "#slider-display",
  props: {
    works: Array,
    currentWork: Object,
    currentIndex: Number
  },
  components: {
		imgmin, btns
  }
}

const tags = {
  template: "#slider-tags",
  props: {
    tags: Array
  }
}

const info = {
  template: "#slider-info",
  components: {
		tags
  },
  props: {
    currentWork: Object
  },
  computed:{
    tagsArray(){
      return this.currentWork.skills.split(', ');
    }
  }
}

new Vue({
  el: "#slider-component",
  template: "#slider-container",
  components: {
    display, info
  },
  data(){
    return{
      works: [],
      currentIndex: 0
    };
  },
  computed:{
    currentWork(){
      return this.works[this.currentIndex];
    }
  },
  methods: {
    makeImg(data){
      return data.map(item=>{
        const requirePic = require(`../images/content/${item.photo}`);
        item.photo = requirePic;

        return item
      });
    },
    handleSlide(direction){
      switch(direction){
        case "next":
          this.currentIndex++;
          break;
        case "pref":
            this.currentIndex--;
            break;
      }
    }

  },
  created(){
    const data = require('../data/works.json');

    this.works = this.makeImg(data);
  }
  })