const images = import.meta.glob('@/assets/img/icons/*.svg', { eager: true })

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

export default rawTechs
