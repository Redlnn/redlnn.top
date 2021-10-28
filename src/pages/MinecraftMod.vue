<script setup>
import { useMeta } from 'vue-meta'

const tags = 'Red_lnn,我的世界,Minecraft,mod,模组'
const description = 'Red_lnn 的 Minecraft 模组列表 | 这里是 Red_lnn 的小空间，感谢你的来访'

useMeta({
  description: description,
  meta: [{ name: 'keywords', content: tags }],
  og: {
    description: description,
  },
  twitter: {
    description: description,
  },
})
</script>

<template>
  <div>
    <h1 style="text-align: center">Minecraft 模组列表</h1>
    <el-divider content-position="center">
      <span style="color: var(--el-text-color-placeholder)">我 是 分 割 线</span>
    </el-divider>
    <el-row>
      <el-col :xs="0" :sm="2" :md="3" :lg="5" :xl="6"></el-col>
      <el-col :xs="24" :sm="20" :md="18" :lg="14" :xl="12">
        <el-alert
          title="该列表仅包含 1.16 起常用的 Fabric 端模组"
          type="success"
          show-icon
          :closable="closable"
          style="margin: 10px 0"
        ></el-alert>
        <el-alert
          title="该列表部分模组的简介摘录自 MC百科"
          type="success"
          show-icon
          :closable="closable"
          style="margin: 10px 0"
        ></el-alert>
        <el-alert
          title="列表内部分模组存在互相冲突的情况，请勿盲目添加。部分模组需要前置API，可以留意游戏启动失败时 Fabric Loader 提示的内容。"
          type="warning"
          show-icon
          :closable="closable"
          style="margin: 10px 0"
        ></el-alert>
        <el-alert
          title="本页面正在测试与完善，部分简介、分类、适用范围存在问题。上次更新：2021/10/8，更正到 “EasierChests”"
          type="error"
          show-icon
          :closable="closable"
          style="margin: 10px 0"
        ></el-alert>
        <div class="remark">
          <p>
            <strong>提示：</strong>
          </p>
          <ul>
            <li>
              本页面中的模组数据可在
              <a href="https://github.com/Redlnn/redlnn.top/tree/master/src/assets/mcmod.json">GitHub 仓库</a>
              中找到，如有修改或增删建议可以发 pr
            </li>
            <li>
              Optifine替代品列表：
              <a href="https://gist.github.com/LambdAurora/1f6a4a99af374ce500f250c6b42e8754">GitHub Gist</a>
            </li>
          </ul>
        </div>
      </el-col>
      <el-col :xs="0" :sm="2" :md="3" :lg="5" :xl="6"></el-col>
    </el-row>
    <el-row style="margin: 18px 0">
      <el-col :xs="0" :sm="0" :md="1" :lg="1" :xl="2"></el-col>
      <el-col :xs="24" :sm="24" :md="22" :lg="22" :xl="20">
        <el-table stripe :data="tableData" :cell-class-name="desc" :height="screenHeight - 101">
          <el-table-column prop="name" label="模组名称" min-width="100" sortable></el-table-column>
          <el-table-column prop="nameCN" label="中文名称" width="100" sortable></el-table-column>
          <el-table-column
            prop="type"
            label="分类"
            width="90"
            sortable
            :filters="[
              { text: '辅助操作', value: '辅助操作' },
              { text: '增加功能', value: '增加功能' },
              { text: '修改界面', value: '修改界面' },
              { text: '性能优化', value: '性能优化' },
              { text: '联机优化', value: '联机优化' },
              { text: '前置API', value: '前置API' },
              { text: '信息展示', value: '信息展示' },
              { text: '地图', value: '地图' },
              { text: '其他', value: '其他' },
            ]"
            :filter-method="filterHandler"
          ></el-table-column>
          <el-table-column
            prop="applation"
            label="适用范围"
            width="120"
            sortable
            :filters="[
              { text: '客户端', value: '客户端' },
              { text: '服务端', value: '服务端' },
              { text: '通用', value: '通用' },
            ]"
            :filter-method="filterHandler"
          ></el-table-column>
          <el-table-column prop="desc" label="简介" min-width="250"></el-table-column>
          <el-table-column prop="download" label="相关地址" width="350">
            <template #default="scope">
              <div class="tr_url">
                <a
                  v-if="scope.row.official_url"
                  :href="scope.row.official_url"
                  class="button official"
                  style="font-weight: 600; letter-spacing: 0.1rem"
                >
                  官方网站
                </a>
                <a v-if="scope.row.modrinth_url" :href="scope.row.modrinth_url" class="button modrinth">
                  <img
                    :src="'../assets/img/modrinth.svg'"
                    title="从 Modrinth 下载"
                    alt="从 Modrinth 下载"
                    style="height: 1.1rem"
                  />
                </a>
                <a v-if="scope.row.curseforge_url" :href="scope.row.curseforge_url" class="button curseforge">
                  <img
                    :src="'../assets/img/anvil.svg'"
                    alt="curseforge logo"
                    style="width: 1.3rem; margin-right: 0.3rem"
                  />
                  <img
                    :src="'../assets/img/cf-logo.svg'"
                    title="从 CurseForge 下载"
                    alt="从 CurseForge 下载"
                    style="height: 0.6rem"
                  />
                </a>
                <a
                  v-if="scope.row.github_url"
                  :href="scope.row.github_url"
                  class="button github"
                  style="font-weight: 600; letter-spacing: 0.03rem"
                >
                  <img
                    :src="'../assets/img/github1.svg'"
                    title="访问 GitHub 仓库"
                    alt="访问 GitHub 仓库"
                    style="height: 1.1rem; margin-right: 0.3rem"
                  />
                  GitHub
                </a>
                <a v-if="scope.row.other_url" style="margin: 0.2rem 0">{{ scope.row.other_url }}</a>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="mcmod" label="mc百科" width="130">
            <template #default="scope">
              <a v-if="scope.row.mcmod_url" :href="scope.row.mcmod_url" class="button mcmod">
                <img :src="'../assets/img/mcmod.webp'" title="访问mc百科" alt="访问mc百科" style="height: 1.1rem" />
              </a>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
      <el-col :xs="0" :sm="0" :md="1" :lg="1" :xl="2"></el-col>
    </el-row>
  </div>
