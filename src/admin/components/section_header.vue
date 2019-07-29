<template lang="pug">
  .section__header {{section_header}}
</template>

<script>
export default {
  props:['section_header']
}
</script>


<style lang="postcss" scoped>
  .section__header{
    color: #414c63;
    font-size: 21px;
    font-weight: 700;
    text-align: start;
    margin-right: 2rem;
  }
</style>
