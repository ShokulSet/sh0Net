<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";

const showHead = ref(false);
const about = ref<HTMLElement | null>(null);
const headOffset = 300;

onMounted(() => {
  const handleScroll = () => {
    if (about.value) {
      const aboutPosition = about.value.offsetTop;
      if (window.scrollY > aboutPosition-headOffset) {
        console.log(window.scrollY, aboutPosition);
        showHead.value = true;
      } else {
        showHead.value = false;
      }
    }
  };
  window.addEventListener("scroll", handleScroll);
  onBeforeUnmount(() => {
    window.removeEventListener("scroll", handleScroll);
  });
});
</script>

<template>
  <!-- Header -->
  <div :class="{'transition-element': true, 'invisible': !showHead}" class="fixed top-0 left-0 w-full" style="background-color: #282828; --tw-bg-opacity: 1;">
    <p class="text-center text-4xl my-4">
      Settapun Laoaree
    </p>
    <hr class="h-0.5 my-1 border-0" style="background-color: #928374; --tw-bg-opacity: 1;">
  </div>


  <!-- Home -->
  <div class="flex flex-col justify-center items-center h-screen" >
    <div class="relative">
      <p class="text-7xl text-center">
        Settapun Laoaree
      </p>
      <p class="absolute right-0 text-3xl italic font-extralight mt-4">
        (Insert random cool quotes.)
      </p>
    </div>
  </div>

  <!-- About  -->
  <div ref="about" class="flex flex-col justify-center items-center mx-72 h-screen">
    <p class="text-3xl text-center">
      I am 17 years old student in Thailand. I do code for fun. I neither have idea what to write here nor what to do.  (btw check out my work)  
    </p>
  </div>

</template>


<style>
  @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap');
  .transition-element {
  transition: opacity 0.5s ease, visibility 0.5s ease;
  opacity: 1;
  visibility: visible;
}

.transition-element.invisible {
  opacity: 0;
  visibility: hidden;
}
</style>
