import React from 'react';
import { X, Download, Printer, CheckCircle, Mail, MapPin, Briefcase, GraduationCap } from 'lucide-react';

export default function ResumeModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;

  const handleDownload = () => {
    // Generate text file or trigger download
    const resumeText = `
Eric Chang - Senior Project Manager & Information Integration Specialist
Email: eric.pm.integration@gmail.com
Location: Taipei, Taiwan

[Expertise]
- Project Management (PMP mindset, Requirement Analysis, Stakeholder Communication, Agile/Scrum)
- Information Integration (Workflow Design, Data Organization, API Gateway, Microservices Architecture)
- Government Digital Systems (Cross-departmental digital governance, Citizen service portal)
- AI Productivity (Prompt Engineering, LLM workflow automation, PM Copilot)

[Work Experience]
1. Senior PM / Information Integration Specialist (2023 - Present)
2. Chief Government Digital Project Manager (2021 - 2023)
3. Senior Project Manager - SaaS (2018 - 2021)
4. Graduate Researcher - Information Management (2016 - 2018)

[Key Achievements]
- 32+ Projects successfully delivered
- 15+ Government digital projects
- 98% On-time delivery rate
`;
    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Eric_Chang_Resume_PM.txt';
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-10 relative shadow-2xl">
        
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-8 border-b border-gray-200 pb-6 pr-12">
          <div className="flex items-center gap-3 mb-2">
            <h2 className="text-2xl font-bold text-gray-950">Eric Chang</h2>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-[#4F7DF7] border border-blue-200">
              Senior PM & Integration Specialist
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-xs text-gray-600">
            <span className="flex items-center gap-1"><Mail className="w-3.5 h-3.5" /> eric.pm.integration@gmail.com</span>
            <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> 台灣，台北</span>
          </div>
        </div>

        {/* Content sections */}
        <div className="space-y-6 text-xs sm:text-sm text-gray-700">
          <div>
            <h3 className="font-bold text-gray-900 text-sm uppercase tracking-wider mb-2 text-[#4F7DF7]">專業摘要</h3>
            <p className="leading-relaxed text-gray-600">
              具備超過 8 年大型專案管理與資訊整合實戰經驗。專精於政府數位轉型、跨機關資料互通與 AI 輔助工作流優化。擅長將複雜模糊的業務需求轉化為清晰結構與可執行的系統藍圖。
            </p>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 text-sm uppercase tracking-wider mb-3 text-[#4F7DF7]">核心專長</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              <span className="bg-[#F7F7F5] p-2.5 rounded-xl border border-gray-200 font-medium">需求分析與規格定義</span>
              <span className="bg-[#F7F7F5] p-2.5 rounded-xl border border-gray-200 font-medium">利害關係人溝通</span>
              <span className="bg-[#F7F7F5] p-2.5 rounded-xl border border-gray-200 font-medium">資訊系統架構整合</span>
              <span className="bg-[#F7F7F5] p-2.5 rounded-xl border border-gray-200 font-medium">政府數位專案治理</span>
              <span className="bg-[#F7F7F5] p-2.5 rounded-xl border border-gray-200 font-medium">AI 提示詞與自動化</span>
              <span className="bg-[#F7F7F5] p-2.5 rounded-xl border border-gray-200 font-medium">敏捷開發與 Scrum</span>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 text-sm uppercase tracking-wider mb-3 text-[#4F7DF7]">重要經歷</h3>
            <div className="space-y-3">
              <div className="bg-[#F7F7F5] p-4 rounded-xl border border-gray-200">
                <div className="flex justify-between font-bold text-gray-900 mb-1">
                  <span>資深資訊整合架構經理 / 首席 PM</span>
                  <span className="text-gray-500 font-normal">2021 - Present</span>
                </div>
                <p className="text-gray-600 text-xs">主導國家級智慧城市平台、企業數據中台與 AI PM Copilot 研發，成功打通跨部會資料孤島。</p>
              </div>

              <div className="bg-[#F7F7F5] p-4 rounded-xl border border-gray-200">
                <div className="flex justify-between font-bold text-gray-900 mb-1">
                  <span>資深專案經理 (Senior PM)</span>
                  <span className="text-gray-500 font-normal">2018 - 2021</span>
                </div>
                <p className="text-gray-600 text-xs">負責多款 SaaS 產品從 0 到 1 交付，導入 Scrum 敏捷框架縮短 30% 產品週期。</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="mt-8 pt-6 border-t border-gray-200 flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs text-gray-500">
            檔案格式：純文字 / 結構化履歷 (TXT / Print Ready)
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-[#4F7DF7] text-white hover:bg-[#3B6EF2] transition-all cursor-pointer"
            >
              <Download className="w-4 h-4" />
              下載履歷文字檔
            </button>
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-gray-900 text-white hover:bg-gray-800 transition-all cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              列印 / 存成 PDF
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
