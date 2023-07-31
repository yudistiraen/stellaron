<script setup lang="ts">
import HtmlIcon from '~/statics/icons/htmlIcon.vue'
import TailwindIcon from '~/statics/icons/tailwindIcon.vue'
import VueIcon from '~/statics/icons/vue.vue'
import JavascriptIcon from '~/statics/icons/javascriptIcon.vue'
import InstagramIcon from '~/statics/icons/instagram.vue'
import LinkedinIcon from '~/statics/icons/linkedin.vue'
import DiscordIcon from '~/statics/icons/discord.vue'
import FacebookIcon from '~/statics/icons/facebook.vue'
import WhatsappIcon from '~/statics/icons/whatsapp.vue'

// const skills = useState("skills", () => [
//   {
//     name: "HTML/CSS",
//     description: "",
//     icon: "~/statics/icons/javascript.svg",
//   },
//   {
//     name: "Javascript",
//     description: "",
//     icon: "~/statics/icons/javascript.svg",
//   },
//   {
//     name: "Tailwind",
//     description: "",
//     icon: "~/statics/icons/tailwind.svg",
//   },
//   {
//     name: "Vuejs",
//     description: "",
//     icon: "~/statics/icons/vue.svg",
//   },
// ])
</script>

<template>
  <div id="hero" class="z-20 mx-auto max-w-container px-5 xl:px-0">
    <div class="relative grid grid-cols-2">
      <div class="hidden md:block">
        <img src="../statics/icons/software-quality.png" />
      </div>
      <div id="about" class="col-span-2 md:col-span-1">
        <div>
          <h2 class="text-xl font-bold">About Me:</h2>
          <div>
            <p class="text-xs text-gray-500">
              Hello, im Front End web developer based on Indonesia, and have several years of
              experience working in the field of web development
            </p>
          </div>
        </div>
        <div class="mt-10 flex flex-wrap gap-3">
          <div class="group">
            <div
              class="relative h-fit rounded-md bg-white p-5 shadow-md transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]"
            >
              <div class="absolute inset-0 top-5 [backface-visibility:hidden]">
                <div class="text-center">
                  <div class="text-xs font-semibold">PT. Solusi Untuk Negeri | Salatiga</div>
                  <div class="text-xs italic text-gray-400">
                    Junior Front End Developer, Jul 2018 - Jan 2019
                  </div>
                </div>
              </div>
              <div
                class="h-full w-full transition-all duration-500 [backface-visibility:hidden] [transform:rotateY(180deg)]"
              >
                <p class="text-xs text-gray-400">
                  As a fresh graduate, i starting my career on PT. Solusi Untuk Negeri as a Junior
                  Front End Developer. In here, i learn how to work with other division like Back
                  End and QA. We have main Project called "Kartu Pintar", that's developed for
                  online students attendance check.
                </p>
              </div>
            </div>
          </div>
          <div class="group">
            <div
              class="relative h-fit rounded-md bg-white p-5 shadow-md transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]"
            >
              <div class="absolute inset-0 top-5 [backface-visibility:hidden]">
                <div class="text-center">
                  <div class="font-semibold">Berau Coal Energy | Jakarta</div>
                  <div class="text-xs italic text-gray-400">
                    Front End Developer, Feb 2019 - Feb 2021
                  </div>
                </div>
              </div>
              <div
                class="h-full w-full transition-all duration-500 [backface-visibility:hidden] [transform:rotateY(180deg)]"
              >
                <p class="text-xs text-gray-400">
                  By the time flies, i want to try another challange and trying to apply in Jakarta.
                  At this time, im working as Front End Developer at Berau Coal Energy for its
                  Business Units. Im learning to work with a bigger team here like Back End, QA, Dev
                  Ops, and staff opperations.
                </p>
              </div>
            </div>
          </div>
          <div class="group">
            <div
              class="relative h-fit shrink-0 grow rounded-md bg-white p-5 shadow-md transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]"
            >
              <div class="absolute inset-0 top-5 [backface-visibility:hidden]">
                <div class="text-center">
                  <div class="font-semibold">Indodax | Jakarta</div>
                  <div class="text-xs italic text-gray-400">
                    Front End Developer, Feb 2021 - present
                  </div>
                </div>
              </div>
              <div
                class="h-full w-full transition-all duration-500 [backface-visibility:hidden] [transform:rotateY(180deg)]"
              >
                <p class="text-xs text-gray-400">
                  I want to try another challange here, thats why i moved to Indodax. I want to know
                  more amazing people and developing bigger app. At Indodax, the team is more
                  complex, and im learning how to develop big app with amazing team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="skills" class="relative mt-20 flex flex-wrap gap-5 max-sm:gap-10">
      <!-- <div
                v-for="(skill, index) in skills"
                class="relative md:flex-1 border rounded-lg px-2 pb-5 grow shrink-0 text-center max-sm:w-full group hover:border-darken-main backdrop-blur-sm"
                data-aos="fade-up"
                :data-aos-delay="index * 100"
            >
                <div class="border flex w-12 h-12 bg-white rounded-full mx-auto -mt-8 group-hover:border-darken-main">
                    <HtmlIcon class="w-5 h-5 m-auto group-hover:fill-darken-main"/>
                </div>
                <div class="mt-2 group-hover:text-gray-700">
                    <div class="font-semibold">
                        {{skill.name}}
                    </div>
                    <div class="mt-5">
                        <p class="text-xs text-gray-500 group-hover:text-gray-700">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit suscipit eum cupiditate doloribus, nulla veritatis modi quod esse debitis voluptatum, eos alias dicta ratione minus aut, fugit laudantium? Possimus, corrupti!
                        </p>
                    </div>
                </div>
            </div> -->
      <div
        class="group relative shrink-0 grow rounded-lg border px-2 pb-5 text-center backdrop-blur-sm hover:border-darken-main max-sm:w-full md:flex-1"
        data-aos="fade-up"
      >
        <div
          class="mx-auto -mt-8 flex h-12 w-12 rounded-full border bg-white group-hover:border-darken-main"
        >
          <HtmlIcon class="m-auto h-5 w-5 group-hover:fill-darken-main" />
        </div>
        <div class="mt-2 group-hover:text-gray-700">
          <div class="font-semibold">HTML / CSS</div>
          <div class="mt-5">
            <p class="text-xs text-gray-500 group-hover:text-gray-700">
              HTML is the foundation of all web pages. It defines the structure of a page, while CSS
              defines its style. HTML and CSS are the beginning of everything you need to know to
              make your first web page! Learn both and start creating amazing websites.
            </p>
          </div>
        </div>
      </div>
      <div
        class="group relative shrink-0 grow rounded-lg border px-2 pb-5 text-center backdrop-blur-sm hover:border-darken-main max-sm:w-full md:flex-1"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div
          class="mx-auto -mt-8 flex h-12 w-12 rounded-full border bg-white group-hover:border-darken-main"
        >
          <JavascriptIcon class="m-auto h-5 w-5 group-hover:fill-darken-main" />
        </div>
        <div class="mt-2 group-hover:text-gray-700">
          <div class="font-semibold">Javascript</div>
          <div class="mt-5">
            <p class="text-xs text-gray-500 group-hover:text-gray-700">
              JavaScript, often abbreviated as JS, is a programming language that is one of the core
              technologies of the World Wide Web, alongside HTML and CSS.
            </p>
          </div>
        </div>
      </div>
      <div
        class="group relative shrink-0 grow rounded-lg border px-2 pb-5 text-center backdrop-blur-sm hover:border-darken-main max-sm:w-full md:flex-1"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div
          class="mx-auto -mt-8 flex h-12 w-12 rounded-full border bg-white group-hover:border-darken-main"
        >
          <VueIcon class="m-auto h-5 w-5 group-hover:fill-darken-main" />
        </div>
        <div class="mt-2 group-hover:text-gray-700">
          <div class="font-semibold">VueJs</div>
          <div class="mt-5">
            <p class="text-xs text-gray-500 group-hover:text-gray-700">
              Vue.js is an open-source model–view–viewmodel front end JavaScript library for
              building user interfaces and single-page applications. It was created by Evan You, and
              is maintained by him and the rest of the active core team members.
            </p>
          </div>
        </div>
      </div>
      <div
        class="group relative shrink-0 grow rounded-lg border px-2 pb-5 text-center backdrop-blur-sm hover:border-darken-main max-sm:w-full md:flex-1"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <div
          class="mx-auto -mt-8 flex h-12 w-12 rounded-full border bg-white group-hover:border-darken-main"
        >
          <TailwindIcon class="m-auto h-5 w-5 group-hover:fill-darken-main" />
        </div>
        <div class="mt-2 group-hover:text-gray-700">
          <div class="font-semibold">Tailwind</div>
          <div class="mt-5">
            <p class="text-xs text-gray-500 group-hover:text-gray-700">
              Tailwind CSS is an open source CSS framework. The main feature of this library is
              that, unlike other CSS frameworks like Bootstrap, it does not provide a series of
              predefined classes for elements such as buttons or tables.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div id="contacts" class="mt-10 grid grid-cols-2">
      <div class="relative">
        <section id="ontact_me">
          <div class="relative">
            <span class="text-xl font-bold"> Find me on social media </span>
          </div>
          <div class="mt-3 flex gap-4">
            <a href="https://www.instagram.com/yudis.enugraha/" target="_blank">
              <div
                class="group relative flex h-10 w-10 cursor-pointer rounded-full bg-white text-center shadow-md before:absolute before:-left-1 before:-top-1 before:h-12 before:w-12 before:animate-ping-slow before:rounded-full before:border before:border-darken-main before:duration-500"
              >
                <InstagramIcon class="m-auto h-5 w-5 transition-all group-hover:animate-jello" />
                <span class="sr-only">Follow on Instagram</span>
              </div>
            </a>

            <a href="https://www.linkedin.com/in/yudistira-nugraha-8b0756170/" target="_blank">
              <div
                class="group relative flex h-10 w-10 cursor-pointer rounded-full bg-white text-center shadow-md before:absolute before:-left-1 before:-top-1 before:h-12 before:w-12 before:animate-ping-slow before:rounded-full before:border before:border-darken-main before:duration-500"
              >
                <LinkedinIcon class="m-auto h-5 w-5 transition-all group-hover:animate-jello" />
                <span class="sr-only">Connect on Linkedin</span>
              </div>
            </a>

            <a href="https://discord.com/channels/seeu_enug" target="_blank">
              <div
                class="group relative flex h-10 w-10 cursor-pointer rounded-full bg-white text-center shadow-md before:absolute before:-left-1 before:-top-1 before:h-12 before:w-12 before:animate-ping-slow before:rounded-full before:border before:border-darken-main before:duration-500"
              >
                <DiscordIcon class="m-auto h-5 w-5 transition-all group-hover:animate-jello" />
                <span class="sr-only">Add on discord</span>
              </div>
            </a>

            <a href="https://www.facebook.com/Yudistira.Eka.Nugraha" target="_blank">
              <div
                class="group relative flex h-10 w-10 cursor-pointer rounded-full bg-white text-center shadow-md before:absolute before:-left-1 before:-top-1 before:h-12 before:w-12 before:animate-ping-slow before:rounded-full before:border before:border-darken-main before:duration-500"
              >
                <FacebookIcon class="m-auto h-5 w-5 transition-all group-hover:animate-jello" />
                <span class="sr-only">Add on facebook</span>
              </div>
            </a>
            <a href="https://wa.me/088980868393" target="_blank">
              <div
                class="group relative flex h-10 w-10 cursor-pointer rounded-full bg-white text-center shadow-md before:absolute before:-left-1 before:-top-1 before:h-12 before:w-12 before:animate-ping-slow before:rounded-full before:border before:border-darken-main before:duration-500"
              >
                <WhatsappIcon class="m-auto h-5 w-5 transition-all group-hover:animate-jello" />
                <span class="sr-only">Chat me on Whatsapp</span>
              </div>
            </a>
          </div>
        </section>
        <!-- will update in the future -->
        <!-- <button class="relative group flex justify-center items-center mt-3 bg-white shadow-md px-2.5 py-1.5 rounded-md">
                    <span class="text-xs">Download my resume</span>
                    <div class="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine"></div>
                </button> -->
      </div>
      <!-- will update in the future -->
      <!-- <div class="relative">
                <form method="post">
                    <div id="message">
                        <label>
                            <div>
                                <span class="text-xl font-bold">
                                    Or, Message me via G-mail:
                                </span>
                            </div>
                            <div class="mt-3">
                                <textarea class="w-full border rounded-sm outline-none text-xs hover:border-darken-main focus:border-darken-main" rows="4"></textarea>
                            </div>
                        </label>
                    </div>
                    <div class="text-right">
                        <button type="submit" class="border px-2 py-1 text-xs rounded-md ml-auto">
                            Send
                        </button>
                    </div>

                </form>
            </div> -->
    </div>
  </div>
</template>
