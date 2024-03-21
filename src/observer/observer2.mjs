import { addObserver } from './subject.mjs';

// Observers are aware of the Subject/Observable.
const updateHeaderUsername = (data) => {
  console.log(`Header user name: ${data}`);
};

addObserver(updateHeaderUsername);

export { updateHeaderUsername };
