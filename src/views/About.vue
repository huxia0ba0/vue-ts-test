<template>
  <div class="about">
    <h1>This 1is an ab11out page</h1>
    <h2>{{str}}</h2>
    <li @click="changeMessage">点我改</li>
    <li @click="userLogin">点我发送登录请求</li>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Login } from "../api/requset";

@Component
export default class HelloWorld extends Vue {
  public str: string = "123";
  public id: number = 123;
  public changeMessage(): void {
    console.log(134);
    this.str = "Good bye";
  }

  public async userLogin() {
    let res = await Login({ id: this.id });
    console.log(res);
  }
}
</script>

<style scoped>
</style>
