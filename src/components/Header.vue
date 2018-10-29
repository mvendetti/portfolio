<template>
    <header>
        <div class="nav-wrapper">
            <nav class="navbar">
                <span class="navbar-toggle" id="js-navbar-toggle">
                    <i class="fas fa-bars"></i>
                </span>
                <router-link :to="{ name: 'home' }" class="logo">MV</router-link>
                <ul class="main-nav" id="js-menu">
                    <li>
                        <router-link :to="{ name: 'portfolio' }" class="nav-links">Portfolio</router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'about' }" class="nav-links">About Mike</router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'contact' }" class="nav-links">Say Hello!</router-link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script>
    export default {
        //
    }
</script>

<style lang="scss">
    header {
        width: 100%;
        max-width: 100%;
        position: fixed;
        z-index: 999;
        background-color: rgba(0,0,0,0.1);
    }

    .nav-wrapper {
        margin: 0 auto;
        width: 90%;
    }

    .navbar {
        font-size: 18px;
        padding-bottom: 10px;
    }

    .main-nav {
        list-style-type: none;
        display: none;
    }

    .nav-links,
    .logo {
        text-decoration: none;
        color: #333;
    }

    .main-nav li {
        text-align: center;
        margin: 15px auto;
    }

    .logo {
        display: inline-block;
        font-size: 22px;
        margin-top: 10px;
        margin-left: 20px;
        font-weight: 900;
    }

    .navbar-toggle {
        position: absolute;
        top: 10px;
        right: 20px;
        cursor: pointer;
        font-size: 24px;
    }

    .active {
        display: block;
    }

    @media screen and (min-width: 768px) {
        .navbar {
            display: flex;
            justify-content: space-between;
            padding-bottom: 0;
            height: 70px;
            align-items: center;
        }

        .main-nav {
            display: flex;
            margin-right: 30px;
            flex-direction: row;
            justify-content: flex-end;
        }

        .main-nav li {
            margin: 0;
        }

        .nav-links {
            margin-left: 40px;
        }

        .logo {
            font-weight: 900;
            margin-top: 0;
        }

        .navbar-toggle {
            display: none;
        }

        .logo:hover,
        .nav-links:hover {
            color: rgba(255, 255, 255, 1);
        }
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .3s
    }

    .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
        opacity: 0
    }
</style>
