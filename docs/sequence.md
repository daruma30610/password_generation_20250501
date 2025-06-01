# パスワード生成アプリケーションのシーケンス図

## 概要

このドキュメントは、パスワード生成アプリケーションの処理フローをシーケンス図で説明します。

## 初期化処理

```mermaid
sequenceDiagram
    participant User as ユーザー
    participant Browser as ブラウザ
    participant App as Vue App
    participant Router as Vue Router
    participant Home as HomeView
    participant PG as PasswordGenerator
    participant Store as Pinia Store

    User->>Browser: アプリケーションにアクセス
    Browser->>App: index.htmlをロード
    App->>App: main.jsを実行
    App->>Router: ルーターを初期化
    App->>Store: Piniaストアを初期化
    Router->>Home: HomeViewをレンダリング
    Home->>PG: PasswordGeneratorコンポーネントをマウント
    PG->>Store: usePasswordGeneratorStore()
    Store-->>PG: ストアインスタンスを返す
    PG->>Store: generatePassword()
    Store->>Store: 初期パスワードを生成
    Store-->>PG: パスワードを更新
    PG-->>Browser: UIを表示
```

## パスワード生成処理

```mermaid
sequenceDiagram
    participant User as ユーザー
    participant UI as UI
    participant Store as Pinia Store
    participant Crypto as Web Crypto API

    User->>UI: 「パスワードを生成」ボタンをクリック
    UI->>Store: generatePassword()
    Store->>Store: hasValidCharsetを確認
    
    alt 文字種が選択されていない場合
        Store-->>UI: アラート表示
    else 文字種が選択されている場合
        Store->>Store: charsetを構築
        Store->>Crypto: crypto.getRandomValues()
        Crypto-->>Store: ランダムな数値配列
        Store->>Store: パスワードを生成
        Store->>Store: password.valueを更新
        Store->>Store: isCopied = false
        Store-->>UI: UIを更新
    end
```

## オプション変更時の自動再生成

```mermaid
sequenceDiagram
    participant User as ユーザー
    participant UI as UI
    participant Store as Pinia Store

    User->>UI: オプションを変更（文字数、文字種など）
    UI->>Store: v-modelでデータを更新
    Store->>Store: watcherが変更を検知
    
    alt パスワードが既に生成されている場合
        Store->>Store: generatePassword()を自動実行
        Store-->>UI: 新しいパスワードを表示
    end
```

## コピー処理

```mermaid
sequenceDiagram
    participant User as ユーザー
    participant UI as UI
    participant Store as Pinia Store
    participant Clipboard as Clipboard API

    User->>UI: 「コピー」ボタンをクリック
    UI->>Store: copyPassword()
    
    alt パスワードが存在する場合
        Store->>Clipboard: navigator.clipboard.writeText()
        
        alt コピー成功
            Clipboard-->>Store: Promise resolved
            Store->>Store: isCopied = true
            Store-->>UI: ボタンを「コピー済み」に変更
            Store->>Store: setTimeout(2000ms)
            Store->>Store: isCopied = false
            Store-->>UI: ボタンを「コピー」に戻す
        else コピー失敗
            Clipboard-->>Store: Promise rejected
            Store-->>UI: エラーアラート表示
        end
    end
```

## データフロー

```mermaid
graph TD
    A[ユーザー入力] --> B[Vue Component]
    B --> |v-model| C[Pinia Store State]
    C --> D[Computed: charset]
    D --> E[generatePassword Action]
    E --> F[Web Crypto API]
    F --> G[生成されたパスワード]
    G --> C
    C --> |storeToRefs| B
    B --> H[UI更新]
    
    I[オプション変更] --> J[Watcher]
    J --> E
```

## 状態管理

### Pinia Storeの状態

- **password**: 生成されたパスワード
- **length**: パスワードの文字数（4-32）
- **includeUppercase**: 大文字を含むか
- **includeLowercase**: 小文字を含むか
- **includeNumbers**: 数字を含むか
- **includeSymbols**: 記号を含むか
- **isCopied**: コピー済みフラグ

### 計算プロパティ

- **charset**: 選択された文字種から構築される文字セット
- **hasValidCharset**: 有効な文字セットが存在するか

### アクション

- **generatePassword**: パスワードを生成
- **copyPassword**: クリップボードにコピー

## セキュリティ考慮事項

1. **暗号学的に安全な乱数生成**: Web Crypto APIの`crypto.getRandomValues()`を使用
2. **クライアントサイド処理**: すべての処理はブラウザ内で完結し、サーバーへの送信なし
3. **データの非永続化**: 生成されたパスワードは保存されない