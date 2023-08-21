<script setup lang="ts">
import TailwindImg from '~/statics/tailwindcss.vue'
</script>

<template>
  <div class="mx-auto mt-10 max-w-container">
    <div class="flex flex-col items-center justify-center">
      <div
        class="relative px-8 text-3xl font-semibold tracking-wide before:absolute before:right-full before:top-1/2 before:h-0.5 before:w-full before:bg-black after:absolute after:left-full after:top-1/2 after:h-0.5 after:w-full after:bg-black"
      >
        Skills
      </div>
      <div>This is several skills that i have</div>
    </div>
    <div class="mt-5 flex flex-wrap gap-5">
      <div
        v-for="(items, index) in 4"
        :key="index"
        class="rounded-xl bg-white p-5 shadow-md transition-all hover:scale-105 lg:flex-1 lg:even:translate-y-5"
      >
        <div class="flex h-32 w-auto items-center justify-center border text-center">
          <TailwindImg class="h-32 w-auto px-3 py-2" />
        </div>
        <div class="text-xl font-semibold tracking-wide">Title</div>
        <div class="mt-3">
          <p class="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ratione veniam, cumque
            similique laborum molestiae, voluptates autem sint nihil vitae obcaecati. Quos
            temporibus, corrupti eius quis obcaecati facilis. Recusandae, enim!
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
