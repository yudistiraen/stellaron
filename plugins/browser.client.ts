import AOS from 'aos'
import 'aos/dist/aos.css';

export default defineNuxtPlugin(() => {
    console.log('plugin')
    AOS.init({
        
    })
})