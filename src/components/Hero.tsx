import React from 'react';
import { ArrowRight, Download, CheckCircle2, Activity, ShieldCheck, Zap, Server, Users, GitBranch } from 'lucide-react';

export default function Hero({ onOpenResume }: { onOpenResume: () => void }) {
  return (
    <section id="hero" className="pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Intro */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-gray-200/80 shadow-xs mb-6">
              <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse"></span>
              <span className="text-xs font-medium text-gray-700">目前可接受高階顧問與專案管理委託</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-[1.15] mb-6">
              嗨，我是 Eric。<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F7DF7] to-indigo-600">
                打造更卓越的系統，而不只是管理專案。
              </span>
            </h1>

            {/* Intro paragraph */}
            <p className="text-lg sm:text-xl text-gray-600 font-normal leading-relaxed mb-8 max-w-2xl">
              資深專案經理與資訊整合專家。專精於<strong className="text-gray-900 font-semibold">政府數位專案</strong>、<strong className="text-gray-900 font-semibold">大型系統互聯</strong>及<strong className="text-gray-900 font-semibold">AI 工作流自動化</strong>，為複雜業務創造清晰結構與極致槓桿效益。
            </p>

            {/* Expertise pills */}
            <div className="flex flex-wrap gap-2.5 mb-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-white border border-gray-200 text-gray-700 shadow-2xs">
                <Users className="w-3.5 h-3.5 text-[#4F7DF7]" />
                Project Management
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-white border border-gray-200 text-gray-700 shadow-2xs">
                <Server className="w-3.5 h-3.5 text-[#4F7DF7]" />
                Information Integration
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-white border border-gray-200 text-gray-700 shadow-2xs">
                <ShieldCheck className="w-3.5 h-3.5 text-[#4F7DF7]" />
                Government Digital Systems
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-white border border-gray-200 text-gray-700 shadow-2xs">
                <Zap className="w-3.5 h-3.5 text-[#4F7DF7]" />
                AI Productivity
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-medium bg-[#4F7DF7] text-white hover:bg-[#3B6EF2] transition-all shadow-md shadow-blue-500/15 cursor-pointer"
              >
                探索我的專案
                <ArrowRight className="w-4 h-4" />
              </a>
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-medium bg-white border border-gray-200 text-gray-800 hover:bg-gray-50 transition-all shadow-xs cursor-pointer"
              >
                <Download className="w-4 h-4 text-gray-500" />
                下載履歷
              </button>
            </div>

            {/* Quick stats inline */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-200/80 w-full max-w-lg">
              <div>
                <div className="text-2xl font-bold text-gray-900 tracking-tight">32+</div>
                <div className="text-xs text-gray-500 font-medium mt-0.5">成功交付專案</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900 tracking-tight">15+</div>
                <div className="text-xs text-gray-500 font-medium mt-0.5">政府數位專案</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900 tracking-tight">98%</div>
                <div className="text-xs text-gray-500 font-medium mt-0.5">準時交付達成率</div>
              </div>
            </div>

          </div>

          {/* Right Column: Floating PM Dashboard */}
          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-3xl blur-xl opacity-75"></div>
            
            <div className="relative bg-white rounded-2xl border border-gray-200 shadow-xl p-6 sm:p-7 backdrop-blur-sm">
              
              {/* Dashboard Header */}
              <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-5">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#4F7DF7] flex items-center justify-center font-bold text-xs">
                    PM
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-gray-900">Eric PM Workspace</div>
                    <div className="text-[10px] text-gray-500">Live Sprint & Integration Status</div>
                  </div>
                </div>
                <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold bg-green-50 text-green-700 border border-green-200">
                  ● 系統正常運作
                </span>
              </div>

              {/* Card 1: Active Sprint Progress */}
              <div className="bg-[#F7F7F5] rounded-xl p-4 mb-4 border border-gray-200/60">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-gray-800">智慧城市平台 - 階段三交付</span>
                  <span className="text-xs font-bold text-[#4F7DF7]">85%</span>
                </div>
                <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden mb-2.5">
                  <div className="bg-[#4F7DF7] h-full rounded-full transition-all duration-1000" style={{ width: '85%' }}></div>
                </div>
                <div className="flex items-center justify-between text-[11px] text-gray-500">
                  <span>剩餘 4 天</span>
                  <span>18/22 任務已驗收</span>
                </div>
              </div>

              {/* Card 2: AI Copilot Status */}
              <div className="bg-white rounded-xl p-4 mb-4 border border-gray-200 shadow-2xs flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-gray-900">AI PM Copilot 運行中</div>
                    <div className="text-[11px] text-gray-500">自動生成需求規格與會議摘要</div>
                  </div>
                </div>
                <span className="px-2 py-1 bg-indigo-50 text-indigo-700 text-[10px] font-medium rounded-md">
                  Active
                </span>
              </div>

              {/* Card 3: Integration Matrix */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-gray-50 p-3 rounded-lg border border-gray-200/60">
                  <div className="text-[10px] text-gray-500 mb-1">API 閘道器同步</div>
                  <div className="text-sm font-bold text-gray-900 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                    12 / 12 連線
                  </div>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg border border-gray-200/60">
                  <div className="text-[10px] text-gray-500 mb-1">跨部門利害關係</div>
                  <div className="text-sm font-bold text-gray-900 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#4F7DF7]"></span>
                    100% 達成共識
                  </div>
                </div>
              </div>

              {/* Recent Activity Quote */}
              <div className="text-[11px] text-gray-500 italic bg-blue-50/50 p-3 rounded-lg border border-blue-100 flex items-start gap-2">
                <span className="text-[#4F7DF7] font-bold">“</span>
                透過結構化分析與自動化工具，將複雜的政府數位專案化繁為簡，如期高質交付。
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
