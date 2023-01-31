<script lang="ts">
import VLikes from './components/likes.vue';
import { ref } from 'vue';
export default {
  setup() {
    return {
      like:ref(10),
      like2:ref(20),
      like3:ref(30),
      like4:ref(40),
      disabled:ref(true),
      fetch:ref(true),
      hint:ref('reactive hint here'),
    }
  },
  components: {
    VLikes
  },
  mounted() {
    setInterval(() => {
      this.like2 = this.like2+1;
      this.like3 = this.like3+1;
      this.like4 = this.like4+1;
    }, 3000);
  },
  methods: {
    onToggleFetch(event:Event) {
      this.fetch = !this.fetch;
    },
    onToggleDisabled(event:Event) {
      this.disabled = !this.disabled;
    },
    async fetchLikes(params:any):Promise<Number> {
        alert('fetchSubmitLikes');
        const PromiseAPIStatus:number = await new Promise((resolve, reject) => {
            setTimeout(() => resolve(200), 1000);
        });
        return PromiseAPIStatus;
    },
    async submitLike():Promise<Number> {
        alert('fetchAsyncLikes');
        const PromiseAPIStatus:number = await new Promise((resolve, reject) => {
            setTimeout(() => resolve(200), 1000);
        });
        return PromiseAPIStatus;
    }
  }
}
</script>

<template>
  <main>
    <h1>Vue.js<sup style="background-color: #3eaf7c; color: #fff; display: inline-block; padding:3px; border-radius: 3px; font-size:0.7em;line-height: 0.7em;">3+</sup> <br/>
      <a href="https://www.npmjs.com/package/wc-likes"><code>wc-likes</code></a> integration example</h1>
    <p>
      Try like!
      <VLikes :value="like"  :hint="hint" :submitLike="submitLike" :fetchLikes="fetchLikes"/>
    </p>
    <p>
      Alredy liked
      <VLikes :value="like2"  :hint="'you already liked)'" :liked="true" :submitLike="submitLike" :fetchLikes="fetchLikes"/>
    </p>
    <p>
      Disabled\enabled auth 
      <VLikes :value="like3" :hint="hint" :disabled="disabled" :submitLike="submitLike" :fetchLikes="fetchLikes"/>
    </p>
    <p>
      Fetch likes
      <VLikes :value="like4" :fetch="fetch" :submitLike="submitLike" :fetchLikes="fetchLikes"/>
    </p>
    <button @click="onToggleFetch">toggle fetch</button>
    <button @click="onToggleDisabled">toggle disabled</button>
    <input v-model="hint" placeholdre="check hint" />
  </main>
  <footer>
    <p style="font-size: 12px; margin-top:20px">
      work in &lt;<code>vite</code>+<code>ts</code>+<code>vue</code>+<code>web-components</code>&gt; 
      <br>dev with ❤️ <a href="https://strokoff.ru" rel="nofollow" target="_blank">strokoff</a>. 
      <br>Enjoy!
      <br/>Connect and have fun in <a href="https://webislife.ru">webislife.ru</a>
    </p>
  </footer>
</template>

<style lang="scss">
:root {
  --color-blue-gray-50: #ECEFF1;
  --color-blue-gray-100: #ECEFF1;
  --color-blue-gray-200: #B0BEC5;
  --color-blue-gray-300: #90A4AE;
  --color-blue-gray-400: #78909C;
  --color-blue-gray-700: #455A64;
  --color-blue-gray-800: #37474F;
  --color-blue-light-50: #E1F5FE;
}
h1 {
  margin-bottom: 1em;
}
button, .btn {
    outline: none;
    padding: 3px 6px;
    border-radius: 3px;
    border: 1px solid #3eaf7c;
    border-bottom: 3px solid #3eaf7c;
    color: #333;
    min-width: 0px;
    text-align: center;
    box-sizing: border-box;
    display: inline-block;
    text-transform: uppercase;
    font-size: 0.85em;
    font-weight: 400;
    line-height: 1;
    white-space: nowrap;
    margin-right: 5px;
    user-select: none;
    cursor: pointer;
    &:hover {
        border-color: #266a4b;
    }
    &:focus  {
        border-color: var(#00f);
    }
    &:active  {
        padding-top:2px;
        border-color: var(--color-blue-gray-700);
        border-bottom: 1px solid;
    }
    &.-green {
        border-color: var(--color-green-500)
    }
}
main {
  margin: 0 auto;
  text-align: center;
  
}
#app {
  border: 1px solid #3eaf7c;
  border-radius: 1em;
  padding: 1em;
}
main > p {
  margin-bottom: 1em;
}

</style>
