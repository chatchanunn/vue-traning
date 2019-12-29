<template>
    <div>

        <h1> user </h1>

        <!--<pre> {{users}} </pre>-->

        <p>
            <button @click ="getUsers()" class="button is-primary"> get user </button>
        </p>

        <p v-for="(each,idx) in users" :key="each.id">{{idx}} {{each.name}} </p>

        <p>
            <input v-model="query" type="text" class="input" max="10"/>
        </p>

        <table class="table">
            <tr>   
                <th>#</th>
                <th>id</th>
                <th>name</th>
                <th>email</th>
                <th>phone</th>
                <th>link</th>
            </tr>
            <tr v-for="(each,idx) in filteruser" :key="each.id">   
                <th>{{idx}}</th>
                <th>{{each.id}}</th>
                <th>{{each.name}}</th>
                <th>{{each.email}}</th>
                <th>{{each.phone}}</th>
                <th><router-link :to="`/user/${each.id}`">{{each.name}}</router-link></th>
            </tr>
        </table>
        <!--<figure v-for="(each) in users" :key="each.id" class="id-128x128">
            <img :src="each.url"/>
        </figure>-->
    </div>
</template>


<script>
import axios from 'axios' // import เมื่อใช้เพราะมันเป็นของที่ติดตั้งเพื่อใช้งาน เป็น lib
export default {
    data() {
        return {
            //users : [],
            query : ''
        }
    },
    methods : {
        /*loaduser() {
            axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
                this.users = res.data
            })
        */
        async getUsers() {
            try {
                const res = await axios.get('https://jsonplaceholder.typicode.com/users')
                //this.users = res.data
                this.updateUser(res.data);
                //console.log(this.users.length)
            } catch(e) {
                //console.log(e.message)
            }
            
        },

        updateUser(data) {
            this.$store.commit('updateUsers',data)
        }
        
    },
    computed : {
        users() {
            return this.$store.state.users
        },
        filteruser () {
            // .filter return เป็น array ถ้า เป็น .find จะเป็น ชิ้นเดียวแล้วหยุดทำ
            const pattern = new RegExp(this.query , 'i')
            return this.users.filter(each =>{
                return pattern.test(each.name)
            })
        }
    }
    
}
</script>