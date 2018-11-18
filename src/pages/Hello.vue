<template>
    <div class="wrapper">

        <!-- Main Header -->
        <v-header/>
        <!-- Left side column. contains the logo and sidebar -->
        <v-left-side-bar />

        <!-- Content Wrapper. Contains page content -->
        <div class="content-wrapper">
            <!-- Content Header (Page header) -->
            <section class="content-header">
                <h1>
                    this is hello page
                    <small>请输入函数方程式</small>
                </h1>
            </section>

            <!-- Main content -->
            <section class="content container-fluid">

                <!--------------------------
                  | Your Page Content Here |
                  -------------------------->

            </section>
            <!-- /.content -->
        </div>
        <!-- /.content-wrapper -->
        <v-footer/>
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

<style scoped>

</style>