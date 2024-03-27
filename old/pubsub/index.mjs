import { publisher } from './publisher1.mjs';
import { subscriber as subscriber1 } from './subscriber1.mjs';
import { subscriber as subscriber2 } from './subscriber2.mjs';
import { subscriber as subscriber3 } from './subscriber3.mjs';

import { subscribe } from './messageQueue.mjs';

import { USER_EVENT_NAME } from './publisher1.mjs';
import { PREFERENCES_EVENT_NAME } from './publisher1.mjs';

subscribe(USER_EVENT_NAME, subscriber1);
subscribe(USER_EVENT_NAME, subscriber2);
subscribe(PREFERENCES_EVENT_NAME, subscriber3);

publisher.click();
