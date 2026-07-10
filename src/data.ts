import { Project, Milestone, SkillCategory, SideProject } from './types';

export const MILESTONES: Milestone[] = [
  {
    id: 'm1',
    period: '2016 - 2018',
    title: '研究生階段：資訊管理與系統工程',
    role: '研究員 / 系統分析助理',
    organization: '國立頂尖大學資管所',
    description: '專注於大型資訊系統架構、關聯式資料庫設計以及人機互動（HUI）研究。培養了嚴謹的系統思維與將複雜業務邏輯轉化為規格書的能力。',
    highlights: [
      '發表 2 篇關於異質資料庫整合之學術論文',
      '主辦校際系統開發工作坊，帶領 30+ 學員完成原型製作',
      '建立模組化程式碼規範與自動化測試流程'
    ],
    iconName: 'GraduationCap'
  },
  {
    id: 'm2',
    period: '2018 - 2021',
    title: '專案經理：SaaS 產品與敏捷交付',
    role: '資深專案經理 (Senior PM)',
    organization: '雲端科技解決方案公司',
    description: '負責多款企業級 SaaS 產品從 0 到 1 的規劃與交付。全面導入 Scrum 敏捷開發框架，跨足產品設計、工程研發與客戶成功部門。',
    highlights: [
      '帶領跨功能團隊縮短 30% 產品交付週期',
      '建立產品需求文件 (PRD) 標準化範本，降低 50% 溝通落差',
      '成功管理每年逾 2,000 萬台幣之軟體開發預算與時程'
    ],
    iconName: 'Briefcase'
  },
  {
    id: 'm3',
    period: '2021 - 2023',
    title: '政府數位專案：跨部會數位治理',
    role: '首席政府專案經理',
    organization: '國家級智慧城市數位治理專案',
    description: '主導國家級智慧城市市民服務平台與跨機關數據交換中心。面對嚴格的資安法規與多方利害關係人，成功達成跨部會系統互通。',
    highlights: [
      '協調超過 15 個中央與地方機關，打通資料孤島',
      '制定高標準資安防護與個資保護合規機制',
      '平台首季吸引超過 120 萬市民註冊使用，滿意度達 94%'
    ],
    iconName: 'Building2'
  },
  {
    id: 'm4',
    period: '2023 - 2025',
    title: '資訊整合專家：企業架構與數據中台',
    role: '資深資訊整合架構經理',
    organization: '大型集團數位轉型顧問',
    description: '專精於 API Gateway、微服務架構整合與 Legacy Systems 現代化改造。協助傳統製造業與金融業者打通 ERP、CRM 與外部雲端服務。',
    highlights: [
      '領導供應鏈數據中台重構，消除 99% 歷史資料孤島',
      '建立企業級 API 規範，提升內部系統整合效率 4 倍',
      '規劃並執行舊系統無縫遷移至雲端架構'
    ],
    iconName: 'Network'
  },
  {
    id: 'm5',
    period: '2025 - Present',
    title: '未來 AI 專案：AI 工作流自動化',
    role: 'AI 產品與數位轉型負責人',
    organization: 'AI 創新實驗室',
    description: '探索大型語言模型 (LLM) 與企業內部工作流的深度整合，打造 AI Agent 輔助專案管理與自動化文件生成系統，引領團隊迎向 AI 新紀元。',
    highlights: [
      '開發「PM Copilot」內部 AI 助理，每週節省團隊 12 小時行政負擔',
      '制定企業內部 Prompt Engineering 與 AI 倫理規範',
      '主辦多次政府與企業高階主管 AI 轉型工作坊'
    ],
    iconName: 'Cpu'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    name: '智慧城市跨部會市民服務平台',
    category: '政府數位專案',
    status: '已交付',
    timeline: '14 個月 (2022.03 - 2023.05)',
    role: '首席政府專案經理',
    responsibilities: [
      '領導 22 人跨功能團隊（產品經理、系統架構師、UX 設計師、資安工程師、法務顧問）',
      '對接 12 個市府局處，釐清複雜業務流程與跨機關權責切分',
      '制定專案範疇基線、WBS 工作分解結構與嚴格的變更控制流程',
      '監督資安稽核、無障礙網頁設計規範與個資保護法規遵循'
    ],
    keyResults: [
      '系統如期於預定里程碑上線，首季活躍市民達 120 萬人',
      '跨部門公文與資料調閱往返時間縮短 60%',
      '獲得國家級數位創新優等獎'
    ],
    deliverables: [
      '系統架構與 API 整合白皮書 (150頁)',
      '資安防護合規與滲透測試報告',
      '市民自助服務前端入口與後台管理儀表板'
    ],
    caseStudy: {
      problem: '各局處資料各自為政（資料孤島嚴重），市民申辦單一業務需登入多個不同系統，手續繁雜且滿意度低落。',
      analysis: '透過利害關係人訪談與流程痛點分析，發現核心瓶頸在於缺乏統一的身分驗證（SSO）與標準化的資料交換格式。',
      planning: '規劃分階段推進策略：第一階段建立中央 API 閘道器與單一登入；第二階段整合高頻次申辦服務；第三階段全面開放民間 API。',
      execution: '採用 Scrum 敏捷開發搭配雙週迭代，定期召開跨局處協調會解決法規與權責爭議，並設置即時測試環境供各單位驗收。',
      results: '成功打造單一窗口平台，服務滿意度躍升至 94%，大幅提升政府數位治理效率。'
    }
  },
  {
    id: 'p2',
    name: '企業級數據中台與異質系統整合',
    category: '資訊整合',
    status: '營運中',
    timeline: '9 個月 (2023.08 - 2024.05)',
    role: '資訊整合專案經理',
    responsibilities: [
      '規劃傳統製造業集團之供應鏈 (ERP) 與客戶關係 (CRM) 系統深度對接',
      '設計即時資料串流管線 (ETL/ELT) 與資料倉儲架構',
      '管理廠商招標、技術規格評估與驗收標準制定',
      '舉辦跨部門教育訓練，確保業務與營運團隊順利上手新工具'
    ],
    keyResults: [
      '消除 99% 歷史資料孤島，庫存周轉率提升 25%',
      '月結報表生成時間從 5 個工作天縮短至 2 小時',
      '專案預算控制在 95% 以內，無超出時程'
    ],
    deliverables: [
      '即時數據監控決策儀表板',
      '企業資料治理手冊與標準詞彙表',
      '自動化 ETL 管線程式碼與部署文檔'
    ],
    caseStudy: {
      problem: '企業內部各廠區使用獨立且版本分歧的舊版 ERP，總管理處無法即時掌握庫存與產能，決策嚴重滯後。',
      analysis: '進行現有系統架構盤點與資料流向審查，確認資料不一致的主因是缺乏統一的 Master Data Management (MDM)。',
      planning: '擬定「資料中台」架構藍圖，採用事件驅動架構 (Event-Driven Architecture) 即時同步各廠區異動。',
      execution: '分批進行資料清洗與欄位對應，建立自動化檢核機制攔截異常數據，並進行壓力測試以確保高併發時的穩定度。',
      results: '建立全集團一致的單一真實來源 (Single Source of Truth)，高層決策速度提升 3 倍。'
    }
  },
  {
    id: 'p3',
    name: 'AI 驅動之敏捷專案管理與需求助理',
    category: 'AI 協同',
    status: '進行中',
    timeline: '6 個月 (2025.01 - 2025.07)',
    role: 'AI 產品負責人 / PM',
    responsibilities: [
      '結合大型語言模型 (LLM) 與企業內部 Jira / Notion 工具鏈',
      '設計自動化需求解析、使用者故事 (User Story) 生成與風險預警模組',
      '進行提示詞工程 (Prompt Engineering) 優化與模型輸出準確度測試',
      '收集內部團隊反饋進行疊代優化，建立 AI 協作最佳實踐'
    ],
    keyResults: [
      '每週減少團隊 12 小時的手動會議紀錄與進度追蹤行政負擔',
      '需求規格書撰寫效率提升 3 倍，邏輯漏失率降低 40%',
      '團隊敏捷衝刺交付達成率從 82% 提升至 97%'
    ],
    deliverables: [
      'AI PM Copilot 內部工具套件',
      '企業 Prompt Engineering 知識庫與使用規範',
      '自動化測試與 ROI 效益評估報告'
    ],
    caseStudy: {
      problem: '專案經理花費大量時間在瑣碎的會議記錄、整理 Jira Ticket 與核對進度，壓縮了高價值策略規劃的時間。',
      analysis: '分析專案管理日常工時分佈，發現 40% 的時間消耗在重複性高的文件撰寫與狀態同步。',
      planning: '規劃開發專屬的 AI Agent 助理，串接語音轉文字與 LLM API，自動萃取會議重點並轉化為結構化待辦事項。',
      execution: '採用敏捷精益方法，先開發 MVP 版本供核心專案團隊試用，根據回饋快速調整輸出格式與權限控管。',
      results: '大幅釋放專案經理的策略思考時間，成為公司內部推動 AI 轉型的標竿案例。'
    }
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 's1',
    title: '專案管理 (Project Management)',
    description: '具備 PMP 等國際專案管理思維，擅長在不確定性中建立結構、掌控風險並引導團隊達成目標。',
    skills: [
      {
        name: '需求分析與規格定義 (Requirement Analysis)',
        level: '精通',
        description: '透過訪談、工作坊與使用者旅程圖，精準捕捉業務痛點並轉化為嚴謹的產品需求文件 (PRD)。',
        relatedProjects: ['智慧城市跨部會市民服務平台', '企業級數據中台與異質系統整合']
      },
      {
        name: '利害關係人溝通 (Stakeholder Communication)',
        level: '精通',
        description: '擅長在政府機關、高階長官與技術團隊之間建立高效溝通橋樑，化解歧見並達成共識。',
        relatedProjects: ['智慧城市跨部會市民服務平台']
      },
      {
        name: '時程與範疇管理 (Schedule & Scope Management)',
        level: '精通',
        description: '運用 WBS、Gantt Chart 與敏捷衝刺 (Sprint Planning)，嚴格控管範疇潛變 (Scope Creep)。',
        relatedProjects: ['智慧城市跨部會市民服務平台', '企業級數據中台與異質系統整合', 'AI 驅動之敏捷專案管理與需求助理']
      },
      {
        name: '風險控制與應變 (Risk Management)',
        level: '高級',
        description: '建立風險矩陣與預防性應變計畫，面對突發法規變更或技術瓶頸時能迅速調整方向。',
        relatedProjects: ['智慧城市跨部會市民服務平台']
      },
      {
        name: '專業文件編撰 (Documentation)',
        level: '專家',
        description: '深信「清楚的結構化思考等於高品質產出」，擅長撰寫架構白皮書、治理手冊與操作指南。',
        relatedProjects: ['智慧城市跨部會市民服務平台', '企業級數據中台與異質系統整合', 'AI 驅動之敏捷專案管理與需求助理']
      }
    ]
  },
  {
    id: 's2',
    title: '資訊整合 (Information Integration)',
    description: '從巨觀架構到微觀資料流，致力於打破資訊孤島，實現高效的系統互通與資料治理。',
    skills: [
      {
        name: '工作流與系統架構設計 (Workflow Design)',
        level: '精通',
        description: '設計符合企業營運邏輯的業務流程與系統互動架構，確保各模組低耦合、高內聚。',
        relatedProjects: ['企業級數據中台與異質系統整合', '智慧城市跨部會市民服務平台']
      },
      {
        name: '資料組織與治理 (Data Organization)',
        level: '高級',
        description: '規劃 Master Data Management、資料字典與資料品質稽核機制，確保數據真實一致。',
        relatedProjects: ['企業級數據中台與異質系統整合']
      },
      {
        name: '架構與資料流視覺化 (Visualization)',
        level: '精通',
        description: '擅長使用 UML、C4 Model 與流程圖將複雜架構具象化，讓非技術主管也能輕鬆理解。',
        relatedProjects: ['智慧城市跨部會市民服務平台', '企業級數據中台與異質系統整合']
      },
      {
        name: 'API 整合與資料交換 (API Integration)',
        level: '精通',
        description: '主導 RESTful API / GraphQL 規範制定、閘道器配置與第三方服務對接。',
        relatedProjects: ['智慧城市跨部會市民服務平台', '企業級數據中台與異質系統整合']
      }
    ]
  },
  {
    id: 's3',
    title: 'AI 協同與自動化 (AI & Automation)',
    description: '走在 AI 應用最前線，善用 LLM 與現代化自動化工具為團隊創造 10 倍生產力槓桿。',
    skills: [
      {
        name: '提示詞工程與 Agent 開發 (Prompt Engineering)',
        level: '精通',
        description: '熟練運用 Gemini、Claude 等先進模型進行結構化輸出、自動化摘要與程式碼輔助。',
        relatedProjects: ['AI 驅動之敏捷專案管理與需求助理']
      },
      {
        name: 'AI 辦公與工具鏈整合 (ChatGPT & Claude Enterprise)',
        level: '專家',
        description: '將 AI 深度嵌入日常專案管理工具鏈（Jira, Notion, Slack），實現無縫智能協作。',
        relatedProjects: ['AI 驅動之敏捷專案管理與需求助理']
      },
      {
        name: '工作流自動化 (Workflow Automation)',
        level: '高級',
        description: '利用 API 串接與自動化腳本打通各類軟體，消除手動重複性行政作業。',
        relatedProjects: ['AI 驅動之敏捷專案管理與需求助理']
      }
    ]
  }
];

