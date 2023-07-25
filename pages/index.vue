<script setup lang="ts">
import Header from '~/components/header.vue'
import Aboutme from '~/components/aboutme.vue'

// eslint-disable-next-line no-undef
// definePageMeta({
//   layout: 'profile'
// })

// const occupations = [
//   {
//     name: 'PT - A',
//     workPosition: 'Junior Front End',
//     duration: '22-jan-2003 - 10-feb-2003',
//     desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae minus at qui reiciendis! Dolorem libero eum temporibus unde in placeat hic, laborum doloribus optio, esse vero veritatis asperiores id minus?'
//   },
//   {
//     name: 'PT - B',
//     workPosition: 'Junior Front End',
//     duration: '22-jan-2003 - 10-feb-2003',
//     desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae minus at qui reiciendis! Dolorem libero eum temporibus unde in placeat hic, laborum doloribus optio, esse vero veritatis asperiores id minus?'
//   },
//   {
//     name: 'PT - C',
//     workPosition: 'Junior Front End',
//     duration: '22-jan-2003 - 10-feb-2003',
//     desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae minus at qui reiciendis! Dolorem libero eum temporibus unde in placeat hic, laborum doloribus optio, esse vero veritatis asperiores id minus?'
//   },
//   {
//     name: 'PT - D',
//     workPosition: 'Front End',
//     duration: '22-jan-2003 - 10-feb-2003',
//     desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae minus at qui reiciendis! Dolorem libero eum temporibus unde in placeat hic, laborum doloribus optio, esse vero veritatis asperiores id minus?'
//   }
// ]
</script>

<template>
  <Header/>
  <div class="">
    <div class="max-w-container mx-auto p-5 xl:px-0 pt-20 text-center relative grid grid-cols-2">
      <div class="py-8 text-left col-span-2 md:col-span-1">
        <div class="">
          <span class="text-2xl font-bold relative">
            Hi! im Yudistira Eka Nugraha
          </span>
        </div>
        <div class="mt-5">
          <span class="font-sans text-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quo dolores ratione placeat quia cum, aperiam tempora quasi architecto cupiditate harum natus quos provident! Nostrum eaque accusantium distinctio provident ad.
          </span>
        </div>
      </div>
      <div class="hidden md:block">
        picture
      </div>
    </div>
  </div>
  <Aboutme/>
  <footer class="max-w-container py-2 px-5 border">
    <div>
      this is a footer
    </div>
  </footer>
</template>

<style>
:root {
--delay: 0;
--duration: 800ms;
--iterations: 1;
}
/* •·•·•·•·•·•·•·•·•·•·•·•·•·•·•·•·•·•·•·•·•·•·•·•·•·•·•·•· */

.reveal-text,
.reveal-text::after {
animation-delay: var(--animation-delay, 2s);
animation-iteration-count: var(--iterations, 1);
animation-duration: var(--duration, 800ms);
animation-fill-mode: both;
animation-timing-function: cubic-bezier(0.0, 0.0, 0.2, 1);
}

.reveal-text {
--animation-delay: var(--delay, 0);
--animation-duration: var(--duration, 800ms);
--animation-iterations: var(--iterations, 1);
position: relative;
animation-name: clip-text;
color: #FFF;
white-space: nowrap;
cursor: default;

&::after {
content: "";
position: absolute;
z-index: 999;
top: 0;
left: 0;
right: 0;
bottom: 0;
background-color: #f2f98b;
transform: scaleX(0);
transform-origin: 0 50%;
pointer-events: none;
animation-name: text-revealer;
}
.reveal-text:nth-of-type(2){
    animation-delay: 1.5s;
}

}

@keyframes clip-text {
from {
clip-path: inset(0 100% 0 0);
}
to {
clip-path: inset(0 0 0 0);
}
}

@keyframes text-revealer {

0%, 50% {
transform-origin: 0 50%;
}

60%, 100% {
transform-origin: 100% 50%;
}

60% {
transform: scaleX(1);
}

100% {
transform: scaleX(0);
}
}

</style>
