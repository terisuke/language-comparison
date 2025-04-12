# 言語比較プロジェクトのセットアップ方法

このプロジェクトは、Elixir、Python、TypeScriptの同様の機能を比較して学習することを目的としています。

## 1. Elixirの設定

### 必要なもの
- Elixir 1.14以上
- Mix（Elixirに同梱）

### セットアップ
```bash
# 新しいElixirプロジェクトを作成
mix new elixir_examples

# 作成したexamples.exファイルをlib/フォルダにコピー
cp examples.ex elixir_examples/lib/

# プロジェクトディレクトリに移動
cd elixir_examples

# 対話型シェルで実行
iex -S mix

# iexで以下を実行
> c("lib/examples.ex")
> Examples.run_examples()
```

## 2. Pythonの設定

### 必要なもの
- Python 3.8以上
- asyncio（標準ライブラリ）

### セットアップ
```bash
# 仮想環境を作成（オプション）
python -m venv venv
source venv/bin/activate  # Windowsの場合: venv\Scripts\activate

# examples.pyを実行
python examples.py
```

## 3. TypeScriptの設定

### 必要なもの
- Node.js 14以上
- npm 6以上

### セットアップ
```bash
# 新しいプロジェクトを初期化
mkdir typescript_examples
cd typescript_examples
npm init -y

# TypeScriptとReact（TSX用）をインストール
npm install typescript ts-node @types/node react @types/react

# tsconfig.jsonを作成
echo '{
  "compilerOptions": {
    "target": "es2020",
    "module": "commonjs",
    "lib": ["es2020", "dom"],
    "jsx": "react",
    "strict": true,
    "esModuleInterop": true,
    "experimentalDecorators": true
  }
}' > tsconfig.json

# examples.tsxをコピー

# 実行用のindex.tsを作成
echo 'import Examples from "./examples";
const examples = new Examples();
examples.runExamples();' > index.ts

# 実行
npx ts-node index.ts
```

## 各言語での実行例とデモの方法

### 比較ポイント

各言語のファイルは同じ5つの例を含んでいます：

1. **文字列処理**: パイプライン処理とフィルタリング
2. **並行処理**: 非同期タスク実行
3. **構造の分解**: パターンマッチングと構造化代入
4. **再帰処理**: リスト集計
5. **メタプログラミング**: マクロ、デコレータ、ロガー

### デモ実行方法

各言語で同じ例を順番に実行し、出力結果やコードの書き方の違いを比較説明できます：

1. Elixir: `iex -S mix` で対話型シェルを起動し、`Examples.run_examples()` を実行
2. Python: `python examples.py` を実行
3. TypeScript: `npx ts-node index.ts` を実行

これらを並べて見せることで、各言語の特徴や違いが明確になります。