const httpDelete = {
  redirectTo: function (path, resourceData) {
    path.delete(resourceData);
  },
};

export { httpDelete };
