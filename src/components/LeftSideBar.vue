<template>
    <aside class="main-sidebar" >
        <section class="sidebar">

            <div class="sidebar-form">
                <div class="image">
                    <img :src="previewImage" class="img-responsive" alt="预览图片">
                </div>
            </div>
            <ul class="sidebar-menu" data-widget="tree">
                <li class="header">function-viewer-v1.0</li>
                <template v-for="item in menuList">
                    <template v-if="item.menuUrl">
                        <li :class="currentUrl === item.menuUrl ? 'active' : ''">
                            <a href="#" :class="currentUrl == item.menuUrl? 'active' : ''">
                                <i :class="['iconfont', item.menuIcon]"></i>
                                <span>{{item.menuName}}</span>
                            </a>
                        </li>
                    </template>
                    <template v-else-if="item.menuSubLink">
                        <li class="treeview">
                            <a href="#" :class="currentUrl == item.menuUrl? 'active' : ''">
                                <i :class="['iconfont', item.menuIcon]"></i>
                                <span>{{item.menuName}}</span>
                                <span class="pull-right-container">
                                    <i class="fa fa-angle-left pull-right"></i>
                                </span>
                            </a>
                            <ul class="treeview-menu">
                                <li v-for="subitem in item.menuSubLink">
                                    <a href="#">{{subitem.menuName}}</a>
                                </li>
                            </ul>
                        </li>
                    </template>
                </template>
            </ul>
        </section>
    </aside>
</template>

<script>
    import {MENULIST} from "../assets/menuList";

    export default {
        name: "LeftSideBar",
        data() {
            return {
                previewImage: require('@/assets/images/preview.png'),
                menuList: MENULIST,
                currentUrl: '/'
            }
        },
        created: function () {
            this.currentUrl = this.$route.fullPath;
            console.log("currentUrl:" + this.currentUrl)
            this.$nextTick(() => {
                this.menuList.forEach((item, index) => { // 增加标记位,判断当前url然后自动展开或者激活对应项(刷新默认展开当前url的项)
                    if (!item.menuSubLink && item.menuUrl) {
                        this.currentUrl === item.menuUrl ? this.$set(item, 'defaultActive', true) : '';
                    } else {
                        if (item.menuSubLink) {
                            item.menuSubLink.forEach((subitem, index) => {
                                this.currentUrl === subitem.menuUrl ? this.$set(item, 'defaultActive', true) : '';
                            })
                        }
                    }
                })
            })
        },
        watch: {
            '$route'() {
                this.currentUrl = this.$route.fullPath; // 实时监测当前路由的变化并且赋值
            }
        }
    }
</script>

<style scoped>
    .image-panel {

    }

</style>