<template lang="pug">
  div
    section.work
      .container.work__container
        section_header(
          section_header="Блок Работы"
        )
        .workadd
          form.workadd-form
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
                  img(src="../../../images/content/work_mod.png").workmod__head-pict
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
