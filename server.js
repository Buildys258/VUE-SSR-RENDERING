const Vue = require('vue')
const server = require('express')()
const renderer = require('vue-server-renderer').createRenderer()
const app = new Vue({
    data:{
        url: "111"
    },
    template: '<div>the visit url: {{url}}</div>'
}) //vue实例

server.get('*', (req, res) => {
   app.$data.url = req.url
   renderer.renderToString(app, (err, html) => {
    if(err) {
        res.status(500).end('internal server error')
    }
    res.end(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <title>hello</title>
    </head>
    <body>${html}</body>
    </html>
    `)
})
})

server.listen(8080, () => {
    console.log('服务器运行在8080端口...')
})