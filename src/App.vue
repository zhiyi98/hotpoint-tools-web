<script>
import {defineComponent} from "vue";
import SearchBar from "./components/SearchBar.vue";
import IconElipsis from "./IconElipsis.vue";

export default defineComponent({
  components: {IconElipsis, SearchBar}
})
</script>

<template>

  <!-- 搜索栏 -->
  <div class="drop-shadow-md" style="background-color: #f3f3f3;">
    <search-bar/>
    <div class="flex items-center justify-center ml-auto text-sm text-gray-400">
      <div class="text-gray-900 border-b-gray-300 border-b-2 py-3 px-5">首页</div>
      <div class="py-3 px-5">综合</div>
      <div class="py-3 px-5">科技</div>
      <div class="py-3 px-5">娱乐</div>
      <div class="py-3 px-5">社区</div>
      <div class="py-3 px-5">购物</div>
      <div class="py-3 px-5">财经</div>
      <div class="py-3 px-5">开发</div>
      <div class="py-3 px-5">校务</div>
      <div class="py-3 px-5">专栏</div>
      <div class="py-3 px-5">报刊</div>
    </div>
  </div>

  <!-- content -->
  <div class="min-h-screen" style="background-color: #f7f8fa;">
    <div class="mx-4 text-gray-500 text-sm">
      <div class="pt-5">最新 ></div>
      <div class="flex items-center my-4">
        <div class="flex flex-col items-center mr-7">
          <div class="rounded-full w-20 h-20 overflow-hidden"><img src="https://file.ipadown.com/tophub/assets/images/media/taobao.com.png_160x160.png" alt=""></div>
          <div class="mt-1.5">淘宝·天猫</div>
          <div class="text-xs text-gray-400">热销总榜</div>
        </div>
        <div class="flex flex-col items-center mr-7">
          <div class="rounded-full w-20 h-20 overflow-hidden"><img src="https://file.ipadown.com/tophub/assets/images/media/taobao.com.png_160x160.png" alt=""></div>
          <div class="mt-1.5">淘宝·天猫</div>
          <div class="text-xs text-gray-400">热销总榜</div>
        </div>
        <div class="flex flex-col items-center mr-7">
          <div class="rounded-full w-20 h-20 overflow-hidden"><img src="https://file.ipadown.com/tophub/assets/images/media/p.pinduoduo.com.png_160x160.png" alt=""></div>
          <div class="mt-1.5">淘宝·天猫</div>
          <div class="text-xs text-gray-400">热销总榜</div>
        </div>
        <div class="flex flex-col items-center mr-7">
          <div class="rounded-full w-20 h-20 overflow-hidden"><img src="https://file.ipadown.com/tophub/assets/images/media/jd.com.png_160x160.png" alt=""></div>
          <div class="mt-1.5">淘宝·天猫</div>
          <div class="text-xs text-gray-400">热销总榜</div>
        </div>
        <div class="flex flex-col items-center mr-7">
          <div class="rounded-full w-20 h-20 overflow-hidden"><img src="https://file.ipadown.com/tophub/assets/images/media/remai.today.png_160x160.png" alt=""></div>
          <div class="mt-1.5">淘宝·天猫</div>
          <div class="text-xs text-gray-400">热销总榜</div>
        </div>
        <div class="flex flex-col items-center mr-7">
          <div class="rounded-full w-20 h-20 overflow-hidden"><img src="https://file.ipadown.com/tophub/assets/images/media/ozbargain.com.au.png_160x160.png" alt=""></div>
          <div class="mt-1.5">淘宝·天猫</div>
          <div class="text-xs text-gray-400">热销总榜</div>
        </div>
        <div class="flex flex-col items-center mr-7">
          <div class="rounded-full w-20 h-20 overflow-hidden"><img src="https://file.ipadown.com/tophub/assets/images/media/sohu.com.png_160x160.png" alt=""></div>
          <div class="mt-1.5">淘宝·天猫</div>
          <div class="text-xs text-gray-400">热销总榜</div>
        </div>
        <div class="flex flex-col items-center mr-7">
          <div class="rounded-full w-20 h-20 overflow-hidden"><img src="https://file.ipadown.com/tophub/assets/images/media/huntsbot.com.png_160x160.png" alt=""></div>
          <div class="mt-1.5">淘宝·天猫</div>
          <div class="text-xs text-gray-400">热销总榜</div>
        </div>
        <div class="flex flex-col items-center mr-7">
          <div class="rounded-full w-20 h-20 overflow-hidden"><img src="https://file.ipadown.com/tophub/assets/images/media/uscardforum.com.png_160x160.png" alt=""></div>
          <div class="mt-1.5">淘宝·天猫</div>
          <div class="text-xs text-gray-400">热销总榜</div>
        </div>
      </div>
    </div>

    <!--分类-->
    <div class="flex justify-between mx-4 mt-8">
      <div class="space-x-4 mb-4 text-gray-600 text-xs">
        <div><a href="#">我的订阅</a></div>
      </div>
      <div class="flex space-x-4 mb-4 text-gray-600 text-xs">
        <div class="text-red-500 font-bold"><a href="#">每日晚报</a></div>
        <div>·</div>
        <div><a href="#">订阅动态</a></div>
        <div><a href="#">榜中榜</a></div>
        <div><a href="#">话题聚合</a></div>
        <div><a href="#">热点日历</a></div>
        <div><a href="#">刷屏热词</a></div>
        <div><a href="#">追踪器</a></div>
        <div><a href="#">收藏夹</a></div>
        <div><a href="#">更多榜单</a></div>
      </div>
    </div>

    <!--热点模块-->
    <div class="flex mx-2">
      <div class="flex flex-col w-1/4 px-3 mx-2 bg-white rounded-md">
        <div class="flex justify-between mt-2 border-b">
          <div class="flex font-bold text-lg mt-0.5">
            <div class="rounded-full w-6 h-6 overflow-hidden"><img src="https://file.ipadown.com/tophub/assets/images/media/toutiao.io.png_50x50.png" alt=""></div>
            <div class="ml-1 text-gray-500">机器之心</div>
          </div>
          <div class="border-b-2 text-gray-800 py-1.5 text-md">最热文章</div>
        </div>
        <!--scrollbar定义滚动条样式，需要tailwindcss.css中定义-->
        <div class="flex flex-col py-2 pr-2 space-y-2 h-72 overflow-y-scroll scrollbar">
          <div class="flex justify-between">
            <div class="flex">
              <div class="text-red-500">1</div>
              <div class="ml-3.5">立即体验！直接可用的中文版ChatGPT来了</div>
            </div>
            <div class="whitespace-nowrap text-gray-500">机器之心</div>
          </div>
          <div class="flex justify-between">
            <div class="flex">
              <div class="text-red-500">2</div>
              <div class="ml-3.5">立即体验！直接可用的中文版ChatGPT来了</div>
            </div>
            <div class="whitespace-nowrap text-gray-500">机器之心</div>
          </div>
          <div class="flex justify-between">
            <div class="flex">
              <div class="text-red-500">3</div>
              <div class="ml-3.5">立即体验！直接可用的中文版ChatGPT来了</div>
            </div>
            <div class="whitespace-nowrap text-gray-500">机器之心</div>
          </div>
          <div class="flex justify-between">
            <div class="flex">
              <div>4</div>
              <div class="ml-3.5">立即体验！直接可用的中文版ChatGPT来了</div>
            </div>
            <div class="whitespace-nowrap text-gray-500">机器之心</div>
          </div>
          <div class="flex justify-between">
            <div class="flex">
              <div>5</div>
              <div class="ml-3.5">立即体验！直接可用的中文版ChatGPT来了</div>
            </div>
            <div class="whitespace-nowrap text-gray-500">机器之心</div>
          </div>
          <div class="flex justify-between">
            <div class="flex">
              <div>6</div>
              <div class="ml-3.5">立即体验！直接可用的中文版ChatGPT来了</div>
            </div>
            <div class="whitespace-nowrap text-gray-500">机器之心</div>
          </div>
          <div class="flex justify-between">
            <div class="flex">
              <div>7</div>
              <div class="ml-3.5">立即体验！直接可用的中文版ChatGPT来了</div>
            </div>
            <div class="whitespace-nowrap text-gray-500">机器之心</div>
          </div>
          <div class="flex justify-between">
            <div class="flex">
              <div>8</div>
              <div class="ml-3.5">立即体验！直接可用的中文版ChatGPT来了</div>
            </div>
            <div class="whitespace-nowrap text-gray-500">机器之心</div>
          </div>
          <div class="flex justify-between">
            <div class="flex">
              <div>9</div>
              <div class="ml-3.5">立即体验！直接可用的中文版ChatGPT来了</div>
            </div>
            <div class="whitespace-nowrap text-gray-500">机器之心</div>
          </div>
        </div>
        <div class="flex items-center justify-between px-3 py-2 border-t">
          <div class="text-gray-600 text-sm">7 分钟前</div>
          <icon-elipsis class="w-6 h-6"/>
        </div>
      </div>
      <div class="flex flex-col w-1/4 px-3 mx-2 bg-white rounded-md">
        <div class="flex justify-between mt-2 border-b">
          <div class="flex font-bold text-lg mt-0.5">
            <div class="rounded-full w-6 h-6 overflow-hidden"><img src="https://file.ipadown.com/tophub/assets/images/media/toutiao.io.png_50x50.png" alt=""></div>
            <div class="ml-1 text-gray-500">机器之心</div>
          </div>
          <div class="border-b-2 text-gray-800 py-1.5 text-md">最热文章</div>
        </div>
        <!--scrollbar定义滚动条样式，需要tailwindcss.css中定义-->
        <div class="flex flex-col py-2 pr-2 space-y-2 h-72 overflow-y-scroll scrollbar">
          <div class="flex justify-between">
            <div class="flex">
              <div class="text-red-500">1</div>
              <div class="ml-3.5">立即体验！直接可用的中文版ChatGPT来了</div>
            </div>
            <div class="whitespace-nowrap text-gray-500">机器之心</div>
          </div>
          <div class="flex justify-between">
            <div class="flex">
              <div class="text-red-500">2</div>
              <div class="ml-3.5">立即体验！直接可用的中文版ChatGPT来了</div>
            </div>
            <div class="whitespace-nowrap text-gray-500">机器之心</div>
          </div>
          <div class="flex justify-between">
            <div class="flex">
              <div class="text-red-500">3</div>
              <div class="ml-3.5">立即体验！直接可用的中文版ChatGPT来了</div>
            </div>
            <div class="whitespace-nowrap text-gray-500">机器之心</div>
          </div>
          <div class="flex justify-between">
            <div class="flex">
              <div>4</div>
              <div class="ml-3.5">立即体验！直接可用的中文版ChatGPT来了</div>
            </div>
            <div class="whitespace-nowrap text-gray-500">机器之心</div>
          </div>
          <div class="flex justify-between">
            <div class="flex">
              <div>5</div>
              <div class="ml-3.5">立即体验！直接可用的中文版ChatGPT来了</div>
            </div>
            <div class="whitespace-nowrap text-gray-500">机器之心</div>
          </div>
          <div class="flex justify-between">
            <div class="flex">
              <div>6</div>
              <div class="ml-3.5">立即体验！直接可用的中文版ChatGPT来了</div>
            </div>
            <div class="whitespace-nowrap text-gray-500">机器之心</div>
          </div>
          <div class="flex justify-between">
            <div class="flex">
              <div>7</div>
              <div class="ml-3.5">立即体验！直接可用的中文版ChatGPT来了</div>
            </div>
            <div class="whitespace-nowrap text-gray-500">机器之心</div>
          </div>
          <div class="flex justify-between">
            <div class="flex">
              <div>8</div>
              <div class="ml-3.5">立即体验！直接可用的中文版ChatGPT来了</div>
            </div>
            <div class="whitespace-nowrap text-gray-500">机器之心</div>
          </div>
          <div class="flex justify-between">
            <div class="flex">
              <div>9</div>
              <div class="ml-3.5">立即体验！直接可用的中文版ChatGPT来了</div>
            </div>
            <div class="whitespace-nowrap text-gray-500">机器之心</div>
          </div>
        </div>
        <div class="flex items-center justify-between px-3 py-2 border-t">
          <div class="text-gray-600 text-sm">7 分钟前</div>
          <icon-elipsis class="w-6 h-6"/>
        </div>
      </div>
      <div class="flex flex-col w-1/4 px-3 mx-2 bg-white rounded-md">
        <div class="flex justify-between mt-2 border-b">
          <div class="flex font-bold text-lg mt-0.5">
            <div class="rounded-full w-6 h-6 overflow-hidden"><img src="https://file.ipadown.com/tophub/assets/images/media/toutiao.io.png_50x50.png" alt=""></div>
            <div class="ml-1 text-gray-500">机器之心</div>
          </div>
          <div class="border-b-2 text-gray-800 py-1.5 text-md">最热文章</div>
        </div>
        <!--scrollbar定义滚动条样式，需要tailwindcss.css中定义-->
        <div class="flex flex-col py-2 pr-2 space-y-2 h-72 overflow-y-scroll scrollbar">
          <div class="flex justify-between">
            <div class="flex">
              <div class="text-red-500">1</div>
              <div class="ml-3.5">立即体验！直接可用的中文版ChatGPT来了</div>
            </div>
            <div class="whitespace-nowrap text-gray-500">机器之心</div>
          </div>
          <div class="flex justify-between">
            <div class="flex">
              <div class="text-red-500">2</div>
              <div class="ml-3.5">立即体验！直接可用的中文版ChatGPT来了</div>
            </div>
            <div class="whitespace-nowrap text-gray-500">机器之心</div>
          </div>
          <div class="flex justify-between">
            <div class="flex">
              <div class="text-red-500">3</div>
              <div class="ml-3.5">立即体验！直接可用的中文版ChatGPT来了</div>
            </div>
            <div class="whitespace-nowrap text-gray-500">机器之心</div>
          </div>
          <div class="flex justify-between">
            <div class="flex">
              <div>4</div>
              <div class="ml-3.5">立即体验！直接可用的中文版ChatGPT来了</div>
            </div>
            <div class="whitespace-nowrap text-gray-500">机器之心</div>
          </div>
          <div class="flex justify-between">
            <div class="flex">
              <div>5</div>
              <div class="ml-3.5">立即体验！直接可用的中文版ChatGPT来了</div>
            </div>
            <div class="whitespace-nowrap text-gray-500">机器之心</div>
          </div>
          <div class="flex justify-between">
            <div class="flex">
              <div>6</div>
              <div class="ml-3.5">立即体验！直接可用的中文版ChatGPT来了</div>
            </div>
            <div class="whitespace-nowrap text-gray-500">机器之心</div>
          </div>
          <div class="flex justify-between">
            <div class="flex">
              <div>7</div>
              <div class="ml-3.5">立即体验！直接可用的中文版ChatGPT来了</div>
            </div>
            <div class="whitespace-nowrap text-gray-500">机器之心</div>
          </div>
          <div class="flex justify-between">
            <div class="flex">
              <div>8</div>
              <div class="ml-3.5">立即体验！直接可用的中文版ChatGPT来了</div>
            </div>
            <div class="whitespace-nowrap text-gray-500">机器之心</div>
          </div>
          <div class="flex justify-between">
            <div class="flex">
              <div>9</div>
              <div class="ml-3.5">立即体验！直接可用的中文版ChatGPT来了</div>
            </div>
            <div class="whitespace-nowrap text-gray-500">机器之心</div>
          </div>
        </div>
        <div class="flex items-center justify-between px-3 py-2 border-t">
          <div class="text-gray-600 text-sm">7 分钟前</div>
          <icon-elipsis class="w-6 h-6"/>
        </div>
      </div>
      <div class="flex flex-col w-1/4 px-3 mx-2 bg-white rounded-md">
        <div class="flex justify-between mt-2 border-b">
          <div class="flex font-bold text-lg mt-0.5">
            <div class="rounded-full w-6 h-6 overflow-hidden"><img src="https://file.ipadown.com/tophub/assets/images/media/toutiao.io.png_50x50.png" alt=""></div>
            <div class="ml-1 text-gray-500">机器之心</div>
          </div>
          <div class="border-b-2 text-gray-800 py-1.5 text-md">最热文章</div>
        </div>
        <!--scrollbar定义滚动条样式，需要tailwindcss.css中定义-->
        <div class="flex flex-col py-2 pr-2 space-y-2 h-72 overflow-y-scroll scrollbar">
          <div class="flex justify-between">
            <div class="flex">
              <div class="text-red-500">1</div>
              <div class="ml-3.5">立即体验！直接可用的中文版ChatGPT来了</div>
            </div>
            <div class="whitespace-nowrap text-gray-500">机器之心</div>
          </div>
          <div class="flex justify-between">
            <div class="flex">
              <div class="text-red-500">2</div>
              <div class="ml-3.5">立即体验！直接可用的中文版ChatGPT来了</div>
            </div>
            <div class="whitespace-nowrap text-gray-500">机器之心</div>
          </div>
          <div class="flex justify-between">
            <div class="flex">
              <div class="text-red-500">3</div>
              <div class="ml-3.5">立即体验！直接可用的中文版ChatGPT来了</div>
            </div>
            <div class="whitespace-nowrap text-gray-500">机器之心</div>
          </div>
          <div class="flex justify-between">
            <div class="flex">
              <div>4</div>
              <div class="ml-3.5">立即体验！直接可用的中文版ChatGPT来了</div>
            </div>
            <div class="whitespace-nowrap text-gray-500">机器之心</div>
          </div>
          <div class="flex justify-between">
            <div class="flex">
              <div>5</div>
              <div class="ml-3.5">立即体验！直接可用的中文版ChatGPT来了</div>
            </div>
            <div class="whitespace-nowrap text-gray-500">机器之心</div>
          </div>
          <div class="flex justify-between">
            <div class="flex">
              <div>6</div>
              <div class="ml-3.5">立即体验！直接可用的中文版ChatGPT来了</div>
            </div>
            <div class="whitespace-nowrap text-gray-500">机器之心</div>
          </div>
          <div class="flex justify-between">
            <div class="flex">
              <div>7</div>
              <div class="ml-3.5">立即体验！直接可用的中文版ChatGPT来了</div>
            </div>
            <div class="whitespace-nowrap text-gray-500">机器之心</div>
          </div>
          <div class="flex justify-between">
            <div class="flex">
              <div>8</div>
              <div class="ml-3.5">立即体验！直接可用的中文版ChatGPT来了</div>
            </div>
            <div class="whitespace-nowrap text-gray-500">机器之心</div>
          </div>
          <div class="flex justify-between">
            <div class="flex">
              <div>9</div>
              <div class="ml-3.5">立即体验！直接可用的中文版ChatGPT来了</div>
            </div>
            <div class="whitespace-nowrap text-gray-500">机器之心</div>
          </div>
        </div>
        <div class="flex items-center justify-between px-3 py-2 border-t">
          <div class="text-gray-600 text-sm">7 分钟前</div>
          <icon-elipsis class="w-6 h-6"/>
        </div>
      </div>
    </div>

    <!--底线-->
    <div class="flex justify-center items-center space-x-2 pt-24 pb-12">
      <span class="border-b" style="width: 100px;height: 1px;"></span>
      <div class="text-gray-600">我也是有底线的</div>
      <span class="border-b" style="width: 100px;height: 1px;"></span>
    </div>

  </div>

</template>