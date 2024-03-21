// Message Queue
// Asynchronous
// Many-to-many
// Abstractions, usually involving some "middle man" (such as a message queue)
// who knows all parties, but the individual parties don't know about each other.
const messages = {};

export const subscribe = (eventName, subscriber) => {
  if (!messages[eventName]) {
    messages[eventName] = [];
  }
  messages[eventName].push(subscriber);
};

export const unsubscribe = (eventName, subscriberToUnsubscribe) => {
  if (messages[eventName]) {
    messages[eventName] = messages[eventName].filter(
      (subscriber) => subscriber !== subscriberToUnsubscribe
    );
  }
};

export const publish = (eventName, data) => {
  if (messages[eventName]) {
    messages[eventName].forEach((subscriber) => subscriber(data));
  }
};
