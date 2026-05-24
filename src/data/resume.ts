export interface Publication {
  id: number
  authors: string
  title: string
  journal: string
  year: string
  volume?: string
  pages?: string
  impactFactor: number
  division: string
  ccfRank?: string
  status: 'Published' | 'Online published' | 'Under Review'
  doi?: string
  isFirstAuthor: boolean
}

export interface ResearchProject {
  id: number
  title: string
  fundingNumber: string
  role: string
  period: string
  status: string
  description: string
  contributions: string[]
  isHost: boolean
}

export interface Award {
  id: number
  name: string
  level: '国家级' | '省部级'
  rank: string
  year: string
}

export const personalInfo = {
  name: '罗涵',
  gender: '男',
  birthDate: '2004.09',
  origin: '湖南湘潭',
  phone: '19873461271',
  email: 'luohankz@stu.jsu.edu.cn',
  university: '吉首大学',
  universityNote: '湖南省重点一本',
  major: '计算机科学与技术',
  degree: '本科',
  period: '2023.09 – 至今',
  gpa: 3.67,
  gpaRank: '前2%',
  expectedOutcome: '预计获得推免资格',
  researchInterests: [
    '车联网安全 (VANETs)',
    '密文策略属性加密 (CP-ABE)',
    '隐私保护',
    '数据共享安全',
    '博弈论安全协议',
    '匿名认证',
    '可追踪性',
    '策略隐藏',
    '策略更新',
    '车路协同 (V2I)',
  ],
  bio: '吉首大学计算机科学与技术专业本科生，研究方向为车联网安全与隐私保护。以第一作者发表SCI论文3篇（含中科院二区2篇），主持湖南省自然科学基金青年学生基础研究项目1项。获ICPC西部邀请赛国家级三等奖、蓝桥杯省级一等奖等多项竞赛奖项。GPA 3.67（前2%），预计获得推免资格。',
}

export const publications: Publication[] = [
  {
    id: 1,
    authors: 'Luo H, Liu C, Qi M, Yu C, Lu J*',
    title: 'A Traceable and Attribute-Updatable Data Sharing Scheme with Privacy Preserving Based on Attribute Tree for Cloud–Assisted VANETs',
    journal: 'Journal of King Saud University – Computer and Information Sciences',
    year: '2026',
    impactFactor: 6.1,
    division: '中科院二区',
    status: 'Online published',
    doi: '10.1007/s44443-026-00769-5',
    isFirstAuthor: true,
  },
  {
    id: 2,
    authors: 'Luo H, Yu C, Qi M, Lu J*, et al.',
    title: 'A Symmetrically Verifiable Outsourced Decryption Data Sharing Scheme with Privacy-Preserving for VANETs',
    journal: 'Symmetry',
    year: '2025',
    volume: '17(12)',
    pages: '2032',
    impactFactor: 2.2,
    division: '中科院三区',
    status: 'Published',
    doi: '10.3390/sym17122032',
    isFirstAuthor: true,
  },
  {
    id: 3,
    authors: 'Luo H, Yu C, Qi M, Lu J*',
    title: 'SRIA: A Self-Revocable and Identity-Aggregated Data Sharing Scheme with Traceability for Vehicle Platooning',
    journal: 'IEEE Transactions on Intelligent Transportation Systems',
    year: '2026',
    impactFactor: 8.4,
    division: '中科院二区',
    ccfRank: 'CCF-B',
    status: 'Under Review',
    isFirstAuthor: true,
  },
  {
    id: 4,
    authors: 'Qi M, Yu C, Luo H, Lu J*',
    title: 'Game-Theory Based Anonymous Secure Mutual Authentication Protocol With Privacy-Preserving for Multi-Level Users in Autonomous Taxi',
    journal: 'Journal of King Saud University – Computer and Information Sciences',
    year: '2026',
    impactFactor: 6.1,
    division: '中科院二区',
    status: 'Online published',
    doi: '10.1007/s44443-026-00818-z',
    isFirstAuthor: false,
  },
  {
    id: 5,
    authors: 'Lu J, Yu C, Qi M, Luo H, Tian J, Li J*',
    title: 'A Symmetry-Enhanced Secure and Traceable Data Sharing Model Based on Decentralized Information Flow Control for the End–Edge–Cloud Paradigm',
    journal: 'Symmetry',
    year: '2025',
    volume: '17(10)',
    pages: '1771',
    impactFactor: 2.2,
    division: '中科院三区',
    status: 'Published',
    doi: '10.3390/sym17101771',
    isFirstAuthor: false,
  },
]

