<template>
  <div>
      
    <t-progress :percent="45" type="circle" status="active" size="lg"></t-progress>
    <t-progress :percent="65" type="circle" status="exception"></t-progress>
    <t-progress :percent="100" type="circle" status="success" size="sm"></t-progress>
    
    <t-progress :percent="25"></t-progress>
    <t-progress :percent="55" status="active"></t-progress>
    <t-progress :percent="75" status="exception"></t-progress>
    <t-progress :percent="100"></t-progress>
    <t-progress :percent="25" hide-info></t-progress>


  </div>
</template>
