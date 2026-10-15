# Lecture 1: Functions and Their Graphs
# 第1讲：函数与图像

::: tip Thomas' Calculus 对应章节
本章对应 *Thomas' Calculus: Early Transcendentals* (15th Edition) **Chapter 1: Functions** (1.1 - 1.3)。
:::

## 1.1 Functions; Domain and Range (函数、定义域与值域)

**English:** A function$f$from a set$D$to a set$Y$is a rule that assigns a unique value$f(x)$in$Y$to each$x$in$D$. The set$D$is the domain, and the set of all output values is the range.

**中文：** 函数$f$是一种规则，它将集合$D$中的每个元素$x$分配给集合$Y$中恰好一个元素$f(x)$。集合$D$称为定义域，所有输出值的集合称为值域。

### 直观理解 (Intuition)
你可以把函数想象成一台机器。你投入一个输入值$x$（定义域），机器通过特定的法则$f$，吐出一个唯一的输出值$f(x)$（值域）。判断一个图像是否为函数可以使用**垂直线测试**：任何垂直直线与图像最多相交一次。

### 典型例题 (Example)
求$f(x) = \sqrt{x^2 - 4}$的自然定义域。

<details>
<summary>点击查看答案 (Show solution)</summary>
根号内必须非负：$x^2 - 4 \ge 0 \Rightarrow x^2 \ge 4$。
所以$x \le -2$或$x \ge 2$。定义域为$(-\infty, -2] \cup [2, \infty)$。
</details>

---

## 1.2 函数的运算与图像变换 (Combining Functions; Shifting and Scaling)

**English:** The composite function$f \circ g$("f composed with g") is defined by$(f \circ g)(x) = f(g(x))$. The domain of$f \circ g$consists of the numbers$x$in the domain of$g$for which$g(x)$lies in the domain of$f$.

**中文：** 复合函数$f \circ g$定义为$(f \circ g)(x) = f(g(x))$。其定义域包含所有在$g$的定义域中且使得$g(x)$落在$f$的定义域内的$x$。

### 图像变换规则 (Transformation Rules)
- **垂直平移：**$y = f(x) + k$(向上移$k$单位，向下移$|k|$单位)
- **水平平移：**$y = f(x + h)$(向左移$h$单位，向右移$|h|$单位)
- **垂直缩放：**$y = c f(x)$(垂直拉伸$c$倍)
- **水平缩放：**$y = f(cx)$(水平压缩$c$倍)

---

## 1.3 Trigonometric Functions (三角函数)

**English:** Angles are measured in degrees or radians. The radian measure of the central angle is the number of "radius units" contained in the arc$s$subtended by that central angle, given by$\theta = s/r$.

**中文：** 角度用度数或弧度来衡量。圆心角的弧度是所对弧长$s$中包含的“半径单位”的数量，公式为$\theta = s/r$。**在微积分中默认必须使用弧度制！**

### 核心公式与法则
- **ASTC 法则 (All Students Take Calculus):** 第一象限全正 (All)，第二象限$\sin$正，第三象限$\tan$正，第四象限$\cos$正。
- **和角公式：**
$$\cos(A+B) = \cos A \cos B - \sin A \sin B$$
$$\sin(A+B) = \sin A \cos B + \cos A \sin B$$

---

## 🚀 考试压轴题挑战 (Exam Final Challenge)

**题目：** 
设函数$f(x) = \ln\left( \frac{1+x}{1-x} \right)$。
(a) 求$f(x)$的自然定义域和值域。
(b) 判断$f(x)$的奇偶性。
(c) 若$g(x) = f\left( \frac{2x}{1+x^2} \right)$，求$g(x)$的表达式，并判断$g(x)$的奇偶性。

<details>
<summary>💡 点击查看答案与解题思路</summary>
(a) 定义域要求：

$$ \frac{1+x}{1-x} \gt 0 \Rightarrow (1+x)(1-x) \gt 0 \Rightarrow -1 \lt x \lt 1 $$

定义域为 $(-1, 1)$。

令
$$ y = \ln\left( \frac{1+x}{1-x} \right) $$
则
$$ e^y = \frac{1+x}{1-x} \Rightarrow e^y(1-x) = 1+x \Rightarrow e^y - 1 = x(e^y + 1) \Rightarrow x = \frac{e^y - 1}{e^y + 1} $$
由于 $e^y \gt 0$， $x = 1 - \frac{2}{e^y + 1} \in (-1, 1)$。因此值域为全体实数 $\mathbb{R}$。

(b)$f(-x) = \ln\left( \frac{1-x}{1+x} \right) = \ln\left( \left( \frac{1+x}{1-x} \right)^{-1} \right) = -\ln\left( \frac{1+x}{1-x} \right) = -f(x)$。所以$f(x)$是奇函数。

(c) 定义域要求$-1 \lt \frac{2x}{1+x^2} \lt 1$。因为$1+x^2 \gt 0$，解得$x \in \mathbb{R}$。
$g(x) = \ln\left( \frac{1 + \frac{2x}{1+x^2}}{1 - \frac{2x}{1+x^2}} \right) = \ln\left( \frac{\frac{1+x^2+2x}{1+x^2}}{\frac{1+x^2-2x}{1+x^2}} \right) = \ln\left( \frac{(x+1)^2}{(x-1)^2} \right) = 2\ln\left( \left| \frac{x+1}{x-1} \right| \right)$。
$g(-x) = 2\ln\left( \left| \frac{-x+1}{-x-1} \right| \right) = 2\ln\left( \left| \frac{x-1}{x+1} \right| \right) = -2\ln\left( \left| \frac{x+1}{x-1} \right| \right) = -g(x)$。所以$g(x)$也是奇函数。
（此题综合考查了函数定义域、反函数求解、对数运算法则以及奇偶性证明，是典型的期中考试难题）。
</details>