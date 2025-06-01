<template>
  <div class="password-generator">
    <div class="password-display">
      <input 
        type="text" 
        v-model="password" 
        readonly 
        class="password-input"
        placeholder="生成されたパスワード"
      />
      <button @click="copyPassword" class="copy-button" :class="{ copied: isCopied }">
        {{ isCopied ? 'コピー済み' : 'コピー' }}
      </button>
    </div>

    <div class="options">
      <div class="option length-option">
        <label for="length">文字数: {{ length }}</label>
        <input 
          type="range" 
          id="length" 
          v-model="length" 
          min="4" 
          max="32" 
          class="slider"
        />
      </div>

      <div class="option">
        <label>
          <input type="checkbox" v-model="includeUppercase" />
          大文字を含む (A-Z)
        </label>
      </div>

      <div class="option">
        <label>
          <input type="checkbox" v-model="includeLowercase" />
          小文字を含む (a-z)
        </label>
      </div>

      <div class="option">
        <label>
          <input type="checkbox" v-model="includeNumbers" />
          数字を含む (0-9)
        </label>
      </div>

      <div class="option">
        <label>
          <input type="checkbox" v-model="includeSymbols" />
          記号を含む (!@#$%^&*)
        </label>
      </div>
    </div>

    <button @click="generatePassword" class="generate-button">
      パスワードを生成
    </button>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { usePasswordGeneratorStore } from '@/stores/passwordGenerator'

const passwordGeneratorStore = usePasswordGeneratorStore()

// Use storeToRefs to maintain reactivity
const { 
  password, 
  length, 
  includeUppercase, 
  includeLowercase, 
  includeNumbers, 
  includeSymbols, 
  isCopied 
} = storeToRefs(passwordGeneratorStore)

// Actions from store
const { generatePassword, copyPassword } = passwordGeneratorStore

onMounted(() => {
  generatePassword()
})
</script>

<style scoped>
.password-generator {
  max-width: 500px;
  margin: 0 auto;
}

.password-display {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;
}

.password-input {
  flex: 1;
  padding: 1rem;
  font-size: 1.2rem;
  font-family: monospace;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  background: #f5f5f5;
}

.copy-button {
  padding: 0 1.5rem;
  background: #42b883;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s;
}

.copy-button:hover {
  background: #35a372;
}

.copy-button.copied {
  background: #4caf50;
}

.options {
  margin-bottom: 2rem;
}

.option {
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
}

.option label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  user-select: none;
  color: #2c3e50;
  font-size: 1rem;
}

.option input[type="checkbox"] {
  width: 18px;
  height: 18px;
  cursor: pointer;
}

.length-option {
  flex-direction: column;
  align-items: center;
}

.length-option label {
  margin-bottom: 0.5rem;
}

.slider {
  width: 80%;
  max-width: 300px;
}

.generate-button {
  width: 100%;
  padding: 1rem;
  font-size: 1.1rem;
  background: #42b883;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s;
}

.generate-button:hover {
  background: #35a372;
}

@media (max-width: 640px) {
  .password-input {
    font-size: 1rem;
  }
}
</style>