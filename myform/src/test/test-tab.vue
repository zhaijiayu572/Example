<template>
  <div>
      
    <t-tabs>
        <t-tab-panel label="标签一" name="tab-1">标签一内容</t-tab-panel>
        <t-tab-panel label="标签二" name="tab-2">标签二内容</t-tab-panel>
        <t-tab-panel label="标签三" name="tab-3">标签三内容</t-tab-panel>
    </t-tabs>
    
    <t-tabs mode="pills" :threshold="3">
        <t-tab-panel label="标签一" name="tab-1">标签一内容</t-tab-panel>
        <t-tab-panel label="标签二" name="tab-2">标签二内容</t-tab-panel>
        <t-tab-panel label="标签三" name="tab-3">标签三内容</t-tab-panel>
        <t-tab-panel label="标签四" name="tab-4">标签四内容</t-tab-panel>
        <t-tab-panel label="标签五" name="tab-5">标签五内容</t-tab-panel>
    </t-tabs>
    
    <t-tabs mode="pills" :closeable="true" :threshold="3">
        <t-tab-panel label="标签一" name="tab-1">标签一内容</t-tab-panel>
        <t-tab-panel label="标签二" name="tab-2">标签二内容</t-tab-panel>
        <t-tab-panel label="标签三" name="tab-3">标签三内容</t-tab-panel>
        <t-tab-panel label="标签四" name="tab-4">标签四内容</t-tab-panel>
        <t-tab-panel label="标签五" name="tab-5">标签五内容</t-tab-panel>
    </t-tabs>



  </div>
</template>
