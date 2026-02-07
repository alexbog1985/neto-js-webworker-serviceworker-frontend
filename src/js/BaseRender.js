export default class BaseRender {
  constructor(root) {
    this.root = root;
  }

  init() {
    this.root.append(this.renderContainer(), this.renderContent());
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
    contentElement.style.display = 'none';

    const contentTitle = document.createElement('h1');
    contentTitle.classList.add('content-title');
    contentTitle.textContent = 'Новости мира кино';

    const contentParagraph = document.createElement('p');
    contentParagraph.classList.add('content-paragraph');
    contentParagraph.textContent = 'Загружено успешно...';

    const refreshButton = document.createElement('button');
    refreshButton.classList.add('refresh-button');

    contentElement.append(contentTitle, contentParagraph, refreshButton);

    return contentElement;
  }
}
