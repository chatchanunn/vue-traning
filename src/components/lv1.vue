<template>
    <div> 
        <div class="box">
            <h1> lv1 </h1>
            <pre> counter props : {{counter}} </pre>
            <lv2 :counter="counter"/>
        </div>
    </div>
</template>

<script>
import Lv2 from './lv2.vue'

export default {
    props : ['counter'],
    components : {
        lv2 : Lv2
    }
    
}
</script>