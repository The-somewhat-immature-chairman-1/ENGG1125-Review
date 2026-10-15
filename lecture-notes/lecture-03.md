# Lecture 3: One-Sided Limits, Limits Involving Infinity, and Continuity
# 第3讲：单侧极限、无穷极限与连续性

::: tip Thomas' Calculus 对应章节
本章对应 *Thomas' Calculus: Early Transcendentals* (15th Edition) **Chapter 2: Limits and Continuity** (2.4 - 2.6)。
:::

## 2.4 One-Sided Limits (单侧极限)

**English:** 
- Right-hand limit: $\lim_{x \to c^+} f(x) = L$means $f(x)$approaches $L$as $x$approaches $c$from the right ($x > c$).
- Left-hand limit: $\lim_{x \to c^-} f(x) = M$means $f(x)$approaches $M$as $x$approaches $c$from the left ($x < c$).

**中文：**
- 右极限 $\lim_{x \to c^+} f(x) = L$：当 $x$从右侧（$x > c$）趋近于 $c$时，$f(x)$趋近于 $L$。
- 左极限 $\lim_{x \to c^-} f(x) = M$：当 $x$从左侧（$x < c$）趋近于 $c$时，$f(x)$趋近于 $M$。

### 核心定理 (Theorem)
函数 $f(x)$在 $x \to c$时极限存在的**充要条件**是：左右极限都存在且相等。
$$\lim_{x \to c} f(x) = L \iff \lim_{x \to c^-} f(x) = \lim_{x \to c^+} f(x) = L $$

### 典型例题 (Example)
证明 $\lim_{x \to 0^+} \sqrt{x} = 0$。

<details>
<summary>点击查看答案 (Show solution)</summary>
给定 $\epsilon > 0$，我们需要找到 $\delta > 0$，使得当 $0 < x < \delta$时，有 $|\sqrt{x} - 0| < \epsilon$，即 $\sqrt{x} < \epsilon$。
两边平方得 $x < \epsilon^2$。
因此，取 $\delta = \epsilon^2$即可。
正式证明：对于任意 $\epsilon > 0$，取 $\delta = \epsilon^2$。若 $0 < x < \delta$，则 $\sqrt{x} < \sqrt{\delta} = \epsilon$。证毕。
</details>

---

## 2.5 Limits Involving Infinity (无穷极限)

**English:** 
1. **Finite limit as $x \to \pm\infty$:** $\lim_{x \to \infty} f(x) = L$means $f(x)$can be made arbitrarily close to $L$by taking $x$sufficiently large.
2. **Infinite limit as $x \to c$:** $\lim_{x \to c} f(x) = \infty$means $f(x)$grows arbitrarily large as $x$approaches $c$. This indicates a vertical asymptote at $x=c$.

**中文：**
1. **当 $x \to \pm\infty$时的有限极限：** $\lim_{x \to \infty} f(x) = L$表示当 $x$充分大时，$f(x)$可以任意接近 $L$。
2. **当 $x \to c$时的无穷极限：** $\lim_{x \to c} f(x) = \infty$表示当 $x$趋近于 $c$时，$f(x)$无限增大。这表示在 $x=c$处有垂直渐近线。

### 有理函数在无穷处的极限 (Limits at Infinity of Rational Functions)
方法：分子分母同时除以分母的最高次幂。
- 若分子次数 < 分母次数，极限为 0。
- 若分子次数 = 分母次数，极限为首项系数之比。
- 若分子次数 > 分母次数，极限为 $\pm\infty$（或不存在）。

### 典型例题 (Example)
求 $\lim_{x \to -\infty} \frac{11x + 2}{2x^3 - 1}$。

<details>
<summary>点击查看答案 (Show solution)</summary>
分子分母同时除以 $x^3$：
$$\lim_{x \to -\infty} \frac{\frac{11}{x^2} + \frac{2}{x^3}}{2 - \frac{1}{x^3}} = \frac{0 + 0}{2 - 0} = 0 $$
</details>

---

## 2.6 Continuity (连续性)

**English:** A function $f(x)$is continuous at a point $x = c$if and only if it meets the following three conditions:
1. $f(c)$exists (c lies in the domain of f).
2. $\lim_{x \to c} f(x)$exists.
3. $\lim_{x \to c} f(x) = f(c)$.

**中文：** 函数 $f(x)$在点 $x = c$处连续，当且仅当满足以下三个条件：
1. $f(c)$存在（$c$在定义域内）。
2. $\lim_{x \to c} f(x)$存在。
3. $\lim_{x \to c} f(x) = f(c)$（极限等于函数值）。

### 介值定理 (Intermediate Value Theorem, IVT)
**English:** If $f$is a continuous function on a closed interval $[a, b]$, and if $y_0$is any value between $f(a)$and $f(b)$, then $y_0 = f(c)$for some $c$in $[a, b]$.

**中文：** 如果 $f$在闭区间 $[a, b]$上连续，且 $y_0$是介于 $f(a)$和 $f(b)$之间的任意值，则存在 $c \in [a, b]$，使得 $f(c) = y_0$。

### 易错点 (Common Mistakes)
- 判断连续性时，忘记检查极限是否存在（左右极限是否相等）。
- 在应用介值定理时，必须确保函数在闭区间上连续。

---

## 🚀 考试压轴题挑战 (Exam Final Challenge)

**题目：** 
设函数 $f(x)$在 $[0, 2]$上连续，且 $f(0) = 1, f(2) = 3$。已知 $f(x)$在 $(0, 2)$内可导。
(a) 证明：存在 $c \in (0, 2)$，使得 $f(c) = 2$。
(b) 若还已知 $f'(x) \neq 0$对所有 $x \in (0, 2)$成立，判断 $f(x)$在 $[0, 2]$上的单调性，并说明理由。
(c) 结合 (a) 和 (b) 的结论，求解方程 $f(x) - 2 = 0$在 $(0, 2)$内的实根个数。

<details>
<summary>💡 点击查看答案与解题思路</summary>
(a) **利用介值定理 (IVT)**：
因为 $f(x) $在 $[0, 2] $上连续，且 $f(0) = 1 \lt 2 \lt 3 = f(2) $，即 $2 $是介于 $f(0) $和 $f(2) $之间的值。
根据介值定理，必然存在至少一点 $c \in (0, 2) $，使得 $f(c) = 2 $。

(b) **利用导数与单调性的关系**：
已知 $f'(x) \neq 0 $对所有 $x \in (0, 2) $成立。根据达布定理（Darboux's Theorem，导数的介值性）， $f'(x) $在区间 $(0, 2) $上要么恒大于 0，要么恒小于 0。
（注：如果还没学达布定理，可以通过罗尔定理的逆否命题来理解：如果在 $(0, 2) $内存在两点 $x_1 \lt x_2 $使得 $f(x_1) = f(x_2) $，那么由罗尔定理，必然存在 $c \in (x_1, x_2) $使得 $f'(c) = 0 $，这与 $f'(x) \neq 0 $矛盾。因此 $f(x) $是单射，严格单调）。
由于 $f(0) = 1 \lt f(2) = 3 $，所以 $f(x) $在 $[0, 2] $上严格单调递增。

(c) **求解实根个数**：
由 (b) 知 $f(x) $在 $[0, 2] $上严格单调递增，因此 $f(x) - 2 = 0 $在 $[0, 2] $上最多有一个实根。
由 (a) 知至少存在一个 $c \in (0, 2) $使得 $f(c) = 2 $。
综合可知，方程 $f(x) - 2 = 0 $在 $(0, 2) $内有且仅有一个实根。
</details>