import { addObserver } from './subject.mjs';

// Observers are aware of the Subject/Observable.
const observer = {
  update(data) {
    this.updateHeaderUsername(data);
  },
  updateHeaderUsername(data) {
    console.log(`Header user name: ${data}`);
  },
};

addObserver(observer);

export { observer };
