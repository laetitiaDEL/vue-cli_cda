<template>
  <!-- <div class="container"> -->
    <h1 class="text-center">El Gugus</h1>
    <active-user v-bind:nom="nom" v-bind:age="age"></active-user>
    <user-data v-on:maj="setData"></user-data>
  <!-- </div> -->
</template>

<script>

export default{
    data() {
        return {
          nom:"Michmich",
          age: 13
        };
    },
    methods: {
      setData(name, age){
        this.nom = name;
        this.age = age;
      }
    }
}
</script>