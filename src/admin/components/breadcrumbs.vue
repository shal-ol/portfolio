<template lang="pug">
  ul.breadcrumbs
    //- - const arr = ["Обо мне", "Работы", "Отзывы"]
    //-   each val in arr
    //-     li.breadcrumbs__item #{val}
    li.breadcrumbs__item
      router-link(
        to= "/admin"
        tag="button"
        exact-active-class="active"
      ) Обо мне
    li.breadcrumbs__item
      router-link(
        to= "/admin/works"
        tag="button"
        exact-active-class="active"
      ) Работы
    li.breadcrumbs__item
      router-link(
        to= "/admin/reviews"
        tag="button"
        exact-active-class="active"
      ) Отзывы
</template>

<style lang="postcss" scoped>
  .breadcrumbs{
    &__item{
      margin-right: 2rem;
    }
    margin-bottom: 4rem;
    button{
      background-color: transparent;
      border: none;
      outline: none;
      font-weight: 600;
      padding: 2rem;
      border-bottom: 2px solid transparent;
      &.active, &:hover{
        color:#383bcf;
        border-bottom: 2px solid #383bcf;
      }
      .active{
        color:#383bcf;
        border-bottom: 2px solid #383bcf;
      }      
    }
    display: flex;
  }
</style>

