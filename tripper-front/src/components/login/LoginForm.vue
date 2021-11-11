<template>
  <div id="loginform">
    <form>
      <div>
        <label for="id"> 아이디 : </label>
        <input type="text" id="id" placeholder="아이디를 입력해주세요." /><br />
        <label for="password"> 비밀번호 : </label>
        <input
          type="password"
          id="password"
          placeholder="비밀번호를 입력해주세요."
        /><br />
        <button type="submit">로그인하기</button>
      </div>
    </form>
    <div>
      <router-link to="/FindId"></router-link>
      <router-link to="/SignUp"></router-link>
    </div>
  </div>
</template>

<script>
import { loginUser } from "@/api/index.js";
import {} from "@/utils/validation";

export default {
  data() {
    return {
      userid: "",
      password: "",
    };
  },
  methods: {
    loginUser,
  },
};
</script>

<style></style>
