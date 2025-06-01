<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <h1>パスワード生成ツール</h1>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  background-color: #42b883;
  padding: 1rem 0;
  margin-bottom: 2rem;
}

.wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
}

h1 {
  color: white;
  font-size: 1.5rem;
  margin: 0 0 1rem 0;
}

nav {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

nav a {
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.3s;
}

nav a:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

nav a.router-link-exact-active {
  background-color: rgba(255, 255, 255, 0.2);
}

@media (max-width: 640px) {
  h1 {
    font-size: 1.2rem;
  }
  
  nav {
    gap: 0.5rem;
  }
  
  nav a {
    padding: 0.4rem 0.8rem;
    font-size: 0.9rem;
  }
}
</style>
