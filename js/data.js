/* =====================================================
 * data.js —— 站点数据源（资料来自 profile_demo.md）
 * 新增项目只需在 PROJECTS 数组中追加一个对象即可，
 * 页面会自动渲染，无需改动 HTML / CSS。
 * ===================================================== */

// 个人信息
const PROFILE = {
  name: "郑思凯",
  role: "软件工程 · AI 辅助开发与大语言模型应用",
  greeting: "你好，我是郑思凯",
  bio: "软件工程专业在读学生，目前主要关注 AI 辅助开发与大语言模型技术，持续学习前后端开发、数据可视化和 AI 应用构建。",
  email: "2637996322@qq.com",
  socials: [
    { label: "GitHub", url: "https://github.com/xiaozhao" },
    { label: "个人主页", url: "https://xiaozhao" }
  ]
};

// 技能方向（分组）
const SKILLS = [
  {
    group: "常用技术",
    tags: ["Python", "Java", "TypeScript", "HTML/CSS"]
  },
  {
    group: "学习方向",
    tags: ["前后端开发", "数据可视化", "AI 应用构建", "大语言模型"]
  }
];

// 项目作品列表（可继续追加）
const PROJECTS = [
  {
    name: "轻记账",
    desc: "面向日常生活场景的极简记账微信小程序，重点解决快速记录和查看个人收支的问题。支持语音快捷记账、月度收支统计和预算提醒，并使用微信云开发完成数据存储与后端能力。",
    stack: ["TypeScript", "微信小程序", "微信云开发", "ECharts"],
    date: "2025.04",
    category: "移动应用",
    image: "images/qingjizhang.jpg"
  },
  {
    name: "拾光集市",
    desc: "面向校园场景的二手交易平台，提供商品发布、关键词检索、站内私信和信用评分等功能。从需求梳理、界面设计到主要接口开发均独立完成，上线测试后累计注册用户超过 300 人。",
    stack: ["Java", "Spring Boot", "MySQL", "TypeScript", "Vue"],
    date: "2025.09",
    category: "Web 应用",
    image: "images/shiguangjishi.jpg"
  },
  {
    name: "城市脉搏",
    desc: "城市实时交通与天气数据可视化大屏，用于集中展示交通、天气和城市运行信息。项目通过多数据源轮询聚合数据，并结合 SVG 图表、Canvas 粒子地图和响应式布局实现大屏可视化展示。",
    stack: ["TypeScript", "HTML/CSS", "Canvas", "SVG", "ECharts"],
    date: "2026.03",
    category: "数据可视化",
    image: "images/chengshimaibo.jpg"
  },
  {
    name: "课语通",
    desc: "基于大语言模型的课程问答助手。用户上传课程资料后，系统能够建立知识索引，根据课程内容回答问题，并提供引用出处和知识点小测，帮助学生快速复习和整理课程重点。",
    stack: ["Python", "FastAPI", "RAG", "向量检索", "大语言模型 API", "Streamlit"],
    date: "2026.07",
    category: "AI 应用",
    image: "images/keyutong.jpg"
  }
];

// 关于我
const ABOUT = {
  paragraphs: [
    "我叫郑思凯，是一名软件工程专业学生，就读于广州软件学院，目前主要关注 AI 辅助开发与大语言模型技术。",
    "平时主要使用 Python、Java 和 TypeScript 进行项目开发，也在持续学习前后端开发、数据可视化和 AI 应用构建。"
  ],
  timeline: [
    { date: "2026.07", title: "课语通", desc: "基于大语言模型的课程问答助手，支持知识索引、引用出处与知识点小测。" },
    { date: "2026.03", title: "城市脉搏", desc: "完成城市实时交通与天气数据可视化大屏。" },
    { date: "2025.09", title: "拾光集市", desc: "独立完成校园二手交易平台，上线测试后累计注册用户超过 300 人。" },
    { date: "2025.04", title: "轻记账", desc: "发布极简记账微信小程序，支持语音快捷记账与预算提醒。" }
  ]
};

// 联系方式
const CONTACTS = [
  { label: "邮箱", value: "2637996322@qq.com", url: "mailto:2637996322@qq.com" },
  { label: "微信", value: "xiaozhao", url: null },
  { label: "GitHub", value: "github.com/xiaozhao", url: "https://github.com/xiaozhao" },
  { label: "所在地", value: "中国·广州", url: null },
  { label: "个人主页", value: "xiaozhao", url: "https://xiaozhao" }
];
