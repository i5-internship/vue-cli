<template>
    <div class="post-show">
        <div class="post">
            <template v-if="post != null">
                <div>
                    <label>Title</label>: <span>{{ post.title }}</span>
                    <p>User: <i>{{ post.user.name }}</i></p>
                    <p>Description: {{ post.description }}</p>
                </div>
            </template>
            <template v-else>
                Data not found
            </template>
        </div>
    </div>
</template>

<script>
    export default {
        name: "show",
        data() {
            return {
                post: null
            }
        },
        methods: {
            fetchPostById(id) {
                this.$axios.get('http://127.0.0.1:8000/api/post/show/' + id).then((response) => {
                    if (response.data.code === 200) {
                        this.post = response.data.data
                    }
                })
            }
        },
        mounted() {
            this.fetchPostById(this.$route.params.id)
        }
    }
</script>

<style scoped>
    .post{
        padding: 30px;
    }
</style>