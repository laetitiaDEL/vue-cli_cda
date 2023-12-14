<template>
  <!-- <div class="container"> -->
    <h1 class="text-center">Les Amis</h1>
    <new-ami v-on:add-ami="ajouterAmi"></new-ami>
    <ul class="list-group">
      <un-ami v-for="unAmi in lesAmis" v-on:delete="effacerAmi" v-bind:key="unAmi.id" v-bind:id="unAmi.id" v-bind:leNom="unAmi.name" v-bind:lePhone="unAmi.phone" v-bind:leMail="unAmi.email" v-bind:premium="unAmi.premium" v-on:mon-event-premium="afficherStatusPremium"></un-ami>
      <!--<un-ami leNom="Gérard Menvuça" lePhone="0987654" leMail="gérard@menvuca.com" premium="0"></un-ami>   
      <un-ami lePhone="0987654" leMail="gérard@menvuca.com" premium="1000"></un-ami>-->
    </ul>
  <!-- </div> -->
</template>

<script>

export default{
    data() {
        return {
            lesAmis: [
                {
                    id: 'lasticot',
                    name: 'COCO L ASTICOT',
                    phone: '01234 5678 991',
                    email: 'coco@lasticot.com',
                    premium: true
                },
                {
                    id: 'janine',
                    name: 'Janine DeLavega',
                    phone: '09876 543 221',
                    email: 'janine@delavega.com',
                    premium: true
                },
            ],
        };
    },
    methods: {
        afficherStatusPremium(leIdDansUnAmi) {
            const unAmiIdentified = this.lesAmis.find(unAmi => unAmi.id === leIdDansUnAmi);
            unAmiIdentified.premium = !unAmiIdentified.premium;
            console.log(unAmiIdentified);
        },

        ajouterAmi(name, phone, email){
          const newAmiContact = {
            id: new Date().toISOString(),
            name: name,
            phone: phone,
            email: email,
            premium: false
          };
          this.lesAmis.push(newAmiContact);
        },

        effacerAmi(id){
          //this.lesAmis = this.lesAmis.splice(id,1);
          this.lesAmis = this.lesAmis.filter((unAmi) => unAmi.id !== id)
        }
    }
}
</script>