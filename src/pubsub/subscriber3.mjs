// Publishers and subscribers don't need to know each other.
// They simply communicate with the help of message queues.
import { PREFERENCES_EVENT_NAME } from './publisher1.mjs';
import { subscribe } from './messageQueue.mjs';

const updatePreferences = (data) => {
  console.table(data);
};

subscribe(PREFERENCES_EVENT_NAME, updatePreferences);

export { updatePreferences };
