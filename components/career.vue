<script setup lang="ts">
// import Download from '~/statics/icons/download.vue'

const careers = useState<
  {
    year: string
    occupation: string
    office: string
    location: string
    description: string
    primaryColor: string
    textColor: string
    titleColor: string
  }[]
>('careers', () => [
  {
    year: '2018 - 2019',
    occupation: 'Junior Front End Developer',
    office: 'PT Solusi Untuk Negeri',
    location: 'Salatiga',
    description: `As a fresh graduate, i starting my career on PT. Solusi Untuk Negeri as a Junior
                  Front End Developer. In here, i learn how to work with other division like Back
                  End and QA. We have main Project called "Kartu Pintar", that's developed for
                  online students attendance check.`,
    primaryColor: 'bg-[#9251ac]',
    titleColor: 'text-[#9251ac]',
    textColor: 'text-[#f6a4ec]',
  },
  {
    year: '2019 - 2021',
    occupation: 'Front End Developer',
    office: 'Berau Coal Energy',
    location: 'Jakarta',
    description: `By the time flies, i want to try another challange and trying to apply in Jakarta.
                  At this time, im working as Front End Developer at Berau Coal Energy for its
                  Business Units. Im learning to work with a bigger team here like Back End, QA, Dev
                  Ops, and staff opperations.`,
    primaryColor: 'bg-[#24b47e]',
    titleColor: 'text-[#24b47e]',
    textColor: 'text-[#aff1b6]',
  },
  {
    year: '2021 - present',
    occupation: 'Front End Developer',
    office: 'Indodax',
    location: 'Jakarta',
    description: `I want to try another challange here, thats why i moved to Indodax. I want to know
                  more amazing people and developing bigger app. At Indodax, the team is more
                  complex, and im learning how to develop big app with amazing team.`,
    primaryColor: 'bg-[#1597BB]',
    titleColor: 'text-[#1597BB]',
    textColor: 'text-[#8FD6E1]',
  },
])
</script>

<template>
  <div class="relative mx-auto mt-10 grid max-w-container grid-cols-3 gap-x-5 max-lg:grid-cols-1">
    <div
      class="col-start-1 row-span-3 row-start-1 row-end-2 mt-5 h-full"
      data-aos="fade-up"
      data-aos-once="true"
      data-aos-duration="700"
    >
      <div>
        <div class="w-full justify-center items-center flex">
          <div class="h-64 w-64 overflow-hidden rounded-full">
            <img src="../statics/avatar.png" class="mx-auto h-64 w-auto object-cover" />
          </div>
        </div>
        <div class="text-2xl font-semibold tracking-wide">About Me :</div>
        <div class="mt-3">
          <p class="leading-5 tracking-wide">
            Hello, I'm Yudis, a passionate Front-End Web Developer hailing from the vibrant city of
            Depok, Indonesia. With a creative mind and a keen eye for design, I specialize in
            crafting visually stunning and user-friendly websites that captivate and engage
            audiences. I'm dedicated to continuous improvement and I'm still learning, always
            seeking to expand my skills and knowledge in this ever-evolving field. When I'm not
            immersed in the world of code, I enjoy Gaming, listening music, which provides me with
            fresh perspectives and inspiration for my work.
          </p>
        </div>
        <!-- <div class="mt-12 w-fit">
          <button
            class="relative flex items-center gap-3 rounded-md from-indigo-500 via-purple-500 to-pink-500 px-4 py-2 text-white before:absolute before:left-[-2px] before:top-[-2px] before:-z-10 before:h-[calc(100%+5px)] before:w-[calc(100%+5px)] before:animate-glowing before:rounded-md before:bg-gradient-to-r before:bg-[size:400%] before:opacity-0 before:blur-sm before:content-[''] after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-full after:rounded-md after:bg-[#352F44] hover:before:opacity-100"
          >
            <Download class="h-5 w-5 fill-white" />
            <div>Download my Resume</div>
          </button>
        </div> -->
      </div>
    </div>
    <div
      class="row-start-3 flex w-full flex-col lg:col-span-2 lg:col-start-2 lg:row-span-3 lg:row-start-1"
    >
      <div
        v-for="(career, index) in careers"
        :key="index"
        class="relative z-10 my-5 flex flex-col rounded-xl shadow-[0_30px_60px_-12px_rgba(0,0,0,0.3)] md:flex-row"
        data-aos="fade-left"
        data-aos-once="true"
        data-aos-duration="700"
        :data-aos-delay="index * 100"
        :class="index < careers.length - 1 ? [''] : ''"
      >
        <div
          class="flex shrink-0 basis-52 items-center justify-center rounded-t-xl p-5 text-xl font-semibold tracking-wide md:rounded-l-xl md:rounded-r-none"
          :class="[career.textColor, career.primaryColor]"
        >
          {{ career.year }}
        </div>
        <div class="grow rounded-b-xl bg-[#352F44] p-5 md:rounded-l-none md:rounded-r-xl">
          <div>
            <div class="text-xl font-semibold tracking-widest" :class="career.titleColor">
              {{ career.office }} | {{ career.location }}
            </div>
            <div class="text-sm text-gray-400">
              {{ career.occupation }}
            </div>
          </div>
          {{ career.description }}
        </div>
      </div>
    </div>
  </div>
</template>
