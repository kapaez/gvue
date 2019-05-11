import Input from './packages/g-input/'
import Form from './packages/form/'
import directive from './directive/'

const components = [
    Input,
    Form,
]

function install(Vue, opts={}) {
    if (window.axios) Vue.prototype.$http = window.axios;
    //权限相关
    directive(Vue);
    //遍历注册组件
    components.map(component=> {
        Vue.component(component.name, component)
    })
    //配置默认属性
    Vue.prototype.$GVUE = {
        size: opts.size || 'medium',
        menuType: opts.menuType || 'button'
    };
}

if (window.Vue) {
    install(window.Vue, window.axios)
}

export default {
    install,
    Input,
    Form,
}