<template>
  <div>
    home
    {{ $t('app.globalText.welcome') }}
    <van-grid clickable :column-num="2">
      <van-grid-item icon="home-o" text="示例" to="/example" />
      <van-grid-item icon="search" text="URL 跳转" url="https://github.com" />
    </van-grid>
    <van-icon name="chat-o" />
    <van-icon
        class='iconfont'
        class-prefix='icon'
        name='adjust'
      />
    <van-button round block type="primary" native-type="submit">
      提交
    </van-button>
  </div>
</template>