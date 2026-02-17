
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/posts",
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/posts"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 9422, hash: 'dbb407eb0e5ca156c00f39421a3d4673f4347dc68ffc6c8132d0634cae0a9c79', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 4900, hash: '20608dc1395c6539def6fb98c5e9f232823d4d6a9fe704efbdf14454e10409cb', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'posts/index.html': {size: 56118, hash: '3b56846a3f33bfeb8631297f7312dddea11e263ea3f896c7e354244136be2db4', text: () => import('./assets-chunks/posts_index_html.mjs').then(m => m.default)},
    'styles-63ATOPMQ.css': {size: 232807, hash: 'sLZDH0qeW8Q', text: () => import('./assets-chunks/styles-63ATOPMQ_css.mjs').then(m => m.default)}
  },
};
