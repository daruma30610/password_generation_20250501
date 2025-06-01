<script setup>
import PasswordGenerator from '../components/PasswordGenerator.vue'
</script>

<template>
  <main>
    <div class="container">
      <h1>パスワード生成ツール</h1>
      <p class="description">安全で強力なパスワードを簡単に生成できます</p>
      <PasswordGenerator />
    </div>
  </main>
</template>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

h1 {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.description {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 3rem;
}

@media (max-width: 640px) {
  .container {
    padding: 1rem;
  }
  
  h1 {
    font-size: 2rem;
  }
  
  .description {
    font-size: 1rem;
  }
}
</style>
