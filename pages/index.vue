<script setup lang="ts">
import Hero from '~/components/hero.vue'
import Career from '~/components/career.vue'
import Skills from '~/components/skills.vue'
import Contact from '~/components/contactme.vue'

const appConfig = useAppConfig()
</script>

<template>
  <div class="max-xl:px-10">
    <Hero />
    <Career />
    <Skills />
    <Contact />
  </div>

  <!-- <Header/> -->
  <!-- <div class="relative">
    <div class="mx-auto max-w-container p-5 pt-16 text-center xl:px-0">
      <div class="py-8 text-center">
        <div class="">
          <div class="relative text-3xl font-bold">
            <span class="inline-block animate-showup overflow-hidden transition-all">Hi!</span>
            <span class="ml-2 inline-block animate-reveal overflow-hidden transition-all">
              <span class="animate-slidein transition-all">Im Yudistira Eka Nugraha</span>
            </span>
          </div>
          <div class="flex justify-center gap-3">
            <div class="flex items-center rounded-full bg-orange-200 px-2 py-0.5 text-2xs">
              #FrontEnd
            </div>
            <div class="flex items-center rounded-full bg-red-200 px-2 py-0.5 text-2xs">
              #Javascript
            </div>
            <div class="flex items-center rounded-full bg-green-200 px-2 py-0.5 text-2xs">
              #Indonesia
            </div>
          </div>
        </div>
        <div class="mt-2">
          <span class="font-sans text-xs text-gray-500"> </span>
        </div>
      </div>
    </div>
  </div> -->
  <div>
    <!-- <Aboutme /> -->
  </div>
  <footer class="mx-auto mt-5 max-w-container px-5 py-2 text-center">
    <div class="text-xs">&copy; Yudistira 2023 | v{{ appConfig.app.version }}</div>
  </footer>
</template>
