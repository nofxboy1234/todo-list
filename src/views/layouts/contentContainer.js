import { createFlexContainer } from '../helpers';

const viewCache = [];
const previousView = () => {
  return viewCache.pop();
};

const contentContainer = {
  domElement: createFlexContainer('flex-item', 'content-container'),
  appendChild(view) {
    viewCache.push(view);
    this.domElement.appendChild(view);
  },
  removeCurrentViewFromCache() {
    viewCache.pop();
  },
  appendPrevious() {
    this.removeCurrentViewFromCache();
    this.appendChild(previousView());
  },
  clear() {
    while (this.domElement.firstChild) {
      const lastChild = this.domElement.lastChild;
      this.domElement.removeChild(lastChild);
    }
  },
  clearViewCache() {
    viewCache.length = 0;
  },
};

export { contentContainer };
