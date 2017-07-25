export default [{
    name: 'Index',
    path: '/',
    component: require('./module/index/index.vue')
}, {
    name: '客户信息',
    path: '/client',
    component: require('./module/client/app.vue')
}, {
    path: '*',
    component: {
        template: '<div>not found</div>'
    }
},
    {
        path: '/test',
        component: require('./test/test.vue')
    }
]
