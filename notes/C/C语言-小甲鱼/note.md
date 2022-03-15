## 前言

>  学习视频[b站小甲鱼](https://www.bilibili.com/video/BV17s411N78s/?spm_id_from=333.788.recommend_more_video.1)


**语言进程**

- 机器语言
- 汇编语言
- 高级语言
  - C
  - Java
  - C++
  - ...

### 编译型语言

C语言 --> 汇编语言 --> 机器语言 --> CPU执行

### 解释型语言

Java --> 字节码 --> 解释器 --> CPU执行

<br />

## 转义字符

| 转义字符 | 含义                                 | 备注                                  |
| -------- | ------------------------------------ | ------------------------------------- |
| \a       | 响铃（BEL）                          |                                       |
| \b       | 退格（BS），将当前位置移到前一列     | 如printf("1234\b56\n"); 打印12356     |
| \f       | 换页（FF），将当前位置移到下页开头   |                                       |
| \n       | 换行（LF），将当前位置移到下一行开头 |                                       |
| \r       | 回车（CR），将当前位置移到本行开头   | 如printf("1234\r56\n");打印5634       |
| \t       | 水平制表（HT），跳到下一个TAB位置    | 如printf("1234\t56\n");打印1234    56 |
| \v       | 垂直制表（VT）                       |                                       |
| 更多     |  -                                    | -                                      |


## 常量和宏定义

- 整型常量： 520、1314
- 实型常量:：3.14、5.12
- 字符常量
  - 普通字符：'L'、'o'
  - 转义字符：'\n'、''\r'
- 字符串常量："ZengJie"
- 符号常量：使用前要先定义
  - 格式：`#define 标识符 常量`

**符号常量，又叫宏定义**

```c
#define NAME "ZengJie"
```

**常量定义的两种方式**

```c
#define AGE 18 // 安全，推荐
const int age = 18; // 不安全，不推荐（可以通过指针修改）
```



## 数据类型

- 基本类型
  - 整数类型 int
    - short int 2个字节
    - int 4个字节
    - long int 8个字节
    - ...
  - 浮点数类型 float、double、long double
    - float 4个字节
    - double 8个字节
    - long double 16个字节
  - 字符类型 char 1个字节
  - 布尔类型 _Bool
    - 首先导入`#include <stdbool.h>`，使用方式`bool flag = true;`
  - 枚举类型 enum
- 指针类型
- 构造类型
  - 数组类型
  - 结构类型
  - 联合类型
- 空类型

> sizeof运算符用于获得数据类型或表达式的长度，如`int i; sizeof(i)`



### signed和unsinged

有符号声明（默认），如`signed int i = 2`（可省略signed，即`int i = 2`）。可存放负数，如`int i = -2`。

无符号声明，如`unsigned int i = 2`，不可存放负数，会出错。打印unsigned的变量，可使用`printf("%u\n", i)`



### 取值范围

1Byte(字节) = 8bit(比特)

存放signed类型的存储单元中，左边第一位表示符号位，为0代表整数，为1代表负数。

例如无符号`unsigned int a`有4个字节，可存放32位，最大值为`2^32 - 1`。

有符号`int b`可存放值为31位，最大值为`2^31 - 1`。

<br />

## 运算符

### 逗号运算符

**example1**

```c
a = 3, 5;
// 相当于
a = 3;
5;
// 所以a的值为3
```

**example2**

```c
a = (b = 3, (c = b + 4) + 5);
/*
	首先计算右边括号部分 (b = 3, (c = b + 4) + 5)
	b = 3
	c = b + 4 = 7
	右边部分变成(3, 7 + 5) --> (3, 12)
	最后 a = (3, 12)
	a = 12
*/
```

<br />

## 类型

### 数组
> 数组大小定义好后，不能中途修改

```c
int a[6];
char b[24];
double c[3];

int d[5] = {1, 2, 3, 4, 5};
// 后面的值没给的，会默认为0。即f[0] = 99，f[1]和f[2]都为0
int f[3] = {99};

// 有时候可以不写数组长度（编辑器会根据值的个数自动推断数组长度）。
int g[] = {1, 2, 3, 4}

// 可以只对数组中的某些指定元素赋初始值，而其他元素自动初始化为0
int h[6] = {[2] = 3, [4] = 5}; // 分别为0、0、3、0、5、0
```

### 字符数组

```c
char s1[4] = {'Z', 'e', 'n', 'g'};

char s2[] = {'Z', 'e', 'n', 'g'};

char s3[] = {"Zeng"};

char s4[] = "Zeng";
```



### 字符串函数

> 首先需要引入`#include <string.h>`

**strlen**

```c
  char s[] = "Zengjie";
  printf("sizeof s = %lu\n", sizeof(s)); // 8，包含了 \0 结束符
  printf("strlen s = %lu\n", strlen(s)); // 7
```

**strcpy**

````c
  char s1[] = "TsangJie";
  char s2[] = "Zengjie";
  char s3[] = "Zeng";
  char s4[100];

  strcpy(s1, s2); // 将s2复制给s1
  strcpy(s4, "zj"); // s4="zj"
  strcpy(s3, s2); // 执行的时候会出问题，因为s2长度比s3长，s2复制给s3会溢出
````

**strncpy**

```c
char s1[] = "Zengjie";
char s2[100];

strncpy(s2, s1, 4); // 复制前4个
s2[5] = '\0'; // 手动补上结束符
// s2 = "Zeng"
```

**strcat**

````c
char s1[100] = "ZengJie";
char s2[] = "Hello";

strcat(s1, " ");
strcat(s1, s2);
// s1 = "ZengJie Hello"
````

**strncat**

```c
char s1[100] = "ZengJie ";
char s2[] = "Hello World";

strncat(s1, s2, 5); // 拼接s2的前5个字符给s1
// s1 = "ZengJie Hello"
```

**strcmp**

```c
char s1[] = "Zeng";
char s2[] = "Zeng";
char s3[] = "zeng";

strcmp(s1, s2); // 返回为0。按顺序比较s1和s2对应字符的ASCII码的差值，直到有对应的字符差值不为0则返回差值或比较结束返回0
strcmp(s2, s3); // 返回-32。因为Z的ASCII码比z的小32
```

**strncmp**

```c
char s1[] = "ZengJie";
char s2[] = "Zeng";
strncmp(s1, s2, 4); // 返回0。只比较前4位
```

