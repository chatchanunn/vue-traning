<template>
    <div> 
        <div class="box">
            <h1> lv2 </h1>
            <pre> {{counter}} </pre>
            <pre> {{number}} </pre>
        </div>
    </div>
</template>

<script>
export default {
    props : ['counter'],
    computed : {
        number(){
            return this.$store.state.number
        }
    }
    
}
</script>