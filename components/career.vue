<script setup lang="ts">
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
    year: 'Jul 2018 - Jan 2019',
    occupation: 'Junior Front End Developer',
    office: 'PT Solusi Untuk Negeri',
    location: 'Salatiga',
    description: `lLorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae, eos provident!
          Eaque, explicabo. Voluptate quo corporis, nam commodi in laborum fugiat, aliquam velit
          molestias natus, ad itaque dignissimos. Obcaecati, accusamus.`,
    primaryColor: 'bg-[#9251ac]',
    titleColor: 'text-[#9251ac]',
    textColor: 'text-[#f6a4ec]',
  },
  {
    year: 'Feb 2019 - Feb 2021',
    occupation: 'Front End Developer',
    office: 'Berau Coal Energy',
    location: 'Jakarta',
    description: `lLorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae, eos provident!
          Eaque, explicabo. Voluptate quo corporis, nam commodi in laborum fugiat, aliquam velit
          molestias natus, ad itaque dignissimos. Obcaecati, accusamus.`,
    primaryColor: 'bg-[#24b47e]',
    titleColor: 'text-[#24b47e]',
    textColor: 'text-[#aff1b6]',
  },
  {
    year: 'Feb 2021 - present',
    occupation: 'Front End Developer',
    office: 'Indodax',
    location: 'Jakarta',
    description: `lLorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae, eos provident!
          Eaque, explicabo. Voluptate quo corporis, nam commodi in laborum fugiat, aliquam velit
          molestias natus, ad itaque dignissimos. Obcaecati, accusamus.`,
    primaryColor: 'bg-[#555ac0]',
    titleColor: 'text-[#555ac0]',
    textColor: 'text-[#87bbfe]',
  },
])

// const computedClass = computed((career: any) => {
//   return ['after:bg-' + career.color]
// })
// function computedClass(career: any) {
//   return [
//     'after:absolute',
//     'after:left-14',
//     'after:top-3/4',
//     'after:h-full',
//     'after:w-1',
//     'after:gray-500',
//   ]
// }
</script>

<template>
  <div class="relative mx-auto mt-10 grid max-w-container grid-cols-3 gap-x-5 max-lg:grid-cols-1">
    <div class="col-start-1 row-start-1">
      <div class="h-64 w-auto">
        <img src="../statics/avatar.png" class="mx-auto h-64 w-auto object-cover" />
      </div>
    </div>
    <div class="col-start-1 row-start-2 mt-5 lg:col-start-1 lg:row-start-2">
      <div>
        <div class="text-2xl font-semibold tracking-wide">About Me :</div>
        <div class="mt-3">
          <p class="leading-5 tracking-wide">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus distinctio, voluptas
            quo porro nesciunt quasi vitae officiis quod! Nisi numquam porro molestiae vero quos
            eligendi illum inventore modi magni fugit.
          </p>
        </div>
      </div>
    </div>
    <div
      class="row-start-3 flex w-full flex-col lg:col-span-2 lg:col-start-2 lg:row-span-3 lg:row-start-1"
    >
      <div
        v-for="(career, index) in careers"
        :key="index"
        class="relative z-10 my-5 flex rounded-xl shadow-xl"
        :class="index < careers.length - 1 ? [''] : ''"
      >
        <div
          class="flex shrink basis-52 items-center justify-center rounded-l-xl p-5 font-semibold tracking-wide"
          :class="[career.textColor, career.primaryColor]"
        >
          {{ career.year }}
        </div>
        <div class="rounded-r-xl bg-white p-5">
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

<style lang="scss">
.timeline {
  display: flex;
  flex-direction: column;
  width: 50vw;
  margin: 5% auto;

  &__event {
    background: #fff;
    margin-bottom: 20px;
    position: relative;
    display: flex;
    margin: 20px 0;
    border-radius: 8px;
    box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25), 0 18px 36px -18px rgba(0, 0, 0, 0.3),
      0 -12px 36px -8px rgba(0, 0, 0, 0.025);

    &__title {
      font-size: 1.2rem;
      line-height: 1.4;
      text-transform: uppercase;

      font-weight: 600;
      color: #9251ac;
      letter-spacing: 1.5px;
    }
    &__content {
      padding: 20px;
    }
    &__date {
      color: #f6a4ec;
      font-size: 1.5rem;
      font-weight: 600;
      white-space: nowrap;
    }
    &__icon {
      border-radius: 8px 0 0 8px;
      background: #9251ac;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-basis: 40%;
      font-size: 2rem;
      color: #9251ac;
      padding: 20px;

      i {
        position: absolute;
        top: 50%;
        left: -65px;
        font-size: 2.5rem;
        transform: translateY(-50%);
      }
    }
    &__description {
      flex-basis: 60%;
    }

    &:after {
      content: '';
      width: 2px;
      height: 100%;
      background: #9251ac;
      position: absolute;
      top: 52%;
      // transform: translateY(-50%);
      left: -3.5rem;
      z-index: -1;
    }

    &:before {
      content: '';
      width: 5rem;
      height: 5rem;
      position: absolute;
      background: #f6a4ec;
      border-radius: 100%;
      left: -6rem;
      // right: 90%;
      top: 50%;
      transform: translateY(-50%);
      border: 2px solid #9251ac;
    }
    &--type2 {
      &:before {
        background: #87bbfe;
        border-color: #555ac0;
      }
      &:after {
        background: #555ac0;
      }
      .timeline__event__date {
        color: #87bbfe;
      }

      .timeline__event__icon {
        background: #555ac0;
        color: #555ac0;
      }
      .timeline__event__title {
        color: #555ac0;
      }
      .timeline__event__title {
      }
    }

    &--type3 {
      &:before {
        background: #aff1b6;
        border-color: #24b47e;
      }
      &:after {
        background: #24b47e;
      }
      .timeline__event__date {
        color: #aff1b6;
      }

      .timeline__event__icon {
        background: #24b47e;
        color: #24b47e;
      }
      .timeline__event__title {
        color: #24b47e;
      }
      .timeline__event__title {
      }
    }
    &:last-child {
      &:after {
        content: none;
      }
    }
  }
}

@media (max-width: 786px) {
  .timeline__event {
    flex-direction: column;
  }
  .timeline__event__icon {
    border-radius: 4px 4px 0 0;
  }
}
</style>
