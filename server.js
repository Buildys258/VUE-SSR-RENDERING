const fs = require('fs')
const Vue = require('vue')
const server = require('express')()
const VueServerRenderer = require('vue-server-renderer')


server.get('*', (req, res) => {
    const app = new Vue({
        data:{
            url: req.url
        },
        template: '<div>the visit url: {{url}}</div>'
    }) //vue实例

    const template = fs.readFileSync('./index.template.html', 'utf-8') //使用一个html文件模板
    const renderer  = VueServerRenderer.createRenderer({
        template
    })
    const context = {
        title: 'Vue SSR',
        metas: `
        <meta name="keywords" content="vue,ssr"/>
        <meta name="description" content="vue ssr demo"/>
        `,
    }
    
    renderer.renderToString(app, context, (err, html) => {
        console.log(html) //打印出的html是 模板经过ssr后的东西
    if(err) {
        res.status(500).end('internal server error')
    }
    res.end(html)
})
})

server.listen(8080, () => {
    console.log('服务器运行在8080端口...')
})