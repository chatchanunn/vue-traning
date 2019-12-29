<template>
    <div> 
        <h1 class="Title"> home </h1>

        <p> {{ counter }} </p>

        <progress :class="'progress'+classname" :value="counter" max="100">{{counter}}%</progress>
        <p>
            <button @click="updateCounter(1)" :class="'button'+classname"> Update </button>
        </p>
        
        
        
        
    </div>    
</template>

<script>
export default {
    data() {
        return {
            counter : 90
        }
    },
    computed :{
        classname() {
            return this.counter %2 ? ' is-primary' : ' is-danger'
        }
    },
    methods : {
    updateCounter( v_in ) {
        this.counter += v_in
        if (this.counter > 100) 
            this.counter = 0
      
    }
  }
}
</script>

<style>

</style>
