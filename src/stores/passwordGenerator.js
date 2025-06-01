import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'

export const usePasswordGeneratorStore = defineStore('passwordGenerator', () => {
  // State
  const password = ref('')
  const length = ref(16)
  const includeUppercase = ref(true)
  const includeLowercase = ref(true)
  const includeNumbers = ref(true)
  const includeSymbols = ref(false)
  const isCopied = ref(false)

  // Computed
  const charset = computed(() => {
    let chars = ''
    if (includeUppercase.value) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if (includeLowercase.value) chars += 'abcdefghijklmnopqrstuvwxyz'
    if (includeNumbers.value) chars += '0123456789'
    if (includeSymbols.value) chars += '!@#$%^&*()_+-=[]{}|;:,.<>?'
    return chars
  })

  const hasValidCharset = computed(() => charset.value.length > 0)

  // Actions
  const generatePassword = () => {
    if (!hasValidCharset.value) {
      alert('少なくとも1つの文字種を選択してください')
      return
    }

    let newPassword = ''
    const array = new Uint32Array(length.value)
    crypto.getRandomValues(array)

    for (let i = 0; i < length.value; i++) {
      newPassword += charset.value[array[i] % charset.value.length]
    }

    password.value = newPassword
    isCopied.value = false
  }

  const copyPassword = async () => {
    if (!password.value) return

    try {
      await navigator.clipboard.writeText(password.value)
      isCopied.value = true
      setTimeout(() => {
        isCopied.value = false
      }, 2000)
    } catch (err) {
      alert('コピーに失敗しました')
    }
  }

  // Watch for option changes
  watch([length, includeUppercase, includeLowercase, includeNumbers, includeSymbols], () => {
    if (password.value) {
      generatePassword()
    }
  })

  return {
    // State
    password,
    length,
    includeUppercase,
    includeLowercase,
    includeNumbers,
    includeSymbols,
    isCopied,
    // Computed
    hasValidCharset,
    // Actions
    generatePassword,
    copyPassword
  }
})