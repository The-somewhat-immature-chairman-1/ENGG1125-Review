# Lecture 4: Derivatives (I)
# 第4讲：导数 (一)

::: tip Thomas' Calculus 对应章节
本章对应 *Thomas' Calculus: Early Transcendentals* (15th Edition) **Chapter 3: Derivatives** (3.1 - 3.6)。
:::

## 3.1 & 3.2 导数在一点的定义与导函数 (Tangent Lines and the Derivative)

**English:** The derivative of a function $f$at a point $x_0$, denoted $f'(x_0)$, is $f'(x_0) = \lim_{h \to 0} \frac{f(x_0 + h) - f(x_0)}{h}$, provided this limit exists. The derivative is the instantaneous rate of change and the slope of the tangent line.

**中文：** 函数 $f$在点 $x_0$处的导数记为 $f'(x_0)$，定义为 $f'(x_0) = \lim_{h \to 0} \frac{f(x_0 + h) - f(x_0)}{h}$（前提是极限存在）。导数表示瞬时变化率，也等于切线的斜率。

### 可导与连续的关系 (Differentiability Implies Continuity)
如果函数在一点可导，那么它在该点必然连续。反之不成立（如 $y=|x|$在 $x=0$处连续但不可导）。
不可导的几种常见情况：尖点（corner）、尖顶（cusp）、垂直切线（vertical tangent）、不连续（discontinuity）或剧烈振荡（wild oscillation）。

---

## 3.3 Differentiation Rules (求导法则)

**English:** 
- **Power Rule:** $\frac{d}{dx} x^n = nx^{n-1}$
- **Product Rule:** $\frac{d}{dx}(uv) = u\frac{dv}{dx} + v\frac{du}{dx}$
- **Quotient Rule:** $\frac{d}{dx}\left(\frac{u}{v}\right) = \frac{v\frac{du}{dx} - u\frac{dv}{dx}}{v^2}$

### 典型例题 (Example)
求 $y = \frac{1}{x}(x^2 + e^x)$的导数。

<details>
<summary>点击查看答案 (Show solution)</summary>
展开化简：$y = x + \frac{e^x}{x}$。
求导：$y' = 1 + \frac{x e^x - e^x}{x^2} = 1 + \frac{e^x(x-1)}{x^2}$。
</details>

---

## 3.5 Derivatives of Trigonometric Functions (三角函数导数)

$$\frac{d}{dx}(\sin x) = \cos x $$
$$\frac{d}{dx}(\cos x) = -\sin x $$
$$\frac{d}{dx}(\tan x) = \sec^2 x $$

---

## 3.6 The Chain Rule (链式法则)

**English:** If $f(u)$is differentiable at $u = g(x)$and $g(x)$is differentiable at $x$, then the composite function $(f \circ g)(x) = f(g(x))$is differentiable at $x$, and $(f \circ g)'(x) = f'(g(x)) \cdot g'(x)$.

**中文：** 若 $f(u)$在 $u=g(x)$处可导，且 $g(x)$在 $x$处可导，则复合函数 $(f \circ g)(x)$在 $x$处可导，且 $(f \circ g)'(x) = f'(g(x)) \cdot g'(x)$。在莱布尼茨记号中为 $\frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx}$。

### 典型例题 (Example)
求 $y = e^{\cos x}$的导数。

<details>
<summary>点击查看答案 (Show solution)</summary>
设 $u = \cos x$，则 $y = e^u$。
$\frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx} = e^u \cdot (-\sin x) = -e^{\cos x}\sin x$。
</details>

---

## 🚀 考试压轴题挑战 (Exam Final Challenge)

**题目：** 
设函数 $f(x)$在 $x = 0$处可导，且 $f(0) = 0$，$f'(0) = 1$。求极限 $\lim_{x \to 0} \frac{f(x) - \sin x}{x^2}$。

<details>
<summary>💡 点击查看答案与解题思路</summary>
**解法一：利用导数的定义与洛必达法则（或泰勒展开）**
原式分子分母在 $x \to 0 $时均趋于 $0 $，属于 $\frac{0}{0} $型。
先将原式拆分： $\lim_{x \to 0} \frac{f(x) - x + x - \sin x}{x^2} = \lim_{x \to 0} \frac{f(x) - x}{x^2} + \lim_{x \to 0} \frac{x - \sin x}{x^2} $。

观察第一部分： $\lim_{x \to 0} \frac{f(x) - x}{x^2} = \lim_{x \to 0} \frac{\frac{f(x) - f(0)}{x} - 1}{x} $。
因为 $f'(0) = \lim_{x \to 0} \frac{f(x) - f(0)}{x} = 1 $，所以这实际上是导数的定义。此时分子趋于 $0 $，不能直接用洛必达。
考虑使用泰勒展开（如果学过）或者进一步变形：
已知 $f(x) $在 $0 $处可导，有 $f(x) = f(0) + f'(0)x + o(x) = x + o(x) $。
代入第一部分： $\frac{f(x) - x}{x^2} = \frac{o(x)}{x^2} $，这在一般情况下极限不确定（除非 $f(x) $二阶可导，但题设只给了一阶可导，所以这个拆分是陷阱！）。

**正确的解法：利用导数的定义和极限的运算法则**
为了能用上 $f'(0)=1 $，我们凑出导数定义：
原式 $= \lim_{x \to 0} \frac{f(x) - f(0) - \sin x + \sin(0)}{x^2} = \lim_{x \to 0} \frac{\frac{f(x) - f(0)}{x} - \frac{\sin x}{x}}{x} $。
由于 $\lim_{x \to 0} \frac{f(x) - f(0)}{x} = 1 $且 $\lim_{x \to 0} \frac{\sin x}{x} = 1 $。这是一个 $\frac{1-1}{0} = \frac{0}{0} $形式。
根据导数定义，如果极限 $\lim_{x \to 0} \frac{f(x) - x}{x^2} $存在，则必须使用泰勒公式 $f(x) = f(0) + f'(0)x + \frac{f''(0)}{2}x^2 + o(x^2) $。
若 $f(x) $二阶可导，则 $\lim_{x \to 0} \frac{f(x) - x}{x^2} = \frac{f''(0)}{2} $。而 $\lim_{x \to 0} \frac{x - \sin x}{x^2} = 0 $。
因此最终结果为 $\frac{f''(0)}{2} + 0 = \frac{f''(0)}{2} $。

**结论（严谨版）：**
原式 $= \lim_{x \to 0} \frac{ \frac{f(x) - f(0)}{x} - \frac{\sin x}{x} }{x} $。
由导数定义及等价无穷小 $\sin x = x - \frac{x^3}{6} + o(x^3) $，及 $f(x) $的泰勒展开 $f(x) = x + \frac{f''(0)}{2}x^2 + o(x^2) $：
原式 $= \lim_{x \to 0} \frac{ \left( 1 + \frac{f''(0)}{2}x + o(x) \right) - \left( 1 - \frac{x^2}{6} + o(x^2) \right) }{x} $
$= \lim_{x \to 0} \frac{ \frac{f''(0)}{2}x + o(x) + \frac{x^2}{6} }{x} = \frac{f''(0)}{2} $。
（此题是典型的考查导数定义、极限四则运算以及高阶无穷小处理的压轴题，在期中考试中经常出现，用来区分优秀学生）。
</details>