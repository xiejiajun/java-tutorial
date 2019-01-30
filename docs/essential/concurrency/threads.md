# 线程对象
每个线程与`Thread`类的实例相关联。使用`Thread`对象创建并发应用程序有两种基本策略。

* 为了直接控制线程创建和管理，只需在应用程序Thread每次启动异步任务时实例化。
* 从应用程序的其余部分抽象线程管理，将应用程序的任务传递给执行程序。

本节介绍Thread对象的使用。与[其他高级并发对象](http://docs.oracle.com/javase/tutorial/essential/concurrency/highlevel.html)的讨论。