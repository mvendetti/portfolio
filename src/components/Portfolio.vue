<template>
    <main class="container">
        <section :id="$route.name">
            <h1>some of my work</h1>
            <div class="card-container">
                <div class="card">
                    <img class="box-img" src="https://placeimg.com/640/480/any" />
                    <p class="title">Lorem ipsum dolor sit amet consectetur.</p>
                </div>
                <div class="card">
                    <img class="box-img" src="https://placeimg.com/640/480/any" />
                    <p class="title">Lorem ipsum dolor sit amet consectetur.</p>
                </div>
                <div class="card">
                    <img class="box-img" src="https://placeimg.com/640/480/any" />
                    <p class="title">Lorem ipsum dolor sit amet consectetur.</p>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
    export default {
        //
    }
</script>

<style lang="scss">
    #portfolio {
        margin-top: 10rem;
    }
    .card-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin: 0 auto;
        .card {
            display: flex;
            flex-direction: column;
            margin: 5px;
            .box-img {
                height: 150px;
                width: 210px;
                border-radius: 5px;
                filter: brightness(.8);
                -webkit-filter: brightness(.8);
            }
            .title {
                font-size: 1.1em;
                margin: 10px 0;
                width: 210px;
            }
        }
    }

    @media (max-width: 1340px) {
        .container {
            align-items: center;
            flex-direction: column;
        }
        .card {
            flex-direction: row;
            align-items: center;
            margin: 10px 0;
            background-color: #eaeaea;
            border-radius: 5px;
        }
        .box-img {
            margin-right: 15px;
        }
    }
</style>
