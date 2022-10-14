<script setup lang="ts">
import Banner from '@/components/Banner.vue'
import FriendLink from '@/components/FriendLink.vue'
</script>

<template>
  <main>
    <banner height="50vh" text="友情链接" />
    <section class="links">
      <friend-link
        name="SAGIRI"
        link="https://blog.sagiri.tech"
        avatar-url="https://photo.sagiri-web.com/content/images/users/1Sw/av_1579083376.png"
        shadow-color="#eec3e6"
      />
      <friend-link
        name="BlueGlassBlock"
        link="https://blog.blueg.top"
        avatar-url="https://q1.qlogo.cn/g?b=qq&nk=2907489501&s=100"
        shadow-color="#3242aa"
      />
      <friend-link
        name="一只快乐的小指针"
        link="https://new.ailliom.xyz"
        avatar-url="https://avatars.githubusercontent.com/u/41528165?v=4"
        shadow-color="#ece0ac"
      />
    </section>
  </main>
</template>

<style lang="scss" scoped>
.links {
  margin: 80px auto 60px auto;
  padding: 0 50px;
  display: grid;
  max-width: 900px;
  grid-template-columns: repeat(auto-fill, 160px);
  justify-content: center;
  justify-items: center;
}
</style>

<style lang="scss">
.links .link {
  margin-bottom: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  transition: transform 0.1s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  .avatar {
    border-radius: 5px;
    height: 100px;
    width: 100px;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center;
  }

  .name {
    text-align: center;
    margin: 8px 0;
    font-weight: 600;
    text-shadow: 0px 0px 5px #00000040;
    color: #333;
  }

  html.dark & {
    .avatar {
      opacity: 0.8;
    }

    .name {
      color: #ccc;
    }
  }
}
</style>
