import { addObserver, notifyObservers } from './observers.mjs';

const updateSidebarUsername = (data) => {
  console.log(`Sidebar user name: ${data}`);
};

const updateHeaderUsername = (data) => {
  console.log(`Header user name: ${data}`);
};

addObserver(updateSidebarUsername);
addObserver(updateHeaderUsername);

notifyObservers('Diona');
// const btn = document.querySelector('button');
// btn.addEventListener('click', () => notifyObservers('Diona'));
