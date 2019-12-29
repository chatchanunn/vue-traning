<template>
    <div>


        <nav class="navbar">
            <div class="navbar-brand">
                <a @click="toggleActive()" :class="`navbar-burger burger ${className}`" >
                    <span></span>
                    <span></span>
                    <span></span>
                </a>
            </div>
            <div :class="`navbar-menu ${className}`">
                <router-link 
                    @click.native="toggleActive()" 
                    v-for="each in links" 
                    :key="each.to" 
                    :to="each.to" 
                    class="navbar-item"> {{each.text}} 
                </router-link>
                
            </div>
        </nav>

    </div>


</template>


<script>
export default {
    data() { 
        return {
            
            isActive : false,
            links : [
                {   to : '/',
                    text : 'Home'
                },
                {   to : '/about' , 
                    text : 'About'
                },
                {   to : '/a1' , 
                    text : 'A1'
                },
                {   to : '/a2' , 
                    text : 'A2'
                },
                {   to : '/form' , 
                    text : 'Form'
                },
                {   to : '/photo' , 
                    text : 'Photo'
                },
                {   to : '/user' , 
                    text : 'User'
                },
                {   to : '/search' , 
                    text : 'Search'
                },
                {   to : '/props' , 
                    text : 'Props'
                }
            ]
        }
    },
    methods : {
        toggleActive() {
            this.isActive = !this.isActive
        }
    }, 
    computed : {
        className() {
            return this.isActive ? ' is-active' : ' '
        }
    },  
}
</script>