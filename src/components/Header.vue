<template>
    <header>
        <div class="navbar">
            <nav class="navbar-items">
                <div class="navbar-link navbar-brand">
                    <router-link :to="{ name: 'home' }" class="logo">MV</router-link>
                </div>
            </nav>
            <nav class="navbar-items pull-right">
                <div class="navbar-link">
                    <router-link :to="{ name: 'portfolio' }" class="nav-links">Portfolio</router-link>
                </div>
                <div class="navbar-link">
                    <router-link :to="{ name: 'about' }" class="nav-links">About Mike</router-link>
                </div>
                <div class="navbar-link">
                    <router-link :to="{ name: 'contact' }" class="nav-links">Say Hello!</router-link>
                </div>
            </nav>
            <Slide right class="mobile-menu">
                    <router-link :to="{ name: 'home' }" class="mobile-link">Home</router-link>
                    <router-link :to="{ name: 'portfolio' }" class="mobile-link">Portfolio</router-link>
                    <router-link :to="{ name: 'about' }" class="mobile-link">About Mike</router-link>
                    <router-link :to="{ name: 'contact' }" class="mobile-link">Say Hello!</router-link>
            </Slide>
        </div>
    </header>
</template>

<script>
    import { Slide } from 'vue-burger-menu'

    export default {
        components: {
            Slide
        }
    }
</script>

<style lang="scss">
    header {
        width: 100%;
        max-width: 100%;
        position: fixed;
        z-index: 999;
        background-color: rgba(0,0,0,0.1);
        .navbar {
            display: flex;
            padding: 1.5em;
            width: 95%;
            nav {
                &.navbar-items {
                    display: flex;
                    .navbar-link {
                        margin-left: 2em;
                        font-size: 1.2em;
                        a {
                            text-decoration: none;
                            color: #333;
                            transition: 0.3s;
                            -webkit-transition: 0.3s;
                            &:hover {
                                color: #fff;
                                transition: 0.3s;
                                -webkit-transition: 0.3s;
                            }
                        }
                    }
                }
                &.pull-right {
                    margin-left: auto;
                }
            }
            .navbar-brand {
                font-size: 1.5em !important;
                font-weight: 900;
            }
            .mobile-menu {
                display: none;
                .mobile-link {
                    font-size: 1.2em;
                    font-weight: 900;
                    color: #fff;
                }
            }
        }
    }

    @media only screen and (max-width: 768px) {
        .navbar {
            padding: 3em !important;
            .navbar-brand {
                display: none;
            }
            .navbar-items {
                display: none !important;
            }
            .mobile-menu {
                display: block !important;
            }
        }
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .3s
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
        opacity: 0
    }
</style>
