# 何时使用嵌套类和 Lambda 表达式

合适使用嵌套类、本地类、匿名类和 Lambda 表达式

如 [嵌套类 ](./nested.md) 一节中所述，嵌套类使您能够逻辑地对仅在一个地方使用的类进行分组，增加使用封装，并创建更可读和可维护的代码。本地类，匿名类和 lambda 表达式也赋予这些优点; 但是，它们旨在用于更具体的情况：

* [本地类](./localclasses.md)：如果您需要创建一个类的多个实例，访问其构造函数或引入新的命名类型（例如，您需要稍后调用其他方法），请使用它。

* [匿名类](./anonymousclasses.md)：如果需要声明字段或其他方法，请使用它。

* [Lambda 表达式](./lambdaexpressions.md)：

    * 如果您封装要传递给其他代码的单个行为单位，请使用它。例如，如果要对集合的每个元素执行特定操作，当进程完成时，或者当进程遇到错误时，您将使用 lambda 表达式。
    * 如果您需要功能接口的简单实例，并且不适用上述条件（例如，您不需要构造函数，命名类型，字段或其他方法），请使用它。

* [嵌套类](./nested.md)：

    如果您的要求类似于本地类的要求，则希望使该类型更广泛地使用，并且不需要访问局部变量或方法参数。

    如果您需要访问封闭实例的非公有字段和方法，请使用非静态嵌套类（或内部类）。如果您不需要此访问权限，请使用静态嵌套类。
