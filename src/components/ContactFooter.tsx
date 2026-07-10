import React from 'react';
import { Mail, Linkedin, Github, Download, ArrowUpRight } from 'lucide-react';

export default function ContactFooter({ onOpenResume }: { onOpenResume: () => void }) {
  return (
    <footer id="contact" className="bg-[#1F2937] text-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-gray-800">
          
          <div className="lg:col-span-7">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-400 bg-blue-950 px-3 py-1 rounded-full border border-blue-800">
              Get in Touch
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mt-6 mb-6">
              讓我們一起打造偉大的系統。
            </h2>
            <p className="text-gray-400 text-base max-w-xl leading-relaxed mb-8">
              無論是大型政府數位專案、複雜資訊系統整合，或導入 AI 工作流自動化顧問諮詢，歡迎與 Eric 聯繫交流。
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:eric.pm.integration@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-medium bg-[#4F7DF7] text-white hover:bg-[#3B6EF2] transition-all shadow-md"
              >
                <Mail className="w-4 h-4" />
                寄送 Email 聯繫
              </a>
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-medium bg-gray-800 text-white hover:bg-gray-700 transition-all border border-gray-700 cursor-pointer"
              >
                <Download className="w-4 h-4 text-gray-400" />
                下載完整履歷
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-gray-400">
                社群與專業連結
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-xl bg-gray-800/80 hover:bg-gray-800 border border-gray-700/80 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <Linkedin className="w-5 h-5 text-blue-400" />
                    <span className="text-sm font-medium text-white">LinkedIn</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" />
                </a>

                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-xl bg-gray-800/80 hover:bg-gray-800 border border-gray-700/80 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <Github className="w-5 h-5 text-gray-300" />
                    <span className="text-sm font-medium text-white">GitHub</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-800/60 text-xs text-gray-500">
              📍 台灣，台北 (Taipei, Taiwan) | 支援遠距與實體顧問合作
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div>
            © {new Date().getFullYear()} Eric Chang. All rights reserved. Designed for Excellence & Information Integration.
          </div>
          <div className="flex items-center gap-6">
            <a href="#hero" className="hover:text-gray-300 transition-colors">返回頂部 ↗</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
