import * as  Koa from 'koa' // 引入koa
import * as Router from 'koa-router' // 引入koa-router
import * as bodyParser from 'koa-bodyparser' // 引入koa-bodyparser

const app = new Koa(); // 创建koa应用
const router = new Router(); // 创建路由，支持传递参数
app.use(bodyParser());

export const service = new class {

    private wrap(handler: Function) {
        return async (ctx: Koa.Context) => {
            try {
                const data = ctx.request.body;
                if (!data || !(data instanceof Array)) {
                    throw new Error('data must be an array');
                }
                const result = await handler(...data);
                ctx.body = { success: true, result };
            } catch (err) {
                ctx.status = 500;
                ctx.body = { success: false, error: err.message };
            }
        }
    }


    on(route: string, handler: Function) {
        router.all(route, this.wrap(handler));
    }

    start() {

        app.use(router.routes());
        app.use(router.allowedMethods({
            // throw: true, // 抛出错误，代替设置响应头状态
            // notImplemented: () => '不支持当前请求所需要的功能',
            // methodNotAllowed: () => '不支持的请求方式'
        }));

        // 启动服务监听本地3000端口
        app.listen(13800, () => {
            console.log('应用已经启动，http://localhost:13800');
        })
    }
};