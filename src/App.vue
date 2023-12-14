<template>
  <!-- <div class="container"> -->
    <h1 class="text-center">El Gugus</h1>
    <active-user v-bind:nom="nom" v-bind:age="age" v-bind:src="src"></active-user>
    <user-data v-on:maj="setData"></user-data>
  <!-- </div> -->
</template>

<script>

export default{
    data() {
        return {
          nom:"Michmich",
          age: "58",
          src: "https://picsum.photos/200"
        };
    },
    methods: {
      setData(name, age, src){
        this.nom = name;
        this.age = age;
        this.src = src;
      }
    }
}
</script>