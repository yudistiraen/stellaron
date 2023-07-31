<script setup lang="ts">
import { tsParticles } from 'tsparticles'

// const attrs = useAttrs()
const particlesProp = withDefaults(
  defineProps<{
    id?: string
    value?: number
    color?: any
  }>(),
  {
    id: 'particles',
    value: 24,
    color: ['#4682A9', '#00acff'],
  }
)

onMounted(() => {
  tsParticles.load(particlesProp.id, {
    particles: {
      number: {
        value: particlesProp.value,
        density: {
          enable: true,
          value_area: 1000,
        },
      },
      color: {
        value: particlesProp.color,
      },

      shape: {
        type: 'circle',
        stroke: {
          width: 3,
          color: particlesProp.color[0],
        },
        polygon: {
          nb_sides: 5,
        },
        image: {
          src: 'img/github.svg',
          width: 100,
          height: 100,
        },
      },
      opacity: {
        value: 0.6,
        random: true,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 2,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 120,
        color: particlesProp.color,
        opacity: 0.5,
        width: 1.5,
      },
      move: {
        enable: true,
        speed: 1,
        direction: 'top',
        random: false,
        straight: false,
        out_mode: 'out',
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onHover: {
          enable: true,
          mode: 'grab',
        },
        onclick: {
          enable: false,
          mode: 'push',
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 140,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 400,
          size: 5,
          duration: 2,
          opacity: 8,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
  })
})
</script>

<template>
  <div class="absolute inset-0" v-bind="$attrs"></div>
</template>
