<template>
<div>
<yd-cell-group slot="list" class="article">
  <yd-cell-item arrow v-for="(item,index) in articleList" :key="index" @click.native="detail(item.id)">
    <div slot="left"><span>{{ item.title }}</span> <yd-badge shape="square" class="time" type="warning">{{item.display_time}}</yd-badge></div>
    <span slot="right">{{ item.author }}</span>
    </yd-cell-item>
    <yd-cell-item v-if="articleList.length===0">
      <span slot="left">暂时没有数据</span>
    </yd-cell-item>
</yd-cell-group>

 <div class="roundplus" @click="addArticle()">+</div>
 <div class="popup-module">
        <yd-popup v-model="showDetail" position="bottom" height="60%">
            <div slot="top" class="popup-title">信息</div>
            <div>
                <yd-cell-group>
            <yd-cell-item>
                <span slot="left">标题</span>
                <span slot="right">{{articleInfo.title}}</span>
            </yd-cell-item>
            <yd-cell-item>
                <span slot="left">作者</span>
                <span slot="right">{{articleInfo.author}}</span>
            </yd-cell-item>
              <yd-cell-item>
                <span slot="left">时间</span>
                <span slot="right">{{articleInfo.display_time}}</span>
            </yd-cell-item>
        </yd-cell-group>
            </div>
        </yd-popup>
        </div>
</div>
</template>

<script>
import articleApi from "@/api/article";

export default {
  name: "Article",
  data() {
    return {
      showDetail: false,
      articleList: [],
      articleInfo: {}
    };
  },
  created() {
    this.getArticleList();
  },
  methods: {
    getArticleList() {
      articleApi
        .getArticleList()
        .then(response => {
          this.articleList = response.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    detail(articleId) {
      articleApi
        .getArticleInfo({ id: articleId })
        .then(response => {
          this.articleInfo = response.data;
          this.showDetail = true;
        })
        .catch(err => {
          console.log(err);
        });
    },
    addArticle() {
      articleApi
        .addArticle({
          author: "张三",
          title: "惊爆"
        })
        .then(response => {
          this.articleList = response.data;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style>
.article {
}
.article .time {
  margin-left: 10px;
}
.roundplus {
  width: 0.8rem;
  height: 0.8rem;
  line-height: 0.82rem;
  vertical-align: baseline;
  text-align: center;
  border-radius: 50%;
  background: #1296db;
  color: #fff;
  font-size: 0.56rem;
  right: 0.4rem;
  bottom: 0.4rem;
  z-index: 9;
  position: fixed;
}
.popup-module {
}

.popup-module .popup-title {
  height: 0.6rem;
  line-height: 0.6rem;
  background-color: #e8e8e8;
  transition-timing-function: cubic-bezier(0.785, 0.135, 0.15, 0.86)
}
</style>
