<script setup lang="ts">
import { Button } from '@/components/ui/button'

</script>

<template>
  <div>
    <header class="bg-cream text-brown px-8 py-6">

      <div class= "flex justify-between items-center"> 

        <h1 class="playfair-display text-3xl">
          MEL'S LIBRARY
        </h1>
        
        <span class="text-sm tracking-widest">
          ART PORFOLIO ✦
        </span>

      </div>

      <hr class="border-brown/40 my-5 w-full border-t-2 mx-auto" />
      
      <div class="flex flex-col items-center text-center py-12 gap-3">

        <h2 class="playfair-display text-3xl">
        A little space of creativity
        </h2>

        <p>
        Digital art, traditional art, painting & other things I love creating.
        </p>
      
      </div>

    </header>
      
      
      <main class="w-full min-h-screen px-8 py-10 bg-lightbrown">
        <section class="grid grid-cols-2 md:grid-cols-5 gap-4 items-end">

          <RouterLink
            to="/about-me"
            class="relative flex flex-col items-center justify-between
            w-full min-h-87.5 md:min-h-112.5
            bg-[#B76550] text-[#F5E8D8]
            border-x-[6px] border-[#8D493B] shadow-lg
            p-5 hover:-translate-y-3 transition-transform duration-300"
          >
            <span class="text-3xl">✦</span>

            <div class="w-full border-y-2 border-cream/60 py-5 text-center">
              <span class="font-serif text-xl">About Me</span>
            </div>

            <span class="text-3xl">✦</span>
          </RouterLink>

          <RouterLink
            to="/proyectos-digitales"
            class="relative flex flex-col items-start justify-between
            w-full min-h-87.5 md:min-h-112.5
            bg-mustard text-[#75513D]
            border-l-10 border-[#A47D30] shadow-lg
            p-5 hover:-translate-y-3 transition-transform duration-300"
          >
            <span class="text-5xl font-light">01</span>

            <div class="flex flex-col gap-1">
              <span class="text-xs tracking-[0.3em]">CREATIVE WORK</span>
              <span class="font-serif text-2xl font-bold">Digital<br/>Art.</span>
            </div>

            <div class="self-end text-5xl">◈</div>
          </RouterLink>

          <RouterLink
            to="/proyectos-fisicos"
            class="relative flex flex-col items-center justify-center
            w-full min-h-87.5 md:min-h-112.5
            bg-dustyblue text-[#F5E8D8]
            border-l-14 border-[#526B7B] shadow-lg
            p-5 hover:-translate-y-3 transition-transform duration-300"
          >
            <div class="absolute -left-2.5 top-0 bottom-0 flex flex-col justify-around">
              <span class="w-2 h-2 rounded-full bg-cream"></span>
              <span class="w-2 h-2 rounded-full bg-cream"></span>
              <span class="w-2 h-2 rounded-full bg-cream"></span>
              <span class="w-2 h-2 rounded-full bg-cream"></span>
            </div>

            <span class="text-4xl">✎</span>

            <span class="font-serif text-xl text-center mt-5">
              Traditional Art
            </span>

            <span class="absolute bottom-5 right-4 text-xs tracking-widest">
              VOL. 01
            </span>
          </RouterLink>

          <RouterLink
            to="/comisiones"
            class="relative flex flex-col items-center justify-center
            w-full min-h-87.5 md:min-h-112.5
            bg-sage text-[#F5E8D8]
            border-x-8 border-[#687557] shadow-lg
            p-5 hover:-translate-y-3 transition-transform duration-300"
          >
            <div class="absolute inset-3 border-2 border-cream/60 pointer-events-none"></div>

            <span class="text-4xl mb-6">✰</span>

            <span class="font-serif text-xl text-center">
              Commissions
            </span>

            <span class="text-4xl mt-5">✰</span>
          </RouterLink>

          <RouterLink
            to="/contacto"
            class="relative flex flex-col items-center justify-center
            w-full min-h-87.5 md:min-h-112.5
            bg-plum text-[#F5E8D8]
            border-l-12 border-[#604A5D] shadow-lg
            p-5 hover:-translate-y-3 transition-transform duration-300"
          >
            <span class="absolute top-6 right-5 text-4xl">☾</span>

            <span class="font-serif text-2xl tracking-widest text-center">
              CONTACT
            </span>

            <span class="text-xs tracking-[0.3em] mt-4">
              GET IN TOUCH
            </span>

            <span class="absolute bottom-6 left-5 text-4xl">☾</span>
          </RouterLink>

        </section>

  <div class="h-5 bg-brown rounded-sm shadow-md"></div>
</main>
  


  </div>
</template>


<style scoped>

</style>