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
        path: '/test/btn',
        component: require('./test/test-btn.vue')
    },
    {
        path: '/test/icon',
        component: require('./test/test-icon.vue')
    },
    {
        path:'/test/alert',
        component: require('./test/test-alert.vue')
    },
    {
        path:'/test/message',
        component:require('./test/test-message.vue')
    },
    {
        path: '/test/card',
        component: require('./test/test-card.vue')
    },
    {
        path: '/test/badge',
        component: require('./test/test-badge.vue')
    },
    {
        path: '/test/timeline',
        component: require('./test/timeline.vue')
    },
    {
        path: '/test/tag',
        component: require('./test/test-tag.vue')
    },
    {
        path: '/test/avatar',
        component: require('./test/test-avatar.vue')
    }
]
