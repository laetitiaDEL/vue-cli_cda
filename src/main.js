import { createApp } from 'vue';
import App from './App.vue';
import NewAmi from './components/NewAmi';
import UnAmi from './components/UnAmi';
// createApp(App).mount('#app')
//On peut aussi stocker l'appli dans une variable
const app = createApp(App);
app.component('new-ami',NewAmi);
app.component('un-ami',UnAmi);
app.mount('#app');

