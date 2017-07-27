<template>
    <div class="icon-container">
        <t-icon type="account-box-outline" class="mr-5"></t-icon>
        <t-icon type="account-box-outline" size="24" class="mr-5"></t-icon>
        <t-icon type="account-box-outline" size="36" class="mr-5"></t-icon>
        <t-icon type="account-box-outline" size="48" class="mr-5"></t-icon>
        <t-icon type="account-box-outline" size="60" class="mr-5"></t-icon>
        <t-icon type="account-box-outline" size="60" class="mr-5" color="gray"></t-icon>
        <br/>
        <t-icon type="lightbulb-on" size="60" gradient="primary" class="mr-5"></t-icon>
        <t-icon type="lightbulb-on" size="60" gradient="success" class="mr-5"></t-icon>
        <t-icon type="lightbulb-on" size="60" gradient="info" class="mr-5"></t-icon>
        <t-icon type="lightbulb-on" size="60" gradient="warning" class="mr-5"></t-icon>
        <t-icon type="lightbulb-on" size="60" gradient="danger" class="mr-5"></t-icon>
        <br/>
        <t-icon type="lightbulb-on" size="36" gradient="info" class="mr-5"></t-icon>
        <t-icon type="lightbulb-on" size="36" gradient="info" rotate="90" class="mr-5"></t-icon>
        <t-icon type="lightbulb-on" size="36" gradient="info" rotate="180" class="mr-5"></t-icon>
        <t-icon type="lightbulb-on" size="36" gradient="info" rotate="270" class="mr-5"></t-icon>
        <br/>
        <t-icon type="lightbulb-on" size="48" bg-shape="circle" class="bg-info text-white mr-5" ></t-icon>
        <t-icon type="emoticon-cool" size="48" bg-shape="rectangle" class="bg-gray-lightest-5 text-info mr-5" ></t-icon>
        <t-icon type="book-multiple-variant" size="36" bg-shape="rectangle" style="color: #ffffff;background-color: #23241f"></t-icon>
        <t-icon type="lightbulb-on" size="48" bg-shape="circle" class="bg-info text-white mr-5" ></t-icon>
        <t-icon type="emoticon-cool" size="48" bg-shape="rectangle" class="bg-gray-lightest-5 text-info mr-5" ></t-icon>
        <t-icon type="book-multiple-variant" size="36" bg-shape="rectangle" style="color: #ffffff;background-color: #23241f"></t-icon>
        

    </div>
    
</template>
<<script>
export default {
   data () {
            return {
                loading: false,
                loading2: false
            }
        },
        methods: {
            toLoading () {
                this.loading = true;
            },
            toLoading2 () {
                this.loading2 = true;
            }
        }
}
</script>

