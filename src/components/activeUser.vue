<template>
    <div class="container my-1">
        <ul class="list-group">
            <div class="btn-group" role="group" aria-label="Basic example">
            </div>
            <ul  class="list-group">
                <li class="list-group-item">{{nom}}</li>
                <li class="list-group-item">{{age}}</li>
                <li class="list-group-item"><img v-bind:src="src"></li>
            </ul>

        </ul>
    </div> 
</template>

<script>
export default{
    props:{
        nom:{
            type:String,
            required: true
        },
        age:{
            type:String,
            required: true
        },
        src:{
            type:String,
            required: false
        }
    }
}
</script>