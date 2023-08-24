<script setup lang="ts">
import HtmlIcon from '~/statics/icons/htmlIcon.vue'
import TailwindIcon from '~/statics/icons/tailwindIcon.vue'
import VueIcon from '~/statics/icons/vue.vue'
import JavascriptIcon from '~/statics/icons/javascriptIcon.vue'

const skills = useState('skills', () => [
  {
    name: 'HTML/CSS',
    description: `HTML is the foundation of all web pages. It defines the structure of a page, while CSS
              defines its style. HTML and CSS are the beginning of everything you need to know to
              make your first web page! Learn both and start creating amazing websites.`,
    icon: HtmlIcon,
  },
  {
    name: 'Javascript',
    description: `JavaScript, often abbreviated as JS, is a programming language that is one of the core
              technologies of the World Wide Web, alongside HTML and CSS.`,
    icon: JavascriptIcon,
  },
  {
    name: 'Tailwind',
    description: `Tailwind CSS is an open source CSS framework. The main feature of this library is
              that, unlike other CSS frameworks like Bootstrap, it does not provide a series of
              predefined classes for elements such as buttons or tables.`,
    icon: TailwindIcon,
  },
  {
    name: 'Vuejs',
    description: `Vue.js is an open-source model–view–viewmodel front end JavaScript library for
              building user interfaces and single-page applications. It was created by Evan You, and
              is maintained by him and the rest of the active core team members.`,
    icon: VueIcon,
  },
])
</script>

<template>
  <div class="mx-auto mt-10 max-w-container">
    <div class="flex flex-col items-center justify-center">
      <div
        class="relative px-8 text-3xl font-semibold tracking-wide before:absolute before:right-full before:top-1/2 before:h-0.5 before:w-full before:bg-white after:absolute after:left-full after:top-1/2 after:h-0.5 after:w-full after:bg-white"
      >
        Skills
      </div>
      <div>This is several skills that i have</div>
    </div>
    <div class="mt-5 flex flex-wrap gap-5">
      <div
        v-for="(skill, index) in skills"
        :key="index"
        class="relative z-10 rounded-xl bg-[#5C5470]/50 from-indigo-500 via-purple-500 to-pink-500 p-5 shadow-md transition-all before:absolute before:left-[-2px] before:top-[-2px] before:-z-10 before:h-[calc(100%+5px)] before:w-[calc(100%+5px)] before:animate-glowing before:rounded-md before:bg-gradient-to-r before:bg-[size:400%] before:opacity-0 before:blur-sm before:content-[''] after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-full after:rounded-md after:bg-[#352F44] hover:before:opacity-100 lg:flex-1 lg:even:translate-y-5"
      >
        <div
          class="flex h-32 w-auto items-center justify-center rounded-md border border-white text-center"
        >
          <component :is="skill.icon" class="h-32 w-auto p-3" />
        </div>
        <div class="mt-3 text-xl font-semibold tracking-wide">{{ skill.name }}</div>
        <div class="mt-3">
          <p class="leading-5 tracking-wide text-gray-200">
            {{ skill.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
