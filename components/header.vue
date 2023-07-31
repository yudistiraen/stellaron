<script setup lang="ts">
// interface Imenu {
//   name: string
//   to: string
// }
const navMenu = useState('navMenu', () => [
  {
    name: 'About',
    to: '#about',
  },
  {
    name: 'Skills',
    to: '#skills',
  },
  {
    name: 'Contacts',
    to: '#contacts',
  },
])
</script>

<template>
  <header
    class="sticky top-0 z-10 px-5 pb-2 pt-5 xl:px-0"
    :class="[scrollY > 0 ? 'backdrop-blur shadow-sm' : 'bg-transparent']"
  >
    <div class="flex">
      <div class="mx-auto hidden w-full items-center justify-end gap-10 md:flex">
        <div
          v-for="menu in navMenu"
          :key="menu.name"
          class="relative transition-all duration-100 after:absolute after:-bottom-1 after:left-0 after:h-1 after:w-0 after:bg-[#64CCC5] after:transition-all after:duration-100 hover:text-[#64CCC5] hover:after:w-full"
        >
          <a :href="menu.to">
            <span class="text-xl">{{ menu.name }}</span>
          </a>
        </div>
      </div>
    </div>
  </header>
</template>
