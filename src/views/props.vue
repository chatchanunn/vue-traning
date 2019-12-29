<template>
    <div> 
        <div class="box">
            <h1> props </h1>
            <pre> counter = {{counter}} </pre>
            <button @click="counter+=1" class = "button"> update </button>
            <button @click="$store.commit('updateNumber')" class = "button"> update number</button>
            <button @click="$store.commit('updateUser')" class = "button"> update User</button>
            
            <lv1 :counter="counter" />
        </div>
    </div>
</template>

<script>
import Lv1 from '../components/lv1.vue'

export default {
    components : {
        lv1 : Lv1
    },
    data() {
        return {
            counter : 1
        }
    }
    
}
</script>