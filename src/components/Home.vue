<template>
    <div>
        <main>
            <section class="home">
                <div class="section-text">
                    <h1>Mike <span style="font-weight: 600;">Vendetti</span></h1>
                    <h2>front-end developer</h2>
                </div>
            </section>
        </main>
    </div>
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

    body {
        font-family: 'Montserrat', sans-serif;
        color: #333;
        h1 {
            font-size: 4em;
            font-weight: 300;
        }
        h2 {
            font-size: 1.5em;
            font-weight: 100;
            line-height: 30px;
        }
        section {
            text-align: center;
            height: 100vh;
            &.home {
                background-image: url('../assets/bg.jpg');
                background-repeat: no-repeat;
                background-position: center right;
                background-attachment: fixed;
                -webkit-background-size: cover;
                -moz-background-size: cover;
                -o-background-size: cover;
                background-size: cover;
            }
            .section-text {
                position: relative;
                top: 30%;
            }
        }
    }
</style>
