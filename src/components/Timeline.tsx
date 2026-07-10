import React, { useState } from 'react';
import { MILESTONES } from '../data';
import { GraduationCap, Briefcase, Building2, Network, Cpu, ChevronDown, ChevronUp, CheckCircle, Calendar } from 'lucide-react';
import { Milestone } from '../types';

export default function Timeline() {
  const [expandedId, setExpandedId] = useState<string | null>('m3'); // Default expand government projects

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap': return <GraduationCap className="w-5 h-5 text-[#4F7DF7]" />;
      case 'Briefcase': return <Briefcase className="w-5 h-5 text-[#4F7DF7]" />;
      case 'Building2': return <Building2 className="w-5 h-5 text-[#4F7DF7]" />;
      case 'Network': return <Network className="w-5 h-5 text-[#4F7DF7]" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-[#4F7DF7]" />;
      default: return <Briefcase className="w-5 h-5 text-[#4F7DF7]" />;
    }
  };

  return (
    <section id="timeline" className="py-24 bg-white border-y border-gray-200/80">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#4F7DF7] bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            Career Journey
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mt-4 mb-3">
            職涯時光軸與里程碑
          </h2>
          <p className="text-base text-gray-600">
            從學術研究、新創敏捷交付到國家級政府數位專案與 AI 工作流創新，點擊各階段檢視詳細經歷。
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-gray-200 ml-4 sm:ml-32 space-y-12">
          {MILESTONES.map((milestone) => {
            const isExpanded = expandedId === milestone.id;

            return (
              <div key={milestone.id} className="relative pl-8 sm:pl-10 group">
                
                {/* Timeline Dot */}
                <div 
                  onClick={() => setExpandedId(isExpanded ? null : milestone.id)}
                  className={`absolute -left-[17px] top-1.5 w-8 h-8 rounded-full border-2 bg-white flex items-center justify-center cursor-pointer transition-all shadow-xs ${
                    isExpanded 
                      ? 'border-[#4F7DF7] bg-blue-50 scale-110 shadow-md shadow-blue-500/20' 
                      : 'border-gray-300 group-hover:border-gray-400'
                  }`}
                >
                  {getIcon(milestone.iconName)}
                </div>

                {/* Period Badge on Desktop (Left of line) */}
                <div className="hidden sm:block absolute -left-36 top-2 text-xs font-bold text-gray-500 text-right w-24">
                  {milestone.period}
                </div>

                {/* Card Container */}
                <div 
                  onClick={() => setExpandedId(isExpanded ? null : milestone.id)}
                  className={`bg-[#F7F7F5] rounded-2xl border transition-all duration-300 p-6 cursor-pointer ${
                    isExpanded 
                      ? 'border-[#4F7DF7] bg-white shadow-lg shadow-blue-500/5 ring-1 ring-[#4F7DF7]/20' 
                      : 'border-gray-200 hover:border-gray-300 hover:bg-white'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <div>
                      <span className="sm:hidden inline-block text-xs font-bold text-[#4F7DF7] bg-blue-50 px-2 py-0.5 rounded mb-1">
                        {milestone.period}
                      </span>
                      <h3 className="text-lg font-bold text-gray-900 tracking-tight">
                        {milestone.title}
                      </h3>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-medium text-gray-500 bg-white sm:bg-transparent px-2.5 py-1 rounded-md border sm:border-0 border-gray-200">
                        {milestone.organization}
                      </span>
                      <span className="text-xs font-semibold text-gray-700 bg-gray-200/70 px-2.5 py-1 rounded-md">
                        {milestone.role}
                      </span>
                      <button className="text-gray-400 hover:text-gray-700">
                        {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    {milestone.description}
                  </p>

                  {/* Expanded Highlights */}
                  {isExpanded && (
                    <div className="mt-4 pt-4 border-t border-gray-100 animate-fadeIn">
                      <div className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">
                        核心成就與貢獻
                      </div>
                      <div className="grid grid-cols-1 gap-2.5">
                        {milestone.highlights.map((highlight, index) => (
                          <div key={index} className="flex items-start gap-2.5 text-xs text-gray-700 bg-[#F7F7F5] p-3 rounded-xl border border-gray-200/60">
                            <CheckCircle className="w-4 h-4 text-[#22C55E] shrink-0 mt-0.5" />
                            <span className="leading-relaxed font-medium">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {!isExpanded && (
                    <div className="text-xs font-medium text-[#4F7DF7] flex items-center gap-1 mt-2">
                      點擊展開詳細成就與指標 ➔
                    </div>
                  )}

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
