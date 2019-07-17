<template lang="pug">
  .maincontent
    header.admin-header
      .container.admin-header__container
        .admin-header__block
          .admin-header__block-photo
            img(src="../images/content/user.jpg").admin-header__block-img
          .admin-header__block-name Ольга Арсеньева
          .admin-header__block-title Панель администрирования
        a.admin-header__logout(href="#") Выход
    section.admin-about
      .container.admin-about__container
        ul.breadcrumbs
          - const arr = ["Обо мне", "Работы", "Отзывы"]
            each val in arr
              li.breadcrumbs__item #{val}
        .section__header Блок "Обо мне"
        ul.admin-about__content
          li.admin-about__item
            .about__form
              .about__form-name
                input(type="text" placeholder="Название новой группы" value="").about__form-name__input.text-field
                .about__form-name__btn
                  button.about__form-name__btnsubmit
                  button.about__form-name__btndel
              ul.about__form-list
                //- li.about__form-list__item.skill
                //-   .skill__name terminal
                //-   .skill__persent 100
                //-   button.skill__mode
                //-   button.skill__del
                //- li.about__form-list__item.skill
                //-   .skill__name sssssss
                //-   .skill__persent 80
                //-   button.skill__mode
                //-   button.skill__del
                //- li.about__form-list__item.skill
                //-   .skill__name sggdgd
                //-   .skill__persent 100
                //-   button.skill__mode
                //-   button.skill__del
                //- li.about__form-list__item.skill
                //-   .skill__name Git
                //-   .skill__persent 100
                //-   button.skill__mod
                //-   button.skill__del
              .about__form-newskill.newskill
                input(type="text" placeholder="Новый навык").newskill__input.text-field
                input(type="text" placeholder="100 %").newskill__persent.text-field
                button.newskill__add
          li.admin-about__item
            .about__form
              .about__form-name
                input(type="text" placeholder="Название новой группы" value="Workflow").about__form-name__input.text-field
                .about__form-name__btn
                  button.about__form-name__btn-submit
                  button.about__form-name__btn-del
              ul.about__form-list
                li.about__form-list__item.skill
                  .skill__name terminal
                  .skill__persent 100
                  button.skill__mode
                  button.skill__del
                li.about__form-list__item.skill
                  .skill__name sssssss
                  .skill__persent 80
                  button.skill__mode
                  button.skill__del
                li.about__form-list__item.skill
                  .skill__name sggdgd
                  .skill__persent 100
                  button.skill__mode
                  button.skill__del
                li.about__form-list__item.skill
                  .skill__name Git
                  .skill__persent 100
                  button.skill__mod
                  button.skill__del
              .about__form-newskill
                input(type="text" placeholder="Новый навык").newskill__input.text-field
                input(type="text" placeholder="100 %").newskill__persent.text-field
                button.newskill__add
    section.work
      .container.work__container
        .workadd
          .workadd-form
            .form__header Добавление работы
            form.workadd-form__content
              label.workadd-form__file
                .workadd-form__file-text Перетащите или загрузите для загрузки изображения
                input(type="file").workadd-form__file-field
                button.workadd-form__controls-add.button__submit Загрузить
              .workadd-form__block
                input(type="text" placeholder="Название").workadd-form__block-name.text-field
                input(type="text" placeholder="ССылка").workadd-form__block-link.text-field
                textarea(placeholder="Описание" rows="4").workadd-form__block-descr.text-area
                input(type="text" placeholder="Добавление тега").workadd-form__block-tag.text-field
                .workadd-form__controls
                  button(type="reset").workadd-form__controls-reset.button__reset Отмена
                  button.workadd-form__controls-add.button__submit Загрузить
        .worklist
          label.button__add-label.worklist__add-label
            button.button__add
              .button__add-pict
                svg(class="button__add-svg" viewbox="0 0 100 100" )
                  circle(cx="50" cy="50" r="40" class="button__add-circle")
                .button__add-plus +
              .button__add-text Добавить работу
          ul.worklist__list
            li.worklist__item
              form.workmod
                .workmod__header
                  img(src="../images/content/work_mod.png").workmod__head-pict
                  ul.workmod__list-tag
                    li.tag HTML
                    li.tag HTML
                    li.tag HTML
                .workmod__content
                  .workmod__title.form__header Сайт школы образования
                  .workmod__descr Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                  .workmod__link http://loftschool.ru
                  .workmod-btns.btns__block
                    label.workmod-btns__mod
                      button.workmod-btns__mod-btn Править
                      .workmod-btns__mod-pic
                    label.workmod-btns__del
                      button.workmod-btns__del-btn Удалить
                      .workmod-btns__del-pic
    section.review
      .container.review__container
        .reviewadd
          .reviewadd-form
            .form__header Добавление отзыва
            form.reviewadd-form__content
              label.reviewadd-form__file
                input(type="file").reviewadd-form__file-field
                svg(class="reviewadd-form__file-pic")
                  use(xlink:href='../images/icons/man.svg')
                button.reviewadd-form__add-photo Добавить фото
              .reviewadd-form__block
                .reviewadd-form__row
                  input(type="text" placeholder="Имя автора").reviewadd-form__block-name.text-field
                  input(type="text" placeholder="Титул автора").reviewadd-form__block-title.text-field
                textarea(placeholder="Отзыв" rows="4").reviewadd-form__block-descr.text-area
                .reviewadd-form__controls
                  button(type="reset").reviewadd-form__controls-reset.button__reset Отмена
                  button.reviewadd-form__controls-add.button__submit Сохранить
        .reviewlist
          label.button__add-label.reviewlist__add-label
            button.button__add
              .button__add-pict
                svg(class="button__add-svg" viewbox="0 0 100 100" )
                  circle(cx="50" cy="50" r="40" class="button__add-circle")
                .button__add-plus +
              .button__add-text Добавить Отзыв
          ul.reviewlist__list
            li.reviewlist__item
              form.reviewmod
                .reviewmod__header.form__header
                  img(src="../images/content/adm_rev_vladimir.png").reviewmod__head-pict
                  .reviewmod__header-descr
                    .reviewmod__header-descr__name Владимир Сабанцев
                    .reviewmod__header-descr__title Преподаватель
                .reviewmod__content
                  .reviewmod__descr Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                  .reviewmod-btns
                    label.reviewmod-btns__mod.btns__block
                      button.reviewmod-btns__mod-btn Править
                      .reviewmod-btns__mod-pic
                    label.reviewmod-btns__del
                      button.reviewmod-btns__del-btn Удалить
                      .reviewmod-btns__del-pic





