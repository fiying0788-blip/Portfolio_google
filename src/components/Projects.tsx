import React, { useState } from 'react';
import { PROJECTS } from '../data';
import { Project } from '../types';
import { FolderGit2, CheckCircle, Clock, Award, FileText, ArrowRight, Layers, ChevronRight, X, Cpu } from 'lucide-react';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case '已交付': return 'bg-green-50 text-green-700 border-green-200';
      case '營運中': return 'bg-blue-50 text-blue-700 border-blue-200';
      case '進行中': return 'bg-amber-50 text-amber-700 border-amber-200';
      default: return 'bg-gray-50 text-gray-700 border-gray-200';
    }
  };

  return (
    <section id="projects" className="py-24 bg-[#F7F7F5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#4F7DF7] bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              Featured Projects
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mt-4 mb-2">
              精選專案與深度個案研究
            </h2>
            <p className="text-base text-gray-600 max-w-xl">
              仿 Notion / Linear 資料庫風格呈現。點擊專案卡片可檢視完整的五階段個案研究與流程圖。
            </p>
          </div>
          <div className="text-xs font-semibold text-gray-500 bg-white px-4 py-2 rounded-xl border border-gray-200 shadow-2xs">
            總共展示 3 項核心代表作
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="bg-white rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-xl hover:border-[#4F7DF7]/50 transition-all duration-300 p-7 flex flex-col justify-between cursor-pointer group"
            >
              <div>
                {/* Category & Status */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2.5 py-1 rounded-md">
                    {project.category}
                  </span>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border ${getStatusBadge(project.status)}`}>
                    {project.status}
                  </span>
                </div>

                {/* Name */}
                <h3 className="text-xl font-bold text-gray-900 tracking-tight group-hover:text-[#4F7DF7] transition-colors mb-3">
                  {project.name}
                </h3>

                {/* Role & Timeline */}
                <div className="space-y-1.5 mb-5 text-xs text-gray-600">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-gray-800">角色：</span> {project.role}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-gray-400" />
                    <span>{project.timeline}</span>
                  </div>
                </div>

                {/* Key Results Preview */}
                <div className="bg-[#F7F7F5] rounded-xl p-4 mb-6 border border-gray-200/60">
                  <div className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider mb-2">
                    關鍵指標亮點
                  </div>
                  <ul className="space-y-1.5 text-xs text-gray-700 font-medium">
                    {project.keyResults.slice(0, 2).map((res, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-[#22C55E] shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{res}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action */}
              <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-[#4F7DF7] group-hover:translate-x-1 transition-transform">
                <span>檢視詳細個案研究 (Case Study)</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Case Study Details */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-200 p-6 sm:p-10 relative animate-fadeIn">
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="mb-8 pr-12">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="text-xs font-semibold px-3 py-1 rounded bg-blue-50 text-[#4F7DF7] border border-blue-200">
                    {selectedProject.category}
                  </span>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${getStatusBadge(selectedProject.status)}`}>
                    {selectedProject.status}
                  </span>
                  <span className="text-xs text-gray-500 font-medium">{selectedProject.timeline}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
                  {selectedProject.name}
                </h2>
                <div className="text-sm font-medium text-gray-600 mt-1">
                  擔任角色：<span className="text-gray-900 font-semibold">{selectedProject.role}</span>
                </div>
              </div>

              {/* Responsibilities & Deliverables Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div className="bg-[#F7F7F5] p-5 rounded-2xl border border-gray-200/80">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3 flex items-center gap-2">
                    <Layers className="w-4 h-4 text-[#4F7DF7]" />
                    核心職責與領導範疇
                  </h4>
                  <ul className="space-y-2 text-xs text-gray-700">
                    {selectedProject.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#4F7DF7] font-bold">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-[#F7F7F5] p-5 rounded-2xl border border-gray-200/80">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-[#4F7DF7]" />
                    主要交付物與產出
                  </h4>
                  <ul className="space-y-2 text-xs text-gray-700">
                    {selectedProject.deliverables.map((del, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-[#22C55E] shrink-0 mt-0.5" />
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Case Study Visual Flow (Problem -> Analysis -> Planning -> Execution -> Results) */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Award className="w-5 h-5 text-[#4F7DF7]" />
                  專案個案研究：五階段視覺化流程
                </h3>

                <div className="space-y-4">
                  
                  {/* Step 1: Problem */}
                  <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-2xs">
                    <div className="flex items-center gap-2 text-xs font-bold text-red-600 mb-2">
                      <span className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center">1</span>
                      問題定義 (Problem)
                    </div>
                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed pl-8">
                      {selectedProject.caseStudy.problem}
                    </p>
                  </div>

                  <div className="flex justify-center my-1 text-gray-400">↓</div>

                  {/* Step 2: Analysis */}
                  <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-2xs">
                    <div className="flex items-center gap-2 text-xs font-bold text-amber-600 mb-2">
                      <span className="w-6 h-6 rounded-full bg-amber-50 flex items-center justify-center">2</span>
                      系統分析 (Analysis)
                    </div>
                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed pl-8">
                      {selectedProject.caseStudy.analysis}
                    </p>
                  </div>

                  <div className="flex justify-center my-1 text-gray-400">↓</div>

                  {/* Step 3: Planning */}
                  <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-2xs">
                    <div className="flex items-center gap-2 text-xs font-bold text-blue-600 mb-2">
                      <span className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center">3</span>
                      藍圖規劃 (Planning)
                    </div>
                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed pl-8">
                      {selectedProject.caseStudy.planning}
                    </p>
                  </div>

                  <div className="flex justify-center my-1 text-gray-400">↓</div>

                  {/* Step 4: Execution */}
                  <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-2xs">
                    <div className="flex items-center gap-2 text-xs font-bold text-indigo-600 mb-2">
                      <span className="w-6 h-6 rounded-full bg-indigo-50 flex items-center justify-center">4</span>
                      執行交付 (Execution)
                    </div>
                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed pl-8">
                      {selectedProject.caseStudy.execution}
                    </p>
                  </div>

                  <div className="flex justify-center my-1 text-gray-400">↓</div>

                  {/* Step 5: Results */}
                  <div className="bg-green-50/50 border border-green-200 rounded-2xl p-5 shadow-2xs">
                    <div className="flex items-center gap-2 text-xs font-bold text-green-700 mb-2">
                      <span className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">5</span>
                      成果與商業價值 (Results)
                    </div>
                    <p className="text-xs sm:text-sm text-gray-800 font-medium leading-relaxed pl-8">
                      {selectedProject.caseStudy.results}
                    </p>
                  </div>

                </div>
              </div>

              {/* Modal Footer */}
              <div className="flex justify-end pt-6 border-t border-gray-200">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-6 py-2.5 rounded-xl text-xs font-medium bg-gray-900 text-white hover:bg-[#4F7DF7] transition-all"
                >
                  關閉個案研究
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
