<script setup>
import { RouterLink } from 'vue-router'
import PasswordGenerator from '../components/PasswordGenerator.vue'
</script>

<template>
  <div class="home">
    <div class="container">
      <h1>パスワード生成ツール</h1>
      <section class="section">
        <p class="description">安全で強力なパスワードを簡単に生成できます</p>
        <PasswordGenerator />
      </section>
      <div class="link-container">
        <RouterLink to="/about" class="about-link">使い方を見る</RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
}

.container {
  max-width: 800px;
  width: 100%;
  padding: 0 2rem;
}

h1 {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 2rem;
  text-align: center;
}

.section {
  background: white;
  padding: 2rem;
  margin-bottom: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.description {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 2rem;
  text-align: center;
}

.link-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
}

.about-link {
  display: inline-block;
  padding: 0.8rem 2rem;
  background-color: #42b883;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-size: 1.1rem;
  transition: background-color 0.3s;
}

.about-link:hover {
  background-color: #35a372;
}

@media (max-width: 640px) {
  .container {
    padding: 0 1rem;
  }
  
  h1 {
    font-size: 2rem;
  }
  
  .section {
    padding: 1.5rem;
  }
  
  .description {
    font-size: 1rem;
  }
}
</style>
