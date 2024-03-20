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
