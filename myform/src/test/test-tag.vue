<template>
  <div>
      
    <t-tag v-for="item in count" :key="item" type="text" @on-close="handleClose">标签{{ item }}</t-tag>
    <t-button type="primary" size="sm" @click="tagAdd">添加标签</t-button>
    
    <t-tag type="pill">标签</t-tag>
    <t-tag type="pill" state='success'>标签</t-tag>
    <t-tag type="pill" state='danger'>标签</t-tag>
    <t-tag type="pill" state='dark'>标签</t-tag>
    <t-tag type="pill" state='warning'>标签</t-tag>
    <t-tag type="pill" state='muted'>标签</t-tag>
    <t-tag type="pill" state='info'>标签</t-tag>
    
    <t-tag type="status">标签</t-tag>
    <t-tag type="status" state='success'>标签</t-tag>
    <t-tag type="status" state='danger'>标签</t-tag>
    <t-tag type="status" state='dark'>标签</t-tag>
    <t-tag type="status" state='warning'>标签</t-tag>
    <t-tag type="status" state='muted'>标签</t-tag>
    <t-tag type="status" state='info'>标签</t-tag>


  </div>
</template>
<script>
export default {
  data() {
        return {
            count: 3
        }
    },
    methods: {
        handleClose() {
        },
        tagAdd() {
            this.count++;
        }
    }

}
</script>

