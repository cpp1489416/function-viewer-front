<template>
    <div class="content-wrapper" style="min-height:100%;">

        <section class="content">
            <div class="box box-primary">
                <div class="box-header with-border">
                    <h3 class="box-title">请输入方程</h3>
                </div>
                <!-- /.box-header -->
                <!-- form start -->
                <form role="form">
                    <div class="box-body">
                        <div class="form-group">
                            <label for="exampleInputEmail1">方程（带x和y自变量）</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter function">
                        </div>
                        <div class="form-group">

                            <button type="submit" class="btn btn-primary">提交</button>
                        </div>
                    </div>

                </form>
            </div>

            <div class="box box-prmary">
                <div class="box-header with-border">
                    <h3 class="box-title">图像</h3>
                </div>
                <div class="box-body">
                    <img src="http://10.0.75.1:8080/img/preview.4afeff0e.png"/>
                </div>
            </div>
        </section>
    </div>
</template>

<script>

    export default {
        name: 'HelloWorld',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        components: {}
    }
</script>
