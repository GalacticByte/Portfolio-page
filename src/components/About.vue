<template>
  <section id="about" class="container about">
    <div class="row about__header">
      <div class="col-12">
        <h2 class="mt-5 mb-5 font-h2 d-flex justify-content-center about__headline">O mnie</h2>
      </div>
    </div>
    <div class="row mt-5 mb-5 justify-content-center">
      <div class="col-lg-10 about__content text-center">
        <p class="font-p">
          Jestem front&#8209;end developerem z&nbsp;ponad trzyletnim doświadczeniem. W&nbsp;pracy
          łączę solidne podejście do&nbsp;tworzenia interfejsów z&nbsp;umiejętnością pracy
          w&nbsp;systemach CMS oraz&nbsp;automatyzacjami w&nbsp;chmurze.
        </p>
        <p class="about-section__paragraph font-p">
          Realizuję projekty różnej skali &#8209;&nbsp;od prostych landing page’y, przez rozbudowane
          witryny, po&nbsp;autorskie motywy. Chętnie eksperymentuję z&nbsp;nowymi technologiami,
          aby&nbsp;stale rozwijać swoje umiejętności i&nbsp;poszerzać horyzonty w&nbsp;web
          developmentcie.
        </p>
        <p class="about-section__paragraph font-p">
          Dbam o&nbsp;czytelny kod, wydajność i&nbsp;optymalizację procesów (w&nbsp;tym
          z&nbsp;pomocą AI), tak aby tworzone strony i&nbsp;aplikacje były funkcjonalne, przyjazne
          dla użytkownika i&nbsp;łatwe w&nbsp;utrzymaniu.
        </p>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'AboutComponent',
}
</script>

<style lang="scss" scoped>
.about__headline {
  text-transform: uppercase;
}
</style>
