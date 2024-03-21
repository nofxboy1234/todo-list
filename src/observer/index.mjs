import { subject } from './subject.mjs';
import { observer as observer1 } from './observer1.mjs';
import { observer as observer2 } from './observer2.mjs';
import { addObserver } from './subject.mjs';

addObserver(observer1);
addObserver(observer2);

subject.click();
