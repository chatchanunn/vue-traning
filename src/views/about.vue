<template>
    <div> 
        <h1> about </h1>

        <div id=test1 :class="classname">
            <div class="modal-background"></div>
            <div class="modal-content">
                <div class="box"> 
                    <h1 class="title">MMM.</h1>
                </div>
            </div>
            <!--<button @click="changebutton()" class="modal-close is-large" aria-label="close"></button>-->
            <button @click="show=false" class="modal-close is-large" aria-label="close"></button>
        </div>
        
        <!--<button @click="changebutton()" class="is-primary"> show modal </button>-->
        <button @click="show=true" class="is-primary"> show modal </button>
        
    </div>    
</template>

<script>
export default {
    data() { 
        return {
            show : false,
            isactive : ' '
        }
    },
    computed : {
        classname() {
            return this.show ? 'modal is-active' : 'modal'
        }
    },
    methods : {
        changebutton(  ) {
            if (this.isactive == ' is-active') {
                this.isactive = ' ';
            } else {
                this.isactive = ' is-active'
            }
        },
    }
    
}
</script>

<style>

</style>
