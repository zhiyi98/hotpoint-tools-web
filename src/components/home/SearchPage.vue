<template>
  <div class="mx-3">

    <!--头部-->
    <div class="grid grid-cols-12 gap-4 items-center my-3">
      <div class="col-span-1">
        <router-link to="/">
          <icon-left/>
        </router-link>
      </div>
      <div class="col-span-9">
        <transition name="slide-left">
          <router-link to="/search">
            <div class="relative items-center">
              <input
                  class="rounded-3xl placeholder-gray-200 text-gray-500 text-sm border border-gray-400 h-8 w-full pl-14 cursor-pointer"
                  type="text" value="" placeholder="搜索内容和节点"/>
              <icon-search class="h-6 w-6 absolute inset-y-0 left-4 my-1"/>
            </div>
          </router-link>
        </transition>
      </div>
      <div class="col-span-2 text-red-500 font-bold">搜索</div>
    </div>

    <!--全网热搜-->
    <div class="my-6">
      <div class="flex justify-between items-center">
        <div class="font-bold">全网热搜</div>
        <div class="flex items-center">
          <div class="text-gray-400 text-sm">完整榜单</div>
          <icon-right class="w-3.5 h-3.5"/>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-x-10 gap-y-4 mt-4 text-sm">
        <div class="col-span-1 flex items-center space-x-2">
          <div class="overflow-hidden truncate">特朗普推特</div>
          <div class="flex justify-center items-center bg-red-500 text-white text-[10px] w-4 h-4 px-1 rounded-sm">热</div>
        </div>
        <div class="col-span-1 flex items-center space-x-2">
          <div class="overflow-hidden truncate">三体2</div>
          <div class="flex justify-center items-center bg-yellow-400 text-white text-[10px] w-4 h-4 px-1 rounded-sm">新</div>
        </div>
        <div class="col-span-1 flex items-center space-x-2">
          <div class="overflow-hidden truncate">狂飙2</div>
          <div class="flex justify-center items-center bg-red-500 text-white text-[10px] w-4 h-4 px-1 rounded-sm">热</div>
        </div>
        <div class="col-span-1 flex items-center space-x-2">
          <div class="overflow-hidden truncate">上海地铁</div>
          <div class="flex justify-center items-center bg-red-500 text-white text-[10px] w-4 h-4 px-1 rounded-sm">热</div>
        </div>
        <div class="col-span-1 flex items-center space-x-2">
          <div class="overflow-hidden truncate">上海一公交车冲入河道热内</div>
          <div class="flex justify-center items-center bg-yellow-400 text-white text-[10px] w-4 h-4 px-1 rounded-sm">新</div>
        </div>
        <div class="col-span-1 flex items-center space-x-2">
          <div class="overflow-hidden truncate">上海迪士尼</div>
        </div>
        <div class="col-span-1 flex items-center space-x-2">
          <div class="overflow-hidden truncate">RNG EDG</div>
          <div class="flex justify-center items-center bg-red-500 text-white text-[10px] w-4 h-4 px-1 rounded-sm">热</div>
        </div>
        <div class="col-span-1 flex items-center space-x-2">
          <div class="overflow-hidden truncate">豆瓣崩了</div>
          <div class="flex justify-center items-center bg-yellow-400 text-white text-[10px] w-4 h-4 px-1 rounded-sm">新</div>
        </div>
        <div class="col-span-1 flex items-center space-x-2">
          <div class="overflow-hidden truncate">五一放假</div>
          <div class="flex justify-center items-center bg-yellow-400 text-white text-[10px] w-4 h-4 px-1 rounded-sm">新</div>
        </div>
        <div class="col-span-1 flex items-center space-x-2">
          <div class="overflow-hidden truncate">复仇者联盟5预告</div>
          <div class="flex justify-center items-center bg-yellow-400 text-white text-[10px] w-4 h-4 px-1 rounded-sm">新</div>
        </div>
      </div>
    </div>

    <!--搜索历史-->
    <div class="my-8">
      <div class="font-bold">搜索历史</div>
      <div class="flex flex-wrap mt-2 gap-3">
        <div class="bg-gray-100 py-1 px-4 rounded-md">Chatgpt费用</div>
        <div class="bg-gray-100 py-1 px-4 rounded-md">Java开发</div>
        <div class="bg-gray-100 py-1 px-4 rounded-md">两个</div>
        <div class="bg-gray-100 py-1 px-4 rounded-md">免费</div>
        <div class="bg-gray-100 py-1 px-4 rounded-md">开源sequence</div>
        <div class="bg-gray-100 py-1 px-4 rounded-md">知乎热榜</div>
        <div class="bg-gray-100 py-1 px-4 rounded-md">51放假</div>
      </div>
      <div class="flex justify-center items-center space-x-1.5 mt-6">
        <icon-delete class="w-4 h-4"/>
        <div class="text-sm text-gray-400">清空搜索记录</div>
      </div>
    </div>

    <!--搜索发现-->
    <div class="my-8 h-[500px]">
      <div class="flex justify-between items-center">
        <div class="font-bold">搜索发现</div>
        <div class="flex items-center">
          <div class="text-gray-400 text-sm">显示</div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import IconSearch from "@/icon/IconSearch.vue";
import IconLeft from "@/icon/IconLeft.vue";
import IconRight from "@/components/user/IconRight.vue";
import IconDelete from "@/icon/IconDelete.vue";</script>