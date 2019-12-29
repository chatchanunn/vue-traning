<template>
    <div>

        <h1> photo </h1>

        <img :style = "style" @click = "isSelected=!isSelected" src="/bag.jpg">

    </div>
</template>

<script>
export default {
    data () {
        return {
            isSelected : false,
            select : { border : 'solid black 5px',cursor : 'pointer'},
            noneselect : { border : 'none' , cursor : 'pointer'}
        }
    },
    computed : {
        style() {
            return this.isSelected ?  { border : 'solid black 5px',cursor : 'pointer'}  : { border : 'none' , cursor : 'pointer'}
        }
    }
    
}
</script>


<style>

</style>