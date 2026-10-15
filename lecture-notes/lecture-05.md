# Lecture 5: Derivatives (II)
# 第5讲：导数 (二)

::: tip Thomas' Calculus 对应章节
本章对应 *Thomas' Calculus: Early Transcendentals* (15th Edition) **Chapter 3: Derivatives** (3.7 - 3.9)。
:::

## 3.7 Implicit Differentiation (隐函数微分)

**English:** An explicit function is$y = f(x)$. An implicit function is an equation defining a relation between$x$and$y$(e.g.,$x^2 + y^2 = 25$). To find$\frac{dy}{dx}$for an implicit function, differentiate both sides with respect to$x$, treating$y$as a differentiable function of$x$(using the Chain Rule), and then solve for$\frac{dy}{dx}$.

**中文：** 显函数是$y = f(x)$。隐函数是用方程定义$x$和$y$之间关系的函数（如$x^2 + y^2 = 25$）。求隐函数的导数时，方程两边同时对$x$求导，把$y$视为$x$的可导函数（应用链式法则），然后解出$\frac{dy}{dx}$。

### 典型例题 (Example)
求$x^2 + y^2 = 25$的导数$\frac{dy}{dx}$。

<details>
<summary>点击查看答案 (Show solution)</summary>
两边对$x$求导：$2x + 2y \frac{dy}{dx} = 0 \Rightarrow \frac{dy}{dx} = -\frac{x}{y}$。
</details>

---

## 3.8 Related Rates (相关变化率)

**English:** When two or more related quantities are changing, determining how the rate of change of one affects the others requires differentiating the equation relating the variables with respect to time$t$, using the Chain Rule.

**中文：** 当两个或多个相关量同时变化时，求其中一个量的变化率如何影响其他量，需要对变量之间的方程关于时间$t$求导（应用链式法则）。

### 解题策略 (Problem Strategy)
1. 画图，标出所有随时间变化的变量。
2. 写出关联这些变量的方程。
3. 方程两边对$t$求导。
4. 代入已知数值，求出未知的变化率。

### 典型例题 (Example)
水以$0.25 \text{ m}^3/\text{min}$的速度注入一个圆锥形水箱（高 3m，底半径 1.5m）。当水深 1.8m 时，水面上升的速度是多少？

<details>
<summary>点击查看答案 (Show solution)</summary>
体积$V = \frac{1}{3}\pi x^2 y$。由相似三角形$\frac{x}{y} = \frac{1.5}{3} \Rightarrow x = \frac{y}{2}$。
代入得$V = \frac{\pi}{12} y^3$。
对$t$求导：$\frac{dV}{dt} = \frac{\pi}{4} y^2 \frac{dy}{dt}$。
代入$\frac{dV}{dt} = 0.25, y = 1.8$：$0.25 = \frac{\pi}{4} (1.8)^2 \frac{dy}{dt} \Rightarrow \frac{dy}{dt} \approx 0.098 \text{ m/min}$。
</details>

---

## 3.9 Linearization and Differentials (线性化与微分)

**English:** If$f$is differentiable at$x = a$, then the approximating function$L(x) = f(a) + f'(a)(x - a)$is the linearization of$f$at$a$. The differential$dy = f'(x)dx$.

**中文：** 若$f$在$x = a$处可导，则近似函数$L(x) = f(a) + f'(a)(x - a)$称为$f$在$a$处的线性化。微分$dy = f'(x)dx$。

### 典型例题 (Example)
求$\sqrt{1+x}$在$x=0$处的线性化。

<details>
<summary>点击查看答案 (Show solution)</summary>
$f(x) = \sqrt{1+x}, f'(x) = \frac{1}{2\sqrt{1+x}}$。
$f(0) = 1, f'(0) = \frac{1}{2}$。
$L(x) = 1 + \frac{1}{2}x$。
</details>

---

## 🚀 考试压轴题挑战 (Exam Final Challenge)

**题目：** 
一个气球正在以$100 \text{ cm}^3/\text{s}$的速度充气。假设气球始终保持球形。
(a) 当半径为$5 \text{ cm}$时，半径的增长率是多少？
(b) 使用线性化（Linearization）估算当半径从$5 \text{ cm}$增加到$5.1 \text{ cm}$时，气球体积的变化量。将此估算值与体积的实际变化量进行对比。

<details>
<summary>💡 点击查看答案与解题思路</summary>
(a) 球的体积$V = \frac{4}{3}\pi r^3$。
两边对时间$t$求导：$\frac{dV}{dt} = 4\pi r^2 \frac{dr}{dt}$。
代入$\frac{dV}{dt} = 100, r = 5$：$100 = 4\pi (5)^2 \frac{dr}{dt} = 100\pi \frac{dr}{dt}$。
解得$\frac{dr}{dt} = \frac{1}{\pi} \approx 0.318 \text{ cm/s}$。

(b) 设$V(r) = \frac{4}{3}\pi r^3$。在$r = 5$处的线性化为：
$V(5) = \frac{500}{3}\pi$，$V'(5) = 4\pi (5)^2 = 100\pi$。
$L(r) = V(5) + V'(5)(r - 5) = \frac{500}{3}\pi + 100\pi (r - 5)$。
当$r$从 5 增加到 5.1 时，$\Delta r = 0.1$。
估算体积变化量：$\Delta V \approx dV = V'(5) \Delta r = 100\pi (0.1) = 10\pi \approx 31.42 \text{ cm}^3$。
实际体积变化量：$\Delta V = V(5.1) - V(5) = \frac{4}{3}\pi (5.1)^3 - \frac{4}{3}\pi (5)^3 = \frac{4}{3}\pi (132.651 - 125) = \frac{4}{3}\pi (7.651) \approx 32.05 \text{ cm}^3$。
误差仅为约$0.63 \text{ cm}^3$，说明线性化在$\Delta r$很小时是非常精确的。
</details>