</template>

<script>
import mcmodData from '../assets/mcmod.json'

export default {
  data() {
    return {
      tableData: mcmodData,
      closable: true,
      screenHeight: document.documentElement.clientHeight,
    }
  },
  watch: {
    screenHeight(newValue) {
      // 为了避免频繁触发resize函数导致页面卡顿，使用定时器
      if (!this.timer) {
        // 一旦监听到的screenHeight值改变，就将其重新赋给data里的screenHeight
        this.screenHeight = newValue
        this.timer = true
        setTimeout(() => {
          //   console.log(this.screenHeight);
          this.timer = false
        }, 500)
      }
    },
  },
  mounted() {
    window.addEventListener(
      'resize',
      () => {
        this.screenHeight = document.documentElement.clientHeight
      },
      false
    )
  },
  methods: {
    desc({ columnIndex }) {
      if (columnIndex == 4) {
        return 'desc'
      }
    },
    filterHandler(value, row, column) {
      const property = column['property']
      return row[property] === value
    },
  },
}
</script>

<style>
.el-table__body-wrapper::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

.el-table__body-wrapper::-webkit-scrollbar-thumb {
  background-color: #ddd;
  border-radius: 5px;
}

.el-table__body-wrapper::-webkit-scrollbar-thumb:hover {
  background-color: #ccc;
  border-radius: 5px;
}

.el-table__body-wrapper::-webkit-scrollbar-track,
.el-table__body-wrapper::-webkit-scrollbar-track-piece {
  background-color: #eee;
  border-radius: 5px;
}

.el-table {
  border-radius: 6px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.el-table .el-table__cell,
.el-table .cell {
  text-align: center;
}

.el-table-filter.el-popper {
  padding: 5px;
}

.el-table-filter__checkbox-group label.el-checkbox {
  display: flex;
}

.el-table-filter__content {
  justify-content: left;
  vertical-align: middle;
}

.el-table td.el-table__cell div {
  white-space: pre-wrap;
}
</style>

<style scoped>
.desc {
  text-align: left !important;
}

.tr_url {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  align-content: center;
  vertical-align: middle;
  text-align: left;
}

.button {
  position: relative;
  white-space: nowrap;
  height: 1.3rem;
  padding: 0.4rem 0.8rem;
  margin: 0.2rem 0;
  color: #fff;
  background-color: var(--el-color-primary);
  font-size: 0.7rem;
  line-height: 1.3rem;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  text-decoration: none;
  outline: 0;
  border-radius: 0.5rem;
}

.button.official,
.button.modrinth,
.button.curseforge,
.button.github {
  width: 8rem;
  height: 1.5rem;
}

.modrinth {
  background-color: #5fa33b;
}

.curseforge {
  background-color: #333333;
}

.github {
  background-color: #24292f;
}

.mcmod {
  background-color: #3c454c;
}

.remark {
  margin: 10px 0;
  padding: 1rem;
  color: var(--el-text-color-secondary);
  font-size: 0.9rem;
  text-align: left;
  background-color: #f4f4f4;
  border-radius: 5px;
  line-height: 1.5rem;
}

.remark p,
.remark li {
  margin: 0.5rem;
}

.remark a {
  color: var(--el-text-color-secondary);
}
</style>
