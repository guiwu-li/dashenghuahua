// ─── Brand Colors ───────────────────────────────────────────────────────────
export const COLORS = {
  primary:     '#FFB020',
  primaryDark: '#E09010',
  accentRed:   '#FF4D4D',
  accentBlue:  '#4DBEFF',
  accentGreen: '#52C41A',
  bgWarm:      '#FFFBF2',
  textMain:    '#1A1A1A',
  textMuted:   '#666666',
} as const;

// ─── Site Copy ───────────────────────────────────────────────────────────────
export const SITE = {
  name:    '大声画画的孩子',
  tagline: '让每个孩子都爱上画画',
  ctaPrimary:   '免费试课',
  ctaSecondary: '了解课程',
  phone:   '400-xxx-xxxx',
} as const;

// ─── Navigation ───────────────────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: '课程体系', href: '#courses' },
  { label: '教学方法', href: '#method' },
  { label: '学员作品', href: '#gallery' },
  { label: '师资团队', href: '#teachers' },
  { label: '课程价格', href: '#pricing' },
  { label: '家长评价', href: '#reviews' },
] as const;

// ─── Why Us ───────────────────────────────────────────────────────────────────
export const WHY_US_ITEMS = [
  {
    icon: '🎨',
    title: '专业师资',
    desc: '全国美院毕业，平均教龄 8 年，每位老师经过严格筛选',
  },
  {
    icon: '🧒',
    title: '因材施教',
    desc: '针对 3–12 岁三大年龄段，定制专属课程内容与教学方式',
  },
  {
    icon: '🏆',
    title: '成果丰硕',
    desc: '10,000+ 学员，多次获全国儿童画大赛金奖',
  },
  {
    icon: '💬',
    title: '家长放心',
    desc: '课后作品点评，学习进度可视化，家长随时了解孩子成长',
  },
] as const;

// ─── Course Tiers ─────────────────────────────────────────────────────────────
export const COURSE_TIERS = [
  {
    age:     '3–5 岁',
    id:      'tier-3-5',
    label:   '萌芽班',
    color:   'text-accent-green',
    desc:    '以涂鸦、拓印、手工为主，培养色彩感知与手眼协调能力。',
    courses: ['彩虹涂鸦', '手指印画', '纸黏土创作', '自然观察写生'],
  },
  {
    age:     '6–9 岁',
    id:      'tier-6-9',
    label:   '成长班',
    color:   'text-accent-blue',
    desc:    '系统学习素描基础与水彩技法，建立空间感与构图意识。',
    courses: ['铅笔素描入门', '水彩风景', '卡通造型设计', '主题创作'],
  },
  {
    age:     '10–12 岁',
    id:      'tier-10-12',
    label:   '进阶班',
    color:   'text-primary',
    desc:    '深入色彩理论、综合材料创作，为竞赛与升学做准备。',
    courses: ['色彩静物', '水粉风景', '创意插画', '作品集辅导'],
  },
] as const;

// ─── Teaching Steps ──────────────────────────────────────────────────────────
export const TEACHING_STEPS = [
  {
    step:  '01',
    title: '趣味导入',
    desc:  '用故事、游戏引发孩子好奇心，让画画从「被动完成」变为「主动探索」。',
  },
  {
    step:  '02',
    title: '技法示范',
    desc:  '老师现场示范，分解每个笔触与步骤，孩子跟学不迷茫。',
  },
  {
    step:  '03',
    title: '自由创作',
    desc:  '给孩子充足时间独立表达，老师个性化点评，作品当堂完成。',
  },
] as const;

// ─── Pricing ──────────────────────────────────────────────────────────────────
export const PRICING_PLANS = [
  {
    name:     '体验课',
    price:    '¥9.9',
    desc:     '1 节 45 分钟在线直播课',
    features: ['专业老师 1 对多', '课后作品点评', '专属学习群'],
    highlight: false,
    cta:      '立即预约',
  },
  {
    name:     '学期课',
    price:    '¥599',
    sub:      '/学期（24 节）',
    desc:     '3 个月系统课程',
    features: ['每周 2 节直播课', '课后录播回放 7 天', '月度作品集', '家长成长报告'],
    highlight: true,
    cta:      '立即购买',
  },
  {
    name:     '年课',
    price:    '¥1,999',
    sub:      '/年（96 节）',
    desc:     '全年系统进阶',
    features: ['包含学期课全部权益', '竞赛辅导优先报名', '专属成长档案', '结业作品集印刷'],
    highlight: false,
    cta:      '立即购买',
  },
] as const;

// ─── FAQ ──────────────────────────────────────────────────────────────────────
export const FAQ_ITEMS = [
  {
    q: '没有绘画基础的孩子可以学吗？',
    a: '完全可以。我们的课程从零基础开始，老师会根据孩子当前水平调整教学节奏。',
  },
  {
    q: '上课需要准备哪些工具材料？',
    a: '报名后我们会提供详细的材料清单，也可选购我们统一配套的工具包（可选）。',
  },
  {
    q: '课程是直播还是录播？',
    a: '均为实时直播互动课，老师可以实时看到孩子作品并给予点评。直播结束后 7 天内可回放。',
  },
  {
    q: '如果孩子某节课缺席了怎么办？',
    a: '直播课可在 7 天内通过录播补课，不影响学习进度。',
  },
  {
    q: '一节课多少分钟，适合多大孩子？',
    a: '3–5 岁 30 分钟，6–12 岁 45 分钟，符合儿童注意力特点。每班不超过 15 人。',
  },
  {
    q: '试听课之后不满意可以退款吗？',
    a: '体验课结束后如不满意，全额退款，无任何条件。正式课程在上课 3 节内可申请退款。',
  },
] as const;
