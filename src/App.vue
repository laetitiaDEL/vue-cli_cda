<template>
  <!-- <div class="container"> -->
    <h1 class="text-center">Les Amis</h1>
    <ul class="list-group">
      <un-ami leNom="Steven Seagal" lePhone="1234567" leMail="steven@seagal.com" premium="1"></un-ami>
      <un-ami leNom="Gérard Menvuça" lePhone="0987654" leMail="gérard@menvuca.com" premium="0"></un-ami>   
      <un-ami lePhone="0987654" leMail="gérard@menvuca.com" premium="1000"></un-ami>   
    </ul>
  <!-- </div> -->
</template>

<script>
export default{
  data(){
    return {
      lesAmis: [
        {
            id: 'lasticot',
            name: 'COCO L ASTICOT',
            phone: '01234 5678 991',
            email: 'coco@lasticot.com',
        },
        {
            id: 'janine',
            name: 'Janine DeLavega',
            phone: '09876 543 221',
            email: 'janine@delavega.com',
        },
    ],
    }
  },
}
</script>