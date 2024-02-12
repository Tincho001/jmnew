// setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: '@duxsoftware/v1.0#9pefko16lq5lvpps',
      changeOrigin: true,
    })
  );
};
