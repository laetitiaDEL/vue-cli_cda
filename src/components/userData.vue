<template>
    <div class="container bg-info my-1">
        <form v-on:submit.prevent="MAJData">
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Nom</label>
            <input v-model="enteredName" class="form-control form-control-sm" type="text" placeholder="Votre nom" aria-label=".form-control-sm example">
        </div>
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Age</label>
            <input v-model="enteredAge" class="form-control form-control-sm" type="text" placeholder="Votre âge" aria-label=".form-control-sm example">
        </div>      
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Lien image</label>
            <input v-model="enteredSrc" class="form-control form-control-sm" type="text" placeholder="Votre âge" aria-label=".form-control-sm example">
        </div>   
        <button class="btn btn-warning btn-sm col-12 my-1">MAJ des Data</button>
        </form>
    </div>
</template>

<script>
export default {

    data(){
        return{
            enteredName:"",
            enteredAge:"",
            enteredSrc:""
        }
    },

    methods:{
        MAJData(){
            this.$emit("maj", this.enteredName, this.enteredAge, this.enteredSrc);
        }
    }

}
</script>