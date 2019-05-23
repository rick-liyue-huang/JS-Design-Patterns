
// 使用jQuery 做一个模拟购物车的示例
// 包括显示购物车列表，加入购物车和删除购物车

// 用到的模式： 工厂模式， 单例模式，装饰器模式， 观察者模式， 状态模式， 模板方法模式， 代理模式

import App from './demo/App';

let app = new App('app');
app.init()