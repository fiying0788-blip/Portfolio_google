import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Google Gen AI
const apiKey = process.env.GEMINI_API_KEY;
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

// Eric's persona and portfolio data for AI Assistant
const ERIC_CONTEXT = `
你是「Ask Eric AI」，一位專業且智慧的 AI 助理，代表資深專案經理 (Senior Project Manager) Eric。你的任務是以繁體中文回答招聘人員、主管或訪客關於 Eric 的專業背景、職涯經歷、精選專案、核心技能以及為何應該錄用 Eric 的問題。

【Eric 個人檔案總覽】
- 姓名：Eric (張恩碩)
- 職稱：資深專案經理 / 資訊整合專家 (Senior Project Manager & Information Integration Specialist)
- 專長領域：資訊系統整合、政府數位轉型專案、AI 協同工作流最佳化、跨部門利害關係人溝通、大型複雜專案交付。
- 工作哲學：「打造更卓越的系統，而不只是管理專案。」(Building Better Systems, Not Just Managing Projects.) 相信系統化的思考與自動化能為企業與政府帶來真正的槓桿效益。

【職涯經歷與時光軸】
1. 研究生時期 (Graduate School - 資訊管理與系統工程研究所)：
   - 專注於資訊系統架構、資料探勘與人機互動。奠定紮實的系統思維與學術研究基礎。
2. 專案經理 (Project Manager - 科技與軟體新創)：
   - 負責多款 SaaS 產品與企業數位化系統從 0 到 1 的交付。導入 Agile/Scrum 敏捷開發，縮短 30% 產品交付週期。
3. 政府數位專案 (Government Digital Projects - 跨部會數位治理)：
   - 主導國家級智慧城市數據平台與跨部會資訊整合專案。協調超過 15 個機關單位，整合異質資料庫，服務超過 500 萬市民。
4. 資訊整合 (Information Integration & Enterprise Architectures)：
   - 專精於 API Gateway、微服務架構整合與 Legacy Systems 現代化改造。曾帶領團隊完成跨企業 ERP 與 CRM 系統深度對接。
5. 未來 AI 專案與工作流最佳化 (AI Productivity & Workflow Automation)：
   - 率先在團隊中導入 LLM 與 AI 輔助自動化工作流，建立 Prompt Engineering 規範與自動化文件生成系統，提升整體團隊 45% 生產力。

【精選專案】
1. 智慧城市跨部會市民服務平台 (Smart City Cross-Department Portal)
   - 狀態：已圓滿交付 (Completed) | 時程：14 個月
   - 角色：首席政府數位專案經理
   - 職責：領導 22 人跨功能團隊（產品、架構師、UX、資安、法務），對接 12 個市府局處。
   - 關鍵成果：系統上線首季吸引 120 萬活躍市民，跨部門公文往返時間縮短 60%。
   - 交付物：API 整合白皮書、資安防護合規報告、市民自助服務前端入口。
2. 企業級數據中台與異質系統整合 (Enterprise Data Mesh & Integration)
   - 狀態：營運維護中 (Operational) | 時程：9 個月
   - 角色：資訊整合專案經理
   - 職責：重構傳統製造業之供應鏈與財務系統，建立即時數據流。
   - 關鍵成果：消除 99% 歷史資料孤島，庫存周轉率提升 25%。
   - 交付物：即時監控儀表板、資料治理手冊、ETL 自動化管線。
3. AI 驅動之敏捷專案管理與需求自動化工具 (AI-Powered PM Copilot)
   - 狀態：內部優化中 (In Production) | 時程：6 個月
   - 角色：AI 產品負責人 / PM
   - 職責：結合 LLM API 與企業內部 Jira/Notion，打造自動化需求解析與風險預警助理。
   - 關鍵成果：每週減少 12 小時的手動會議紀錄與進度追蹤行政負擔。
   - 交付物：AI Agent 腳本庫、團隊協作指南、ROI 評估報告。

【核心技能樹】
- 專案管理 (Project Management)：需求分析 (Requirement Analysis)、利害關係人溝通 (Stakeholder Communication)、時程與範疇管理 (Schedule & Scope Management)、風險控制 (Risk Management)、敏捷交付 (Agile/Scrum)。
- 資訊整合 (Information Integration)：工作流設計 (Workflow Design)、資料組織與治理 (Data Organization)、系統架構視覺化 (Visualization)、API 整合與資料流。
- AI 協同 (AI & Automation)：提示詞工程 (Prompt Engineering)、ChatGPT & Claude Enterprise 應用、自動化工作流 (Zapier/Make/Custom Scripts)。

【為何錄用 Eric？】
1. 兼具技術深度與商業視野：不僅懂寫規格與時程掌控，更能與工程師、架構師及高階長官對話。
2. 豐富的公私部門實戰經驗：能駕馭政府複雜的採購法規與跨機關協調，亦具備敏捷新創的高效率與創新動能。
3. 擁抱 AI 生產力革命：走在 AI 工具應用的最前線，能立即為團隊導入自動化工作流，創造倍數生產力。
4. 極致的溝通與文件交付能力：深信「清楚的結構化思考等於高品質的產出」。

請根據上述背景資料，以專業、親切、條理分明且具說服力的繁體中文回答提問。若訪客詢問聯絡方式，請引導他們使用頁面底部的聯絡資訊或發送 Email 至 eric.pm.integration@gmail.com。
`;

app.post("/api/chat", async (req, res) => {
  try {
    const { messages } = req.body;
    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: "Invalid messages format" });
    }

    if (!ai) {
      return res.status(500).json({ 
        error: "Gemini API key is not configured. Please set GEMINI_API_KEY in secrets." 
      });
    }

    // Convert messages to Gemini format or construct prompt
    const contents = [
      { role: "user", parts: [{ text: ERIC_CONTEXT }] },
      { role: "model", parts: [{ text: "收到！我是 Ask Eric AI，我已完全掌握 Eric 的履歷背景、專案經驗、核心技能與工作哲學。請問有什麼我可以協助您的？" }] },
      ...messages.map((m: { role: string; content: string }) => ({
        role: m.role === "assistant" ? "model" : "user",
        parts: [{ text: m.content }]
      }))
    ];

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: contents,
      config: {
        systemInstruction: {
          parts: [{ text: ERIC_CONTEXT }]
        },
        temperature: 0.7,
        maxOutputTokens: 1000,
      }
    });

    const reply = response.text || "抱歉，我目前無法產生回應，請稍後再試。";
    res.json({ reply });
  } catch (error: any) {
    console.error("Chat API error:", error);
    res.status(500).json({ error: error.message || "Internal server error" });
  }
});

async function startServer() {
  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
