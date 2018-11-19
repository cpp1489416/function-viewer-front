<template>
    <div class="content-wrapper" style="min-height:100%;">
        <!-- Content Header (Page header) -->
        <section class="content-header">
            <h1>
                查看函数图像
                <small>请输入函数方程式</small>
            </h1>
        </section>

        <!-- Main content -->
        <section class="content">

            <!--------------------------
              | Your Page Content Here |
              -------------------------->

        </section>
    </div>
</template>
<script>
    import LeftSideBar from '@/components/LeftSideBar'
    import Header from '@/components/Header'
    import Footer from '@/components/Footer'

    export default {
        name: 'HelloWorld',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        components: {
            'v-left-side-bar': LeftSideBar,
            'v-header': Header,
            'v-footer': Footer
        }
    }
</script>
