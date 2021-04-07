const fs = require('fs');
const path = require('path');
 
const Vue = require('vue');
const Koa = require('koa');
const KoaRouter = require('koa-router');
const serve = require('koa-static');
const VueServerRenderer = require('vue-server-renderer');
 
const serverBundle = fs.readFileSync('./dist/server.bundle.js', 'utf-8');
const template = fs.readFileSync('./dist/index.ssr.html', 'utf-8');
 
const renderer = VueServerRenderer.createBundleRenderer(serverBundle, {
  template
})
 
const app = new Koa();
const router = new KoaRouter();
 
router.get('(.*)', async ctx => {
  ctx.body = await renderer.renderToString();
})
 
app.use(serve(path.resolve(__dirname, 'dist')))
 
app.use(router.routes())
 
app.listen(8080, () => {
  console.log('服务器运行在8080端口...')
});