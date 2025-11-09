<template>
  <section id="contact" class="container contact">
    <div class="row contact__header">
      <div class="col-12">
        <h2 class="mb-3 mt-5 font-h2 d-flex justify-content-center contact__headline">
          Chcesz podjąć współpracę?
        </h2>
      </div>
    </div>
    <div class="row justify-content-center contact__content">
      <div class="col-12 d-flex flex-column align-items-center justify-content-center">
        <p class="font-p text-center">Jeśli chcesz mnie zatrudnić, pisz na adres</p>
        <a class="btn btn-main font-p mt-3" href="mailto:krzysztof.uminski1@gmail.com" role="button"
          >krzysztof.uminski1@gmail.com</a
        >
      </div>
    </div>
    <div class="row justify-content-center contact__footer">
      <div class="col-12 d-flex justify-content-center align-items-center gap-3">
        <p class="font-p mb-0 contact__name">Krzysztof Umiński</p>
        <div class="d-flex contact__socials">
          <a
            class="mx-2 contact-section__social-link"
            href="https://github.com/GalacticByte"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Krzysztof Umiński"
          >
            <img class="contact__social-icon" src="../assets/img/icons/github.svg" alt="GitHub" />
          </a>
          <a
            class="mx-2 contact-section__social-link"
            href="https://www.linkedin.com/in/krzysztof-umi%C5%84ski/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Krzysztof Umiński"
          >
            <img
              class="contact__social-icon"
              src="../assets/img/icons/linkedin.svg"
              alt="LinkedIn"
            />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactComponent',
}
</script>

<style lang="scss" scoped>
@use '../scss/mixins/mixin_app.scss' as *;

.contact {
  margin-bottom: 3rem;

  &__content {
    min-height: 40vh;
  }

  &__footer {
    margin-top: auto;
  }

  &__name {
    text-transform: uppercase;
    margin-bottom: 1rem;
    text-align: center;
  }

  &__headline {
    text-align: center;
    text-transform: uppercase;
  }

  &__social-icon {
    width: 100%;
    max-width: 2.2rem;
    height: 2.2rem;
  }
}
@media screen and (max-width: 768px) {
  .contact__social-icon {
    max-width: 1.8rem;
  }
}
</style>
