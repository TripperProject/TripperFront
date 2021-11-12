<template>
  <div>
    <form class="form-container">
      <div>
        <label for="userid"> 아이디 :</label>
        <input type="text" id="userid" />
        <button class="btn" id="duplicateCheck">중복확인</button>
      </div>
      <div>
        <label for="password"> 비밀번호 : </label>
        <input type="password" id="password" />
        <label for="password"> 비밀번호 확인 : </label>
        <input type="password" id="passwordCheck" />
      </div>
      <div>
        <input type="text" id="name" /><br />
        <input type="text" id="phone" />
        <span id="certNumSend">인증번호 전송</span>
        <input type="text" id="certNum" />
      </div>
      <button class="btn" type="submit">SignUp</button>
    </form>
  </div>
</template>

<script>
import { signUpUser } from "@/api/index.js";
import {} from "@/utils/validation";

export default {
  data() {
    return {
      userid: "",
      password: "",
      passwordCheck: "",
      name: "",
      phone: "",
      certNum: "",
    };
  },
  methods: {
    signUpUser,
  },
  computed: {},
};
</script>

<style scoped>
body {
  align-content: center;
}
.btn {
  color: white;
}
</style>
