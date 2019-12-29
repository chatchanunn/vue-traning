<template>
    <div>
        <h1> Search </h1>
        <pre> {{users}} </pre>
        <input @keyup = "getSearch()" v-model="searchstring" type="text" class="input">
    </div>
</template>

<script>
import axios from 'axios'
import _ from 'lodash'



const url = 'https://jsonplaceholder.typicode.com/users?q='
export default {
    created() {
        this.getSearch = _.debounce(this.getSearch, 3000) //higher order function
    },
    data() {
        return {
            searchstring : '',
            users : []
        }
    },
    methods : {
        /*loaduser() {
            axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
                this.users = res.data
            })
        */
        async getSearch(  ) {
            try {
                const res = await axios.get(url + this.searchstring) 
                this.users = res.data
                console.log(this.users.length)
            } catch(e) {
                //console.log(e.message)
            }
            
        }
        
    },
    
}
</script>