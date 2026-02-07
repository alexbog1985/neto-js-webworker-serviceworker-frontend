export default class BaseRender {
  constructor(root) {
    this.root = root;
  }

  init() {
    console.log('BaseRender init', this.root);
  }
}
