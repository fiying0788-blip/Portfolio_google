import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data';
import { CheckCircle2, ChevronDown, ChevronUp, Layers, Cpu, Network, ShieldCheck } from 'lucide-react';

export default function Skills() {
  const [activeCategoryId, setActiveCategoryId] = useState<string>('s1');
  const [expandedSkillName, setExpandedSkillName] = useState<string | null>('需求分析與規格定義 (Requirement Analysis)');

  const currentCategory = SKILL_CATEGORIES.find(c => c.id === activeCategoryId) || SKILL_CATEGORIES[0];

  return (
    <section id="skills" className="py-24 bg-white border-y border-gray-200/80">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#4F7DF7] bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            Expertise & Skill Tree
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mt-4 mb-3">
            核心技能樹與實戰應用
          </h2>
          <p className="text-base text-gray-600">
            跳脫傳統量化進度條，以結構化技能樹呈現跨領域專業能力，並可直接對應至相關實戰專案。
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {SKILL_CATEGORIES.map((cat) => {
            const isActive = cat.id === activeCategoryId;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategoryId(cat.id);
                  setExpandedSkillName(cat.skills[0]?.name || null);
                }}
                className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 ${
                  isActive
                    ? 'bg-gray-900 text-white shadow-md'
                    : 'bg-[#F7F7F5] text-gray-700 hover:bg-gray-200/70 border border-gray-200'
                }`}
              >
                {cat.id === 's1' && <Layers className="w-4 h-4 text-[#4F7DF7]" />}
                {cat.id === 's2' && <Network className="w-4 h-4 text-[#4F7DF7]" />}
                {cat.id === 's3' && <Cpu className="w-4 h-4 text-[#4F7DF7]" />}
                {cat.title}
              </button>
            );
          })}
        </div>

        {/* Skill Tree Container */}
        <div className="bg-[#F7F7F5] rounded-3xl border border-gray-200 p-6 sm:p-10 max-w-4xl mx-auto shadow-sm">
          
          <div className="mb-8 pb-6 border-b border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-2">{currentCategory.title}</h3>
            <p className="text-sm text-gray-600">{currentCategory.description}</p>
          </div>

          <div className="space-y-4">
            {currentCategory.skills.map((skill) => {
              const isExpanded = expandedSkillName === skill.name;

              return (
                <div
                  key={skill.name}
                  className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isExpanded ? 'border-[#4F7DF7] shadow-md ring-1 ring-[#4F7DF7]/20' : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  {/* Skill Header */}
                  <div
                    onClick={() => setExpandedSkillName(isExpanded ? null : skill.name)}
                    className="p-5 flex items-center justify-between cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs ${
                        isExpanded ? 'bg-blue-50 text-[#4F7DF7]' : 'bg-gray-100 text-gray-600'
                      }`}>
                        ✓
                      </div>
                      <div>
                        <div className="text-sm font-bold text-gray-900">{skill.name}</div>
                        <div className="text-xs text-gray-500 font-medium">{skill.level}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="hidden sm:inline-block text-xs font-semibold px-2.5 py-1 bg-gray-100 rounded-md text-gray-600">
                        {skill.relatedProjects.length} 個對應專案
                      </span>
                      {isExpanded ? <ChevronUp className="w-4 h-4 text-gray-500" /> : <ChevronDown className="w-4 h-4 text-gray-500" />}
                    </div>
                  </div>

                  {/* Expanded Content: Description & Related Projects */}
                  {isExpanded && (
                    <div className="px-5 pb-5 pt-0 border-t border-gray-100 bg-gray-50/50">
                      <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mb-4 pt-4">
                        {skill.description}
                      </p>

                      <div className="text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-2">
                        實際應用此技能的專案：
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {skill.relatedProjects.map((proj, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white text-gray-800 border border-gray-200 shadow-2xs"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#4F7DF7]"></span>
                            {proj}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
