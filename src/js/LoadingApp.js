export default class LoadingApp {
  constructor(root) {
    this.root = root;

    this.refreshButton = null;

    this.serverUrl = 'http://localhost:3000/';
  }

  init() {
    this.root.append(this.renderContainer(), this.renderContent());
    this.setupEventListeners();
    this.registerServiceWorker();
  }

  setupEventListeners() {
    this.refreshButton.addEventListener('click', () => this.loadData());

    window.addEventListener('online', () => console.log('window online...'));
    window.addEventListener('offline', () => console.log('window offline'));
  }

  registerServiceWorker() {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker
          .register('/service-worker.js')
          .then((registration) => {
            console.log('ServiceWorker зарегистрирован:', registration.scope);
          })
          .catch((error) => {
            console.log('Ошибка регистрации ServiceWorker:', error);
          });
      });
    }
  }

  renderContainer() {
    const loadingContainer = document.createElement('div');
    loadingContainer.classList.add('loading-container');

    const spinner = document.createElement('div');
    spinner.classList.add('spinner');

    const loadingText = document.createElement('div');
    loadingText.classList.add('loading-text');
    loadingText.textContent = 'Loading...';

    const loadingSubtext = document.createElement('div');
    loadingSubtext.classList.add('loading-subtext');
    loadingSubtext.textContent = 'Пожалуйста, подождите';

    loadingContainer.append(spinner, loadingText, loadingSubtext);

    return loadingContainer;
  }

  renderContent() {
    const contentElement = document.createElement('div');
    contentElement.classList.add('content');
    // contentElement.style.display = 'none';

    const contentTitle = document.createElement('h1');
    contentTitle.classList.add('content-title');
    contentTitle.textContent = 'Новости мира кино';

    const contentParagraph = document.createElement('p');
    contentParagraph.classList.add('content-paragraph');
    contentParagraph.textContent = 'Загружено успешно...';

    this.refreshButton = document.createElement('button');
    this.refreshButton.classList.add('refresh-button');
    this.refreshButton.textContent = 'Обновить';

    contentElement.append(contentTitle, contentParagraph, this.refreshButton);

    return contentElement;
  }

  async loadData() {
    try {
      const response = await fetch(this.serverUrl);

      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  showLoading() {}
}
