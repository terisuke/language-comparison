import React from 'react';

class Examples {
  async runExamples(): Promise<void> {
    console.log("\n=== TypeScript Examples ===");
    this.stringProcessing();
    await this.concurrentProcessing();
    this.patternMatching();
    this.recursion();
    this.metaprogramming();
  }

  // 1. 文字列処理
  stringProcessing(): void {
    console.log("\n1. String Processing:");
    const words = ["hello", "world", "typescript", "python", "elixir"];
    const result = words
      .map(word => word.toUpperCase())
      .filter(word => word.length > 5)
      .join(" ");
    
    console.log(`Result: ${result}`);
  }

  // 2. 並行処理
  async concurrentProcessing(): Promise<void> {
    console.log("\n2. Concurrent Processing:");
    const task1 = new Promise<string>(resolve => {
      setTimeout(() => resolve("Task 1 completed"), 1000);
    });

    const task2 = new Promise<string>(resolve => {
      setTimeout(() => resolve("Task 2 completed"), 500);
    });

    const results = await Promise.all([task1, task2]);
    results.forEach(result => console.log(result));
  }

  // 3. 構造の分解（パターンマッチング）
  patternMatching(): void {
    console.log("\n3. Pattern Matching:");
    const user = {
      name: "John",
      age: 30,
      role: "admin"
    };

    const { role, name, age } = user;

    if (role === "admin") {
      console.log(`Admin user: ${name}`);
    } else if (age >= 18) {
      console.log(`Adult user: ${name}`);
    } else {
      console.log("Other user");
    }
  }

  // 4. 再帰処理
  recursion(): void {
    console.log("\n4. Recursion:");
    const sumList = (list: number[]): number => {
      if (list.length === 0) return 0;
      return list[0] + sumList(list.slice(1));
    };

    const result = sumList([1, 2, 3, 4, 5]);
    console.log(`Sum: ${result}`);
  }

  // 5. メタプログラミング（デコレータ）
  metaprogramming(): void {
    console.log("\n5. Metaprogramming:");
    function logFunction(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
      const originalMethod = descriptor.value;
      descriptor.value = function (...args: any[]) {
        console.log(`Calling ${propertyKey}`);
        return originalMethod.apply(this, args);
      };
      return descriptor;
    }

    class Example {
      @logFunction
      hello() {
        console.log("Hello from decorated method!");
      }
    }

    const example = new Example();
    example.hello();
  }
}

// Reactコンポーネントの例
export const ExampleComponent: React.FC = () => {
  const examples = new Examples();
  
  React.useEffect(() => {
    examples.runExamples();
  }, []);

  return (
    <div>
      <h1>Language Comparison Examples</h1>
      <p>Check the console for output</p>
    </div>
  );
};

export default Examples; 