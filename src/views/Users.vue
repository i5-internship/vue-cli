<template>
    <div class="user">
        <ul>
            <li v-for="user in users">
                <router-link :to="{ name: 'user-show', params: {id: user.id}}">{{ user.name }}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "User",
        data () {
            return {
                users: [
                    {id: 1, name: 'John Dev'},
                    {id: 2, name: 'Chris '},
                    {id: 3, name: 'Jacky Chan'}
                ]
            }
        }
    }
</script>

<style scoped>

</style>