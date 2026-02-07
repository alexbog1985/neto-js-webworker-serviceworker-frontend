import '../css/style.css';

import BaseRender from './BaseRender';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector('#root');
  const app = new BaseRender(root);

  app.init();
});
