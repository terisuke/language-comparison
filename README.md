# 言語比較プロジェクト

このプロジェクトは、TypeScriptやPythonを普段使用しているエンジニアが、Elixirの特徴的な機能（Mix、並行プログラミング、パイプ演算子など）を学ぶための比較学習リポジトリです。

## プロジェクトの目的

- Elixirの特徴的な機能を、既に知っている言語（TypeScript、Python）との比較を通じて理解する
- 同じ機能を異なる言語で実装することで、各言語の特徴や設計思想の違いを学ぶ
- 実践的なコード例を通じて、Elixirの並行プログラミングや関数型プログラミングの特徴を理解する

## 比較対象の機能

### 1. パイプライン処理
各言語での文字列処理の実装方法を比較します：

```elixir
# Elixir: パイプ演算子を使用
["hello", "world", "elixir"]
|> Enum.map(&String.upcase/1)
|> Enum.filter(&(String.length(&1) > 5))
|> Enum.join(" ")
```

```python
# Python: リスト内包表記
" ".join(
    word.upper()
    for word in words
    if len(word) > 5
)
```

```typescript
// TypeScript: メソッドチェーン
words
  .map(word => word.toUpperCase())
  .filter(word => word.length > 5)
  .join(" ")
```

### 2. 並行処理
各言語での並行処理の実装方法を比較します：

- **Elixir**: プロセスベースの並行処理（`spawn`とメッセージパッシング）
- **Python**: `asyncio`を使用した非同期処理
- **TypeScript**: `Promise`を使用した非同期処理

### 3. パターンマッチング
各言語でのデータ構造の分解方法を比較します：

- **Elixir**: パターンマッチングとガード節
- **Python**: 辞書のgetメソッドと条件分岐
- **TypeScript**: オブジェクトの分割代入

### 4. 再帰処理
各言語での再帰処理の実装方法を比較します：

- **Elixir**: パターンマッチングを使用した再帰
- **Python**: リストのスライシングを使用した再帰
- **TypeScript**: 配列のスライスを使用した再帰

### 5. メタプログラミング
各言語でのメタプログラミング機能を比較します：

- **Elixir**: マクロ
- **Python**: デコレータ
- **TypeScript**: メソッドデコレータ

## セットアップ方法

各言語のセットアップ方法は[setup.md](setup.md)を参照してください。

### Elixir
```bash
cd elixir
mix deps.get
iex -S mix
> Examples.run_examples()
```

### Python
```bash
cd python
python3 examples.py
```

### TypeScript
```bash
cd typescript
npm install
npm start
```

## 実行結果の比較

各言語で同じ機能を実装した際の出力結果を比較できます：

1. **文字列処理**
   - Elixir: `ELIXIR PYTHON TYPESCRIPT`
   - Python: `PYTHON TYPESCRIPT ELIXIR`
   - TypeScript: `TYPESCRIPT PYTHON ELIXIR`

2. **並行処理**
   - 全ての言語で非同期タスクが正しく実行され、完了メッセージが表示されます

3. **パターンマッチング**
   - 全ての言語で同じ条件分岐の結果（"Admin user: John"）が得られます

4. **再帰処理**
   - 全ての言語で同じ結果（合計: 15）が得られます

## 今後の改善予定

1. **テストの追加**
   - 各言語でのテスト方法の違いを示す
   - 同じ機能のテストを各言語で実装

2. **エラーハンドリング**
   - 各言語でのエラーハンドリング方法の違いを示す例を追加

3. **パフォーマンス比較**
   - 同じ処理を各言語で実行した際のパフォーマンス比較を追加

## 参考リソース

- [Elixir公式ドキュメント](https://elixir-lang.org/docs.html)
- [Python公式ドキュメント](https://docs.python.org/ja/3/)
- [TypeScript公式ドキュメント](https://www.typescriptlang.org/docs/) 