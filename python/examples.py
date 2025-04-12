import asyncio
from typing import List, Dict, Any
import functools

class Examples:
    def run_examples(self):
        print("\n=== Python Examples ===")
        self.string_processing()
        asyncio.run(self.concurrent_processing())
        self.pattern_matching()
        self.recursion()
        self.metaprogramming()

    # 1. 文字列処理
    def string_processing(self):
        print("\n1. String Processing:")
        words = ["hello", "world", "python", "typescript", "elixir"]
        result = " ".join(
            word.upper()
            for word in words
            if len(word) > 5
        )
        print(f"Result: {result}")

    # 2. 並行処理
    async def concurrent_processing(self):
        print("\n2. Concurrent Processing:")
        async def task1():
            await asyncio.sleep(1)
            return "Task 1 completed"

        async def task2():
            await asyncio.sleep(0.5)
            return "Task 2 completed"

        results = await asyncio.gather(task1(), task2())
        for result in results:
            print(result)

    # 3. 構造の分解（パターンマッチング）
    def pattern_matching(self):
        print("\n3. Pattern Matching:")
        user = {"name": "John", "age": 30, "role": "admin"}
        
        if user.get("role") == "admin":
            print(f"Admin user: {user['name']}")
        elif user.get("age", 0) >= 18:
            print(f"Adult user: {user['name']}")
        else:
            print("Other user")

    # 4. 再帰処理
    def recursion(self):
        print("\n4. Recursion:")
        def sum_list(lst: List[int]) -> int:
            if not lst:
                return 0
            return lst[0] + sum_list(lst[1:])

        result = sum_list([1, 2, 3, 4, 5])
        print(f"Sum: {result}")

    # 5. メタプログラミング（デコレータ）
    def metaprogramming(self):
        print("\n5. Metaprogramming:")
        def log_function(func):
            @functools.wraps(func)
            def wrapper(*args, **kwargs):
                print(f"Calling {func.__name__}")
                return func(*args, **kwargs)
            return wrapper

        @log_function
        def hello():
            print("Hello from decorated function!")

        hello()

if __name__ == "__main__":
    examples = Examples()
    examples.run_examples() 