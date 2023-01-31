# vue-wc-likes
vue-wc-likes is vue component wrapper for wc-likes web custom element. See demo in [demonstration page](https://webislife.ru/demo/vue-wc-likes/)
see for more info [wc-likes git repo](https://github.com/webislife/wc-likes)

install
```
npm insall vue-wc-likes
```
usage
```
import VLikes from './components/likes.vue';
//...
components: {  VLikes},
```
and in template
```
<VLikes :value="like"  :hint="hint" :submitLike="submitLike" :fetchLikes="fetchLikes"/>
```
Enjoy!
