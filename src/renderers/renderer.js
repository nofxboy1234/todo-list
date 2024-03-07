import { clearContainer } from '../views/helpers';

const cache = [];

const cacheView = (view) => {
  cache.push(view);
};

const popCachedView = () => {
  return cache.pop();
};

const renderCachedView = () => {
  const view = popCachedView();
  addViewToLayout(view);
};

const addViewToLayout = (view, container) => {
  clearContainer(container);
  container.appendChild(view);
};

const render = (renderer, resourceData) => {
  const renderedView = renderer.render(resourceData);
  const container = renderer.container();
  addViewToLayout(renderedView, container);
  const focusID = renderer.focusID();
  document.getElementById(focusID).focus();
};

const renderer = {
  init: function (resourceView) {
    this.resourceView = resourceView;
  },
  view: function () {
    this.resourceView.view;
  },
  container: function () {
    return this.resourceView.container;
  },
  focusID: function () {
    return this.resourceView.focusID;
  },
  render: function (resourceData) {
    return this.view().render(resourceData);
  },
};

const createRenderer = (resourceView) => {
  return Object.create(renderer).init(resourceView);
};

export {
  cacheView,
  popCachedView,
  renderCachedView,
  addViewToLayout,
  render,
  createRenderer,
};
