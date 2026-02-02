<template>
  <section id="technologies" class="px-2 technologies" aria-labelledby="technologies-heading">
    <div class="row g-0 text-center technologies__header">
      <div class="col-12">
        <h2
          id="technologies-heading"
          class="mt-5 mb-5 d-flex justify-content-center technologies__headline font-h2"
        >
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
            <div class="technologies__item d-flex flex-column align-items-center h-100">
              <span v-if="tech.tooltip" class="technologies__highlight-label"></span>
              <img :src="tech.image" class="technologies__image" alt="" />
              <div class="technologies__info mt-auto">
                <p class="technologies__name font-p mb-0">{{ tech.title }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { addIds } from '@/utils/dataUtils'

const images = import.meta.glob('@/assets/img/icons/*.svg', { eager: true })

export default {
  name: 'TechnologiesComponent',

  setup() {
    const rawTechs = {
      Frontend: [
        {
          title: 'HTML',
          image: images['/src/assets/img/icons/html-icon.svg'].default,
        },
        {
          title: 'CSS',
          image: images['/src/assets/img/icons/css-file-format.svg'].default,
        },
        {
          title: 'Sass',
          image: images['/src/assets/img/icons/sass-icon.svg'].default,
        },
        {
          title: 'Bootstrap',
          image: images['/src/assets/img/icons/bootstrap5-icon.svg'].default,
        },
        {
          title: 'RWD',
          image: images['/src/assets/img/icons/phone-tablet-and-laptop.svg'].default,
        },
        {
          title: 'JS',
          image: images['/src/assets/img/icons/js-icon.svg'].default,
        },
        {
          title: 'jQuery',
          image: images['/src/assets/img/icons/jquery-icon.svg'].default,
        },
        {
          title: 'Tailwind CSS',
          image: images['/src/assets/img/icons/tailwind-icon.svg'].default,
        },
        {
          title: 'Vue.js',
          image: images['/src/assets/img/icons/vue-icon.svg'].default,
        },
        {
          title: 'React',
          image: images['/src/assets/img/icons/react.svg'].default,
        },
        {
          title: 'Typescript',
          image: images['/src/assets/img/icons/typescript-logo.svg'].default,
        },
      ],
      'Narzędzia i Bundlery': [
        {
          title: 'Vite',
          image: images['/src/assets/img/icons/vitejs-logo.svg'].default,
        },
        {
          title: 'Webpack',
          image: images['/src/assets/img/icons/webpack-icon.svg'].default,
        },
        {
          title: 'Gulp',
          image: images['/src/assets/img/icons/gulp-icon.svg'].default,
        },
      ],
      'Backend i środowiska uruchomieniowe': [
        {
          title: 'Node.js',
          image: images['/src/assets/img/icons/nodejs-icon.svg'].default,
        },
      ],
      CMS: [
        {
          title: 'WordPress',
          image: images['/src/assets/img/icons/wordpress.svg'].default,
        },
      ],
      'Chmura i Integracje': [
        {
          title: 'Cloudflare',
          image: images['/src/assets/img/icons/cloudflare-icon.svg'].default,
        },
        {
          title: 'Workers',
          image: images['/src/assets/img/icons/cloudflare-workers-icon.svg'].default,
        },
        {
          title: 'Google Apps Script',
          image: images['/src/assets/img/icons/google-apps-script-icon.svg'].default,
        },
      ],
      'Kontrola wersji': [
        {
          title: 'GIT',
          image: images['/src/assets/img/icons/git-icon.svg'].default,
        },
        {
          title: 'Gitlab',
          image: images['/src/assets/img/icons/gitlab-icon2.svg'].default,
        },
        {
          title: 'Github',
          image: images['/src/assets/img/icons/github-icon.svg'].default,
        },
      ],
    }

    let idCounter = 1
    const categorizedTechs = Object.fromEntries(
      Object.entries(rawTechs).map(([category, techs]) => {
        const techsWithIds = addIds(techs, idCounter)
        idCounter += techsWithIds.length
        return [category, techsWithIds]
      }),
    )

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
    }
  }

  &__image {
    width: 100%;
    max-width: 5rem;
    transition: transform 0.4s ease-in-out;
    margin-bottom: 1rem;
  }

  &__info {
    margin-top: auto;
  }

  &__name {
    transition:
      transform 0.4s ease-in-out,
      opacity 0.3s ease;
  }
}
</style>
