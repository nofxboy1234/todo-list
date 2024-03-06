const httpPatch = {
  redirectTo: function (path, resourceData) {
    path.patch(resourceData);
  },
};

export { httpPatch };
