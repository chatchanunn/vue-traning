<template>
    <div>
        <h1> profile </h1>
        {{user}}
    </div>
</template>

<script>
import axios from 'axios'
const url = 'https://jsonplaceholder.typicode.com/users'
export default {
    async mounted() {
        //console.log(this.$route.params.id)
        const id = this.$route.params.id
        try {
            const res = await axios.get(url + '/' + id)
            this.user = res.data
            //console.log(this.users.length)
        } catch(e) {
            console.log(e.message)
        }
    },
    data() {
        return {
            user:{}
        }
    },

}
</script>