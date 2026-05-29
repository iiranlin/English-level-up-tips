const chapters = [
  {
    id: "understanding",
    order: "01",
    phase: "先校准方向",
    title: "认知篇",
    summary:
      "先想清楚为什么学英语、用在哪些场景，以及怎样用更自然的节奏坚持下去。",
    path: "threads/part-1/1-understanding.md",
    image: "assets/understanding@2x.svg",
    tags: ["目标", "场景", "学习心态"],
  },
  {
    id: "vocabulary",
    order: "02",
    phase: "建立基础库",
    title: "单词篇",
    summary:
      "把词汇从死记硬背变成可复习、可联想、可长期积累的个人词库。",
    path: "threads/part-1/2-vocabulary.md",
    image: "assets/vocabulary@2x.svg",
    tags: ["词汇", "记忆", "复习"],
  },
  {
    id: "listening",
    order: "03",
    phase: "输入训练",
    title: "听力篇",
    summary:
      "用精听和泛听组合建立语感，让电影、播客、课程和真实材料都成为训练场。",
    path: "threads/part-1/3-listening.md",
    image: "assets/listening@2x.svg",
    tags: ["精听", "泛听", "材料"],
  },
  {
    id: "reading",
    order: "04",
    phase: "输入深化",
    title: "阅读篇",
    summary:
      "从英文原版书、技术文档和社区内容中扩大输入量，同时训练抓主旨和复述。",
    path: "threads/part-1/4-reading.md",
    image: "assets/reading@2x.svg",
    tags: ["精读", "泛读", "文档"],
  },
  {
    id: "speaking",
    order: "05",
    phase: "开始输出",
    title: "口语篇",
    summary:
      "从音标、朗读、歌曲、常见问题和陌生人交流开始，把英语真正说出口。",
    path: "threads/part-1/5-speaking.md",
    image: "assets/speaking@2x.svg",
    tags: ["发音", "表达", "交流"],
  },
  {
    id: "writing",
    order: "06",
    phase: "输出升级",
    title: "写作篇",
    summary:
      "通过阅读、练习、交流和工具，把英文写作变成能持续改进的表达系统。",
    path: "threads/part-1/6-writing.md",
    image: "assets/writing@2x.svg",
    tags: ["表达", "反馈", "修改"],
  },
  {
    id: "ai",
    order: "07",
    phase: "AI 加速",
    title: "利用 AI 学习",
    summary:
      "把 Gemini、ChatGPT、Claude、Perplexity 和 DeepL Write 分工成完整训练回路。",
    path: "threads/part-1/7-ai.md",
    image: "assets/ai@2x.svg",
    tags: ["Gemini", "练习回路", "纠错"],
  },
];

const roadmap = [
  {
    week: "第 1 步",
    title: "定目标，不急着刷材料",
    summary:
      "先读认知篇，写下你的首要场景和最想提升的 1 到 2 项能力。",
    tags: ["认知篇", "目标", "节奏"],
    path: chapters[0].path,
  },
  {
    week: "第 2 步",
    title: "建立词汇复习系统",
    summary:
      "用单词篇的方法配合 Common 词表，每天只保留真正会复用的表达。",
    tags: ["单词篇", "Common", "复习"],
    path: chapters[1].path,
  },
  {
    week: "第 3 步",
    title: "听力和阅读一起扩大输入",
    summary:
      "听力用精听加泛听，阅读用原版书和英文文档，目标是听懂、读懂并能复述。",
    tags: ["听力篇", "阅读篇", "输入"],
    path: chapters[2].path,
  },
  {
    week: "第 4 步",
    title: "把输入转成口语和写作",
    summary:
      "每次学习都要有输出任务，哪怕只是 3 句话复述或 100 字英文短评。",
    tags: ["口语篇", "写作篇", "输出"],
    path: chapters[4].path,
  },
  {
    week: "第 5 步",
    title: "用 AI 做陪练和复盘",
    summary:
      "用 AI 章节搭建 English Coach，形成输入、输出、纠错、复习的闭环。",
    tags: ["AI", "Gemini", "闭环"],
    path: chapters[6].path,
  },
  {
    week: "第 6 步",
    title: "按职业方向扩展词表",
    summary:
      "如果你是开发者，再进入 JavaScript、Python、Prompt、Vibe Coding 等专项词表。",
    tags: ["技术英语", "词表", "场景"],
    path: "threads/word-list/Common.md",
  },
];

