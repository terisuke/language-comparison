# Elixir, Python, TypeScriptの比較表

| 機能           | Elixir                       | Python                        | TypeScript                        |
|----------------|------------------------------|-------------------------------|-----------------------------------|
| **パラダイム**      | 関数型プログラミング                | マルチパラダイム（オブジェクト指向、命令型）   | マルチパラダイム（オブジェクト指向、関数型）       |
| **不変性**     | デフォルトで不変                   | 可変がデフォルト                    | 可変がデフォルト                        |
| **並行性モデル**  | アクターモデル（軽量プロセス）            | asyncio/スレッド/マルチプロセス          | Promise/async-await               |
| **型システム**     | 動的型付け + 型仕様           | 動的型付け + 型ヒント             | 静的型付け                         |
| **エラー処理**    | パターンマッチングと「Let it crash」哲学 | 例外処理                      | 例外処理 + 型による保護              |
| **コレクション処理** | パイプライン演算子による関数チェーン      | リスト内包表記、map/filter/reduce | メソッドチェーン、配列メソッド                 |
| **メタプログラミング**  | マクロシステム                      | メタクラス、デコレータ                   | デコレータ（実験的）、型メタプログラミング         |
| **コード再利用**  | モジュール、ビヘイビア                  | モジュール、クラス継承                 | モジュール、クラス継承、インターフェース            |
| **標準ライブラリ**  | 比較的コンパクト                  | バッテリー同梱（非常に豊富）          | TypeScript自体は小さいがJSエコシステムが豊富 |

## 構文比較例

### 1. コレクション処理

**Elixir:**
```elixir
["Hello", "Elixir", "World"]
|> Enum.map(&String.upcase/1)
|> Enum.filter(fn s -> String.length(s) > 5 end)
|> Enum.join(", ")
```

**Python:**
```python
", ".join([s.upper() for s in ["Hello", "Elixir", "World"] if len(s) > 5])
```

**TypeScript:**
```typescript
["Hello", "Elixir", "World"]
  .map(s => s.toUpperCase())
  .filter(s => s.length > 5)
  .join(", ")
```

### 2. 非同期処理

**Elixir:**
```elixir
task1 = Task.async(fn -> long_running_function() end)
task2 = Task.async(fn -> another_function() end)
[result1, result2] = [task1, task2] |> Enum.map(&Task.await/1)
```

**Python:**
```python
async def main():
    task1 = asyncio.create_task(long_running_function())
    task2 = asyncio.create_task(another_function())
    result1, result2 = await asyncio.gather(task1, task2)

asyncio.run(main())
```

**TypeScript:**
```typescript
const [result1, result2] = await Promise.all([
  longRunningFunction(),
  anotherFunction()
]);
```

### 3. 構造の分解

**Elixir:**
```elixir
%{name: name, age: age} = user
```

**Python:**
```python
name = user["name"]
age = user["age"]
# または Python 3.8+:
# name, age = user["name"], user["age"]
```

**TypeScript:**
```typescript
const { name, age } = user;
```

### 4. パターンマッチング (関数定義)

**Elixir:**
```elixir
def process([]), do: :empty
def process([head | tail]), do: [transform(head) | process(tail)]
```

**Python:**
```python
# Pythonには関数レベルのパターンマッチングがないので場合分け
def process(items):
    if not items:
        return "empty"
    return [transform(items[0])] + process(items[1:])
```

**TypeScript:**
```typescript
// TypeScriptにも関数レベルのパターンマッチングはない
function process(items: any[]): any {
  if (items.length === 0) return "empty";
  return [transform(items[0]), ...process(items.slice(1))];
}
```

## Python/TypeScript開発者から見たElixirの特徴的な点

### 良さが感じられる点
- パイプライン演算子によるデータ変換の読みやすさ
- 軽量プロセスによる簡潔な並行プログラミング
- パターンマッチングの表現力
- 不変性によるバグの少なさ
- 関数型パラダイムの一貫性

### 慣れが必要な点
- 命令型思考からの脱却
- 再帰思考の習得
- 不変データ構造での効率的な操作
- OOP的な継承の代わりにビヘイビアを使う考え方
- 「Let it crash」哲学の理解