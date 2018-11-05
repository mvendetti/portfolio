<template>
    <main class="container">
        <section :id="$route.name">
            <div class="section-content">
                <h1>Mike <span style="font-weight: 600;">Vendetti</span></h1>
                <h2>front-end developer</h2>
            </div>
        </section>
    </main>
</template>

<script>
    export default {

    }
</script>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css?family=Montserrat|Roboto');

    * {
        margin: 0;
        padding: 0;
    }

    ::-webkit-scrollbar {
        width: 0px;
        height: 0px;
        background: transparent;
    }

    html {
        background-color: #cbd6d8;
        background-image: url('../assets/bg.jpg');
        background-repeat: no-repeat;
        background-position: center right;
        background-attachment: fixed;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        height: 100%;
        body {
            font-family: 'Montserrat', sans-serif;
            color: #333;
            overflow: scroll;
            h1 {
                font-size: 4em;
                font-weight: 300;
            }
            h2 {
                font-size: 1.5em;
                font-weight: 100;
                line-height: 30px;
            }
            .container {
                text-align: center;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
            }
        }
    }
</style>
