<template>
    <div class="container my-1">
        <ul class="list-group">
            <h2 class="list-group-item">{{leNom}} {{premium ? '(Ami premium)':'(Ami nul)'}}</h2> 
            <button @click="afficherPremium" class="btn btn-danger">Premium ?</button>
            <button @click="afficherDetails" class="btn btn-primary">{{detailsVisibles? 'Masquer': 'Afficher'}}</button>           
            <ul v-if="detailsVisibles" class="list-group">
                <li class="list-group-item">{{lePhone}}</li>
                <li class="list-group-item">{{leMail}}</li>
            </ul>
        </ul>
    </div> 
</template>

<script>
export default {
    /*props:[
        'leNom',
        'lePhone',
        'leMail',
        'premium'
    ],*/
    props:{
        id:{
            type:String,
            required: true,
        },
        leNom:{
            type:String,
            required:true
        },
        lePhone:{
            type:String,
            required:true
        },
        leMail:{
            type:String,
            required:true
        },
        premium:{
            type:Boolean,
            required:false,
            default:false,
            //validator: function(value){return value==='1' || value==='0'}
        }
    },
    emits:{
        'mon-event-premium': function(id){
            if(id){
                return true;
            }else{
                console.warn("c'est le message d'erreur !");
                return false;
            }
        }
    },
    data(){
        return{
            detailsVisibles:false,
            /*unPote:{
                id:'jojo',
                name:"jojoLeBarjo",
                phone:'123 12346 24',
                email:'jojo@barjo.com',
            },*/
            // Pour contourner le pb des props on passe par une data, elle on pourra la modifier dans ce composant
            //premiumData: this.premium
        }
    },
    methods:{
        afficherDetails(){
            this.detailsVisibles = !this.detailsVisibles;
        },
        afficherPremium(){
            //this.premiumData = !this.premiumData;
            this.$emit("mon-event-premium");
        }
    },
}
</script>