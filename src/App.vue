<template>
  <div class="bg-[#f2f2f2]">
    <div class="max-w-[1024px] min-w-[375px] m-auto bg-white">

      <!--头部-->
      <div class="grid grid-cols-12 gap-4 items-center pt-2 mb-2 mx-3">
        <div class="col-span-2">
          <img class="h-10 w-10 rounded-full" src="./assets/logo.png" alt="logo">
        </div>
        <div class="col-span-10">
          <div class="relative items-center">
            <input
                class="rounded-3xl placeholder-gray-200 text-gray-500 text-sm border border-gray-400 h-8 w-full pl-14"
                type="text" value="" placeholder="搜索内容和节点"/>
            <icon-search class="h-6 w-6 absolute inset-y-0 left-4 my-1"/>
          </div>
        </div>
      </div>

      <!--分类-->
      <div class="flex flex-nowrap px-4 mt-4 space-x-6 border-b border-gray-200 overflow-x-auto hidden-scrollbar font-bold text-default">
        <a class="whitespace-no-wrap flex-shrink-0" href="#"><div class="h-10 border-b-4 border-blue-500 text-black">订阅</div></a>
        <a class="whitespace-no-wrap flex-shrink-0" href="#"><div class="h-10">推荐</div></a>
        <a class="whitespace-no-wrap flex-shrink-0" href="#"><div class="h-10">后端</div></a>
        <a class="whitespace-no-wrap flex-shrink-0" href="#"><div class="h-10">前端</div></a>
        <a class="whitespace-no-wrap flex-shrink-0" href="#"><div class="h-10">新闻</div></a>
        <a class="whitespace-no-wrap flex-shrink-0" href="#"><div class="h-10">体育</div></a>
        <a class="whitespace-no-wrap flex-shrink-0" href="#"><div class="h-10">运维</div></a>
      </div>

      <!--内容-->
      <div class="flex flex-col h-[calc(100vh-10rem+6px)] mx-4 pt-4 hidden-scrollbar overflow-y-auto">
        <div>
          <div class="flex items-center">
            <img class="rounded-xl w-8 h-8"
                 src="https://file.ipadown.com/tophub/assets/images/media/blog.csdn.net.png_120x120.png" alt="">
            <div class="ml-4 text-sm text-gray-500">刚刚</div>
          </div>
          <div class="relative flex pl-[calc(3rem+2px)] overflow-hidden mt-1 pb-4">
            <div class="flex flex-col space-y-3">
              <div class="flex items-center">
                <icon-circle class="w-3 h-3"/>
                <span class="text-sm text-gray-500 ml-2">详解神经网络中反向传播和梯度下降</span>
              </div>
              <div class="flex items-center">
                <icon-circle class="w-3 h-3"/>
                <span class="text-sm text-gray-500 ml-2">详解神经网络中反向传播和梯度下降</span>
              </div>
              <div class="flex items-center">
                <icon-circle class="w-3 h-3"/>
                <span class="text-sm text-gray-500 ml-2">详解神经网络中反向传播和梯度下降</span>
              </div>
            </div>
            <div class="absolute left-3 h-full w-20 ml-0.5">
              <span class="w-[2px] h-full bg-gray-500 absolute left-0 top-0 before:block before:w-full before:h-full before:bg-gray-100"></span>
            </div>
          </div>
        </div>
        <div>
          <div class="flex items-center">
            <img class="rounded-xl w-8 h-8"
                 src="https://file.ipadown.com/tophub/assets/images/media/infoq.cn.png_120x120.png" alt="">
            <div class="ml-4 text-sm text-gray-500">19 分钟前</div>
          </div>
          <div class="relative flex pl-[calc(3rem+2px)] overflow-hidden mt-1 pb-4">
            <div class="flex flex-col space-y-3">
              <div class="flex items-center">
                <icon-circle class="w-3 h-3"/>
                <span class="text-sm text-gray-500 ml-2">详解神经网络中反向传播和梯度下降</span>
              </div>
              <div class="flex items-center">
                <icon-circle class="w-3 h-3"/>
                <span class="text-sm text-gray-500 ml-2">详解神经网络中反向传播和梯度下降</span>
              </div>
              <div class="flex items-center">
                <icon-circle class="w-3 h-3"/>
                <span class="text-sm text-gray-500 ml-2">详解神经网络中反向传播和梯度下降</span>
              </div>
            </div>
            <div class="absolute left-3 h-full w-20 ml-0.5">
              <span class="w-[2px] h-full bg-gray-500 absolute left-0 top-0 before:block before:w-full before:h-full before:bg-gray-100"></span>
            </div>
          </div>
        </div>
        <div>
          <div class="flex items-center">
            <img class="rounded-xl w-8 h-8"
                 src="https://file.ipadown.com/tophub/assets/images/media/williamlong.info.png_120x120.png" alt="">
            <div class="ml-4 text-sm text-gray-500">25 分钟前</div>
          </div>
          <div class="relative flex pl-[calc(3rem+2px)] overflow-hidden mt-1 pb-4">
            <div class="flex flex-col space-y-3">
              <div class="flex items-center">
                <icon-circle class="w-3 h-3"/>
                <span class="text-sm text-gray-500 ml-2">详解神经网络中反向传播和梯度下降</span>
              </div>
              <div class="flex items-center">
                <icon-circle class="w-3 h-3"/>
                <span class="text-sm text-gray-500 ml-2">详解神经网络中反向传播和梯度下降</span>
              </div>
              <div class="flex items-center">
                <icon-circle class="w-3 h-3"/>
                <span class="text-sm text-gray-500 ml-2">详解神经网络中反向传播和梯度下降</span>
              </div>
            </div>
            <div class="absolute left-3 h-full w-20 ml-0.5">
              <span class="w-[2px] h-full bg-gray-500 absolute left-0 top-0 before:block before:w-full before:h-full before:bg-gray-100"></span>
            </div>
          </div>
        </div>
        <div>
          <div class="flex items-center">
            <img class="rounded-xl w-8 h-8"
                 src="https://file.ipadown.com/tophub/assets/images/media/segmentfault.com.png_120x120.png" alt="">
            <div class="ml-4 text-sm text-gray-500">30 分钟前</div>
          </div>
          <div class="relative flex pl-[calc(3rem+2px)] overflow-hidden mt-1 pb-4">
            <div class="flex flex-col space-y-3">
              <div class="flex items-center">
                <icon-circle class="w-3 h-3"/>
                <span class="text-sm text-gray-500 ml-2">详解神经网络中反向传播和梯度下降</span>
              </div>
              <div class="flex items-center">
                <icon-circle class="w-3 h-3"/>
                <span class="text-sm text-gray-500 ml-2">详解神经网络中反向传播和梯度下降</span>
              </div>
              <div class="flex items-center">
                <icon-circle class="w-3 h-3"/>
                <span class="text-sm text-gray-500 ml-2">详解神经网络中反向传播和梯度下降</span>
              </div>
            </div>
            <div class="absolute left-3 h-full w-20 ml-0.5">
              <span class="w-[2px] h-full bg-gray-500 absolute left-0 top-0 before:block before:w-full before:h-full before:bg-gray-100"></span>
            </div>
          </div>
        </div>
        <div>
          <div class="flex items-center">
            <img class="rounded-xl w-8 h-8"
                 src="https://file.ipadown.com/tophub/assets/images/media/blog.csdn.net.png_120x120.png" alt="">
            <div class="ml-4 text-sm text-gray-500">17 分钟前</div>
          </div>
          <div class="relative flex pl-[calc(3rem+2px)] overflow-hidden mt-1 pb-4">
            <div class="flex flex-col space-y-3">
              <div class="flex items-center">
                <icon-circle class="w-3 h-3"/>
                <span class="text-sm text-gray-500 ml-2">详解神经网络中反向传播和梯度下降</span>
              </div>
              <div class="flex items-center">
                <icon-circle class="w-3 h-3"/>
                <span class="text-sm text-gray-500 ml-2">详解神经网络中反向传播和梯度下降</span>
              </div>
              <div class="flex items-center">
                <icon-circle class="w-3 h-3"/>
                <span class="text-sm text-gray-500 ml-2">详解神经网络中反向传播和梯度下降</span>
              </div>
            </div>
            <div class="absolute left-3 h-full w-20 ml-0.5">
              <span class="w-[2px] h-full bg-gray-500 absolute left-0 top-0 before:block before:w-full before:h-full before:bg-gray-100"></span>
            </div>
          </div>
        </div>
        <div>
          <div class="flex items-center">
            <img class="rounded-xl w-8 h-8"
                 src="https://file.ipadown.com/tophub/assets/images/media/blog.csdn.net.png_120x120.png" alt="">
            <div class="ml-4 text-sm text-gray-500">17 分钟前</div>
          </div>
          <div class="relative flex pl-[calc(3rem+2px)] overflow-hidden mt-1 pb-4">
            <div class="flex flex-col space-y-3">
              <div class="flex items-center">
                <icon-circle class="w-3 h-3"/>
                <span class="text-sm text-gray-500 ml-2">详解神经网络中反向传播和梯度下降</span>
              </div>
              <div class="flex items-center">
                <icon-circle class="w-3 h-3"/>
                <span class="text-sm text-gray-500 ml-2">详解神经网络中反向传播和梯度下降</span>
              </div>
              <div class="flex items-center">
                <icon-circle class="w-3 h-3"/>
                <span class="text-sm text-gray-500 ml-2">详解神经网络中反向传播和梯度下降</span>
              </div>
            </div>
            <div class="absolute left-3 h-full w-20 ml-0.5">
              <span class="w-[2px] h-full bg-gray-500 absolute left-0 top-0 before:block before:w-full before:h-full before:bg-gray-100"></span>
            </div>
          </div>
        </div>
        <div>
          <div class="flex items-center">
            <img class="rounded-xl w-8 h-8"
                 src="https://file.ipadown.com/tophub/assets/images/media/blog.csdn.net.png_120x120.png" alt="">
            <div class="ml-4 text-sm text-gray-500">17 分钟前</div>
          </div>
          <div class="relative flex pl-[calc(3rem+2px)] overflow-hidden mt-1 pb-4">
            <div class="flex flex-col space-y-3">
              <div class="flex items-center">
                <icon-circle class="w-3 h-3"/>
                <span class="text-sm text-gray-500 ml-2">详解神经网络中反向传播和梯度下降</span>
              </div>
              <div class="flex items-center">
                <icon-circle class="w-3 h-3"/>
                <span class="text-sm text-gray-500 ml-2">详解神经网络中反向传播和梯度下降</span>
              </div>
              <div class="flex items-center">
                <icon-circle class="w-3 h-3"/>
                <span class="text-sm text-gray-500 ml-2">详解神经网络中反向传播和梯度下降</span>
              </div>
            </div>
            <div class="absolute left-3 h-full w-20 ml-0.5">
              <span class="w-[2px] h-full bg-gray-500 absolute left-0 top-0 before:block before:w-full before:h-full before:bg-gray-100"></span>
            </div>
          </div>
        </div>
        <div>
          <div class="flex items-center">
            <img class="rounded-xl w-8 h-8"
                 src="https://file.ipadown.com/tophub/assets/images/media/blog.csdn.net.png_120x120.png" alt="">
            <div class="ml-4 text-sm text-gray-500">17 分钟前</div>
          </div>
          <div class="relative flex pl-[calc(3rem+2px)] overflow-hidden mt-1 pb-4">
            <div class="flex flex-col space-y-3">
              <div class="flex items-center">
                <icon-circle class="w-3 h-3"/>
                <span class="text-sm text-gray-500 ml-2">详解神经网络中反向传播和梯度下降</span>
              </div>
              <div class="flex items-center">
                <icon-circle class="w-3 h-3"/>
                <span class="text-sm text-gray-500 ml-2">详解神经网络中反向传播和梯度下降</span>
              </div>
              <div class="flex items-center">
                <icon-circle class="w-3 h-3"/>
                <span class="text-sm text-gray-500 ml-2">详解神经网络中反向传播和梯度下降</span>
              </div>
            </div>
            <div class="absolute left-3 h-full w-20 ml-0.5">
              <span class="w-[2px] h-full bg-gray-500 absolute left-0 top-0 before:block before:w-full before:h-full before:bg-gray-100"></span>
            </div>
          </div>
        </div>
        <div class="flex block justify-center items-center space-x-2 my-24">
          <span class="border-b w-[60px] h-[1px]"></span>
          <div class="text-gray-400 text-sm">我也是有底线的</div>
          <span class="border-b w-[60px] h-[1px]"></span>
        </div>
      </div>

      <!--导航条-->
      <div class="max-w-[1024px] min-w-[375px] fixed bottom-0 m-auto inset-x-0 flex justify-around border-t bg-white">
        <div class="col-span-1 h-12 flex justify-center items-center"><icon-home class="w-7 h-7"/></div>
        <div class="col-span-1 h-12 flex justify-center items-center"><icon-explore class="w-7 h-7"/></div>
        <div class="col-span-1 h-12 flex justify-center items-center"><icon-notice class="w-7 h-7"/></div>
        <div class="col-span-1 h-12 flex justify-center items-center"><IconPeople class="w-7 h-7"/></div>
      </div>

    </div>
  </div>
</template>

<script setup>
import IconSearch from "./icon/IconSearch.vue";
import IconHome from "./icon/IconHome.vue";
import IconPeople from "./icon/IconPeople.vue";
import IconNotice from "./icon/IconNotice.vue";
import IconExplore from "./icon/IconExplore.vue";
import IconCircle from "./icon/IconCircle.vue";
</script>

