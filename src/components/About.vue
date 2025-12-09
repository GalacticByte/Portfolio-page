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
          Jestem front&#8209;end developerem z&nbsp;ponad trzyletnim doświadczeniem w&nbsp;tworzeniu
          stron internetowych i&nbsp;lekkich aplikacji webowych. Łączę solidne podejście
          do&nbsp;UI&nbsp;z&nbsp;praktyczną znajomością pracy w&nbsp;CMS&#8209;ach
          oraz&nbsp;wykorzystaniem automatyzacji w&nbsp;chmurze.
        </p>
        <p class="about-section__paragraph font-p">
          Realizuję projekty o&nbsp;różnym stopniu złożoności &#8209;&nbsp;od&nbsp;prostych layoutów
          po&nbsp;bardziej rozbudowane serwisy i&nbsp;autorskie rozwiązania. Chętnie sięgam
          po&nbsp;nowe narzędzia i&nbsp;frameworki, aby&nbsp;stale rozwijać swoje umiejętności
          i&nbsp;poszerzać horyzonty.
        </p>
        <p class="about-section__paragraph font-p">
          Stawiam na czytelny kod, wydajność i&nbsp;dobrą organizację procesu (również z&nbsp;pomocą
          AI), dzięki czemu tworzone przeze mnie strony są&nbsp;funkcjonalne, szybkie i&nbsp;łatwe
          w&nbsp;utrzymaniu.
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
