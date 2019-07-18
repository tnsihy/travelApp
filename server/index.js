const Koa = require('koa')
const fs = require('fs')
const Router = require('koa-router')

const app = new Koa()
const router = new Router()

router
    .get('/api/index.json',async(ctx)=>{
        ctx.response.type = 'json'
        ctx.response.body = fs.createReadStream('./api/index.json')
    })
    .get('/api/city.json',async(ctx)=>{
        ctx.response.type = 'json'
        ctx.response.body = fs.createReadStream('./api/city.json')
    })
    .get('/api/detail.json',async(ctx)=>{
        console.log(ctx.query)
        ctx.response.type = 'json'
        ctx.response.body = fs.createReadStream('./api/detail.json')
    })

app
    .use(router.routes())
    .use(router.allowedMethods())

app.listen(3000,function(){
    console.log('[demo] Starting at port 3000')
})