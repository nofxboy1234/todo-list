import { createFlexContainer } from '../helpers';

const renderCache = [];
const cacheRender = (render) => {
  renderCache.push(render);
};

const contentContainer = {
  domElement: createFlexContainer('flex-item', 'content-container'),
  clearDomElement() {
    while (this.domElement.firstChild) {
      const lastChild = this.domElement.lastChild;
      this.domElement.removeChild(lastChild);
    }
  },
  appendRender(render) {
    this.domElement.appendChild(render);
    cacheRender(render);
  },
  appendPreviousRender() {
    this.removeLastRenderFromCache();
    const previousRender = renderCache.at(-1);
    this.domElement.appendChild(previousRender);
  },
  removeLastRenderFromCache() {
    renderCache.pop();
  },
  clearCache() {
    renderCache.length = 0;
  },
};

export { contentContainer };
