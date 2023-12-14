<template>
    <div class="container my-1">
        <ul class="list-group">
            <div class="btn-group" role="group" aria-label="Basic example">
            </div>
            <ul  class="list-group">
                <li class="list-group-item">{{nom}}</li>
                <li class="list-group-item">{{age}}</li>
            </ul>

        </ul>
    </div> 
</template>

<script>
export default{
    props:{
        nom:{
            type:String,
            required: false
        },
        age:{
            type:Number,
            required: false
        }
    },
    data(){
        return{
        };
    }
}
</script>