import React from 'react';
import { FolderGit2, Building2, Users, Presentation, FileText } from 'lucide-react';

export default function Achievements() {
  const stats = [
    {
      icon: <FolderGit2 className="w-5 h-5 text-[#4F7DF7]" />,
      value: '32+',
      label: '成功交付專案',
      description: '涵蓋 SaaS 產品、數據中台與企業系統'
    },
    {
      icon: <Building2 className="w-5 h-5 text-[#4F7DF7]" />,
      value: '15+',
      label: '政府數位專案',
      description: '跨部會協調與智慧城市市民平台'
    },
    {
      icon: <Users className="w-5 h-5 text-[#4F7DF7]" />,
      value: '450+',
      label: '協調會議主持',
      description: '高效引導跨功能團隊與高階長官共識'
    },
    {
      icon: <Presentation className="w-5 h-5 text-[#4F7DF7]" />,
      value: '120+',
      label: '專業策略簡報',
      description: '向董事會與政府首腦進行專案提案'
    },
    {
      icon: <FileText className="w-5 h-5 text-[#4F7DF7]" />,
      value: '80萬+',
      label: '專業文件編撰',
      description: 'PRD、架構白皮書與合規治理手冊字數'
    }
  ];

  return (
    <section className="py-20 bg-white border-y border-gray-200/80">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#4F7DF7] bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            Key Metrics & Achievements
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mt-4 mb-3">
            量化成就與交付實績
          </h2>
          <p className="text-base text-gray-600">
            以數據說話，累積多年來在專案管理、跨部門協調與政府數位轉型中的扎實成果。
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-[#F7F7F5] rounded-2xl border border-gray-200/80 p-6 flex flex-col justify-between hover:border-[#4F7DF7] transition-all hover:shadow-md group"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 shadow-2xs flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 tracking-tight mb-1 font-mono">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-gray-800 mb-2">
                  {stat.label}
                </div>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed pt-3 border-t border-gray-200/60">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