const methods = [
  {
    step: "Input",
    title: "先输入",
    summary: "用听力、阅读和真实材料补充语料，不只依赖教材。",
  },
  {
    step: "Output",
    title: "马上输出",
    summary: "把看到和听到的内容复述、改写、说出来，尽早暴露问题。",
  },
  {
    step: "Feedback",
    title: "拿到反馈",
    summary: "通过老师、伙伴或 AI 纠错，优先修正高频可迁移错误。",
  },
  {
    step: "Review",
    title: "循环复习",
    summary: "把词汇、表达、语法错误沉淀成自己的复习材料。",
  },
];

const wordLists = [
  ["Common", "通用技术词汇", "threads/word-list/Common.md"],
  ["Go", "Go 开发词表", "threads/word-list/Go.md"],
  ["Java", "Java 开发词表", "threads/word-list/Java.md"],
  ["JavaScript", "前端与 JS 词表", "threads/word-list/JavaScript.md"],
  ["PHP", "PHP 词表", "threads/word-list/PHP.md"],
  ["Prompt", "AI 提示词词表", "threads/word-list/Prompt.md"],
  ["Python", "Python 词表", "threads/word-list/Python.md"],
  ["Swift", "Swift 词表", "threads/word-list/Swift.md"],
  ["Rust", "Rust 词表", "threads/word-list/Rust.md"],
  ["Vibe Coding", "Agent 编程词表", "threads/word-list/VibeCoding.md"],
];

const readerItems = [
  ["首页", ""],
  ...chapters.map((chapter) => [chapter.title, chapter.path]),
  ["扯淡篇", "threads/part-2/x-misc.md"],
  ["我的故事", "threads/part-2/my-story.md"],
  ["Week 1", "threads/part-4/week-1.md"],
  ...wordLists.map(([title, , path]) => [title, path]),
];

const main = document.querySelector("#main");
const homeSections = new Set(["roadmap", "chapters", "ai", "word-lists"]);

window.addEventListener("hashchange", renderRoute);
window.addEventListener("DOMContentLoaded", renderRoute);

function renderRoute() {
  const route = getRoutePath();
  const sourcePath = normalizeRoute(route);
  document.body.classList.toggle("reader-open", Boolean(sourcePath));

  if (!sourcePath) {
    renderHome();
    return;
  }

  renderReader(sourcePath);
}

