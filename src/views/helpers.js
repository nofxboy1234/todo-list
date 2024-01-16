import { contentContainer } from "./layouts/application";

const clearContent = () => {
  while (contentContainer.firstChild) {
    const lastChild = contentContainer.lastChild;
    contentContainer.removeChild(lastChild);
  }
};

export { clearContent };
