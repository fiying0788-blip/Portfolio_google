import React, { useState } from 'react';
import { SIDE_PROJECTS } from '../data';
import { SideProject } from '../types';
import { ExternalLink, Github, Code, BookOpen, MapPin, X } from 'lucide-react';

export default function SideProjects() {
  const [activeProject, setActiveProject] = useState<SideProject | null>(null);

  return (
    <section id="sideprojects" className="py-24 bg-[#F7F7F5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#4F7DF7] bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            Experiments & Side Projects
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mt-4 mb-3">
            實驗性專案與開源貢獻
          </h2>
          <p className="text-base text-gray-600">
            探索 AI 代理、前端視覺化與敏捷自動化工具的實驗成果。
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {SIDE_PROJECTS.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl border border-gray-200/80 p-7 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold text-[#4F7DF7] bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200">
                    Open Source
                  </span>
                  <div className="flex items-center gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
                      title="GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-gray-900 text-white hover:bg-[#4F7DF7] transition-colors"
                        title="Live Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 tracking-tight mb-2">
                  {project.title}
                </h3>
                <p className="text-xs font-semibold text-gray-500 mb-4">
                  {project.subtitle}
                </p>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              <div>
                {/* Tech Stack Chips */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.architecture.map((tech, idx) => (
                    <span key={idx} className="text-[11px] font-medium bg-[#F7F7F5] px-2.5 py-1 rounded-md border border-gray-200 text-gray-700">
                      {tech}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setActiveProject(project)}
                  className="w-full py-2.5 rounded-xl text-xs font-semibold bg-gray-900 text-white hover:bg-[#4F7DF7] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <BookOpen className="w-4 h-4" />
                  檢視架構與學習心得
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Details */}
        {activeProject && (
          <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto shadow-2xl">
              
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200"
              >
                <X className="w-5 h-5" />
              </button>

              <h3 className="text-2xl font-bold text-gray-900 mb-2">{activeProject.title}</h3>
              <p className="text-xs text-gray-500 font-semibold mb-6">{activeProject.subtitle}</p>

              {/* Architecture */}
              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2 flex items-center gap-2">
                  <Code className="w-4 h-4 text-[#4F7DF7]" />
                  系統架構與技術棧
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeProject.architecture.map((t, i) => (
                    <span key={i} className="px-3 py-1 bg-blue-50 text-[#4F7DF7] rounded-lg text-xs font-medium border border-blue-200">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Lessons Learned */}
              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                  開發心得與實戰收穫 (Lessons Learned)
                </h4>
                <ul className="space-y-2">
                  {activeProject.lessons.map((lesson, i) => (
                    <li key={i} className="text-xs text-gray-700 bg-[#F7F7F5] p-3 rounded-xl border border-gray-200">
                      • {lesson}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Roadmap */}
              <div className="mb-8">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                  未來發展藍圖 (Future Roadmap)
                </h4>
                <ul className="space-y-2">
                  {activeProject.roadmap.map((rm, i) => (
                    <li key={i} className="text-xs text-gray-700 bg-gray-50 p-3 rounded-xl border border-gray-200 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#4F7DF7]"></span>
                      {rm}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-gray-200">
                <a
                  href={activeProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl text-xs font-medium bg-gray-900 text-white hover:bg-[#4F7DF7] transition-all inline-flex items-center gap-2"
                >
                  <Github className="w-4 h-4" />
                  GitHub 原始碼
                </a>
                <button
                  onClick={() => setActiveProject(null)}
                  className="px-4 py-2 rounded-xl text-xs font-medium bg-gray-100 text-gray-700 hover:bg-gray-200"
                >
                  關閉
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
