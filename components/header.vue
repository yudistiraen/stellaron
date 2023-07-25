<script setup lang="ts">
interface Imenu {
    name: string
    to: string
}
const navMenu = useState('navMenu', () => ([
  {
    name: 'About',
    to: '#about'
  },
  {
    name: 'Experience',
    to: '#experience'
  },
  {
    name: 'FAQ',
    to: '#'
  },
  {
    name: 'Contacts',
    to: '#'
  }
]))
</script>

<template>
  <header
  class="z-10 pt-5 px-5 xl:px-0 finisher-header sticky top-0 pb-2"
    :class="[
      scrollY > 0 ? 'bg-red-500': 'bg-transparent'
    ]"
  >
      <div class="flex ">
          <!-- <div class="shrink-0">
              <h1 class="font-bold text-3xl">Stellaron</h1>
          </div> -->
          <div class="gap-10 w-full mx-auto items-center justify-end hidden md:flex"
          >
              <div
                  v-for="menu in navMenu" :key="menu.name"
                  class="relative hover:text-[#64CCC5] transition-all duration-100 after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-1 after:bg-[#64CCC5] after:transition-all after:duration-100 hover:after:w-full">
                  <a :href="menu.to">
                      <span class="text-xl">{{menu.name}}</span>
                  </a>
              </div>
          </div>
      </div>
  </header>
</template>