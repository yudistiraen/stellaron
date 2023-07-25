declare module '#app'{
    interface NuxtApp {}
}

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        scrollY: number
    }
}

export{}