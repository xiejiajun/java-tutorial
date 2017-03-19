# 接口摘要

核心集合接口是Java集合框架的基础

Java集合框架层次结构包含两个不同的接口树：

**第一个 ：**Collection，它提供了所有集合使用的基本功能，例如：add 和remove。其子接口Set，List和Queue提供专门的集合
* set 接口不允许重复元素。这可用于存储集合，例如卡片或学生记录，Set接口有一个子接口SortedSet，它提供了集合中的元素排序。
* List 接口提供有序集合，用于需要精确控制每个元素插入位置的情况。你可以从一个List精确的位置检索元素
* Queue 接口实现了额外的插入，抽取和检查操作。Queue中的元素通常基于FIFO排序
* Deque 接口可以在两端插入，删除，和检查操作。可以在LIFO 和 FIFO 的场景使用

** 第二个 ： **Map,键值对映射，类似于Hashtable。其子接口SortedMap按升序或按指定的Comparator顺序维护其键值对。