</template>
<style lang="postcss">
@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800');
@import "normalize.css";
@import "../styles/mixins.pcss";
@import "../styles/layout/base.pcss";

.admin-wrapper{
  .admin-header{
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
  .breadcrumbs{
    display: flex;
    &__item{
      padding: 2rem;
      &.active{
        color:#383bcf;
        font-weight: 600;
        border-bottom: 2px solid #383bcf;
      }
    }
  }
  .section__header{
    color: #414c63;
    font-size: 21px;
    font-weight: 700;
    margin-bottom: 4rem;
  }
  .admin-about{
    &__content{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 2rem;
  }
    &__item{
      margin-bottom: 2rem;
    }
  }
  .about__form {
    box-shadow: 4.096px 2.868px 20px 0px rgba(0, 0, 0, 0.07);
    background-color: #fff;
    padding: 2rem;
    width: 34.8125rem;
    height: 26.1875rem;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    &-name{
      border-bottom: solid 1px #dedee0;
      height: 5rem;
      width: 90%;
      display: flex;
      &__input{
        width: 59%;
        font-size: 18px;
        &::placeholder{
          font-size: 18px;
        }
      }
    }
    &-newskill{
      display: flex;
      justify-content: flex-end;
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
    display: grid;
    grid-template-columns: 13fr 4fr 1fr 1fr;
    color: #414c63;
    margin-bottom: 1.5rem;
    &__name{
    }
    &__persent::after{ 
      content: '%';
    }
  }
  .newskill{
    &__input{
      width: 47%;
      margin-right: 1rem;
    }
    &__persent{
      width: 15%;
      margin-right: 1rem;
    }
    &__add{
      width: 9%;
    }
  }
  .work__container{
    display: flex;
    flex-direction: column;
    align-items: center;
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
  .workadd-form{
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
