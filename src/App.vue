<template>
    <div id="app">
        <div class="wrapper">

            <!-- Main Header -->
            <v-header/>
            <!-- Left side column. contains the logo and sidebar -->
            <v-left-side-bar/>

            <router-view/>

            <!-- /.content-wrapper -->
            <v-footer/>
        </div>
    </div>
</template>

<script>
    import LeftSideBar from '@/components/LeftSideBar'
    import Header from '@/components/Header'
    import Footer from '@/components/Footer'

    export default {
        name: 'app',
        components: {
            'v-left-side-bar': LeftSideBar,
            'v-header': Header,
            'v-footer': Footer
        },
        mounted() {
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        min-height: 100%;
    }
</style>
