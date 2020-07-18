<template lang="pug">
  div
    section.review
      .container.review__container
        section_header(
          section_header="Блок Отзывы"
        )
        .reviewadd
          .reviewadd-form
            .form__header Добавление отзыва
            form.reviewadd-form__content
              label.reviewadd-form__file
                input(type="file").reviewadd-form__file-field
                svg(class="reviewadd-form__file-pic")
                  use(xlink:href='../../../images/icons/man.svg')
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
                  img(src="../../../images/content/adm_rev_vladimir.png").reviewmod__head-pict
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

<script>
import appheader from '../appheader'
import breadcrumbs from '../breadcrumbs'
import section_header from '../section_header'

export default {
  components:{
  appheader,
  breadcrumbs,
  section_header
  }
}
</script>
