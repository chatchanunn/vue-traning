<template>
    <div>
        <h1>contact</h1>
        <div class="list is-hoverable">
            <p v-for="each in languages" :key="each.text" class="list-item"> Languages > {{each.text}}</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            languages : [
                {text : 'JavaScript'},
                {text : 'PHP'},
                {text : 'Java'}
            ]
        }
    }
}
</script>