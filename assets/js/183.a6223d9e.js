(window.webpackJsonp=window.webpackJsonp||[]).push([[183],{655:function(t,e,a){"use strict";a.r(e);var i=a(21),s=Object(i.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"传统文件-i-o-代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#传统文件-i-o-代码","aria-hidden":"true"}},[t._v("#")]),t._v(" 传统文件 I/O 代码")]),t._v(" "),a("h2",{attrs:{id:"与旧版代码的互操作性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#与旧版代码的互操作性","aria-hidden":"true"}},[t._v("#")]),t._v(" 与旧版代码的互操作性")]),t._v(" "),a("p",[t._v("在 Java SE 7 发布之前，"),a("code",[t._v("java.io.File")]),t._v(" 该类是用于文件 I / O 的机制，但它有几个缺点。")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("许多方法在失败时没有抛出异常，因此无法获取有用的错误消息。")]),t._v(" "),a("p",[t._v("例如，如果文件删除失败，程序将收到“删除失败”，但是不知道是不是因为该文件不存在，该用户没有权限或还有一些其他问题。")])]),t._v(" "),a("li",[a("p",[t._v("该 rename 方法在平台之间不能一致。")])]),t._v(" "),a("li",[a("p",[t._v("没有真正的支持符号链接。")])]),t._v(" "),a("li",[a("p",[t._v("需要对元数据的更多支持，例如文件权限，文件所有者和其他安全属性。")])]),t._v(" "),a("li",[a("p",[t._v("访问文件元数据效率低下。")])]),t._v(" "),a("li",[a("p",[t._v("许多 File 方法没有扩展。通过服务器请求大的目录列表可能导致挂起。大型目录也可能导致内存资源问题，导致拒绝服务。")])]),t._v(" "),a("li",[a("p",[t._v("不可能编写可靠的代码，可以递归地遍历一个文件树，如果有循环的符号链接，那么应该适当地做出回应。")])])]),t._v(" "),a("p",[t._v("也许你有遗留代码，使用 "),a("code",[t._v("java.io.File")]),t._v(" 并希望利用这些功能，对 "),a("code",[t._v("java.nio.file.Path")]),t._v(" 代码影响最小。")]),t._v(" "),a("p",[a("code",[t._v("java.io.File")]),t._v(" 类提供的 "),a("code",[t._v("toPath")]),t._v(" 方法，该方法旧式转换 "),a("code",[t._v("File")]),t._v(" 实例的 "),a("code",[t._v("java.nio.file.Path")]),t._v(" 实例，如下所示：")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("Path input "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" file"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toPath")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("然后，您可以利用课程中可用的丰富功能集 Path。")]),t._v(" "),a("p",[t._v("例如，假设您有一些删除文件的代码：")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("file"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("delete")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("您可以修改此代码以使用该 "),a("code",[t._v("Files.delete")]),t._v(" 方法，如下所示：")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("Path fp "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" file"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toPath")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nFiles"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("delete（fp）"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("相反，该 "),a("code",[t._v("Path.toFile")]),t._v(" 方法构造一个 "),a("code",[t._v("java.io.File")]),t._v(" 对象的 Path 对象。")]),t._v(" "),a("h2",{attrs:{id:"将-java-io-file-函数映射到-java-nio-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#将-java-io-file-函数映射到-java-nio-file","aria-hidden":"true"}},[t._v("#")]),t._v(" 将 java.io.File 函数映射到 java.nio.file")]),t._v(" "),a("p",[t._v("由于 Java SE 7 版本中完全重新构建了文件 I / O 的 Java 实现，因此无法交换另一种方法。\n如果要使用软件包提供的丰富功能 "),a("code",[t._v("java.nio.file")]),t._v("，您最简单的解决方案是使用 "),a("code",[t._v("File.toPath")]),t._v(" 上一节中建议的 方法。\n但是，如果您不想使用该方法或者不满足您的需要，则必须重写文件 I / O 代码。")]),t._v(" "),a("p",[t._v("两个 API 之间没有一对一的对应关系，但下表给出了 "),a("code",[t._v("java.io.File")]),t._v(" API 与 "),a("code",[t._v("java.nio.file")]),t._v(" 概念类似的 Api，并告诉您可以在哪里获取更多信息。")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("java.io.File 功能")]),t._v(" "),a("th",[t._v("java.nio.file 功能")]),t._v(" "),a("th",[t._v("教程覆盖")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("java.io.File")]),t._v(" "),a("td",[t._v("java.nio.file.Path")]),t._v(" "),a("td",[a("RouterLink",{attrs:{to:"/essential/io/pathClass.html"}},[t._v("The Path Class")])],1)]),t._v(" "),a("tr",[a("td",[t._v("java.io.RandomAccessFile")]),t._v(" "),a("td",[t._v("SeekableByteChannel")]),t._v(" "),a("td",[a("RouterLink",{attrs:{to:"/essential/io/rafs.html"}},[t._v("随机访问文件")])],1)]),t._v(" "),a("tr",[a("td",[t._v("File.canRead, canWrite, canExecute")]),t._v(" "),a("td",[t._v("Files.isReadable, Files.isWritable, and Files.isExecutable.在UNIX文件系统的"),a("RouterLink",{attrs:{to:"/essential/io/fileAttr.html"}},[t._v("管理元数据")]),t._v("（文件和文件存储属性）包是用来检查九个文件的权限。")],1),t._v(" "),a("td",[a("RouterLink",{attrs:{to:"/essential/io/check.html"}},[t._v("检查文件或目录")]),t._v(" ，"),a("RouterLink",{attrs:{to:"/essential/io/fileAttr.html"}},[t._v("元数据管理")])],1)]),t._v(" "),a("tr",[a("td",[t._v("File.isDirectory(), File.isFile(), and File.length()")]),t._v(" "),a("td",[t._v("Files.isDirectory(Path, LinkOption...), Files.isRegularFile(Path, LinkOption...), and Files.size(Path)")]),t._v(" "),a("td",[a("RouterLink",{attrs:{to:"/essential/io/fileAttr.html"}},[t._v("元数据管理")])],1)]),t._v(" "),a("tr",[a("td",[t._v("File.lastModified() and File.setLastModified(long)")]),t._v(" "),a("td",[t._v("Files.getLastModifiedTime(Path, LinkOption...) and Files.setLastMOdifiedTime(Path, FileTime)")]),t._v(" "),a("td",[a("RouterLink",{attrs:{to:"/essential/io/fileAttr.html"}},[t._v("元数据管理")])],1)]),t._v(" "),a("tr",[a("td",[t._v("File的这些方法设置文件属性: setExecutable, setReadable, setReadOnly, setWritable")]),t._v(" "),a("td",[t._v("这些方法替换 File的方法 setAttribute(Path, String, Object, LinkOption...).")]),t._v(" "),a("td",[a("RouterLink",{attrs:{to:"/essential/io/fileAttr.html"}},[t._v("元数据管理")])],1)]),t._v(" "),a("tr",[a("td",[t._v('new File(parent, "newfile") 基于父目录得到新的文件')]),t._v(" "),a("td",[t._v('parent.resolve("newfile")')]),t._v(" "),a("td",[a("RouterLink",{attrs:{to:"/essential/io/pathOps.html"}},[t._v("Path操作")])],1)]),t._v(" "),a("tr",[a("td",[t._v("File.renameTo")]),t._v(" "),a("td",[t._v("Files.move")]),t._v(" "),a("td",[a("RouterLink",{attrs:{to:"/essential/io/move.html"}},[t._v("移动文件或目录")])],1)]),t._v(" "),a("tr",[a("td",[t._v("File.delete")]),t._v(" "),a("td",[t._v("Files.delete")]),t._v(" "),a("td",[a("RouterLink",{attrs:{to:"/essential/io/delete.html"}},[t._v("删除文件或目录")])],1)]),t._v(" "),a("tr",[a("td",[t._v("File.createNewFile")]),t._v(" "),a("td",[t._v("Files.createFile")]),t._v(" "),a("td",[a("RouterLink",{attrs:{to:"/essential/io/file.html"}},[t._v("读、写、创建文件 - 创建文件")])],1)]),t._v(" "),a("tr",[a("td",[t._v("File.deleteOnExit")]),t._v(" "),a("td",[t._v("使用该选项 DELETE_ON_CLOSE 替代")]),t._v(" "),a("td",[a("RouterLink",{attrs:{to:"/essential/io/file.html"}},[t._v("读、写、创建文件 - 创建文件")])],1)]),t._v(" "),a("tr",[a("td",[t._v("File.createTempFile")]),t._v(" "),a("td",[t._v("Files.createTempFile(Path, String, FileAttributes<?>), Files.createTempFile(Path, String, String, FileAttributes<?>)")]),t._v(" "),a("td",[a("RouterLink",{attrs:{to:"/essential/io/file.html"}},[t._v("读、写、创建文件 - 创建文件")]),t._v(" ， "),a("RouterLink",{attrs:{to:"/essential/io/file.html"}},[t._v("读、写、创建文件 - 使用I / O流创建和写入文件")]),t._v(" ， "),a("RouterLink",{attrs:{to:"/essential/io/file.html"}},[t._v("读、写、创建文件 - 使用 Channel I/O 读写文件")])],1)]),t._v(" "),a("tr",[a("td",[t._v("File.exists")]),t._v(" "),a("td",[t._v("Files.exists and Files.notExists")]),t._v(" "),a("td",[a("RouterLink",{attrs:{to:"/essential/io/check.html"}},[t._v("检查文件或目录")])],1)]),t._v(" "),a("tr",[a("td",[t._v("File.compareTo and equals")]),t._v(" "),a("td",[t._v("Path.compareTo and equals")]),t._v(" "),a("td",[a("RouterLink",{attrs:{to:"/essential/io/pathOps.html"}},[t._v("Path 操作 - 比较两路径")])],1)]),t._v(" "),a("tr",[a("td",[t._v("File.getAbsolutePath and getAbsoluteFile")]),t._v(" "),a("td",[t._v("Path.toAbsolutePath")]),t._v(" "),a("td",[a("RouterLink",{attrs:{to:"/essential/io/pathOps.html"}},[t._v("Path 操作 - 转换路径")])],1)]),t._v(" "),a("tr",[a("td",[t._v("File.getCanonicalPath and getCanonicalFile")]),t._v(" "),a("td",[t._v("Path.toRealPath or normalize")]),t._v(" "),a("td",[a("RouterLink",{attrs:{to:"/essential/io/pathOps.html"}},[t._v("Path 操作 - 转换路径")]),t._v(" , "),a("RouterLink",{attrs:{to:"/essential/io/pathOps.html"}},[t._v("Path操作 - 从路径中删除冗余")])],1)]),t._v(" "),a("tr",[a("td",[t._v("File.toURI")]),t._v(" "),a("td",[t._v("Path.toURI")]),t._v(" "),a("td",[a("RouterLink",{attrs:{to:"/content/essential/io/pathOps.html"}},[t._v("Path操作 - 转换路径")])],1)]),t._v(" "),a("tr",[a("td",[t._v("File.isHidden")]),t._v(" "),a("td",[t._v("Files.isHidden")]),t._v(" "),a("td",[a("RouterLink",{attrs:{to:"/essential/io/pathOps.html"}},[t._v("Path操作 - 检索路径信息")])],1)]),t._v(" "),a("tr",[a("td",[t._v("File.list and listFiles")]),t._v(" "),a("td",[t._v("Path.newDirectoryStream")]),t._v(" "),a("td",[a("RouterLink",{attrs:{to:"/essential/io/dirs.html"}},[t._v("创建和读取目录 - 列出目录的类容")])],1)]),t._v(" "),a("tr",[a("td",[t._v("File.mkdir and mkdirs")]),t._v(" "),a("td",[t._v("Path.createDirectory")]),t._v(" "),a("td",[a("RouterLink",{attrs:{to:"/essential/io/dirs.html"}},[t._v("创建和读取目录 - 创建目录")])],1)]),t._v(" "),a("tr",[a("td",[t._v("File.listRoots")]),t._v(" "),a("td",[t._v("FileSystem.getRootDirectories")]),t._v(" "),a("td",[a("RouterLink",{attrs:{to:"/essential/io/dirs.html"}},[t._v("创建和读取目录 - 列出文件系统的根目录")])],1)]),t._v(" "),a("tr",[a("td",[t._v("File.getTotalSpace, File.getFreeSpace, File.getUsableSpace")]),t._v(" "),a("td",[t._v("FileStore.getTotalSpace, FileStore.getUnallocatedSpace, FileStore.getUsableSpace, FileStore.getTotalSpace")]),t._v(" "),a("td",[a("RouterLink",{attrs:{to:"/essential/io/fileAttr.html"}},[t._v("管理元数据（文件和文件存储属性）- 文件存储属性")])],1)])])])])},[],!1,null,null,null);e.default=s.exports}}]);