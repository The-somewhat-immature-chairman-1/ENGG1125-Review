# Lecture 7: Applications of Derivative (II)
# 第7讲：导数的应用 (二)

::: tip Thomas' Calculus 对应章节
本章对应 *Thomas' Calculus: Early Transcendentals* (15th Edition) **Chapter 4.5, 7.1, 7.5**。
:::

## 4.5 Applied Optimization (优化应用)

**English:** To solve an optimization problem, read the problem, introduce variables, write an equation for the unknown quantity (in terms of a single variable if possible), and test the critical points and endpoints using the first or second derivative test.

**中文：** 求解优化问题的步骤：读题，引入变量，建立未知量的方程（尽可能表示为单变量函数），并用一阶或二阶导数判别法检验临界点和端点。

### 典型例题 (Example)
用一块边长为 12 英寸的正方形锡板，四角切去相同的小正方形，折起做成一个无盖盒子。切去的小正方形边长为多少时，盒子容积最大？

<details>
<summary>点击查看答案 (Show solution)</summary>
设切去的小正方形边长为 $x$，体积 $V(x) = x(12-2x)^2$，定义域为 $0 \le x \le 6$。
求导：$V'(x) = 12(2-x)(6-x)$。
临界点 $x=2$ 和 $x=6$。在定义域内只有 $x=2$。
比较 $V(0)=0, V(2)=128, V(6)=0$。最大容积为 $128 \text{ in}^3$，此时 $x=2$。
</details>

---

## 7.1 Inverse Function and Their Derivatives (反函数及其导数)

**English:** If $f$ has an interval $I$ as domain and $f'(x)$ exists and is never zero on $I$, then $f^{-1}$ is differentiable at every point in its domain. The derivative of the inverse is the reciprocal of the derivative of the original function evaluated at the corresponding point: $(f^{-1})'(b) = \frac{1}{f'(f^{-1}(b))}$.

**中文：** 若 $f$ 的定义域为区间 $I$，且 $f'(x)$ 存在且恒不为零，则 $f^{-1}$ 在其定义域内可导。反函数的导数是原函数在对应点导数的倒数：$(f^{-1})'(b) = \frac{1}{f'(f^{-1}(b))}$。

---

## 7.5 Indeterminate Forms and L'Hôpital's Rule (不定式与洛必达法则)

**English:** L'Hôpital's Rule applies to indeterminate forms like $\frac{0}{0}$ and $\frac{\infty}{\infty}$. If $f(a) = g(a) = 0$ (or $\pm\infty$), then $\lim_{x \to a} \frac{f(x)}{g(x)} = \lim_{x \to a} \frac{f'(x)}{g'(x)}$, provided the limit on the right exists.

**中文：** 洛必达法则适用于 $\frac{0}{0}$ 和 $\frac{\infty}{\infty}$ 型不定式。若 $f(a) = g(a) = 0$（或 $\pm\infty$），则 $\lim_{x \to a} \frac{f(x)}{g(x)} = \lim_{x \to a} \frac{f'(x)}{g'(x)}$，前提是右边的极限存在。

### 处理其他不定式 (Other Indeterminate Forms)
- **$0 \cdot \infty$**：转化为 $\frac{0}{1/\infty}$ 或 $\frac{\infty}{1/0}$ 形式。
- **$\infty - \infty$**：通分或提取公因式，转化为 $\frac{0}{0}$ 或 $\frac{\infty}{\infty}$。

### 典型例题 (Example)
求 $\lim_{x \to 0} \frac{1 - \cos x}{x^2}$。

<details>
<summary>点击查看答案 (Show solution)</summary>
属于 $\frac{0}{0}$ 型。
应用洛必达法则：$\lim_{x \to 0} \frac{\sin x}{2x}$。
再次应用洛必达法则：$\lim_{x \to 0} \frac{\cos x}{2} = \frac{1}{2}$。
</details>

---

## 🚀 考试压轴题挑战 (Exam Final Challenge)

**题目：** 
一个农民想要围成一个面积为 $100 \text{ m}^2$ 的矩形围栏。围栏的一边靠着一条笔直的河流（不需要围栏），另外三边需要用围栏围起来。
(a) 设矩形垂直于河的边长为 $x$，平行于河的边长为 $y$。写出用 $x$ 表示围栏总长 $L(x)$ 的函数关系式。
(b) 求使围栏总长最小的边长 $x$ 和 $y$ 的值。
(c) 利用二阶导数证明你求得的是最小值。
(d) 求这个最小围栏总长。

<details>
<summary>💡 点击查看答案与解题思路</summary>
(a) 矩形面积 $ A = xy = 100 \Rightarrow y = \frac{100}{x} $ 。
围栏总长 $ L(x) = 2x + y = 2x + \frac{100}{x} $ ，定义域 $ x \gt 0 $ 。

(b) 求导 $ L'(x) = 2 - \frac{100}{x^2} $ 。
令 $ L'(x) = 0 \Rightarrow 2 = \frac{100}{x^2} \Rightarrow x^2 = 50 \Rightarrow x = \sqrt{50} = 5\sqrt{2} $ （舍去负值）。
此时 $ y = \frac{100}{5\sqrt{2}} = \frac{20}{\sqrt{2}} = 10\sqrt{2} $ 。

(c) 求二阶导数 $ L''(x) = \frac{200}{x^3} $ 。
由于 $ x \gt 0 $ ， $ L''(x) \gt 0 $ 。根据二阶导数判别法， $ x = 5\sqrt{2} $ 处取得局部最小值，且因函数在定义域内只有一个临界点，此局部极小值即为全局最小值。

(d) 最小围栏总长 $ L(5\sqrt{2}) = 2(5\sqrt{2}) + \frac{100}{5\sqrt{2}} = 10\sqrt{2} + 10\sqrt{2} = 20\sqrt{2} \text{ m} $ 。
</details>