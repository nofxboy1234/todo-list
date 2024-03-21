// A publisher is generally aware of only a queue where it
// publishes its events/messages.
// It doesn't know how many consumers have subscribed to that queue.
import { publish } from './messageQueue.mjs';

const USER_EVENT_NAME = 'user-event-name';
const PREFERENCES_EVENT_NAME = 'preferences-event-name';

const publisher = {
  name: 'button',
  click() {
    publish(USER_EVENT_NAME, 'Diona');
    publish(PREFERENCES_EVENT_NAME, {
      themeColor: 'dark',
      currency: 'EUR',
    });
  },
};

export { publisher, USER_EVENT_NAME, PREFERENCES_EVENT_NAME };
