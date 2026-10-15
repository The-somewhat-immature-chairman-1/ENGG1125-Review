# Lecture 6: Applications of Derivative (I)
# 第6讲：导数的应用 (一)

::: tip Thomas' Calculus 对应章节
本章对应 *Thomas' Calculus: Early Transcendentals* (15th Edition) **Chapter 4: Applications of Derivatives** (4.1 - 4.4)。
:::

## 4.1 Extreme Values of Functions (函数的极值)

**English:** A function$f$has an absolute maximum at$c$if$f(x) \leq f(c)$for all$x$in its domain. The Extreme Value Theorem states that if$f$is continuous on a closed interval$[a,b]$, then$f$attains both an absolute maximum and an absolute minimum on$[a,b]$.

**中文：** 如果对于定义域内所有$x$都有$f(x) \leq f(c)$，则$f$在$c$处有绝对最大值。极值定理指出，如果$f$在闭区间$[a,b]$上连续，则$f$在$[a,b]$上必定取得绝对最大值和绝对最小值。

### 求闭区间上绝对极值的步骤 (Finding Absolute Extrema)
1. 求$f$在$(a,b)$内的所有临界点（$f'(x)=0$或$f'(x)$不存在）。
2. 计算$f$在所有临界点和端点的值。
3. 取其中的最大值和最小值。

---

## 4.2 The Mean Value Theorem (中值定理)

**English:** Rolle's Theorem: If$f$is continuous on$[a,b]$and differentiable on$(a,b)$, and$f(a) = f(b)$, then there is at least one$c$in$(a,b)$where$f'(c) = 0$.
The Mean Value Theorem (MVT): If$f$is continuous on$[a,b]$and differentiable on$(a,b)$, then there is at least one$c$in$(a,b)$where$\frac{f(b) - f(a)}{b - a} = f'(c)$.

**中文：** 罗尔定理：若$f$在$[a,b]$上连续，在$(a,b)$上可导，且$f(a) = f(b)$，则至少存在一点$c \in (a,b)$，使得$f'(c) = 0$。
中值定理 (MVT)：若$f$在$[a,b]$上连续，在$(a,b)$上可导，则至少存在一点$c \in (a,b)$，使得$\frac{f(b) - f(a)}{b - a} = f'(c)$。

### 推论 (Corollaries)
- 若$f'(x) = 0$对所有$x \in (a,b)$成立，则$f(x) = C$（常数）。
- 若$f'(x) = g'(x)$对所有$x \in (a,b)$成立，则$f(x) = g(x) + C$。

---

## 4.3 Monotonic Functions and the First Derivative Test (单调性与一阶导数判别法)

**English:** If$f'(x) > 0$on an interval, then$f$is increasing on that interval. If$f'(x) < 0$, then$f$is decreasing.
First Derivative Test: At a critical point$c$, if$f'$changes from negative to positive,$f$has a local minimum at$c$. If$f'$changes from positive to negative,$f$has a local maximum.

**中文：** 若在区间上$f'(x) > 0$，则$f$在该区间上单调递增。若$f'(x) < 0$，则单调递减。
一阶导数判别法：在临界点$c$处，若$f'$由负变正，则$f$在$c$处有局部极小值；若$f'$由正变负，则$f$在$c$处有局部极大值。

---

## 4.4 Concavity and Curve Sketching (凹凸性与曲线绘制)

**English:** The graph of$f$is concave up if$f'$is increasing (i.e.,$f'' > 0$), and concave down if$f'$is decreasing (i.e.,$f'' < 0$). A point of inflection is where the concavity changes (and$f'' = 0$or undefined).
Second Derivative Test: If$f'(c)=0$and$f''(c)>0$,$f$has a local minimum at$c$. If$f'(c)=0$and$f''(c)<0$,$f$has a local maximum.

**中文：** 若$f'$递增（即$f'' > 0$），则图像为凹向上；若$f'$递减（即$f'' < 0$），则图像为凹向下。拐点是凹凸性改变的点（且$f'' = 0$或不存在）。
二阶导数判别法：若$f'(c)=0$且$f''(c)>0$，则$f$在$c$处有局部极小值；若$f'(c)=0$且$f''(c)<0$，则$f$在$c$处有局部极大值。

---

## 🚀 考试压轴题挑战 (Exam Final Challenge)

**题目：** 
设函数$f(x) = (x^2 - 3)e^x$。
(a) 求$f(x)$的临界点，并判断其单调递增和单调递减的区间。
(b) 求$f(x)$的局部极值。
(c) 求$f(x)$的凹凸区间及拐点。

<details>
<summary>💡 点击查看答案与解题思路</summary>
(a) 求导（乘积法则）：

$$ f'(x) = (x^2 - 3)e^x + (2x)e^x = (x^2 + 2x - 3)e^x = (x+3)(x-1)e^x $$

因为 \( e^x \gt 0 \) 恒成立，所以临界点为 \( x = -3 \) 和 \( x = 1 \)。区间划分如下：
- \( x \lt -3 \) 时， \( f'(x) \gt 0 \)，单调递增。
- \( -3 \lt x \lt 1 \) 时， \( f'(x) \lt 0 \)，单调递减。
- \( x \gt 1 \) 时， \( f'(x) \gt 0 \)，单调递增。

(b) 由 (a) 和 First Derivative Test：
- 在$x = -3$处，$f'$由正变负，有局部极大值$f(-3) = ((-3)^2 - 3)e^{-3} = 6e^{-3}$。
- 在$x = 1$处，$f'$由负变正，有局部极小值$f(1) = (1^2 - 3)e^1 = -2e$。

(c) 求二阶导数：
$f''(x) = \frac{d}{dx}[(x^2 + 2x - 3)e^x] = (2x + 2)e^x + (x^2 + 2x - 3)e^x = (x^2 + 4x - 1)e^x$。
令$f''(x) = 0 \Rightarrow x^2 + 4x - 1 = 0 \Rightarrow x = \frac{-4 \pm \sqrt{16 - 4(1)(-1)}}{2} = -2 \pm \sqrt{5}$。
所以拐点候选点为$x_1 = -2 - \sqrt{5}$和$x_2 = -2 + \sqrt{5}$。
- 当$x \lt -2 - \sqrt{5}$或$x \gt -2 + \sqrt{5}$时，$f''(x) \gt 0$，图像凹向上 (Concave up)。
- 当$-2 - \sqrt{5} \lt x \lt -2 + \sqrt{5}$时，$f''(x) \lt 0$，图像凹向下 (Concave down)。
拐点坐标为$(x_1, f(x_1))$和$(x_2, f(x_2))$。（可以代入具体数值计算）。
</details>