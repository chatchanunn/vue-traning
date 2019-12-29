<template>
  <div>
    <h1> test </h1>
    <p :class = "classname"> {{ counter }} </p>
    
    <p> {{ name }} </p>
    <!--<a :href="url"> yahoo </a>-->
    <button @click="updateCounter(10)"> plus </button>
    -
    <button @click="updateCounter(-10)"> minus </button>


    <p> thai amount : {{ amount }}</p>
    <p> us amount : {{ usAmountText }}</p>
    <p> yuarn amount : {{ yAmount }}</p>
    <div v-if = "amount < 300">
      <button @click="updateAmount(10)"> plus </button>
      -
      <button @click="updateAmount(-10)"> minus </button>
    </div>

    
    


    

  </div>
</template>

<script>
const xxx = 100; // เอามาใช้ใน render  ไม่ได้
export default {
  data() { 
    return {
      counter : xxx,
      amount : 100,
      name : 'testname',
      url : 'https://www.yahoo.com',
      classname : 'red'
    }
  },
  computed : {
    usAmount() {
      return '$'+this.amount / 31;
    },
    usAmountText() {
      return '$'+this.usAmount.toString();
    },
    yAmount() { // computed ไม่รับค่า arg
      return this.amount /5;
    }
  },
  methods : {
    updateAmount( v_in ) {
      this.amount += v_in
    },
    updateCounter( v_in ) {
      this.counter += v_in
      if ( this.counter > 100) {
        this.classname = 'blue'
      } else {
        this.classname = 'red'
      }
        
    }
  }
  
}
</script>

<style>
.red {
  color : red;
}

.blue {
  color : blue;
}
</style>