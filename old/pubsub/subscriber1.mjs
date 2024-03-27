// Publishers and subscribers don't need to know each other.
// They simply communicate with the help of message queues.
const subscriber = {
  update(data) {
    this.updateSidebarUsername(data);
  },
  updateSidebarUsername(data) {
    console.log(`Sidebar user name: ${data}`);
  },
};

export { subscriber };
