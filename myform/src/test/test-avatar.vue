<template>
  <div>
      
    <t-avatar dot-state="success" text="HC"></t-avatar>
    <t-avatar dot-state="warning" text="HC"></t-avatar>
    <t-avatar dot-state="danger" text="HC"></t-avatar>
    <t-avatar dot-state="info" text="HC"></t-avatar>
    <t-avatar dot-state="primary" text="HC"></t-avatar>
    
    <t-avatar img-src="http://flatfull.com/themes/angulr/angular/img/a0.jpg"></t-avatar>
    <t-avatar :img-src="avatarImgSrc"></t-avatar>

  </div>
</template>
<<script>
export default {
  data(){
      return{
          avatarImgSrc:require('./')
      }
  },
  methods:{
    
  }
}
</script>

