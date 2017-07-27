<template>
  <div class="alert-container">
    <!-- 测试默认的提示框 -->
    <t-alert>默认提示信息</t-alert>
    <t-alert type="success">success提示信息</t-alert>
    <t-alert type="warning">warning提示信息</t-alert>
    <t-alert type="danger">danger提示信息</t-alert>
    <t-alert type="info">info提示信息</t-alert>
    <br/>
    <!-- 测试韩信息的提示框 -->
    <t-alert>
        默认提示信息
        <template slot="desc">
            描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字 描述文字描述文字描述文字
        </template>
    </t-alert>
    <t-alert type="success">
        success提示信息
        <template slot="desc">
            描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字 描述文字描述文字描述文字
        </template>
    </t-alert>
    <t-alert type="warning">
        warning提示信息
        <template slot="desc">
            描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字 描述文字描述文字描述文字
        </template>
    </t-alert>
    <t-alert type="danger">
        danger提示信息
        <template slot="desc">
            描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字 描述文字描述文字描述文字
        </template>
    </t-alert>
    <t-alert type="info">
        info提示信息
        <template slot="desc">
            描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字 描述文字描述文字描述文字
        </template>
    </t-alert>
    <!-- 测试带图标的提示框 -->
        <t-alert>默认提示信息</t-alert>
        <t-alert type="success" show-icon>success提示信息</t-alert>
        <t-alert type="warning" show-icon>warning提示信息</t-alert>
        <t-alert type="danger" show-icon>danger提示信息</t-alert>
        <t-alert type="info" show-icon>info提示信息</t-alert>
        <t-alert type="info" show-icon>
          自定义图标的提示信息
          <i class="alert__icon aid aid-help-circle" slot="icon"></i>
        </t-alert>
        <t-alert type="success" show-icon>
          success提示信息
          <template slot="desc">
            描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字
            描述文字描述文字描述文字
          </template>
        </t-alert>
        <t-alert type="warning" show-icon>
          warning提示信息
          <template slot="desc">
            描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字
            描述文字描述文字描述文字
          </template>
        </t-alert>
        <t-alert type="danger" show-icon>
          danger提示信息
          <template slot="desc">
            描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字
            描述文字描述文字描述文字
          </template>
        </t-alert>
        <t-alert type="info" show-icon>
          info提示信息
          <template slot="desc">
            描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字
            描述文字描述文字描述文字
          </template>
        </t-alert>
        <t-alert type="info" show-icon>
          自定义图标的提示信息
          <i class="alert__icon aid aid-help-circle" slot="icon"></i>
          <template slot="desc">
            描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字
            描述文字描述文字描述文字
          </template>
        </t-alert>

    <!-- 测试带关闭按钮的提示框 -->
    <t-alert closable>消息提示文案</t-alert>
    <t-alert type="success" show-icon closable>
        成功提示文案
        <span slot="desc">成功的提示描述文案成功的提示描述文案成功的提示描述文案成功的提示描述文案成功的提示描述文案</span>
    </t-alert>
    <t-alert type="warning" closable>
        自定义关闭内容
        <span class="text-primary" slot="close">不再提示</span>
    </t-alert>

  </div>
</template>
