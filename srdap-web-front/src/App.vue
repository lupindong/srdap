<template>
    <div class="flexible-content">
        Navbar
        <mdb-navbar class="flexible-navbar white" light position="top" scrolling>
            <mdb-navbar-brand href="https://mdbootstrap.com/docs/vue/" target="_blank"
            >简易实时数据分析平台
            </mdb-navbar-brand
            >
            <mdb-navbar-toggler>
                <mdb-navbar-nav left>
                    <mdb-nav-item
                            to="/dashboard"
                            waves-fixed
                            @click.native="activeItem = 1"
                            :action="true"
                            :class="activeItem === 1 && 'active'"
                    >
                        实时大屏
                    </mdb-nav-item>
                    <mdb-nav-item
                            to="/profile"
                            waves-fixed
                            @click.native="activeItem = 2"
                            :action="true"
                            :class="activeItem === 2 && 'active'"
                    >
                        影票分析TODO
                    </mdb-nav-item>
                    <mdb-nav-item
                            to="/tables"
                            waves-fixed
                            @click.native="activeItem = 3"
                            :action="true"
                            :class="activeItem === 3 && 'active'"
                    >
                        卖品分析TODO
                    </mdb-nav-item>
                    <!--<mdb-nav-item
                            to="/ehcart"
                            waves-fixed
                            @click.native="activeItem = 4"
                            :action="true"
                            :class="activeItem === 4 && 'active'"
                    >
                        Ehcart
                    </mdb-nav-item>-->
                </mdb-navbar-nav>
                <mdb-navbar-nav right>
                    <mdb-nav-item
                            href="https://github.com/lupindong"
                            waves-fixed
                            class="border border-light rounded mr-1"
                            target="_blank"
                    >
                        <mdb-icon fab icon="github" class="mr-2"/>
                        GitHub
                    </mdb-nav-item>
                </mdb-navbar-nav>
            </mdb-navbar-toggler>
        </mdb-navbar>
        /.Navbar
        <main>
            <div class="mt-5 p-4">
                <router-view></router-view>
            </div>
            <ftr color="primary-color-dark" class="text-center font-small darken-2">
                <hr class="my4"/>
                <p class="footer-copyright mb-0 py-3 text-center">
                    &copy; {{ new Date().getFullYear() }} Copyright:
                    <a href="https://www.lovexq.net"> lovexq.net </a>
                </p>
            </ftr>
        </main>
    </div>
</template>

<script>
    import {
        mdbFooter,
        mdbIcon,
        mdbNavbar,
        mdbNavbarBrand,
        mdbNavbarNav,
        mdbNavbarToggler,
        mdbNavItem,
        waves
    } from "mdbvue";

    export default {
        name: "AdminTemplate",
        components: {
            mdbIcon,
            mdbNavbar,
            mdbNavbarBrand,
            mdbNavbarNav,
            mdbNavbarToggler,
            mdbNavItem,
            ftr: mdbFooter
        },
        data() {
            return {
                activeItem: 1
            };
        },
        beforeMount() {
            this.activeItem = this.$route.matched[0].props.default.page;
        },
        mixins: [waves]
    };
</script>

<!--<style>-->
<!--    @import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap");-->

<!--    .navbar-light .navbar-brand {-->
<!--        margin-left: 15px;-->
<!--        color: #2196f3 !important;-->
<!--        font-weight: bolder;-->
<!--    }-->
<!--</style>-->

<style scoped>
    main {
        background-color: #000529;
    }

    .flexible-content {
        transition: padding-left 0.3s;
    }

    .flexible-navbar {
        transition: padding-left 0.5s;
        padding-left: 270px;
    }


    @media (max-width: 1199.98px) {
        .flexible-content {
            padding-left: 0;
        }

        .flexible-navbar {
            padding-left: 10px;
        }
    }
</style>
