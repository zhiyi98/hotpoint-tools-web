<template>
  <div class="max-w-[1024px] min-w-[375px] fixed bottom-0 m-auto inset-x-0 flex justify-around border-t bg-white">
    <router-link to="/">
      <div class="col-span-1 h-12 flex justify-center items-center px-4">
        <icon-home class="w-7 h-7"/>
      </div>
    </router-link>
    <router-link to="/explore">
      <div class="col-span-1 h-12 flex justify-center items-center px-4">
        <icon-explore class="w-7 h-7"/>
      </div>
    </router-link>
    <router-link to="/notice">
      <div class="col-span-1 h-12 flex justify-center items-center px-4">
        <icon-notice class="w-7 h-7"/>
      </div>
    </router-link>
    <router-link to="/user">
      <div class="col-span-1 h-12 flex justify-center items-center px-4">
        <icon-people class="w-7 h-7"/>
      </div>
    </router-link>
  </div>
</template>
<script setup>
import IconPeople from "@/icon/IconPeople.vue";
import IconNotice from "@/icon/IconNotice.vue";
import IconExplore from "@/icon/IconExplore.vue";
import IconHome from "@/icon/IconHome.vue";
</script>