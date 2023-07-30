<script setup lang="ts">
import Aboutme from '~/components/aboutme.vue'
import Particles from '~/components/particles.vue'

</script>

<template>
  <!-- <Header/> -->
  <div class="relative">
    <div class="relative" id="hero-particles">
      <Particles id="hero-particles"/>
    </div>
    <div class="max-w-container mx-auto p-5 xl:px-0 pt-16 text-center">
      <div class="py-8 text-center">
        <div class="">
          <span class="text-3xl font-bold relative">
            Hi! im Yudistira Eka Nugraha
          </span>
          <div class="flex gap-3 justify-center">
            <div class="bg-orange-200 text-2xs py-0.5 px-2 rounded-full flex items-center">
              #FrontEnd
            </div>
            <div class="bg-red-200 text-2xs py-0.5 px-2 rounded-full flex items-center">
              #Javascript
            </div>
            <div class="bg-green-200 text-2xs py-0.5 px-2 rounded-full flex items-center">
              #Indonesia
            </div>

          </div>
        </div>
        <div class="mt-2">
          <span class="font-sans text-xs text-gray-500">
          </span>
        </div>
      </div>
    </div>
  </div>
  <div>
    <Aboutme/>
  </div>
  <footer class="max-w-container py-2 px-5 text-center mt-5 mx-auto">
    <div class="text-xs">
      &copy; Yudistira 2023 v.1.0.0
    </div>
  </footer>
</template>

