import '../css/style.css';

import LoadingApp from './LoadingApp';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector('#root');
  const app = new LoadingApp(root);

  app.init();
});
