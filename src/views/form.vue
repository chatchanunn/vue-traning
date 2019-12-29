<template>
    <div>
        <p> {{len}} </p>

        <div class="field">
            
            <input v-model="person.name"  :class="`input ${className('name')}`" type="text" placeholder="Primary input">
            <button @click="checkLen()"> test </button>
        </div>
        <div class="field">
            
            <input v-model="person.surname"  :class="`input ${className('surname')}`" type="text" placeholder="Primary input">
            
        </div>
        <div class="field">
            <label class="checkbox">
                <input v-model="person.isMarried" type="checkbox" /> Married
            </label>
        </div>
        <p> {{person.name}} </p>
        <p> {{person.surname}} </p>
        <p> {{person.isMarried}} </p>
        <p> {{person.gender}} </p>
        <p> {{person.languages}} </p>


        <div class="control">
        <label class="radio">
            <input v-model ="person.gender" type="radio" value="M">
            Yes
        </label>
        <label class="radio">
            <input v-model ="person.gender" type="radio" value="F">
            No
        </label>
        </div>

        <div class="field">
            <div class="select is-multiple"> 
                <select v-model = "person.languages">
                    <option v-for="each in languages" :value="each" :key="each" > {{each}} </option>
                </select>
            </div>
        </div>


    </div>
</template>

<script>
import 'animate.css/animate.min.css' // ดูแต่ละ element ที่เวปของมัน

export default {
    data () {
        return {
            len : 10,
            person :{
                name : "john",
                surname : 'doe',
                isMarried : false,
                gender : "M",
                languages : ""
            },
            languages : ['Javascript','php','C#']

        }
        
    },
    /*computed : {
        className() {
            return {
                name : this.person.name ? 'is-success' : 'is-danger',
                surname : this.person.surname ? 'is-success' : 'is-danger',
            }
        }
    },
    */

    methods : {
        className( fieldName ) {
            return this.person[ fieldName ] ? 'is-success' : 'is-danger animated shake'
             
        },
        checkLen() {
            this.len = this.person.name.length
            
        }
    }
    
}
</script>