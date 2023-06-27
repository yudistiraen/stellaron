<script setup lang="ts">
import { definePageMeta } from '../.nuxt/imports'

definePageMeta({
  layout: 'profile'
})

const occupations = [
  {
    name: 'PT - A',
    workPosition: 'Junior Front End',
    duration: '22-jan-2003 - 10-feb-2003',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae minus at qui reiciendis! Dolorem libero eum temporibus unde in placeat hic, laborum doloribus optio, esse vero veritatis asperiores id minus?'
  },
  {
    name: 'PT - B',
    workPosition: 'Junior Front End',
    duration: '22-jan-2003 - 10-feb-2003',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae minus at qui reiciendis! Dolorem libero eum temporibus unde in placeat hic, laborum doloribus optio, esse vero veritatis asperiores id minus?'
  },
  {
    name: 'PT - C',
    workPosition: 'Junior Front End',
    duration: '22-jan-2003 - 10-feb-2003',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae minus at qui reiciendis! Dolorem libero eum temporibus unde in placeat hic, laborum doloribus optio, esse vero veritatis asperiores id minus?'
  },
  {
    name: 'PT - D',
    workPosition: 'Front End',
    duration: '22-jan-2003 - 10-feb-2003',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae minus at qui reiciendis! Dolorem libero eum temporibus unde in placeat hic, laborum doloribus optio, esse vero veritatis asperiores id minus?'
  }
]
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <div>
        <header>
            <div class="flex min-w-full">
                <div>
                    <h1>Logo</h1>
                </div>
            </div>
        </header>
    </div>
    <div class="flex-1 max-w-container mt-16 m-auto">
        <div class="relative bg-red-500 after:h-3 after:w-3 after:bg-green-500 after:absolute before:h-3 before:w-3 before:bg-yellow-500 before:absolute" >
          test
        </div>
        <div class="grid grid-cols-2 gap-6">
          <div class="relative shadow-md px-3 py-2 bg-teal-200 rounded-md after:hidden after:hover:block after:hover:absolute after:hover:top-full after:hover:h-5 after:hover:w-fit after:p-5 after:z-10 after:hover:bg-green-500 after:content-['tooltip']"
          v-for="occupation in occupations" :key="occupation.name">
            <div class="relative z-10">
                <h2 class="font-medium text-xl">
                    {{occupation.name}} | {{occupation.workPosition}}
                </h2>
                <span class="text-sm italic">
                    {{occupation.duration}}
                </span>
            </div>
            <div class="relative z-10">
                {{ occupation.desc }}
            </div>
        </div>
      </div>
    </div>
    <div class="shrink-0 border p-5 min-w-full bg-red-500">
      footer
    </div>
  </div>

</template>
