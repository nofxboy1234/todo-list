// Publishers and subscribers don't need to know each other.
// They simply communicate with the help of message queues.
const index = {
  update(data) {
    console.log(`Add ${data.name} to projects index`);
  },
};

export { index };