export const researchProjects: ResearchProject[] = [
  {
    id: 1,
    title: '基于密文策略属性加密的云数据安全访问控制技术研究',
    fundingNumber: '2025JJ60924',
    role: '主持人',
    period: '2025.05 – 至今',
    status: '在研',
    description: '该项目为湖南省首届面向优秀本科生资助的自然科学基金项目。在导师指导下，本人独立负责项目选题、申报书撰写及现场答辩，并获批立项资助。',
    contributions: [
      '独立负责项目选题、申报书撰写及现场答辩',
      '针对云环境下数据隐私泄露及权限动态变化等挑战开展研究',
      '研究支持策略隐藏、属性/策略更新以及黑盒可追踪的CP-ABE方案',
      '解决传统方案中隐私泄露、恶意用户追溯成本高等痛点',
    ],
    isHost: true,
  },
  {
    id: 2,
    title: '基于博弈论的车–边协同的双向安全认证技术研究',
    fundingNumber: '202510531032',
    role: '第二负责人',
    period: '2025.07 – 至今',
    status: '在研',
    description: '国家级大学生创新创业训练计划项目，研究车–边（V2I）环境下基于演化博弈的动态信誉评估模型。',
    contributions: [
      '参与设计车–边（V2I）环境下基于演化博弈的动态信誉评估模型',
      '负责双向匿名认证协议的形式化安全分析（ProVerif、Scyther）',
      '辅助配置基于NS-3的车联网仿真测试环境',
      '测试协议在不同车速下的通信开销',
    ],
    isHost: false,
  },
]

export const awards: Award[] = [
  {
    id: 1,
    name: '2024年国际大学生程序设计竞赛（ICPC）西部邀请赛',
    level: '国家级',
    rank: '三等奖',
    year: '2024',
  },
  {
    id: 2,
    name: '第十一届"中国高校计算机大赛——团体程序设计天梯赛"全国总决赛',
    level: '国家级',
    rank: '三等奖',
    year: '2025',
  },
  {
    id: 3,
    name: '第十、十一届"中国高校计算机大赛——团体程序设计天梯赛"全国总决赛',
    level: '国家级',
    rank: '团队三等奖',
    year: '2024/2025',
  },
  {
    id: 4,
    name: '第十七届蓝桥杯全国软件和信息技术专业人才大赛（湖南赛区）',
    level: '省部级',
    rank: '一等奖',
    year: '2026',
  },
  {
    id: 5,
    name: '第十六届蓝桥杯全国软件和信息技术专业人才大赛（湖南赛区）',
    level: '省部级',
    rank: '二等奖',
    year: '2025',
  },
  {
    id: 6,
    name: '第十一届全国大学生统计建模大赛（湖南赛区）',
    level: '省部级',
    rank: '三等奖',
    year: '2025',
  },
  {
    id: 7,
    name: '第二十届湖南省大学生计算机程序设计竞赛（ACM-ICPC）',
    level: '省部级',
    rank: '三等奖',
    year: '2025',
  },
]

export const skills = {
  research: [
    { name: 'CP-ABE / 属性加密', level: 95 },
    { name: '车联网安全 (VANETs)', level: 90 },
    { name: '隐私保护技术', level: 90 },
    { name: '博弈论安全建模', level: 80 },
    { name: '形式化验证 (ProVerif/Scyther)', level: 80 },
  ],
  programming: [
    { name: 'Java', level: 90 },
    { name: 'C/C++', level: 88 },
    { name: 'Python', level: 82 },
    { name: 'LaTeX', level: 85 },
    { name: 'SQL', level: 78 },
  ],
  tools: [
    { name: 'Git', level: 85 },
    { name: 'NS-3 仿真', level: 75 },
    { name: 'Overleaf/LaTeX', level: 85 },
    { name: 'Wireshark', level: 70 },
    { name: 'Linux', level: 80 },
  ],
}
