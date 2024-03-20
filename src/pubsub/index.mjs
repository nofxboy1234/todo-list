import { subscribe, publish } from './pubSub.mjs';

const USER_EVENT_NAME = 'user-event-name';
const PREFERENCES_EVENT_NAME = 'preferences-event-name';

const updateSidebarUsername = (data) => {
  console.log(`Sidebar user name: ${data}`);
};

const updateHeaderUsername = (data) => {
  console.log(`Header user name: ${data}`);
};

subscribe(USER_EVENT_NAME, updateSidebarUsername);
subscribe(USER_EVENT_NAME, updateHeaderUsername);

const updatePreferences = (data) => {
  console.table(data);
};

subscribe(PREFERENCES_EVENT_NAME, updatePreferences);

publish(USER_EVENT_NAME, 'Diona');
publish(PREFERENCES_EVENT_NAME, {
  themeColor: 'dark',
  currency: 'EUR',
});
// const btn = document.querySelector('button');
// btn.addEventListener('click', () => {
//   publish(USER_EVENT_NAME, 'Diona');
//   publish(PREFERENCES_EVENT_NAME, {
//     themeColor: 'dark',
//     currency: 'EUR',
//   });
// });
