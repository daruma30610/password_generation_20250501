<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="about">
    <div class="container">
      <h1>パスワード生成ツールの使い方</h1>
      
      <section class="section">
        <h2>📋 基本的な使い方</h2>
        <ol>
          <li>文字数スライダーを動かして、希望するパスワードの長さを設定します（4〜32文字）</li>
          <li>使用したい文字種のチェックボックスを選択します</li>
          <li>「パスワードを生成」ボタンをクリックするか、設定を変更すると自動的に新しいパスワードが生成されます</li>
          <li>生成されたパスワードをコピーボタンでクリップボードにコピーできます</li>
        </ol>
      </section>

      <section class="section">
        <h2>🔤 文字種の説明</h2>
        <ul>
          <li><strong>大文字（A-Z）</strong>: アルファベットの大文字</li>
          <li><strong>小文字（a-z）</strong>: アルファベットの小文字</li>
          <li><strong>数字（0-9）</strong>: 0から9までの数字</li>
          <li><strong>記号（!@#$%^&*）</strong>: 特殊文字・記号</li>
        </ul>
      </section>

      <section class="section">
        <h2>🔒 セキュリティについて</h2>
        <ul>
          <li>パスワードはブラウザ内で生成され、インターネットに送信されることはありません</li>
          <li>Web Crypto APIを使用して、暗号学的に安全な乱数を生成しています</li>
          <li>生成されたパスワードは保存されないため、必要な場合は別途保管してください</li>
        </ul>
      </section>

      <section class="section">
        <h2>💡 おすすめの設定</h2>
        <div class="recommendations">
          <div class="recommendation-card">
            <h3>一般的なWebサイト</h3>
            <p>文字数: 12〜16文字<br>文字種: すべて選択</p>
          </div>
          <div class="recommendation-card">
            <h3>重要なアカウント</h3>
            <p>文字数: 16〜20文字<br>文字種: すべて選択</p>
          </div>
          <div class="recommendation-card">
            <h3>高セキュリティ</h3>
            <p>文字数: 20文字以上<br>文字種: すべて選択</p>
          </div>
        </div>
      </section>

      <section class="section">
        <h2>❓ よくある質問</h2>
        <div class="faq">
          <details>
            <summary>生成されたパスワードは安全ですか？</summary>
            <p>はい。暗号学的に安全な乱数生成器を使用しているため、予測困難なパスワードが生成されます。</p>
          </details>
          <details>
            <summary>パスワードはどこかに保存されますか？</summary>
            <p>いいえ。パスワードはブラウザ内でのみ生成・表示され、どこにも保存されません。</p>
          </details>
          <details>
            <summary>オフラインでも使用できますか？</summary>
            <p>はい。一度ページを読み込んだ後は、インターネット接続なしでも使用できます。</p>
          </details>
        </div>
      </section>
      
      <div class="link-container">
        <RouterLink to="/" class="home-link">パスワード生成に戻る</RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about {
  min-height: 100vh;
  padding: 2rem 0;
  background-color: #f5f5f5;
}

.container {
  max-width: 800px;
  margin: 0 auto;
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

h2 {
  font-size: 1.5rem;
  color: #42b883;
  margin-bottom: 1rem;
}

h3 {
  font-size: 1.2rem;
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

ol, ul {
  margin-left: 1.5rem;
  line-height: 1.8;
  color: #2c3e50;
}

li {
  margin-bottom: 0.5rem;
  color: #2c3e50;
}

.recommendations {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.recommendation-card {
  background: #f9f9f9;
  padding: 1.5rem;
  border-radius: 8px;
  border: 2px solid #e0e0e0;
}

.recommendation-card p {
  margin: 0;
  color: #666;
}

.faq {
  margin-top: 1rem;
}

details {
  margin-bottom: 1rem;
  padding: 1rem;
  background: #f9f9f9;
  border-radius: 8px;
  cursor: pointer;
}

summary {
  font-weight: bold;
  color: #2c3e50;
  outline: none;
}

details p {
  margin-top: 1rem;
  margin-bottom: 0;
  color: #666;
  line-height: 1.6;
}

p {
  color: #2c3e50;
}

.link-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  padding-bottom: 2rem;
}

.home-link {
  display: inline-block;
  padding: 0.8rem 2rem;
  background-color: #42b883;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-size: 1.1rem;
  transition: background-color 0.3s;
}

.home-link:hover {
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
  
  .recommendations {
    grid-template-columns: 1fr;
  }
}
</style>
