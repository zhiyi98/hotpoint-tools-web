<template>
  <div class="flex justify-between">
    <div class="flex justify-center items-center ml-5 space-x-2">
      <img src="https://file.ipadown.com/tophub/assets/images/logo.png" alt="" class="w-8"
           style="background-color: #F7F8FA;">
      <span>今日热榜</span>
    </div>
    <div class="relative w-1/2 flex items-center my-2 rounded-md overflow-hidden">
      <input
          class="placeholder-gray-200 text-gray-500 focus:outline-none bg-gray-300 h-10 w-full pl-14 hover:bg-gray-400 transition duration-200"
          type="text" value="" placeholder="搜索内容和节点"/>
      <icon-search class="h-8 w-8 absolute inset-y-0 left-4 my-1"/>
    </div>
    <div class="flex items-center justify-center space-x-6 mr-6">
      <div><img src="https://file.ipadown.com/tophub/assets/images/hi.png" width="50" alt=""></div>
      <div class="text-gray-500">App</div>
      <div class="rounded-full overflow-hidden w-8">
        <a href="#">
          <img src="https://lh3.googleusercontent.com/a/AGNmyxbXHav6xbZuy0L-gRUx4Z4jZp4RAnt6MN5TXve4=s96-c" alt="">
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import IconSearch from "../icon/IconSearch.vue";

export default {
  name: 'search-bar',
  components: {IconSearch}
}
</script>