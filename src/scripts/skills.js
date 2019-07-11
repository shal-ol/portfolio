import Vue from 'vue';

const skill = {
  template: "#skills-circle",
  props:{
    skillName: String,
    skillPersent: Number
  },
  mounted() {
    const circle = this.$refs['circle'];
    const dashArray = parseInt(
      getComputedStyle(circle).getPropertyValue("stroke-dasharray")
    );
    const percent = (dashArray / 100) * (100 - this.skillPersent);
    circle.style.strokeDashoffset = percent;
  }
}

const row = {
  template: "#skills-block",
  props:{
    skill: Object
  },
  components: {
    skill
  }
}

new Vue ({
  el: "#skills-container",
  template: "#skills-list",
  components: {
    row
  },
  data() {
    return{
      skills: []
    }
  },
  created() {
    const data = require('../data/skills.json');
    this.skills = data;
  }
})