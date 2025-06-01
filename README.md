# Password Generation App

セキュアなパスワードを生成するVue.jsアプリケーションです。

## 🚀 クイックスタート

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev
```

ブラウザで http://localhost:5173 を開いてください。

## 📚 Vue.js開発入門ガイド

### Vue.jsとは？

Vue.jsは、ユーザーインターフェースを構築するためのJavaScriptフレームワークです。HTMLとJavaScriptを組み合わせて、対話的なWebアプリケーションを作成できます。

### このプロジェクトの構造

```
src/
├── views/               # ページ（画面）
│   ├── HomeView.vue    # ホーム画面
│   └── AboutView.vue   # 説明画面
├── components/         # 再利用可能な部品
│   └── PasswordGenerator.vue  # パスワード生成部分
├── stores/            # データの管理場所
│   └── passwordGenerator.js   # パスワード生成のロジック
├── router/            # ページの切り替え設定
└── main.js           # アプリの起動ファイル
```

### 基本的な概念

#### 1. コンポーネント（Component）
Vueアプリは「コンポーネント」という部品を組み合わせて作ります。

```vue
<!-- 例：シンプルなコンポーネント -->
<template>
  <div>
    <h1>{{ title }}</h1>
    <button @click="changeTitle">タイトルを変更</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// データ（変数）
const title = ref('こんにちは！')

// 処理（関数）
const changeTitle = () => {
  title.value = '変更されました！'
}
</script>
```

#### 2. リアクティブなデータ
`ref`や`reactive`を使うと、データが変わると画面も自動的に更新されます。

```javascript
// refの使い方
const count = ref(0)
count.value++ // 値を変更すると画面も更新される

// reactiveの使い方
const user = reactive({
  name: '太郎',
  age: 20
})
user.age = 21 // 画面が自動更新される
```

#### 3. テンプレート構文
HTMLの中でVueの機能を使えます。

```vue
<template>
  <!-- データの表示 -->
  <p>{{ message }}</p>
  
  <!-- 条件分岐 -->
  <p v-if="isVisible">表示される</p>
  
  <!-- 繰り返し -->
  <ul>
    <li v-for="item in items" :key="item.id">
      {{ item.name }}
    </li>
  </ul>
  
  <!-- イベント処理 -->
  <button @click="handleClick">クリック</button>
  
  <!-- 入力との連携 -->
  <input v-model="inputText" />
</template>
```

### 開発の流れ

#### 1. 新しいコンポーネントを作る

`src/components/`フォルダに新しい`.vue`ファイルを作成：

```vue
<!-- src/components/MyComponent.vue -->
<template>
  <div class="my-component">
    <h2>私のコンポーネント</h2>
  </div>
</template>

<script setup>
// ここにJavaScriptを書く
</script>

<style scoped>
/* ここにCSSを書く */
.my-component {
  padding: 20px;
  background-color: #f0f0f0;
}
</style>
```

#### 2. コンポーネントを使う

他のコンポーネントで使うには：

```vue
<template>
  <div>
    <MyComponent />
  </div>
</template>

<script setup>
import MyComponent from '@/components/MyComponent.vue'
</script>
```

#### 3. ストア（Pinia）でデータを管理

複数のコンポーネントで共有するデータは、ストアで管理します：

```javascript
// src/stores/myStore.js
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useMyStore = defineStore('myStore', () => {
  // データ
  const count = ref(0)
  
  // 計算された値
  const doubleCount = computed(() => count.value * 2)
  
  // 処理
  const increment = () => {
    count.value++
  }
  
  return { count, doubleCount, increment }
})
```

コンポーネントでストアを使う：

```vue
<script setup>
import { useMyStore } from '@/stores/myStore'
import { storeToRefs } from 'pinia'

const store = useMyStore()
const { count, doubleCount } = storeToRefs(store)
const { increment } = store
</script>
```

### よく使うコマンド

```bash
# 開発サーバーを起動（コードを変更すると自動で反映）
npm run dev

# 本番用にビルド（配布用のファイルを作成）
npm run build

# ビルドしたものを確認
npm run preview
```

### デバッグのコツ

1. **ブラウザの開発者ツール**を使う（F12キー）
2. **Vue DevTools**をインストールすると、Vueの状態が見やすくなります
3. `console.log()`で値を確認する

```javascript
const handleClick = () => {
  console.log('クリックされました！', someValue)
  // 処理...
}
```

### このプロジェクトで学べること

1. **コンポーネントの作り方** - `PasswordGenerator.vue`を参考に
2. **状態管理** - `stores/passwordGenerator.js`でPiniaの使い方
3. **ルーティング** - `router/index.js`でページ遷移
4. **スタイリング** - scopedスタイルとグローバルスタイル

### 次のステップ

1. `PasswordGenerator.vue`のコードを読んで理解する
2. 小さな変更を加えてみる（例：ボタンの色を変える）
3. 新しい機能を追加してみる（例：パスワード履歴機能）

### 参考リンク

- [Vue.js 公式ドキュメント（日本語）](https://ja.vuejs.org/)
- [Pinia 公式ドキュメント](https://pinia.vuejs.org/)
- [Vite 公式ドキュメント](https://ja.vitejs.dev/)

## 🛠️ プロジェクトコマンド

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動（ホットリロード付き）
npm run dev

# 本番用ビルド
npm run build

# ビルドのプレビュー
npm run preview

# GitHub Pagesへのデプロイ
npm run deploy
```

## 📁 プロジェクト構成

- **Vue 3** - Composition API (`<script setup>`)を使用
- **Vite** - 高速なビルドツール
- **Vue Router** - クライアントサイドルーティング
- **Pinia** - 状態管理
- **@ エイリアス** - `src/`ディレクトリを指す

## 🔧 推奨開発環境

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (Veturは無効化してください)