<template lang="pug">
  header.header
    .container.header__container
      .header__block
        .header__block-photo
          img(src="../../images/content/user.jpg").header__block-img
        .header__block-name Ольга Арсеньева
        .header__block-title Панель администрирования
      a.header__logout(href="#") Выход
</template>


<style lang="postcss" scoped>
  .header{
    color: #fff;
    background-color: #424267;
    display:flex;  
    &__container{
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 5.4rem;
    }
    &__block{
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    &__block-name{
      font-size: 18px;
      font-weight: 800;
      margin-right: 2rem;
    }
    &__block-img{
      height: 3rem;
      width: 3rem;
      border-radius: 50%;
      object-fit: cover;
    }
    &__block-photo{
      margin-right: 1.5rem;
    }
  }
</style>
