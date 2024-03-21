import { addObserver } from './subject.mjs';

// Observers are aware of the Subject/Observable.
const updateSidebarUsername = (data) => {
  console.log(`Sidebar user name: ${data}`);
};

addObserver(updateSidebarUsername);

export { updateSidebarUsername };
