/* =====================================================
 * main.js —— 渲染与交互
 * ===================================================== */

// ---------- 工具 ----------
function el(tag, className, html) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (html !== undefined) node.innerHTML = html;
  return node;
}

function escapeHTML(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// ---------- 侧栏导航 ----------
const NAV_ITEMS = [
  { id: "works", label: "项目作品" },
  { id: "about", label: "关于我" },
  { id: "contact", label: "联系方式" }
];

function renderNav() {
  const navList = document.getElementById("navList");
  const drawerNav = document.querySelector(".drawer-nav");

  NAV_ITEMS.forEach((item, i) => {
    const li = el("li");
    li.innerHTML =
      '<a href="#' + item.id + '" data-target="' + item.id + '">' +
      '<span class="no">0' + (i + 1) + "</span>" + escapeHTML(item.label) + "</a>";
    navList.appendChild(li);

    const dli = el("li");
    dli.innerHTML = '<a href="#' + item.id + '">' + escapeHTML(item.label) + "</a>";
    drawerNav.appendChild(dli);
  });

  // 抽屉内点击后自动收起
  drawerNav.addEventListener("click", (e) => {
    if (e.target.closest("a")) closeDrawer();
  });
}

// 导航高亮：监听右侧主区滚动
function initNavHighlight() {
  const links = document.querySelectorAll("#navList a");
  const sections = NAV_ITEMS
    .map((item) => document.getElementById(item.id))
    .filter(Boolean);

  function update() {
    const scrollTop = window.scrollY;
    let current = sections[0];

    sections.forEach((sec) => {
      if (sec.getBoundingClientRect().top <= window.innerHeight * 0.35) {
        current = sec;
      }
    });

    links.forEach((link) => {
      link.classList.toggle("active", link.dataset.target === current.id);
    });
  }

  window.addEventListener("scroll", update, { passive: true });
  update();
}

// ---------- 侧栏身份与技能 ----------
function renderSidebar() {
  document.querySelector(".identity").innerHTML =
    '<p class="role">' + escapeHTML(PROFILE.role) + "</p>" +
    '<h1 class="name">' + escapeHTML(PROFILE.greeting) + "</h1>" +
    '<p class="bio">' + escapeHTML(PROFILE.bio) + "</p>";

  const mailLinks = document.querySelectorAll(".mail-link, .contact-mail-anchor");
  document.querySelector(".mail-link").textContent = PROFILE.email;

  const social = document.getElementById("socialLinks");
  social.innerHTML = PROFILE.socials
    .map((s) => '<a href="' + s.url + '" target="_blank" rel="noopener">' + escapeHTML(s.label) + "</a>")
    .join("");

  const skillGroups = document.getElementById("skillList");
  skillGroups.innerHTML = SKILLS
    .map(
      (g) =>
        '<div class="skill-group"><h3>' + escapeHTML(g.group) + "</h3>" +
        '<div class="skill-tags">' +
        g.tags.map((t) => "<span>" + escapeHTML(t) + "</span>").join("") +
        "</div></div>"
    )
    .join("");
}

// ---------- 移动端介绍摘要 ----------
function renderMobileIntro() {
  document.getElementById("mobileIntro").innerHTML =
    '<p class="role">' + escapeHTML(PROFILE.role) + "</p>" +
    "<h1>" + escapeHTML(PROFILE.greeting) + "</h1>" +
    '<p class="bio">' + escapeHTML(PROFILE.bio) + "</p>";
}

// ---------- 项目列表（数据驱动，便于扩展） ----------
function renderProjects() {
  const list = document.getElementById("projectList");

  list.innerHTML = PROJECTS.map((p, i) => {
    const num = String(i + 1).padStart(2, "0");
    const linkHTML = p.link && p.link !== "#"
      ? '<a class="project-link" href="' + p.link + '" target="_blank" rel="noopener">查看项目 →</a>'
      : "";
    return (
      '<article class="project">' +
        '<div class="project-media">' +
          '<span class="project-no">' + num + "</span>" +
          '<img src="' + p.image + '" alt="' + escapeHTML(p.name) + '" loading="lazy">' +
        "</div>" +
        '<div class="project-info">' +
          '<div class="meta">' +
            '<span class="category">' + escapeHTML(p.category) + "</span>" +
            '<span class="date">' + escapeHTML(p.date) + "</span>" +
          "</div>" +
          "<h3>" + escapeHTML(p.name) + '<span class="arrow">→</span></h3>' +
          '<p class="project-desc">' + escapeHTML(p.desc) + "</p>" +
          '<div class="stack">' +
            p.stack.map((s) => "<span>" + escapeHTML(s) + "</span>").join("") +
          "</div>" +
          linkHTML +
        "</div>" +
      "</article>"
    );
  }).join("");
}

// ---------- 关于我 ----------
function renderAbout() {
  document.getElementById("aboutBody").innerHTML =
    ABOUT.paragraphs.map((p, i) => {
      const cls = i === 0 ? "lead" : "";
      return '<p class="' + cls + '">' + escapeHTML(p) + "</p>";
    }).join("") +
    '<div class="timeline">' +
    ABOUT.timeline
      .map(
        (t) =>
          '<div class="timeline-item">' +
          '<span class="t-date">' + escapeHTML(t.date) + "</span>" +
          "<h4>" + escapeHTML(t.title) + "</h4>" +
          "<p>" + escapeHTML(t.desc) + "</p>" +
          "</div>"
      )
      .join("") +
    "</div>";
}

// ---------- 联系方式 ----------
function renderContacts() {
  const mail = el("a", "contact-mail", escapeHTML(PROFILE.email));
  mail.href = "mailto:" + PROFILE.email;

  const rows = el("div", "contact-rows");
  rows.innerHTML = CONTACTS.map((c) => {
    const value = c.url
      ? '<a href="' + c.url + '" target="_blank" rel="noopener">' + escapeHTML(c.value) + " →</a>"
      : "<span>" + escapeHTML(c.value) + "</span>";
    return '<div class="contact-row"><span class="label">' + escapeHTML(c.label) + "</span>" + value + "</div>";
  }).join("");

  const body = document.getElementById("contactBody");
  body.appendChild(mail);
  body.appendChild(rows);
}

// ---------- 主题切换 ----------
function initTheme() {
  var root = document.documentElement;
  var buttons = document.querySelectorAll(".theme-toggle");

  buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var current = root.getAttribute("data-theme") || "light";
      var next = current === "light" ? "dark" : "light";
      root.setAttribute("data-theme", next);
      localStorage.setItem("theme", next);
    });
  });
}

// ---------- 移动端抽屉菜单 ----------
function closeDrawer() {
  document.getElementById("drawer").classList.remove("open");
  document.getElementById("drawerMask").classList.remove("show");
  const btn = document.getElementById("menuBtn");
  btn.classList.remove("open");
  btn.setAttribute("aria-expanded", "false");
  document.getElementById("drawer").setAttribute("aria-hidden", "true");
}

function initDrawer() {
  const btn = document.getElementById("menuBtn");
  const drawer = document.getElementById("drawer");
  const mask = document.getElementById("drawerMask");

  btn.addEventListener("click", () => {
    const open = !drawer.classList.contains("open");
    drawer.classList.toggle("open", open);
    mask.classList.toggle("show", open);
    btn.classList.toggle("open", open);
    btn.setAttribute("aria-expanded", String(open));
    drawer.setAttribute("aria-hidden", String(!open));
  });

  mask.addEventListener("click", closeDrawer);
}

// ---------- 初始化 ----------
document.addEventListener("DOMContentLoaded", () => {
  renderNav();
  renderSidebar();
  renderMobileIntro();
  renderProjects();
  renderAbout();
  renderContacts();
  initDrawer();
  initNavHighlight();
  initTheme();
});
