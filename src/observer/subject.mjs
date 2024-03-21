// Subject/Observable
// Synchronous
// One-to-many
// The Observable is aware of its observers.

// Generally an observable has a list of observers with it
// (it iterates over this list to send an event to all of them).
let observers = [];

export const addObserver = (observer) => {
  observers.push(observer);
};

export const removeObserver = (observer) => {
  observers = observers.filter((obs) => obs !== observer);
};

export const notifyObservers = (data) => {
  observers.forEach((observer) => observer(data));
};

export const subject = {
  name: 'button',
  click() {
    notifyObservers('Diona');
  },
};
