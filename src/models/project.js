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
        console.log(`Save '${title}' to local storage`);
        projects.push(this);
        return true;
      },
      update: function (title) {
        console.log(`Update '${title}' in local storage`);
        Object.assign(this, {
          title,
        });
        return true;
      },
      destroy: function () {
        console.log(`Remove '${title}' from local storage`);
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
