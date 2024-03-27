// Publishers and subscribers don't need to know each other.
// They simply communicate with the help of message queues.
const subscriber = {
  update(data) {
    this.updateHeaderUsername(data);
  },
  updateHeaderUsername(data) {
    console.log(`Header user name: ${data}`);
  },
};

export { subscriber };
