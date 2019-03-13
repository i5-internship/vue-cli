<template>
    <div class="user-show">
        <a @click="$router.go(-1)"><button>back</button></a>
        <h1>hello User Show page. {{ $route.params.id }}</h1>
    </div>
</template>

<script>
    export default {
        name: "UserShow"
    }
</script>

<style scoped>

</style>