function renderHome() {
  main.innerHTML = `
    <div class="home">
      <section class="section hero" aria-labelledby="hero-title">
        <div class="section-inner hero-grid">
          <div>
            <p class="eyebrow">Advanced English Learning Guide</p>
            <h1 id="hero-title">把英语学习变成一条能走下去的路线。</h1>
            <p class="hero-lead">
              这里不只是把仓库内容搬成网页，而是把认知、词汇、听力、阅读、口语、写作和 AI 训练整理成一个可执行的学习系统。你可以从路线开始，也可以直接进入任意章节深读。
            </p>
            <div class="hero-actions">
              <a class="primary-button" href="#roadmap">查看学习路线</a>
              <a class="ghost-button" href="#/threads/part-1/1-understanding.md">阅读第一章</a>
              <a class="ghost-button" href="#/threads/part-1/7-ai.md">进入 AI 训练</a>
            </div>
            <div class="hero-stats" aria-label="内容概览">
              <div class="stat-item">
                <strong>7</strong>
                <span>核心学习章节</span>
              </div>
              <div class="stat-item">
                <strong>10</strong>
                <span>技术英语词表</span>
              </div>
              <div class="stat-item">
                <strong>2</strong>
                <span>中英双语入口</span>
              </div>
            </div>
          </div>

          <aside class="hero-panel" aria-label="推荐路线预览">
            <div class="route-preview">
              <div class="route-preview-header">
                <strong>推荐开始方式</strong>
                <span>按顺序学，按场景调整</span>
              </div>
              <ol class="mini-steps">
                ${roadmap
                  .slice(0, 4)
                  .map(
                    (item, index) => `
                      <li>
                        <b>${String(index + 1).padStart(2, "0")}</b>
                        <span>
                          <strong>${item.title}</strong>
                          <span>${item.summary}</span>
                        </span>
                      </li>
                    `,
                  )
                  .join("")}
              </ol>
            </div>
            <div class="visual-strip" aria-label="项目素材">
              <img src="assets/feature.svg" alt="项目特色图" />
              <img src="assets/CEFR@2x.png" alt="英语水平等级图" />
            </div>
          </aside>
        </div>
      </section>

      <section class="section roadmap" id="roadmap" aria-labelledby="roadmap-title">
        <div class="section-inner">
          <div class="section-heading">
            <div>
              <p class="eyebrow">Learning Roadmap</p>
              <h2 id="roadmap-title">一条适合长期执行的学习路线</h2>
            </div>
            <p>
              路线不是固定课表，而是一套优先级。先明确场景，再建立词汇和输入系统，最后用输出和 AI 反馈不断修正。
            </p>
          </div>
          <ol class="roadmap-list">
            ${roadmap
              .map(
                (item) => `
                  <li class="roadmap-item">
                    <time>${item.week}</time>
                    <div>
                      <h3>${item.title}</h3>
                      <p>${item.summary}</p>
                    </div>
                    <div class="roadmap-tags">
                      ${item.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
                      <a class="article-link" href="#/${item.path}">阅读</a>
                    </div>
                  </li>
                `,
              )
              .join("")}
          </ol>
        </div>
      </section>

      <section class="section chapters" id="chapters" aria-labelledby="chapters-title">
        <div class="section-inner">
          <div class="section-heading">
            <div>
              <p class="eyebrow">Core Chapters</p>
              <h2 id="chapters-title">核心章节</h2>
            </div>
            <p>
              原仓库里的核心内容仍是主角。每张卡片都直达对应 Markdown 章节，适合完整阅读和反复复习。
            </p>
          </div>
          <div class="chapter-grid">
            ${chapters.map(renderChapterCard).join("")}
          </div>
        </div>
      </section>

      <section class="section method-band" aria-labelledby="method-title">
        <div class="section-inner">
          <div class="section-heading">
            <div>
              <p class="eyebrow">Practice Loop</p>
              <h2 id="method-title">真正起作用的是训练回路</h2>
            </div>
            <p>
              这份指南反复强调：只看、只听、只收藏都不够。学习必须变成输入、输出、反馈和复习的循环。
            </p>
          </div>
          <div class="method-grid">
            ${methods
              .map(
                (method) => `
                  <article class="method-card">
                    <span>${method.step}</span>
                    <h3>${method.title}</h3>
                    <p>${method.summary}</p>
                  </article>
                `,
              )
              .join("")}
          </div>
        </div>
      </section>

      <section class="section ai-section" id="ai" aria-labelledby="ai-title">
        <div class="section-inner">
          <div class="section-heading">
            <div>
              <p class="eyebrow">AI Coach</p>
              <h2 id="ai-title">把 AI 变成英语私教系统</h2>
            </div>
            <p>
              AI 章节已经更新到 2026 版，重点是用 Gemini、ChatGPT、Claude、Perplexity 和 DeepL Write 分工协作，而不是偶尔翻译两句。
            </p>
          </div>
          <div class="ai-layout">
            <article class="ai-panel featured">
              <img src="assets/ai@2x.svg" alt="AI 学习章节图标" />
              <h3>推荐组合：English Coach Gem + Gemini Live + Canvas</h3>
              <p>
                用自定义教练建立课程节奏，用 Live 练真实口语，用 Canvas 修改作文和表达，再把 quiz 与 flashcards 变成复习材料。
              </p>
              <div class="hero-actions">
                <a class="primary-button" href="#/threads/part-1/7-ai.md">阅读 AI 章节</a>
                <a class="ghost-button" href="#/en/threads/part-1/7-ai.md">Read in English</a>
              </div>
            </article>
            <article class="ai-panel">
              <h3>AI 训练流程</h3>
              <ol class="ai-steps">
                <li><b>1</b><span>上传材料或指定场景，让 AI 拆成一节小课。</span></li>
                <li><b>2</b><span>先理解输入，再做口头复述或短写作。</span></li>
                <li><b>3</b><span>只修正 1 到 2 个关键错误，保持训练可持续。</span></li>
                <li><b>4</b><span>把表达、错题和词汇变成三天后还会复习的材料。</span></li>
              </ol>
            </article>
          </div>
        </div>
      </section>

      <section class="section word-lists" id="word-lists" aria-labelledby="word-title">
        <div class="section-inner">
          <div class="section-heading">
            <div>
              <p class="eyebrow">Word Lists</p>
              <h2 id="word-title">技术英语词表</h2>
            </div>
            <p>
              如果你的英语场景和开发、AI、技术文档有关，可以用这些词表补齐行业表达。
            </p>
          </div>
          <div class="word-grid">
            ${wordLists
              .map(
                ([title, summary, path]) => `
                  <a class="word-card" href="#/${path}">
                    <h3>${title}</h3>
                    <p>${summary}</p>
                    <span>打开词表</span>
                  </a>
                `,
              )
              .join("")}
          </div>
        </div>
      </section>

      <section class="section cefr" aria-labelledby="cefr-title">
        <div class="section-inner cefr-layout">
          <div class="cefr-copy">
            <p class="eyebrow">CEFR</p>
            <h2 id="cefr-title">用等级定位能力，用路线推动行动</h2>
            <p>
              CEFR 可以帮你判断当前阶段，但真正提升来自每天的材料选择、输出任务和反馈复盘。等级是地图，训练才是路。
            </p>
            <div class="hero-actions">
              <a class="ghost-button" href="#/README.md">查看原项目介绍</a>
              <a class="ghost-button" href="#/en/README.md">English Version</a>
            </div>
          </div>
          <div class="cefr-image">
            <img src="assets/CEFR@2x.png" alt="CEFR 英语水平等级图" />
          </div>
        </div>
      </section>
    </div>
  `;
  document.title = "离谱的英语学习指南";
  main.focus({ preventScroll: true });
  scrollToHomeSectionFromHash();
}

function renderChapterCard(chapter) {
  return `
    <a class="chapter-card" href="#/${chapter.path}">
      <div class="chapter-art">
        <img src="${chapter.image}" alt="${chapter.title}" />
      </div>
      <div class="chapter-body">
        <div class="chapter-meta">
          <span>${chapter.order}</span>
          <span>${chapter.phase}</span>
        </div>
        <h3>${chapter.title}</h3>
        <p>${chapter.summary}</p>
        <div class="roadmap-tags" aria-label="${chapter.title}标签">
          ${chapter.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
        </div>
        <span class="article-link">进入章节</span>
      </div>
    </a>
  `;
}

async function renderReader(path) {
  main.innerHTML = `
    <div class="reader">
      ${renderReaderSidebar(path)}
      <section class="reader-main" aria-label="文章阅读区">
        <div class="reader-toolbar">
          <span class="article-meta">读取来自：${escapeHtml(path)}</span>
          <div class="reader-toolbar-actions">
            <a class="ghost-button" href="#/">返回学习首页</a>
            <a class="ghost-button" href="${path}" target="_blank" rel="noreferrer">打开 Markdown</a>
          </div>
        </div>
        <article class="article loading" aria-live="polite">正在加载内容...</article>
      </section>
    </div>
  `;

  const article = main.querySelector(".article");

  try {
    const response = await fetch(path, { cache: "no-cache" });
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    const markdown = await response.text();
    article.classList.remove("loading");
    article.innerHTML = renderMarkdown(markdown, path);
    const title = article.querySelector("h1, h2, h3")?.textContent?.trim();
    document.title = title ? `${title} - 离谱的英语学习指南` : "离谱的英语学习指南";
    main.focus({ preventScroll: true });
  } catch (error) {
    article.className = "article error";
    article.innerHTML = `
      <h1>内容暂时无法加载</h1>
      <p>请确认文件路径存在，或直接打开 Markdown 文件。</p>
      <p><code>${escapeHtml(path)}</code></p>
      <p class="article-meta">${escapeHtml(error.message)}</p>
    `;
  }
}

function renderReaderSidebar(activePath) {
  return `
    <aside class="reader-sidebar" aria-label="课程目录">
      <h2>课程目录</h2>
      <nav class="reader-nav">
        ${readerItems
          .map(([title, path]) => {
            const isHome = path === "";
            const isActive = path && path === activePath;
            return `
              <a class="${isActive ? "active" : ""}" href="${isHome ? "#/" : `#/${path}`}">
                ${title}
              </a>
            `;
          })
          .join("")}
      </nav>
    </aside>
  `;
}

function renderMarkdown(markdown, sourcePath) {
  const baseDir = sourcePath.split("/").slice(0, -1).join("/");
  const isWordList = sourcePath.includes("/word-list/");
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const blocks = [];
  let index = 0;

  while (index < lines.length) {
    const line = lines[index];

    if (!line.trim()) {
      index += 1;
      continue;
    }

    const fence = line.match(/^```(\w*)/);
    if (fence) {
      const code = [];
      index += 1;
      while (index < lines.length && !lines[index].startsWith("```")) {
        code.push(lines[index]);
        index += 1;
      }
      index += 1;
      blocks.push(`<pre><code>${escapeHtml(code.join("\n"))}</code></pre>`);
      continue;
    }

    const heading = line.match(/^(#{1,6})\s+(.+)$/);
    if (heading) {
      const level = heading[1].length;
      blocks.push(
        `<h${level}>${renderInline(heading[2].trim(), baseDir)}</h${level}>`,
      );
      index += 1;
      continue;
    }

    if (/^\s*---+\s*$/.test(line)) {
      blocks.push("<hr />");
      index += 1;
      continue;
    }

    if (/^\s*</.test(line.trim())) {
      const html = [];
      while (index < lines.length && lines[index].trim()) {
        html.push(lines[index]);
        index += 1;
      }
      blocks.push(html.join("\n"));
      continue;
    }

    if (/^\s*>/.test(line)) {
      const quote = [];
      while (index < lines.length && /^\s*>/.test(lines[index])) {
        quote.push(lines[index].replace(/^\s*>\s?/, ""));
        index += 1;
      }
      blocks.push(`<blockquote>${renderParagraphs(quote, baseDir)}</blockquote>`);
      continue;
    }

    if (/^\s*[-*+]\s+/.test(line) || /^\s*\d+[.)]\s+/.test(line)) {
      const ordered = /^\s*\d+[.)]\s+/.test(line);
      const items = [];
      while (
        index < lines.length &&
        (/^\s*[-*+]\s+/.test(lines[index]) || /^\s*\d+[.)]\s+/.test(lines[index]))
      ) {
        items.push(lines[index].replace(/^\s*(?:[-*+]|\d+[.)])\s+/, ""));
        index += 1;
      }
      const tag = ordered ? "ol" : "ul";
      blocks.push(
        `<${tag}>${items
          .map((item) => `<li>${renderInline(item, baseDir)}</li>`)
          .join("")}</${tag}>`,
      );
      continue;
    }

    if (isWordList && /^[A-Za-z0-9][\w\s().+-]*$/.test(line.trim())) {
      const terms = [];
      while (
        index < lines.length &&
        lines[index].trim() &&
        /^[A-Za-z0-9][\w\s().+-]*$/.test(lines[index].trim())
      ) {
        terms.push(lines[index].trim());
        index += 1;
      }
      blocks.push(
        `<ul class="word-list-terms">${terms
          .map((term) => `<li>${renderInline(term, baseDir)}</li>`)
          .join("")}</ul>`,
      );
      continue;
    }

    const paragraph = [];
    while (
      index < lines.length &&
      lines[index].trim() &&
      !/^(#{1,6})\s+/.test(lines[index]) &&
      !/^\s*>/.test(lines[index]) &&
      !/^\s*[-*+]\s+/.test(lines[index]) &&
      !/^\s*\d+[.)]\s+/.test(lines[index]) &&
      !/^\s*---+\s*$/.test(lines[index]) &&
      !/^```/.test(lines[index])
    ) {
      paragraph.push(lines[index]);
      index += 1;
    }
    blocks.push(`<p>${renderInline(paragraph.join(" "), baseDir)}</p>`);
  }

  return blocks.join("\n");
}

function renderParagraphs(lines, baseDir) {
  return lines
    .join("\n")
    .split(/\n\s*\n/)
    .map((paragraph) => `<p>${renderInline(paragraph.replace(/\n/g, " "), baseDir)}</p>`)
    .join("");
}

function renderInline(text, baseDir) {
  let html = escapeHtml(text);

  html = html.replace(
    /\[!\[([^\]]*)\]\(([^)]+)\)\]\(([^)]+)\)/g,
    (_, alt, imageUrl, linkUrl) => {
      const src = resolveAssetUrl(imageUrl, baseDir);
      const href = resolveLinkUrl(linkUrl, baseDir);
      return `<a href="${href}"><img src="${src}" alt="${escapeAttribute(alt)}" /></a>`;
    },
  );

  html = html.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (_, alt, url) => {
    const src = resolveAssetUrl(url, baseDir);
    return `<img src="${src}" alt="${escapeAttribute(alt)}" loading="lazy" />`;
  });

  html = html.replace(/`([^`]+)`/g, "<code>$1</code>");
  html = html.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  html = html.replace(/\*([^*]+)\*/g, "<em>$1</em>");
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, label, url) => {
    const href = resolveLinkUrl(url, baseDir);
    const external = isExternalUrl(href);
    return `<a href="${href}"${external ? ' target="_blank" rel="noreferrer"' : ""}>${label}</a>`;
  });

  return html;
}

