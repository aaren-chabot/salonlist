const applyMiddleware = (middlewareWrapper, router) => {
  for (const wrapper of middlewareWrapper) {
    wrapper(router);
  }
};

module.exports = applyMiddleware;
