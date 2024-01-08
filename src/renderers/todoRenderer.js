const render = (view, todo) => {
  if (view === 'edit') {
    console.log(`render "edit" view for '${todo.title}'`);
  } else {
    if (view === 'show') {
      console.log(`render "show" view for '${todo.title}'`);
    } else {
      if (view === 'index') {
        console.log(`render "index" view for all todos`);
      }
    }
  }
};

export { render };
