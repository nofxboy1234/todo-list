// Observers are aware of the Subject/Observable.
const observer = {
  update(data) {
    this.updateSidebarUsername(data);
  },
  updateSidebarUsername(data) {
    console.log(`Sidebar user name: ${data}`);
  },
};

export { observer };
