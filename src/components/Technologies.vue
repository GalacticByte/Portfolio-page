<template>
  <section id="technologies" class="px-2 technologies">
    <div class="row g-0 text-center technologies__header">
      <div class="col-12">
        <h2 class="mt-5 mb-5 d-flex justify-content-center technologies__headline font-h2">
          Technologie
        </h2>
      </div>
    </div>

    <div class="row justify-content-center gx-0 gy-5 mt-5 mb-5">
      <div
        v-for="(techs, category) in categorizedTechs"
        :key="category"
        class="technologies__category"
      >
        <h3 class="technologies__category-title mb-5">{{ category }}</h3>
        <div class="row gx-0 gy-5">
          <div
            v-for="tech in techs"
            :key="tech.id"
            class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6"
          >
            <div
              class="technologies__item d-flex flex-column align-items-center h-100"
              role="button"
              tabindex="0"
              :aria-label="tech.title"
            >
              <span v-if="tech.tooltip" class="technologies__highlight-label"></span>
              <img
                :src="tech.image"
                :class="tech.id === 9 ? 'technologies__image--pinia' : 'technologies__image'"
                :alt="tech.title"
              />
              <div class="technologies__info mt-auto">
                <p class="technologies__name font-p mb-0">{{ tech.title }}</p>
              </div>
              <div v-if="tech.tooltip" class="technologies__tooltip">{{ tech.tooltip }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
const images = import.meta.glob('@/assets/img/icons/*.svg', { eager: true })

export default {
  name: 'TechnologiesComponent',

  setup() {
    const categorizedTechs = {
      Frontend: [
        {
          id: 1,
          title: 'HTML',
          image: images['/src/assets/img/icons/html-icon.svg'].default,
        },
        {
          id: 2,
          title: 'CSS',
          image: images['/src/assets/img/icons/css-file-format.svg'].default,
        },
        {
          id: 3,
          title: 'Sass',
          image: images['/src/assets/img/icons/sass-icon.svg'].default,
        },
        {
          id: 4,
          title: 'Bootstrap',
          image: images['/src/assets/img/icons/bootstrap5-icon.svg'].default,
        },
        {
          id: 5,
          title: 'RWD',
          image: images['/src/assets/img/icons/phone-tablet-and-laptop.svg'].default,
        },
        {
          id: 6,
          title: 'JS',
          image: images['/src/assets/img/icons/js-icon.svg'].default,
        },
        {
          id: 7,
          title: 'jQuery',
          image: images['/src/assets/img/icons/jquery-icon.svg'].default,
        },
        {
          id: 8,
          title: 'Tailwind CSS',
          image: images['/src/assets/img/icons/tailwind-icon.svg'].default,
        },
        {
          id: 9,
          title: 'Vue.js',
          image: images['/src/assets/img/icons/vue-icon.svg'].default,
          tooltip: 'Używany w projektach prywatnych / hobbystycznych',
        },
      ],
      'Narzędzia i Bundlery': [
        {
          id: 10,
          title: 'Vite',
          image: images['/src/assets/img/icons/vitejs-logo.svg'].default,
        },
        {
          id: 11,
          title: 'Webpack',
          image: images['/src/assets/img/icons/webpack-icon.svg'].default,
        },
        {
          id: 12,
          title: 'Gulp',
          image: images['/src/assets/img/icons/gulp-icon.svg'].default,
        },
      ],
      'Kontrola wersji i współpraca': [
        {
          id: 13,
          title: 'GIT',
          image: images['/src/assets/img/icons/git-icon.svg'].default,
        },
        {
          id: 14,
          title: 'Gitlab',
          image: images['/src/assets/img/icons/gitlab-icon2.svg'].default,
        },
        {
          id: 15,
          title: 'Github',
          image: images['/src/assets/img/icons/github-icon.svg'].default,
        },
      ],
      'Backend i środowiska uruchomieniowe': [
        {
          id: 16,
          title: 'Node.js',
          image: images['/src/assets/img/icons/nodejs-icon.svg'].default,
        },
      ],
      CMS: [
        {
          id: 17,
          title: 'WordPress',
          image: images['/src/assets/img/icons/wordpress.svg'].default,
        },
      ],
      'Chmura i Integracje': [
        {
          id: 18,
          title: 'Cloudflare',
          image: images['/src/assets/img/icons/cloudflare-icon.svg'].default,
        },
        {
          id: 19,
          title: 'Workers',
          image: images['/src/assets/img/icons/cloudflare-workers-icon.svg'].default,
        },
        {
          id: 20,
          title: 'Google Apps Script',
          image: images['/src/assets/img/icons/google-apps-script-icon.svg'].default,
        },
      ],
    }

    return {
      categorizedTechs,
    }
  },
}
</script>

<style lang="scss" scoped>
@use '../scss/mixins/mixin_app.scss' as *;

.technologies {
  &__headline {
    text-transform: uppercase;
    font-weight: bold;
  }

  &__item {
    position: relative;
    cursor: pointer;
    transition:
      transform 0.3s ease-in-out,
      opacity 0.3s ease;

    &:hover,
    &:focus {
      .technologies__image {
        transform: translateY(0.4rem);
      }
      .technologies__name {
        transform: translateY(-0.3rem);
        opacity: 0.9;
      }

      .technologies__tooltip {
        opacity: 1;
      }
    }
  }

  &__image {
    width: 100%;
    max-width: 5rem;
    transition: transform 0.4s ease-in-out;
    margin-bottom: 1rem;

    &--pinia {
      max-width: 4rem;
    }
  }

  &__info {
    margin-top: auto;
  }

  &__name {
    transition:
      transform 0.4s ease-in-out,
      opacity 0.3s ease;
  }

  &__highlight-label {
    position: absolute;
    top: -5px;
    right: 15px;
    width: 10px;
    height: 10px;
    background-color: rgb(89, 214, 17);
    border-radius: 50%;
    border: 2px solid rgb(89, 214, 17);
  }

  &__tooltip {
    position: absolute;
    bottom: 105%;
    left: 50%;
    transform: translateX(-50%) translateY(-5px);
    background-color: rgb(187, 186, 150);
    color: #000;
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 0.8rem;
    text-align: center;
    white-space: normal;
    width: 100%;
    max-width: min(220px, calc(100vw - 1rem));
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    pointer-events: none;
  }
}
</style>
