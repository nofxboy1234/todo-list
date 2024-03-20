const subscribers = {};

export const subscribe = (eventName, callback) => {
  if (!subscribers[eventName]) {
    subscribers[eventName] = [];
  }
  subscribers[eventName].push(callback);
};

export const unsubscribe = (eventName, callback) => {
  if (subscribers[eventName]) {
    subscribers[eventName] = subscribers[eventName].filter(
      (subscriber) => subscriber !== callback
    );
  }
};

export const publish = (eventName, data) => {
  if (subscribers[eventName]) {
    subscribers[eventName].forEach((subscriber) => subscriber(data));
  }
};