export const SIDE_PROJECTS: SideProject[] = [
  {
    id: 'sp1',
    title: 'GovData Visualizer - 政府公開資料視覺化工具',
    subtitle: '將冷冰冰的政府開放資料轉化為直覺的決策圖表',
    description: '利用 D3.js 與 React 打造的輕量級視覺化儀表板，自動抓取政府開放資料 API，呈現公共工程預算執行率與區域發展指標。',
    architecture: ['React 19', 'Tailwind CSS', 'D3.js', 'Open Data API Proxy'],
    lessons: ['政府 API 格式多變，必須建立強健的資料清洗與防錯機制。', '視覺化圖表必須兼顧手機與大螢幕的響應式體驗。'],
    roadmap: ['加入 AI 自動生成政策洞察報告功能', '支援多縣市跨區交叉比對'],
    githubUrl: 'https://github.com/eric-pm-integration/gov-data-visualizer',
    demoUrl: 'https://github.com/eric-pm-integration/gov-data-visualizer'
  },
  {
    id: 'sp2',
    title: 'AgileSprint AI - 敏捷衝刺健康度檢測器',
    subtitle: '透過數據診斷團隊敏捷實踐中的潛在瓶頸',
    description: '專為軟體團隊設計的健康度評估工具，透過輸入 Sprint 歷史數據，自動分析交付速率變異、阻塞率與技術債佔比，並給出優化建議。',
    architecture: ['TypeScript', 'Express', 'Gemini API', 'Tailwind CSS'],
    lessons: ['量化指標必須搭配質化訪談，才能真正找出團隊問題根源。', 'AI 給出的建議需要有明確的步驟指引才具實用性。'],
    roadmap: ['串接 Jira Webhook 實現即時自動同步', '加入團隊情緒健康指數追蹤'],
    githubUrl: 'https://github.com/eric-pm-integration/agile-sprint-ai',
    demoUrl: 'https://github.com/eric-pm-integration/agile-sprint-ai'
  }
];

