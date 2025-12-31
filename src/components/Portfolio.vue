<template>
  <section id="portfolio" class="portfolio">
    <div class="row gx-0 text-center portfolio__header">
      <div class="col-12">
        <h2 class="mt-5 mb-5 portfolio__headline font-h2">Portfolio</h2>
      </div>
    </div>
    <div class="row gx-0 mt-5 mb-5 justify-content-center portfolio__content">
      <div
        v-for="project in projects"
        :key="project.id"
        class="col-xl-4 col-lg-4 col-md-6 col-sm-12 portfolio__item"
      >
        <div class="portfolio__card">
          <div class="portfolio__image-wrapper">
            <img :src="project.image" :alt="project.title" loading="lazy" />
          </div>
          <div class="portfolio__card-body">
            <div>
              <h3 class="portfolio__card-title font-h4">{{ project.title }}</h3>
              <p class="portfolio__card-description font-p">{{ project.description }}</p>
              <div class="portfolio__tech-stack">
                <span
                  v-for="(tech, index) in project.technology.split(' / ')"
                  :key="index"
                  class="portfolio__tech-badge"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
            <div class="portfolio__card-footer">
              <a
                v-if="project.github"
                :href="project.github"
                class="portfolio__link portfolio__link--github"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <img
                  class="portfolio__icon portfolio__icon--github"
                  src="../assets/img/icons/github.svg"
                  alt="GitHub"
                />
              </a>
              <a
                v-if="project.live"
                :href="project.live"
                class="portfolio__link portfolio__link--live"
                target="_blank"
                rel="noopener noreferrer"
              >
                / Live
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { addIds } from '@/utils/dataUtils'

const images = import.meta.glob('@/assets/img/*.jpg', { eager: true })

export default {
  name: 'PortfolioComponent',

  setup() {
    const rawProjects = [
      {
        title: 'canvico-editor',
        description: 'Prosty edytor obrazów w przeglądarce, oparty na TypeScript i Canvas API.',
        github: 'https://github.com/GalacticByte/canvico-editor',
        live: 'https://galacticbyte.github.io/canvico-editor/demo/',
        technology: 'TYPESCRIPT / CANVAS API',
        image: images['/src/assets/img/canvico-editor.jpg'].default,
      },
      {
        title: 'Aplikacja Czat',
        description: 'Prosta aplikacja czat',
        github: 'https://github.com/GalacticByte/Simple-Vue-Chat',
        live: 'https://chat-app-lh2l.onrender.com/',
        technology: 'HTML / SCSS / VUE / SOCKET.IO / EXPRESS.JS / PRISMA / POSTGRESQL',
        image: images['/src/assets/img/chat-app-02.jpg'].default,
      },
      {
        title: 'Strona Wizytówka',
        description: 'Strona wizytówka, na którą teraz patrzysz',
        github: 'https://github.com/GalacticByte/Portfolio-page',
        live: 'https://galacticbyte.github.io/Portfolio-page/',
        technology: 'HTML / SCSS / VUE',
        image: images['/src/assets/img/portfolio-page-02.jpg'].default,
      },
      {
        title: 'Pogodynka',
        description: 'Pozwala sprawdzić aktualną pogodę i inne informacje pogodowe',
        github: 'https://github.com/GalacticByte/Weather-app-vue.js',
        live: 'https://galacticbyte.github.io/Weather-app-vue.js/',
        technology: 'HTML / SCSS / VUE / OPENWEATHERMAP API',
        image: images['/src/assets/img/weather-app-02.jpg'].default,
      },
      {
        title: 'Notatnik',
        description: 'Aplikacja pozwalająca na tworzenie notatek w formacie Markdown',
        github: 'https://github.com/GalacticByte/notes-app',
        live: 'https://notes-app-k7v6.onrender.com/',
        technology: 'VUE / SCSS / EXPRESS.JS / MONGODB',
        image: images['/src/assets/img/notes-app-02.jpg'].default,
      },
    ]

    const projects = addIds(rawProjects)

    return { projects }
  },
}
</script>

<style lang="scss" scoped>
@use '../scss/mixins/mixin_app.scss' as *;

.portfolio {
  &__headline {
    text-transform: uppercase;
    font-weight: bold;
  }

  &__item {
    padding: 1rem;
  }

  &__card {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #1a1a1a;
    border: 1px solid #333;
    border-radius: 16px;
    padding: 0;
    overflow: hidden;
    margin-top: 0;
    transition:
      transform 0.3s ease,
      box-shadow 0.3s ease,
      border-color 0.3s ease;

    &:hover {
      transform: translateY(-10px);
      border: 1px solid transparent;
      background:
        linear-gradient(#1a1a1a, #1a1a1a) padding-box,
        linear-gradient(#59d611 10%, #c2d307 50%) border-box;
      box-shadow: 0 10px 30px rgba(89, 214, 17, 0.1);

      .portfolio__image-wrapper img {
        transform: translateY(calc(-100% + 230px));
      }
    }
  }

  &__image-wrapper {
    width: 100%;
    height: 260px;
    margin: 0;
    overflow: hidden;
    border: 1px solid #444;
    border-radius: 16px 16px 0 0;
    position: relative;
    background-color: #151515;
    transition:
      transform 0.3s ease,
      border-color 0.3s ease;

    // Browser Bar
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 30px;
      background-color: #2a2a2a;
      border-bottom: 1px solid #333;
      z-index: 2;
    }

    // Dots - Traffic Lights
    &::after {
      content: '';
      position: absolute;
      top: 11px;
      left: 15px;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: #59d611;
      box-shadow:
        15px 0 0 #8dd40c,
        // Second dot (Gradient Midpoint)
        30px 0 0 #c2d307; // Third Dot (Brand Lime)
      z-index: 3;
    }

    img {
      width: 100%;
      height: auto;
      display: block;
      margin-top: 30px;
      transition: transform 3s ease-in-out;
    }
  }

  &__card-body {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-grow: 1;
  }

  &__card-title {
    font-weight: bold;
    margin-bottom: 1rem;
    color: #fff;
    text-align: center;
  }

  &__card-description {
    color: #b0b0b0;
    margin-bottom: 1.5rem;
    text-align: center;
  }

  &__tech-stack {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 2rem;
    justify-content: center;
  }

  &__tech-badge {
    font-size: 0.75rem;
    padding: 0.25rem 0.75rem;
    border-radius: 50px;
    background: rgba(255, 255, 255, 0.05);
    color: #ccc;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  &__card-footer {
    display: flex;
    justify-content: center;
    gap: 1rem;
  }

  &__icon--github {
    width: 2rem;
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.1);
    }
  }

  &__link--live {
    font-weight: bold;
    background: -webkit-linear-gradient(#59d611 10%, #c2d307 50%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-decoration: none;
  }
}
</style>
