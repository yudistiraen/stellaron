<script setup lang="ts">
import InstagramIcon from '~/statics/icons/instagram.vue'
import LinkedinIcon from '~/statics/icons/linkedin.vue'
import DiscordIcon from '~/statics/icons/discord.vue'
import FacebookIcon from '~/statics/icons/facebook.vue'
import WhatsappIcon from '~/statics/icons/whatsapp.vue'
</script>

<template>
  <div id="contacts" class="mx-auto mt-20 grid max-w-container grid-cols-2">
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
  </div>
</template>