export const DASHBOARD_INITIAL_TASKS = [
  { id: 't1', title: '審閱智慧城市第二期 API 介面規格書', priority: '高', status: 'completed', due: '今天 14:00' },
  { id: 't2', title: '與跨部會召集人進行進度週報會議', priority: '高', status: 'pending', due: '今天 16:30' },
  { id: 't3', title: '更新 AI PM Copilot 提示詞測試結果', priority: '中', status: 'pending', due: '明天 10:00' },
  { id: 't4', title: '審查供應鏈數據中台資安合規報告', priority: '高', status: 'pending', due: '7月 15日' }
];

export const DASHBOARD_MEETINGS = [
  { title: '跨部會智慧城市專案對齊會', time: '今日 14:00 - 15:00', room: '線上視訊會議室 A', attendees: '12 人' },
  { title: 'AI 工作流自動化導入檢討', time: '今日 17:00 - 17:45', room: '會議室 3B', attendees: '5 人' },
  { title: '季度數位轉型策略規劃', time: '明日 10:00 - 11:30', room: '大型演講廳', attendees: '24 人' }
];

export const DASHBOARD_RISKS = [
  { item: '第三方 API 速率限制調整', level: '中', mitigation: '已建立快取機制與備援通道' },
  { item: '跨機關法規審查時程延宕', level: '高', mitigation: '提前 3 週提交預審並指派專人追蹤' },
  { item: '舊系統資料遷移相容性', level: '低', mitigation: '已完成 3 次完整沙盒模擬演練' }
];
