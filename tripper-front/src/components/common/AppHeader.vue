<template>
  <header>
    <div>
      <router-link to="/" class="logo"><span>TRIPPER</span></router-link>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px;
  background-color: #7dbeff;
}

.logo {
  color: white;
  font-size: 30px;
  font-weight: 800;
}
</style>
