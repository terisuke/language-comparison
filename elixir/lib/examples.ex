defmodule Examples do
  @moduledoc """
  言語比較のためのサンプルコード
  """

  def run_examples do
    IO.puts("\n=== Elixir Examples ===")
    string_processing()
    concurrent_processing()
    pattern_matching()
    recursion()
    metaprogramming()
  end

  # 1. 文字列処理とパイプ演算子
  def string_processing do
    IO.puts("\n1. String Processing:")
    result = ["hello", "world", "elixir", "python", "typescript"]
    |> Enum.map(&String.upcase/1)
    |> Enum.filter(&(String.length(&1) > 5))
    |> Enum.join(" ")

    IO.puts("Result: #{result}")
  end

  # 2. 並行処理
  def concurrent_processing do
    IO.puts("\n2. Concurrent Processing:")
    parent = self()

    spawn(fn ->
      :timer.sleep(1000)
      send(parent, {:result, "Task 1 completed"})
    end)

    spawn(fn ->
      :timer.sleep(500)
      send(parent, {:result, "Task 2 completed"})
    end)

    receive do
      {:result, msg} -> IO.puts(msg)
    end

    receive do
      {:result, msg} -> IO.puts(msg)
    end
  end

  # 3. パターンマッチング
  def pattern_matching do
    IO.puts("\n3. Pattern Matching:")
    user = %{name: "John", age: 30, role: "admin"}

    case user do
      %{role: "admin"} = admin ->
        IO.puts("Admin user: #{admin.name}")
      %{age: age} when age >= 18 ->
        IO.puts("Adult user: #{user.name}")
      _ ->
        IO.puts("Other user")
    end
  end

  # 4. 再帰処理
  def recursion do
    IO.puts("\n4. Recursion:")
    result = sum_list([1, 2, 3, 4, 5])
    IO.puts("Sum: #{result}")
  end

  defp sum_list([]), do: 0
  defp sum_list([head | tail]), do: head + sum_list(tail)

  # 5. メタプログラミング
  def metaprogramming do
    IO.puts("\n5. Metaprogramming:")
    defmodule DynamicModule do
      defmacro create_function(name) do
        quote do
          def unquote(name)() do
            IO.puts("Dynamic function #{unquote(name)} called")
          end
        end
      end
    end

    defmodule Example do
      import DynamicModule
      create_function :hello
    end

    Example.hello()
  end
end
