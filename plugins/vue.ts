export default defineNuxtPlugin((nuxt)=>{
    nuxt.vueApp.mixin({
        data(){
            return {
                scrollY:0
            }
        },
        directives:{
        },
        mounted(){
            window.addEventListener('scroll', () =>{
                this.scrollY = window.scrollY
            })
        }
    })
})