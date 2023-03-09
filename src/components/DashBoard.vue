<script setup>
import IconErweima from "../icon/IconErweima.vue";
import IconCircle from "../icon/IconCircle.vue";
import IconStar from "../icon/IconStar.vue";
import SearchBar from "./SearchBar.vue";</script>

<template>
  <div>
    <!--  搜索栏  -->
    <search-bar style="background-color: #f3f3f3;"/>
    <!--  导航栏  -->
    <div
        class="relative h-72 overflow-hidden bg-[url('https://file.ipadown.com/tophub/assets/images/background/web-default-dashboard.jpeg')] bg-cover">
      <div
          class="absolute bottom-0 left-0 w-full flex items-center space-x-4 pl-16 py-6 text-gray-400 text-md font-medium"
          style="background-color: #f3f3f3;">
        <div class="text-gray-800">动态</div>
        <div>榜中榜</div>
        <div>热点日历</div>
        <div>追踪器</div>
        <div>收藏夹</div>
      </div>
      <div class="absolute bottom-0 right-0 flex items-end pr-16">
        <div class="w-44 h-44 rounded-full flex justify-center items-center" style="background-color: #f3f3f3;">
          <div class="overflow-hidden rounded-full w-36 h-36">
            <img class="w-36 h-36"
                 src="https://lh3.googleusercontent.com/a/AGNmyxbXHav6xbZuy0L-gRUx4Z4jZp4RAnt6MN5TXve4=s96-c" alt="">
          </div>
        </div>
        <div class="py-6">
          <a href="#">
            <IconErweima class="w-6 h-6"/>
          </a>
        </div>
      </div>
    </div>
    <!--  content  -->
    <div class="flex justify-between py-12 px-16" style="background-color: #f7f8fa;">
      <div class="flex flex-col w-full">
        <div class="flex space-x-4 mb-4 ml-0.5 text-gray-300 text-sm">
          <div class="text-gray-600">我的订阅</div>
          <div>设置过滤器</div>
        </div>
        <div class="rounded-xl bg-white p-6">
          <div>
            <div class="flex items-center">
              <img class="rounded-xl w-14 h-14"
                   src="https://file.ipadown.com/tophub/assets/images/media/blog.csdn.net.png_120x120.png" alt="">
              <div class="ml-6 text-sm text-gray-500">17 分钟前</div>
            </div>
            <div class="relative flex pl-16 overflow-hidden my-3">
              <div class="flex flex-col space-y-4">
                <div class="flex items-center">
                  <icon-circle class="w-3 h-3 ml-4"/>
                  <span class="text-sm text-gray-500 ml-2">详解神经网络中反向传播和梯度下降</span>
                </div>
                <div class="flex items-center">
                  <icon-circle class="w-3 h-3 ml-4"/>
                  <span class="text-sm text-gray-500 ml-2">详解神经网络中反向传播和梯度下降</span>
                </div>
                <div class="flex items-center">
                  <icon-circle class="w-3 h-3 ml-4"/>
                  <span class="text-sm text-gray-500 ml-2">详解神经网络中反向传播和梯度下降</span>
                </div>
              </div>
              <div class="absolute left-6 h-full w-20 ml-0.5">
                <div
                    class="h-full bg-gray-500 absolute left-0 top-0 before:block before:w-full before:h-full before:bg-gray-100"
                    style="width: 2px;"></div>
              </div>
            </div>
          </div>
          <div>
            <div class="flex items-center">
              <img class="rounded-xl w-14 h-14"
                   src="https://file.ipadown.com/tophub/assets/images/media/jiqizhixin.com.png_120x120.png" alt="">
              <div class="ml-6 text-sm text-gray-500">17 分钟前</div>
            </div>
            <div class="relative flex pl-16 overflow-hidden my-3">
              <div class="flex flex-col space-y-4">
                <div class="flex items-center">
                  <icon-circle class="w-3 h-3 ml-4"/>
                  <span class="text-sm text-gray-500 ml-2">详解神经网络中反向传播和梯度下降</span>
                </div>
                <div class="flex items-center">
                  <icon-circle class="w-3 h-3 ml-4"/>
                  <span class="text-sm text-gray-500 ml-2">详解神经网络中反向传播和梯度下降</span>
                </div>
                <div class="flex items-center">
                  <icon-circle class="w-3 h-3 ml-4"/>
                  <span class="text-sm text-gray-500 ml-2">详解神经网络中反向传播和梯度下降</span>
                </div>
              </div>
              <div class="absolute left-6 h-full w-20 ml-0.5">
                <div
                    class="h-full bg-gray-500 absolute left-0 top-0 before:block before:w-full before:h-full before:bg-gray-100"
                    style="width: 2px;"></div>
              </div>
            </div>
          </div>
          <div>
            <div class="flex items-center">
              <img class="rounded-xl w-14 h-14"
                   src="https://file.ipadown.com/tophub/assets/images/media/jiqizhixin.com.png_120x120.png" alt="">
              <div class="ml-6 text-sm text-gray-500">17 分钟前</div>
            </div>
            <div class="relative flex pl-16 overflow-hidden my-3">
              <div class="flex flex-col space-y-4">
                <div class="flex items-center">
                  <icon-circle class="w-3 h-3 ml-4"/>
                  <span class="text-sm text-gray-500 ml-2">详解神经网络中反向传播和梯度下降</span>
                </div>
                <div class="flex items-center">
                  <icon-circle class="w-3 h-3 ml-4"/>
                  <span class="text-sm text-gray-500 ml-2">详解神经网络中反向传播和梯度下降</span>
                </div>
                <div class="flex items-center">
                  <icon-circle class="w-3 h-3 ml-4"/>
                  <span class="text-sm text-gray-500 ml-2">详解神经网络中反向传播和梯度下降</span>
                </div>
              </div>
              <div class="absolute left-6 h-full w-20 ml-0.5">
                <div
                    class="h-full bg-gray-500 absolute left-0 top-0 before:block before:w-full before:h-full before:bg-gray-100"
                    style="width: 2px;"></div>
              </div>
            </div>
          </div>
          <div>
            <div class="flex items-center">
              <img class="rounded-xl w-14 h-14"
                   src="https://file.ipadown.com/tophub/assets/images/media/juejin.im.png_120x120.png" alt="">
              <div class="ml-6 text-sm text-gray-500">17 分钟前</div>
            </div>
            <div class="relative flex pl-16 overflow-hidden my-3">
              <div class="flex flex-col space-y-4">
                <div class="flex items-center">
                  <icon-circle class="w-3 h-3 ml-4"/>
                  <span class="text-sm text-gray-500 ml-2">详解神经网络中反向传播和梯度下降</span>
                </div>
                <div class="flex items-center">
                  <icon-circle class="w-3 h-3 ml-4"/>
                  <span class="text-sm text-gray-500 ml-2">详解神经网络中反向传播和梯度下降</span>
                </div>
                <div class="flex items-center">
                  <icon-circle class="w-3 h-3 ml-4"/>
                  <span class="text-sm text-gray-500 ml-2">详解神经网络中反向传播和梯度下降</span>
                </div>
              </div>
              <div class="absolute left-6 h-full w-20 ml-0.5">
                <div
                    class="h-full bg-gray-500 absolute left-0 top-0 before:block before:w-full before:h-full before:bg-gray-100"
                    style="width: 2px;"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col w-4/12 pl-16">
        <div class="flex space-x-2 mb-4 ml-0.5 text-gray-300 text-sm">
          <div class="text-gray-600">节点订阅</div>
          <div>24</div>
        </div>
        <div class="flex flex-col space-y-6 mt-4">
          <div class="flex justify-between">
            <div class="flex items-center justify-center">
              <div><img class="w-10 h-10 rounded-full"
                        src="https://file.ipadown.com/tophub/assets/images/media/jiqizhixin.com.png_120x120.png" alt="">
              </div>
              <div class="ml-3">
                <div style="font-size: 0.8rem;">机器之心·最热文章</div>
                <div class="text-gray-400" style="font-size: 0.4rem;">1306位订阅者</div>
              </div>
            </div>
            <div class="flex items-center">
              <icon-star/>
            </div>
          </div>
          <div class="flex justify-between">
            <div class="flex items-center justify-center">
              <div><img class="w-10 h-10 rounded-full"
                        src="https://file.ipadown.com/tophub/assets/images/media/infoq.cn.png_120x120.png" alt=""></div>
              <div class="ml-3">
                <div style="font-size: 0.8rem;">机器之心·最热文章</div>
                <div class="text-gray-400" style="font-size: 0.4rem;">1306位订阅者</div>
              </div>
            </div>
            <div class="flex items-center">
              <icon-star/>
            </div>
          </div>
          <div class="flex justify-between">
            <div class="flex items-center justify-center">
              <div><img class="w-10 h-10 rounded-full"
                        src="https://file.ipadown.com/tophub/assets/images/media/toutiao.io.png_120x120.png" alt="">
              </div>
              <div class="ml-3">
                <div style="font-size: 0.8rem;">机器之心·最热文章</div>
                <div class="text-gray-400" style="font-size: 0.4rem;">1306位订阅者</div>
              </div>
            </div>
            <div class="flex items-center">
              <icon-star/>
            </div>
          </div>
          <div class="flex justify-between">
            <div class="flex items-center justify-center">
              <div><img class="w-10 h-10 rounded-full"
                        src="https://file.ipadown.com/tophub/assets/images/media/juejin.im.png_120x120.png" alt="">
              </div>
              <div class="ml-3">
                <div style="font-size: 0.8rem;">机器之心·最热文章</div>
                <div class="text-gray-400" style="font-size: 0.4rem;">1306位订阅者</div>
              </div>
            </div>
            <div class="flex items-center">
              <icon-star/>
            </div>
          </div>
          <div class="flex justify-between">
            <div class="flex items-center justify-center">
              <div><img class="w-10 h-10 rounded-full"
                        src="https://file.ipadown.com/tophub/assets/images/media/csdn.net.png_120x120.png" alt=""></div>
              <div class="ml-3">
                <div style="font-size: 0.8rem;">机器之心·最热文章</div>
                <div class="text-gray-400" style="font-size: 0.4rem;">1306位订阅者</div>
              </div>
            </div>
            <div class="flex items-center">
              <icon-star/>
            </div>
          </div>
          <div class="flex justify-between">
            <div class="flex items-center justify-center">
              <div><img class="w-10 h-10 rounded-full"
                        src="https://file.ipadown.com/tophub/assets/images/media/weekly.manong.io.png_120x120.png"
                        alt=""></div>
              <div class="ml-3">
                <div style="font-size: 0.8rem;">机器之心·最热文章</div>
                <div class="text-gray-400" style="font-size: 0.4rem;">1306位订阅者</div>
              </div>
            </div>
            <div class="flex items-center">
              <icon-star/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>