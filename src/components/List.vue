
<template>
  <div class="list">
    <div class="top_slide">
      <div style="font-size: 0.16rem; font-weight: 700; padding-left: 0.24rem">
        火爆商品
      </div>
      <ul class="package_li">
        <li v-for="(item, index) in toplist" :key="index">
          <div class="li_img">
            <img :src="item.image" alt="加载失败" :title="item.name" />
          </div>
          <p class="li_txt">{{ item.name }}</p>
          <h3 class="li_price">￥{{ item.price }}</h3>
        </li>
      </ul>
    </div>
    <div class="butt">
      <div
        :class="vvvb == 'all' ? 'butt1' : ''"
        @click="huoqu('all')"
        style="width: 0.44rem"
      >
        全部
      </div>
      <div :class="vvvb == 'style' ? 'butt1' : ''" @click="huoqu('style')">
        款式新
      </div>
      <div :class="vvvb == 'sell' ? 'butt1' : ''" @click="huoqu('sell')">
        销量高
      </div>
      <div :class="vvvb == 'rate' ? 'butt1' : ''" @click="huoqu('rate')">
        好评多
      </div>
    </div>

    <div class="list111">
      <div class="zhong" v-for="(item, index) in productlist" :key="index">
        <div class="left">
          <img :src="item.image" alt="商品主图" />
        </div>
        <div class="middle">
          <p class="name">{{ item.name }}</p>
          <p class="price">￥{{ item.price }}</p>
        </div>
        <div class="cart">
          <router-link to="/cart"
            ><img src="@/assets/cart.png" alt=""
          /></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
// import axios from 'axios'
export default {
  name: 'list',
  components: {},
  data() {
    return {
      dian: {},
      toplist: [],
      productlist: [],
      vvvb: 'all',
    }
  },
  created() {
    this.huoqu('all')
  },
  methods: {
    huoqu(aa) {
      this.vvvb = aa
      console.log(this.vvvb)
      axios
        .get('https://dahua0822-api.herokuapp.com/goods', {
          params: {
            sort: aa,
          },
        })
        .then((res) => {
          this.toplist = res.data.data.top
          this.productlist = res.data.data.data
          // console.log(res)
          // console.log(this.productlist)
        })
    },
  },
}
</script>

<style scoped>
.list {
  font-size: 0.16rem;
  /* width: 3.75rem; */
  /* height: 500px; */
  /* background: pink; */
  overflow: hidden;
}
.top_slide {
  width: 3.75rem;
  height: 3rem;
  /* background: red;
   */
  margin-top: 0.28rem;

  box-sizing: content-box;
}
.package_li {
  white-space: nowrap;
  font-size: 0;
  overflow-x: auto;
  width: 3.75rem;
  margin-top: 0.24rem;
}
.package_li::-webkit-scrollbar {
  display: none;
}
.package_li li {
  font-size: 16px;
  display: inline-block;
  width: 1.68rem;
  height: 2.22rem;
  margin-left: 0.24rem;
  background: rgba(255, 255, 255, 1);
  border-radius: 0.28rem;
  overflow: hidden;
}
.li_img {
  width: 1.68rem;
  height: 1.46rem;
  background: orchid;
}
.li_txt {
  margin-left: 0.18rem;
  margin-top: 0.11rem;
  font-size: 0.12rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.li_price {
  margin-left: 0.18rem;
  margin-top: 0.14rem;
}
.butt {
  width: 3.75rem;
  height: 0.44rem;
  /* background: red; */
  margin-left: 0.26rem;
  white-space: nowrap;
  overflow-x: auto;
}
.butt div {
  width: 0.99rem;
  height: 0.44rem;
  background: rgba(255, 255, 255, 1);
  border-radius: 0.14rem;
  text-align: center;
  line-height: 0.44rem;
  font-size: 14px;
  font-weight: 700;
  display: inline-block;
  margin-right: 40px;
}
.butt::-webkit-scrollbar {
  display: none;
}
.butt1 {
  background: rgba(255, 223, 117, 1) !important;
}

.butt1::-webkit-scrollbar {
  width: 0 !important;
}

.list111 {
  width: 3.27rem;
  /* height: 1.68rem; */
  margin: 0.1rem auto;
}
.zhong {
  position: relative;
  align-items: stretch;
  /* background: pink; */
  display: flex;
  margin-bottom: 0.26rem;
}
.left {
  width: 0.68rem;
  height: 0.68rem;
  margin-right: 15px;
  border-radius: 0.2rem;
  overflow: hidden;
}

.middle {
  flex: 1;
  display: inline-flex;
  flex-direction: column;
  justify-content: space-around;
}
.name {
  font-size: 0.12rem;
  width: 187px;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.price {
  font-size: 0.16rem;
  font-weight: 700;
}
.cart {
  height: 0.48rem;
  width: 0.48rem;
  position: absolute;
  right: 0.18rem;
  bottom: 0;
  background: rgba(255, 230, 148, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.27rem;
}
.cart img {
  width: 0.18rem;
  height: 0.18rem;
}
</style>