function getRoutePath() {
  const hash = window.location.hash || "#/";
  const cleaned = decodeURIComponent(hash.replace(/^#\/?/, ""));
  if (homeSections.has(cleaned)) {
    return "";
  }
  return cleaned.replace(/^\/+/, "");
}

function normalizeRoute(route) {
  const pathOnly = route.split("#")[0].replace(/^\/+/, "");

  if (!pathOnly || pathOnly === "home") {
    return "";
  }

  if (pathOnly === "en" || pathOnly === "en/") {
    return "en/README.md";
  }

  if (pathOnly === "README.md" || pathOnly === "docs/README.md") {
    return "README.md";
  }

  if (pathOnly.endsWith("/")) {
    return `${pathOnly}README.md`;
  }

  return pathOnly;
}

function resolveLinkUrl(url, baseDir) {
  const cleanUrl = decodeHtmlEntities(url.trim());

  if (!cleanUrl) {
    return "#/";
  }

  if (isExternalUrl(cleanUrl) || cleanUrl.startsWith("mailto:") || cleanUrl.startsWith("tel:")) {
    return cleanUrl;
  }

  if (cleanUrl.startsWith("#/")) {
    return cleanUrl;
  }

  if (cleanUrl.startsWith("#")) {
    return cleanUrl;
  }

  const resolved = normalizePath(`${baseDir}/${cleanUrl}`);
  if (resolved.endsWith(".md")) {
    return `#/${resolved}`;
  }

  return resolved;
}

function resolveAssetUrl(url, baseDir) {
  const cleanUrl = decodeHtmlEntities(url.trim());

  if (isExternalUrl(cleanUrl) || cleanUrl.startsWith("data:")) {
    return cleanUrl;
  }

  return normalizePath(`${baseDir}/${cleanUrl}`);
}

function normalizePath(path) {
  const parts = [];
  path
    .split("/")
    .filter(Boolean)
    .forEach((part) => {
      if (part === ".") {
        return;
      }
      if (part === "..") {
        parts.pop();
        return;
      }
      parts.push(part);
    });
  return parts.join("/");
}

function isExternalUrl(url) {
  return /^(https?:)?\/\//.test(url);
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function escapeAttribute(value) {
  return escapeHtml(value).replace(/`/g, "&#096;");
}

function decodeHtmlEntities(value) {
  return String(value)
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

function scrollToHomeSectionFromHash() {
  const sectionId = window.location.hash.replace(/^#/, "");
  if (!homeSections.has(sectionId)) {
    return;
  }

  requestAnimationFrame(() => {
    document.getElementById(sectionId)?.scrollIntoView({ block: "start" });
  });
}
