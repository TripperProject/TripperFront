<template>
  <div>
    <h1 class="Header">로그인페이지</h1>
    <loginForm></loginForm>
    <socialLogin></socialLogin>
  </div>
</template>

<script>
import loginForm from "@/components/login/LoginForm.vue";
import socialLogin from "@/components/login/socialLogin.vue";

export default {
  components: {
    loginForm,
    socialLogin,
  },
};
</script>

<style></style>
