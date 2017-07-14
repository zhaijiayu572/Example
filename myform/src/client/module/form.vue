<template>
    <div>
      <t-form ref="formValidate">
        <t-form-item label="姓名" prop="name">
          <t-input placeholder="请输入姓名"></t-input>
        </t-form-item>
        <t-form-item label="邮箱" prop="mail">
          <t-input placeholder="请输入邮箱"></t-input>
        </t-form-item>
        <t-form-item label="性别" prop="gender">
          <t-radio-group>
            <t-radio label="male">男</t-radio>
            <t-radio label="female">女</t-radio>
          </t-radio-group>
        </t-form-item>
      </t-form>
    </div>
</template>
<script>
    import { TForm, TFormItem, TCheckbox, TCheckboxGroup, TButton } from 'aid-taurus-desktop'
    export default {
        name: 'ClientForm',
        components: {
            TForm,
            TFormItem,
            TCheckbox,
            TCheckboxGroup,
            TButton
        },
        data() {
            return {
            }
        }
    }
</script>
