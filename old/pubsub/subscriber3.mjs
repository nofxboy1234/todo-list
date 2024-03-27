// Publishers and subscribers don't need to know each other.
// They simply communicate with the help of message queues.
const subscriber = {
  update(data) {
    this.updatePreferences(data);
  },
  updatePreferences(data) {
    console.table(data);
  },
};

export { subscriber };
