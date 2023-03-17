<template>
  <div class="max-w-4xl md:mx-auto mx-4">
    <div class="mt-24 border">
      <div class="my-4 mx-8 pb-1 border-b-2 border-b-red-400 text-red-400">创建节点</div>
      <div class="my-2 mx-8 grid grid-cols-6 gap-x-8 gap-y-2">
        <div class="col-span-6 sm:col-span-3">
          <label for="node-name" class="block text-sm font-medium leading-6 text-gray-900">节点名称</label>
          <input type="text" name="node-name" id="node-name" autocomplete="node-name" class="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-400 sm:text-sm sm:leading-6">
        </div>
        <div class="col-span-6 sm:col-span-3">
          <label for="list-name" class="block text-sm font-medium leading-6 text-gray-900">榜单名称</label>
          <input type="text" name="list-name" id="list-name" autocomplete="list-name" class="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-400 sm:text-sm sm:leading-6">
        </div>
        <div class="col-span-6 sm:col-span-6">
          <label for="cURL-link" class="block text-sm font-medium leading-6 text-gray-900">cURL链接</label>
          <div class="mt-2">
            <textarea id="about" name="about" rows="3" class="mt-1 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-400 sm:py-1.5 sm:text-sm sm:leading-6" placeholder="cURL..."></textarea>
          </div>
        </div>
        <div class="col-span-6 sm:col-span-3">
          <label for="title-rules" class="block text-sm font-medium leading-6 text-gray-900">提取标题规则</label>
          <input type="text" name="title-rules" id="title-rules" autocomplete="title-rules" class="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-400 sm:text-sm sm:leading-6">
        </div>
        <div class="col-span-6 sm:col-span-3">
          <label for="link-rules" class="block text-sm font-medium leading-6 text-gray-900">提取链接规则</label>
          <input type="text" name="link-rules" id="link-rules" autocomplete="link-rules" class="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-400 sm:text-sm sm:leading-6">
        </div>
      </div>
      <div class="my-4 mx-8 text-xs text-gray-500">
        <p>备注：省略</p>
      </div>
    </div>
    <div class="mt-4 border">
      <div class="ml-7 my-4 flex justify-start">
        <button type="button" class="mx-1 px-2 py-1 bg-red-400 text-sm text-white hover:bg-red-500">规则测试</button>
        <button type="button" class="mx-1 px-2 py-1 bg-red-400 text-sm text-white hover:bg-red-500">保存并提交审核</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewNode"
}
</script>

<style scoped>

</style>