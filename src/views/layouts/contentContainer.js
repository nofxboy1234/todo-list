import { createFlexContainer } from '../helpers';

const contentContainer = {
  viewCache: [],
  domElement: createFlexContainer('flex-item', 'content-container'),
  appendChild(view) {
    this.viewCache.push(view);
    this.domElement.appendChild(view);
  },
  appendPrevious() {
    this.viewCache.pop();
    const previousView = this.viewCache.pop();
    this.appendChild(previousView);
  },
  clear() {
    while (this.domElement.firstChild) {
      const lastChild = this.domElement.lastChild;
      this.domElement.removeChild(lastChild);
    }
  },
};

export { contentContainer };
