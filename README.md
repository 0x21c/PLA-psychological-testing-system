# 2026年士兵职业基本适应性模拟检测系统

🇨🇳 [中文](README.md) | 🇬🇧 [English](README.en.md)

一个基于Web的士兵职业基本适应性检测系统，支持多语言切换（中文、英文、繁体中文），采用智能自适应测试机制。
## 线上测试地址/Online test address:https://sb.0x21c.cc


## 功能特性

- 🎯 **智能自适应测试**：正常答题只需回答80题，若检测到异常则扩展至400题
- 🌐 **多语言支持**：支持中文、英文、繁体中文三种语言
- ⏱️ **计时功能**：40分钟倒计时，确保测试在规定时间内完成
- 📊 **九量表评分系统**：基于MMPI风格的专业心理测评
  - 说谎分 (L)
  - 诈病分 (F)
  - 校正分 (K)
  - 抑郁量表 (D)
  - 焦虑量表 (Pt)
  - 偏执量表 (Pa)
  - 精神衰弱 (Hs)
  - 精神分裂 (Sc)
  - 冲动/反社会 (Pd)
- 🔄 **自动跳转**：选择答案后自动跳转到下一题
- 📱 **响应式设计**：支持桌面端和移动端访问
- 🎉 **分享功能**：支持生成二维码分享测试成绩

## 技术栈

- HTML5
- CSS3
- JavaScript (ES6+)
- 纯前端实现，无需后端服务器

## 快速开始

### 安装与运行

```bash
# 克隆项目
git clone https://github.com/yourusername/soldier-adaptability-test.git

# 进入项目目录
cd soldier-adaptability-test

# 使用任意HTTP服务器启动
# 方法1: 使用Python
python -m http.server 8080

# 方法2: 使用Node.js
npx http-server -p 8080

# 方法3: 使用PHP
php -S localhost:8080
```

然后在浏览器中访问 `http://localhost:8080/home.html`

### 文件结构

```
├── home.html          # 首页入口
├── index.html         # 主测试页面
├── app.js             # 核心逻辑（题库、评分算法、多语言）
├── style.css          # 样式文件
├── README.md          # 项目说明
├── LICENSE            # MIT许可证
└── .gitignore         # Git忽略配置
```

## 使用说明

1. 打开首页 `home.html`
2. 选择语言（中文/English/繁體）
3. 点击"开始测试"按钮进入测试页面
4. 阅读测试说明后点击"开始测试"
5. 根据自身实际情况选择"是"或"否"作答
6. 测试完成后查看测评报告
7. 可通过分享按钮生成二维码分享成绩

## 测试结果判定

- **1类（合格）**：各项指标均在正常范围内，心理素质符合士兵职业基本适应性要求
- **2类（可疑）**：部分指标偏高，建议进一步观察或复查
- **3类（不合格）**：多项指标异常，不符合士兵职业基本适应性要求

## 许可证

MIT License

## 截图展示

### 首页入口
![首页入口](https://github.com/0x21c/PLA-psychological-testing-system/blob/main/index.png))

### 测试页面（中文）
![测试页面-中文](https://github.com/0x21c/PLA-psychological-testing-system/blob/main/21.png)

### 测试页面（英文）
![测试页面-英文](https://github.com/0x21c/PLA-psychological-testing-system/blob/main/english.png)

### 测评报告结果
![测评报告](https://github.com/0x21c/PLA-psychological-testing-system/blob/main/Screenshot_20260417_145350_com.huawei.browser.jpg )![测评报告](https://github.com/0x21c/PLA-psychological-testing-system/blob/main/Screenshot_20260417_145358_com.huawei.browser.jpg )
![测评报告](https://github.com/0x21c/PLA-psychological-testing-system/blob/main/Screenshot_20260417_145402_com.huawei.browser.jpg )

### 分享功能（含二维码）
![分享功能](https://github.com/0x21c/PLA-psychological-testing-system/blob/main/Screenshot_20260417_145414_com.huawei.browser.jpg)

#### 功能预览

| 功能 | 描述 |
|------|------|
| 🎯 智能自适应 | 根据答题情况动态调整题目数量 |
| 🌐 多语言 | 支持中文/英文/繁体中文 |
| ⏱️ 计时 | 40分钟倒计时 |
| 📊 专业评分 | 9个量表综合评估 |
| 📱 响应式 | 支持各种设备 |
| 🎉 分享 | 二维码分享成绩 |
