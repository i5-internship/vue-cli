<template>
    <div class="posts">
        <div class="post">
            <h1>Posts list</h1>
            <hr>
            <template v-for="post in posts">
                <div class="post-card">
                    <div class="card-body">
                        <router-link :to="{ name: 'post-show', params:{ id: post.id } }">{{ post.title }}</router-link>
                        | <span>{{ post.user.name }}</span>
                        <div>
                            Categories:
                            <template v-for="category in post.categories">
                                {{ category.name }},
                            </template>
                        </div>
                    </div>
                    <div class="card-title">
                        <div>{{ post.description }}</div>
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Index",
        data() {
            return {
                posts: []
            }
        },
        methods: {
            fetchPost() {
                this.$axios.get('http://127.0.0.1:8000/api/post').then((response) => {
                    if (response.data.code === 200) {
                        this.posts = response.data.data
                    }
                })
            }
        },
        mounted() {
            this.fetchPost()
        }
    }
</script>

<style scoped>
    .post {
        padding: 30px;
    }

    .post-card {
        margin-bottom: 20px;
    }

    .card-body {

    }
</style>