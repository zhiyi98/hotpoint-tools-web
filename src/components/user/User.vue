<template>
  <div class="max-w-[1024px] min-w-[375px] m-auto bg-white">

    <!--头像-->
    <div class="relative h-72 bg-cover bg-center bg-[url('@/assets/douban-bg.jpg')]">
      <div class="flex flex-col">
        <div class="flex justify-between mt-6 mx-4">
          <icon-sidebar/>
          <icon-mail/>
        </div>
        <div class="flex justify-center my-8">
          <div class="relative">
            <img class="rounded-full border-[3px] border-white" src="@/assets/avatar.jpg" alt="">
            <div class="absolute bottom-0 right-0 flex justify-center items-center rounded-full w-7 h-7 bg-white">
              <icon-camara/>
            </div>
          </div>
        </div>
        <!--<div class="absolute inset-0 h-10 bg-gradient-to-b from-transparent to-blue-500"></div>-->
      </div>
    </div>

    <!--个人信息-->
    <div class="relative top-[-15px] px-4 bg-white rounded-2xl pt-2 h-[1000px]">
      <div class="flex justify-between items-center mt-2">
        <div class="space-y-1">
          <div class="text-xl font-bold">梦幻泡影</div>
          <div class="flex space-x-4 text-sm">
            <div>关注 182</div>
            <div>粉丝 182</div>
          </div>
        </div>
        <div class="flex items-center">
          <span>主页</span>
          <icon-right/>
        </div>
      </div>
      <div class="mt-4 rounded-xl bg-white py-4">
        <div class="grid grid-cols-4 font-bold text-lg">
          <div class="col-span-1 flex justify-center">0</div>
          <div class="col-span-1 flex justify-center">8</div>
          <div class="col-span-1 flex justify-center">149</div>
          <div class="col-span-1 flex justify-center">999+</div>
        </div>
        <div class="grid grid-cols-4 divide-x">
          <div class="col-span-1 flex justify-center">创作</div>
          <div class="col-span-1 flex justify-center">社区</div>
          <div class="col-span-1 flex justify-center">收藏</div>
          <div class="col-span-1 flex justify-center">最近记录</div>
        </div>
      </div>
    </div>

    <!--导航条-->
    <nav-bar/>

  </div>
</template>

<script setup>
import NavBar from "@/components/home/NavBar.vue";
import IconSidebar from "@/icon/IconSidebar.vue";
import IconMail from "@/icon/IconMail.vue";
import IconCamara from "@/icon/IconCamara.vue";
import IconRight from "@/components/user/IconRight.vue";
</script>

