<template>
    <t-tree :data="data2" :props="defaultProps" is-check node-key="id" all-expandable :expand-on-click-node="false" :render-content="renderContent">
    </t-tree>
</template>
<script>
let id = 1000;

export default {
    data() {
        return {
            data2: [{
                id: 1,
                label: '一级 1',
                children: [{
                    id: 4,
                    label: '二级 1-1',
                    children: [{
                        id: 9,
                        label: '三级 1-1-1'
                    }, {
                        id: 10,
                        label: '三级 1-1-2'
                    }]
                }]
            }, {
                id: 2,
                label: '一级 2',
                children: [{
                    id: 5,
                    label: '二级 2-1'
                }, {
                    id: 6,
                    label: '二级 2-2'
                }]
            }, {
                id: 3,
                label: '一级 3',
                children: [{
                    id: 7,
                    label: '二级 3-1'
                }, {
                    id: 8,
                    label: '二级 3-2'
                }]
            }],
            defaultProps: {
                children: 'children',
                label: 'label'
            }
        }
    },

    methods: {
        append(store, data) {
            store.append({ id: id++, label: 'testtest', children: [] }, data);
        },

        remove(store, data) {
            store.remove(data);
        },
        renderContent(h, { node, data, store }) {
            return h('span', [
                h('span', [
                    h('span', {}, node.label)
                ]),
                h('span',
                    {
                        style: {
                            marginLeft: '5px'
                        }
                    },
                    [h('t-button', {
                        props: {
                            type: 'primary',
                            size: 'sm'
                        },
                        style: {
                            marginRight: '5px'
                        },
                        on: {
                            click: () => {
                                this.append(store, data)
                            }
                        }
                    }, '增加'),
                    h('t-button', {
                        props: {
                            type: 'danger',
                            size: 'sm'
                        },
                        on: {
                            click: () => {
                                this.remove(store, data)
                            }
                        }
                    }, '删除')
                    ])
            ])
        }
    }
};
</script>
