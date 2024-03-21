// Publishers and subscribers don't need to know each other.
// They simply communicate with the help of message queues.
import { USER_EVENT_NAME } from './publisher1.mjs';
import { subscribe } from './messageQueue.mjs';

const updateHeaderUsername = (data) => {
  console.log(`Header user name: ${data}`);
};

subscribe(USER_EVENT_NAME, updateHeaderUsername);

export { updateHeaderUsername };
