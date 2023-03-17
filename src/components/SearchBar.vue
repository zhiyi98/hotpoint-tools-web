<template>
  <div class="flex justify-between">
    <div class="flex justify-center items-center ml-5 space-x-2">
      <img src="https://file.ipadown.com/tophub/assets/images/logo.png" alt="" class="w-8"
           style="background-color: #F7F8FA;">
      <span class="hidden md:flex">今日热榜</span>
    </div>
    <div class="relative w-1/2 hidden md:flex items-center my-2 rounded-md overflow-hidden">
      <input
          class="border-0 placeholder-gray-200 text-gray-500 focus:outline-none bg-gray-300 h-10 w-full pl-14 hover:bg-gray-400 transition duration-200"
          type="text" value="" placeholder="搜索内容和节点"/>
      <icon-search class="h-8 w-8 absolute inset-y-0 left-4 my-1"/>
    </div>
    <div class="flex items-center justify-center space-x-6 mr-6">
      <div><img src="https://file.ipadown.com/tophub/assets/images/hi.png" width="50" alt=""></div>
      <div class="text-gray-500">App</div>
      <!-- Profile dropdown -->
      <Menu as="div" class="relative ml-3">
        <div>
          <MenuButton class="flex rounded-full bg-gray-800 text-sm">
            <span class="sr-only">Open user menu</span>
            <img class="h-8 w-8 rounded-full"
                 src="https://lh3.googleusercontent.com/a/AGNmyxbXHav6xbZuy0L-gRUx4Z4jZp4RAnt6MN5TXve4=s96-c"
                 alt=""/>
          </MenuButton>
        </div>
        <transition enter-active-class="transition ease-out duration-100"
                    enter-from-class="transform opacity-0 scale-95"
                    enter-to-class="transform opacity-100 scale-100"
                    leave-active-class="transition ease-in duration-75"
                    leave-from-class="transform opacity-100 scale-100"
                    leave-to-class="transform opacity-0 scale-95">
          <MenuItems
              class="absolute right-0 z-10 mt-2 w-24 text-center origin-top-right bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <MenuItem v-slot="{ active }">
              <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">个人中心</a>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">创建节点</a>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">设&emsp;&emsp;置</a>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">退&emsp;&emsp;出</a>
            </MenuItem>
          </MenuItems>
        </transition>
      </Menu>

    </div>
  </div>
</template>
<script setup>
import IconSearch from "../icon/IconSearch.vue";
import {Menu, MenuButton, MenuItem, MenuItems} from '@headlessui/vue'


</script>