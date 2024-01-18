const projects = [];

const lastID = () => {
  const project = Project.last();
  if (project) {
    return project.id;
  } else {
    return 0;
  }
};

const nextID = () => {
  return lastID() + 1;
};

const Project = {
  new: function (name) {
    return {
      name,
      save: function () {
        this.id = nextID();
        console.log(`Save '${name}' to local storage`);
        projects.push(this);
        return true;
      },
      update: function (name) {
        console.log(`Update '${name}' in local storage`);
        Object.assign(this, {
          name,
        });
        return true;
      },
      destroy: function () {
        console.log(`Remove '${name}' from local storage`);
        const removeIndex = projects.indexOf(this);
        projects.splice(removeIndex, 1);
      },
    };
  },
  all: function () {
    console.log('Get all project objects from project.js / local storage');
    return projects;
  },
  find: function (id) {
    return projects.find((project) => project.id === id);
  },
  last: function () {
    return projects.at(-1);
  },
};

export { Project };
