# Lecture 2 & 3: Limits and Continuity
# 第2讲：极限与连续性

::: tip Thomas' Calculus 对应章节
本章对应 *Thomas' Calculus: Early Transcendentals* (15th Edition) **Chapter 2: Limits and Continuity** (2.1 - 2.6)。
:::

## 2.1 Rates of Change and Tangent Lines (变化率与切线)

**English:** The average rate of change of $f$over the interval $[x_1, x_2]$is $\frac{\Delta y}{\Delta x}$. Geometrically, this is the slope of the secant line. The instantaneous rate of change (slope of the tangent line) is the limit: $\lim_{h \to 0} \frac{f(x + h) - f(x)}{h}$.

**中文：** 函数 $f$在区间 $[x_1, x_2]$上的平均变化率为割线斜率。瞬时变化率（切线斜率）是极限：$\lim_{h \to 0} \frac{f(x + h) - f(x)}{h}$。

---

## 2.2 Limit of a Function and Limit Laws (极限的定义与运算法则)

### 处理 $\frac{0}{0}$不定式 (Indeterminate Form 0/0)
- **策略1：因式分解并消去 (Factor and Cancel)**
  例题：$\lim_{x \to 1} \frac{x^2 + x - 2}{x^2 - x} = \lim_{x \to 1} \frac{(x-1)(x+2)}{x(x-1)} = \lim_{x \to 1} \frac{x+2}{x} = 3$
- **策略2：使用共轭 (Use Conjugates)**
  例题：$\lim_{x \to 0} \frac{\sqrt{x^2 + 100} - 10}{x^2} = \lim_{x \to 0} \frac{x^2 + 100 - 100}{x^2(\sqrt{x^2 + 100} + 10)} = \frac{1}{20}$

### 夹逼定理 (The Sandwich Theorem)
如果 $g(x) \leq f(x) \leq h(x)$且 $\lim_{x \to c} g(x) = \lim_{x \to c} h(x) = L$，则 $\lim_{x \to c} f(x) = L$。
例题：$\lim_{x \to 0} x^2 \cos \frac{1}{x} = 0$。

---

## 2.3 The Precise Definition of a Limit (ε-δ 定义)

**English:** We write $\lim_{x \to c} f(x) = L$, if, for every number $\epsilon > 0$, there exists a corresponding number $\delta > 0$such that $|f(x) - L| < \epsilon$whenever $0 < |x - c| < \delta$.

**中文：** 如果对于任意 $\epsilon > 0$，都存在相应的 $\delta > 0$，使得当 $0 < |x - c| < \delta$时，有 $|f(x) - L| < \epsilon$，那么我们称 $\lim_{x \to c} f(x) = L$。

---

## 2.4 & 2.6 One-Sided Limits and Continuity (单侧极限与连续性)

### 单侧极限 (One-Sided Limits)
- **极限存在的充要条件：** $\lim_{x \to c} f(x) = L \iff \lim_{x \to c^-} f(x) = \lim_{x \to c^+} f(x) = L$。

### 连续性 (Continuity)
函数 $f(x)$在 $x = c$处连续，必须满足以下三个条件：
1. $f(c)$存在（$c$在定义域内）。
2. $\lim_{x \to c} f(x)$存在。
3. $\lim_{x \to c} f(x) = f(c)$。

### 介值定理 (Intermediate Value Theorem, IVT)
如果 $f$在闭区间 $[a, b]$上连续，且 $y_0$是介于 $f(a)$和 $f(b)$之间的任意值，则存在 $c \in [a, b]$，使得 $f(c) = y_0$。

---

## 🚀 考试压轴题挑战 (Exam Final Challenge)

**题目：** 
设函数 $f(x)$在 $[0, 1]$上连续，且对于任意 $x \in [0, 1]$，有 $0 \leq f(x) \leq 1$。证明：存在 $c \in [0, 1]$，使得 $f(c) = c$。（本题是经典的不动点定理在微积分中的体现，需要灵活运用介值定理）。

<details>
<summary>💡 点击查看答案与解题思路</summary>
**证明思路：构造辅助函数 + 介值定理**
令 $g(x) = f(x) - x $。显然 $g(x) $在 $[0, 1] $上连续（因为 $f(x) $和 $x $都是连续函数）。
我们需要证明存在 $c \in [0, 1] $使得 $g(c) = 0 $。

根据已知条件，计算端点值：
$g(0) = f(0) - 0 = f(0) \geq 0 $
$g(1) = f(1) - 1 \leq 0 $（因为题设 $f(x) \leq 1 $，所以 $f(1) \leq 1 $）

此时分两种情况讨论：
1. 若 $g(0) = 0 $，则 $c = 0 $即为所求。
2. 若 $g(1) = 0 $，则 $c = 1 $即为所求。
3. 若 $g(0) \gt 0 $且 $g(1) \lt 0 $，因为 $g(x) $在 $[0, 1] $上连续，且 $0 $介于 $g(0) $和 $g(1) $之间，根据**介值定理（IVT）**，必然存在 $c \in (0, 1) $使得 $g(c) = 0 $，即 $f(c) = c $。
综合以上情况，命题得证。
</details>