<template lang="pug">
  .maincontent
    appheader
    breadcrumbs
    router-view
</template>
<script>
import appheader from './components/appheader'
import breadcrumbs from './components/breadcrumbs'


export default {
  components:{
    appheader,
    breadcrumbs
  }
}
</script>


<style lang="postcss">
@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800');
@import "normalize.css";
@import "../styles/mixins.pcss";
@import "../styles/layout/base.pcss";

.admin-wrapper{

.blocked {
  opacity: .5;
  filter: grayscale(100%);
  pointer-events: none;
  user-select: none;
}

  .about{
    &__block{
      display: flex;
      justify-content: flex-start;
      margin-bottom: 4rem;
    }
    &__btn-add{
      color: #383bcf;
      font-weight: 600;
      background-color: transparent;
      outline: none;
      justify-content: center;
      align-items: center;
      &::before{
        content: "+";
        display: inline-block;
        color: #fff;
        background: linear-gradient(90deg, #1955e0, #383bcf);
        border-radius: 50%;
        width: 1.2rem;
        height: 1.2rem;
        margin-right: 0.5rem;
      }
    }
    &__content{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 2rem;
  }
    &__item{
      margin-bottom: 2rem;
    }
  }
  .text-field{
    font-size: 16px;
    border-bottom: solid 1px #000;
    border-right: none;
    border-left: none;
    border-top: none;
    outline: none;
    margin-bottom: 1rem;
    height: 2rem;
    font-weight: 600;
    color: #414c63;
    &::placeholder{
      font-size: 16px;
      color: #c3c6cb;
      font-weight: 600;
    }
  }
  .skill{
    box-shadow: 4.096px 2.868px 20px 0px rgba(0, 0, 0, 0.07);
    background-color: #fff;
    padding: 2rem;
    width: 34.8125rem;
    height: 26.1875rem;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    &__category{
      border-bottom: solid 1px #dedee0;
      height: 5rem;
      width: 90%;
      display: flex;
        &-input{
          width: 59%;
          font-size: 18px;
          &::placeholder{
            font-size: 18px;
          }
        }
      }
    &__item{
    display: grid;
    grid-template-columns: 13fr 4fr 1fr 1fr;
    color: #414c63;
    margin-bottom: 1.5rem;    
    &-name{
    }
    &-persent::after{ 
      content: '%';
    }
    }
    &__add{
      display: flex;
      justify-content: flex-end;
      &-input{
      width: 47%;
      margin-right: 1rem;
    }
    &-persent{
      width: 15%;
      margin-right: 1rem;
    }
    &-btn{
      width: 9%;
    }
    }
  }
  .work__container{
    display: flex;
    flex-direction: column;
  }
  .button__submit{
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    text-transform: uppercase;
    border: none;
    padding: 1.3rem 2.4rem;
    outline: none;
    border-radius: 2rem;
    background: linear-gradient(90deg, #1459e2, #3f35cb);
  }
  .button__reset{
    color: #383bcf;
    font-size: 18px;
    font-weight: bold; 
    border: none;
    padding: 1.3rem 2.4rem;
    outline: none;
    border-radius: 2rem;
    background: none;
  }
  .text-area{
    border:solid 2px #d9dbe0;
    resize: none;
    font-size: 16px;
    font-weight: 600;
    color: #414c63;
    &::placeholder{
      font-size: 16px;
      color: #c3c6cb;
      font-weight: 600;
    }
  }

  .form__header{
    font-size: 18px;
    font-weight: bold;
    border-bottom: solid 1px #dedee0;
    margin-bottom: 3rem;
    padding-bottom: 1rem;
  }
  .workadd{
    display: flex;
    justify-content: center;
    &-form{
      box-shadow: 4.096px 2.868px 20px 0px rgba(0, 0, 0, 0.07);
      width: 1080px;
      height: 775px;
      padding: 3rem;
      margin-bottom: 3rem;
      &__content{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 2rem;
        height: 100%;
      }
      &__file{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #dee4ed;
        height: 40%;
        width: 90%;
        background-image: url("data:image/svg+xml;utf8,<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill: none; stroke: grey; stroke-width: 4; stroke-dasharray: 8 5'/></svg>");
        &-text{
          width: 50%;
          align-text: center;
          color: #8f98a8;
        }
        &-field{
          width: 0;
        }
      }
      &__block{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
          &-name, &-link, &-descr, &-tag{
            width: 100%;
            margin-bottom: 5rem;
            color:#414c63;
          }
        }
      }
    }
  .worklist{
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    &__item{
      box-shadow: 4.096px 2.868px 20px 0px rgba(0, 0, 0, 0.07);
      width: 340px;
      height: 556px;
    }
  }
  .button__add{
    background: linear-gradient( 90deg, rgb(0,106,237) 0%, rgb(32,80,220) 48%, rgb(63,53,203) 100%);
    width: 340px;
    height: 556px;
    color: #fff;
    font-size: 18px;
    font-weight: bold; 
    border: none;
    outline: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &-circle{
      fill: transparent;
      stroke: white;
      stroke-width: 2px;
    }
    &-pict{
      height: 6.25rem;
      width: 6.25rem;
      position: relative;
      margin-bottom: 2rem;
    }
    &-svg{
      position: absolute;
      height: 100px;
      width: 100px;
      top: 0;
      right: 0;
    }
    &-plus{
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      font-size: 3rem;
      font-weight: 300;
    }
  }
  .workmod{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    &__header{
      position: relative;
    }
    &__list-tag{
      display: flex;
      justify-content: flex-end;
      position: absolute;
      bottom: 1rem;
      right: 0.5rem;
    }
    &__title{
      border: none;
      margin-bottom: 0rem;
    }
    &__content{
      padding: 2rem;
    }
    &__descr, &__link{
      margin-bottom: 1rem;
    }
    &__link{
      color: #383bcf;
      text-decoration: underline;
    }
    &-btns{
      display: flex;
      justify-content: space-between;
      &__del-btn, &__mod-btn{
        border: none;
        outline: none;
        background-color: #fff;
      }
    }
  }
  .tag{
    width: 25%;
    background-color:#f1f5f9;
    border-radius: 20px;
    padding: 0.1rem 0.7rem;
    margin-right: 20px;
    color: #6d7680;
  }
  .reviewadd{
    &-form{
      box-shadow: 4.096px 2.868px 20px 0px rgba(0, 0, 0, 0.07);
      width: 1080px;
      height: 519px;
      padding: 3rem;
      &__add-photo{
        color: #383bcf;
        background: none;
        font-size: 1.125rem;
        font-weight: 700;
        border: none;
        padding: 1.3rem 2.4rem;
        outline: none;
      }    
      &__content{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 2rem;
      }
      &__block{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
      &__row{
        display: flex;
        justify-content: space-between;
      }
      &__file{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #fff;
        height: 100%;
        width: 90%;
        &-pic{
          width: 200px;
          height: 200px;
          background-color: #dee4ed;
          border-radius: 50%;
        }
        &-field{
          width: 0;
        }
      }
    }
  }
  .reviewlist{
    .button__add{
      height: 380px;
    }
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    &__list{

    }
    &__item{
      box-shadow: 4.096px 2.868px 20px 0px rgba(0, 0, 0, 0.07);
      width: 340px;
      height: 380px;
      display: flex;
    }
  }
  .reviewmod{
      display: flex;
      justify-content: center;    
      flex-direction: column;
      align-items: center;
    &__header{
      display: flex;
      justify-content: space-between;
      width: 85%;
      &-descr__title{
        color: #a0a5b1;
      }
    }
    &-btns{
      display: flex;
      justify-content: space-between;
      &__del-btn, &__mod-btn{
        border: none;
        outline: none;
        background-color: #fff;
      }
    }
    &__content{
      width: 85%;
    }
    &__descr{
      color: #7a8191;
      font-weight: 600;
      margin-bottom: 2rem;
    }
  }
}
</style>
