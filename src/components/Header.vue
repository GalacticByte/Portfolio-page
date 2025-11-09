<template>
  <section class="home" role="region" aria-labelledby="home-title">
    <div class="row">
      <div class="col-12 d-flex flex-column justify-content-center align-items-center home__hero">
        <h1 id="home-title" class="font-h1 home__title">front&nbsp;end developer</h1>
        <p class="font-p-bigger home__subtitle">
          Przekształcam pomysły w&nbsp;strony i&nbsp;aplikacje, które po&nbsp;prostu działają
        </p>

        <a
          v-smooth-scroll
          class="btn btn-main font-p mt-5"
          href="#contact"
          role="button"
          aria-label="Skontaktuj się ze mną"
        >
          <span>Skontaktuj się ze mną</span>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeaderComponent',
}
</script>

<style lang="scss">
@use '../scss/mixins/mixin_app.scss' as *;

.home {
  position: relative;
  overflow: hidden;

  &::after,
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgb(206, 208, 194), rgb(255, 255, 254));
  }

  &::after {
    clip-path: circle(40% at 10% 10%);
  }

  &::before {
    clip-path: circle(20% at right 65%);
  }

  &__hero {
    position: relative;
    z-index: 2;
    min-height: 55rem;
    text-align: center;
  }

  &__title {
    display: block;
    text-transform: uppercase;
    font-weight: 700;
    text-align: center;
    color: rgb(255, 252, 228);
    background: linear-gradient(
      to right,
      rgb(89, 214, 17) 10%,
      rgb(194, 211, 7) 50%,
      rgb(187, 186, 150) 60%
    );
    background-size: 200% auto;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: textclip 4s linear infinite;
  }

  &__subtitle {
    font-weight: 600;
    color: rgb(89, 214, 17);
    margin-top: 1rem;
  }
}

@keyframes textclip {
  to {
    background-position: 200% center;
  }
}

/* --- Responsive --- */

@media (max-width: 768px) {
  .home {
    &__hero {
      min-height: 30rem;
    }
  }
}
</style>
