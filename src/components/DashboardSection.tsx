import React, { useState } from 'react';
import { DASHBOARD_INITIAL_TASKS, DASHBOARD_MEETINGS, DASHBOARD_RISKS } from '../data';
import { CheckSquare, Square, Calendar as CalendarIcon, Clock, AlertTriangle, FileText, CheckCircle2, Plus, Sparkles } from 'lucide-react';

export default function DashboardSection() {
  const [tasks, setTasks] = useState(DASHBOARD_INITIAL_TASKS);
  const [newTaskText, setNewTaskText] = useState('');
  const [quickNotes, setQuickNotes] = useState(
    '1. 提醒：下午 2 點與跨部會召集人核對 API 規格。\n2. 檢視 AI PM Copilot 自動化摘要準確度。\n3. 準備下週專案進度週報簡報。'
  );

  const toggleTask = (id: string) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, status: t.status === 'completed' ? 'pending' : 'completed' } : t));
  };

  const addTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTaskText.trim()) return;
    setTasks([
      ...tasks,
      { id: Date.now().toString(), title: newTaskText.trim(), priority: '中', status: 'pending', due: '今天' }
    ]);
    setNewTaskText('');
  };

  return (
    <section id="dashboard" className="py-24 bg-[#F7F7F5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#4F7DF7] bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            PM Workspace & Dashboard
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mt-4 mb-3">
            互動式 PM 工作管理儀表板
          </h2>
          <p className="text-base text-gray-600">
            模擬高階專案經理日常使用的 SaaS 儀表板，包含今日待辦、專案進度、近期會議、風險控管與快速筆記。
          </p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Widget 1: Today's Tasks */}
          <div className="bg-white rounded-2xl border border-gray-200/80 p-6 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-bold text-gray-900 flex items-center gap-2">
                  <CheckSquare className="w-4 h-4 text-[#4F7DF7]" />
                  今日待辦事項 (Today's Tasks)
                </h3>
                <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
                  {tasks.filter(t => t.status === 'completed').length}/{tasks.length} 已完成
                </span>
              </div>

              <div className="space-y-2.5 mb-4 max-h-56 overflow-y-auto pr-1">
                {tasks.map(task => (
                  <div
                    key={task.id}
                    onClick={() => toggleTask(task.id)}
                    className={`flex items-start gap-2.5 p-3 rounded-xl border transition-all cursor-pointer ${
                      task.status === 'completed'
                        ? 'bg-gray-50 border-gray-200 text-gray-400 line-through'
                        : 'bg-white border-gray-200 text-gray-800 hover:border-[#4F7DF7]/50 shadow-2xs'
                    }`}
                  >
                    <span className="mt-0.5 shrink-0 text-[#4F7DF7]">
                      {task.status === 'completed' ? <CheckCircle2 className="w-4 h-4 text-green-600" /> : <Square className="w-4 h-4 text-gray-400" />}
                    </span>
                    <div className="flex-1 text-xs">
                      <div className="font-medium">{task.title}</div>
                      <div className="text-[10px] text-gray-400 mt-0.5 flex items-center gap-2">
                        <span>{task.due}</span>
                        <span className={`px-1.5 py-0.2 rounded font-semibold ${
                          task.priority === '高' ? 'bg-red-50 text-red-600' : 'bg-blue-50 text-blue-600'
                        }`}>
                          {task.priority}優先級
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Add Task Form */}
            <form onSubmit={addTask} className="flex gap-2 pt-3 border-t border-gray-100">
              <input
                type="text"
                value={newTaskText}
                onChange={(e) => setNewTaskText(e.target.value)}
                placeholder="新增今日待辦任務..."
                className="flex-1 bg-[#F7F7F5] border border-gray-200 rounded-lg px-3 py-1.5 text-xs text-gray-800 focus:outline-none focus:border-[#4F7DF7]"
              />
              <button
                type="submit"
                className="bg-gray-900 text-white px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-[#4F7DF7] transition-colors"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>

          {/* Widget 2: Project Progress Overview */}
          <div className="bg-white rounded-2xl border border-gray-200/80 p-6 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-bold text-gray-900 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#4F7DF7]" />
                  專案進度概覽 (Project Progress)
                </h3>
                <span className="text-xs text-gray-500 font-medium">Q3 衝刺中</span>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs font-semibold text-gray-800 mb-1.5">
                    <span>智慧城市市民服務平台</span>
                    <span className="text-[#4F7DF7]">85%</span>
                  </div>
                  <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                    <div className="bg-[#4F7DF7] h-full rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold text-gray-800 mb-1.5">
                    <span>企業級數據中台整合</span>
                    <span className="text-green-600">92%</span>
                  </div>
                  <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                    <div className="bg-[#22C55E] h-full rounded-full" style={{ width: '92%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold text-gray-800 mb-1.5">
                    <span>AI PM Copilot 自動化系統</span>
                    <span className="text-amber-600">60%</span>
                  </div>
                  <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                    <div className="bg-[#F59E0B] h-full rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100 text-[11px] text-gray-500 flex items-center justify-between">
              <span>整體專案健康指數</span>
              <span className="font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded border border-green-200">
                A+ 級優良
              </span>
            </div>
          </div>

          {/* Widget 3: Upcoming Meetings */}
          <div className="bg-white rounded-2xl border border-gray-200/80 p-6 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-bold text-gray-900 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#4F7DF7]" />
                  近期會議 (Upcoming Meetings)
                </h3>
                <span className="text-xs text-gray-500 font-medium">今日 3 場</span>
              </div>

              <div className="space-y-3">
                {DASHBOARD_MEETINGS.map((m, idx) => (
                  <div key={idx} className="bg-[#F7F7F5] p-3 rounded-xl border border-gray-200/60">
                    <div className="text-xs font-bold text-gray-900 mb-1">{m.title}</div>
                    <div className="flex items-center justify-between text-[11px] text-gray-500">
                      <span>{m.time}</span>
                      <span className="bg-blue-50 text-[#4F7DF7] px-2 py-0.5 rounded font-medium">{m.room}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-gray-100 text-center text-xs text-gray-500">
              已同步至 Google Calendar 企業日曆
            </div>
          </div>

          {/* Widget 4: Risk Overview */}
          <div className="bg-white rounded-2xl border border-gray-200/80 p-6 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-bold text-gray-900 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-500" />
                  風險矩陣與應變概覽 (Risk Overview)
                </h3>
                <span className="text-xs text-amber-600 bg-amber-50 px-2 py-0.5 rounded font-medium">
                  3 項追蹤中
                </span>
              </div>

              <div className="space-y-3">
                {DASHBOARD_RISKS.map((r, idx) => (
                  <div key={idx} className="p-3 bg-gray-50 rounded-xl border border-gray-200 text-xs">
                    <div className="flex items-center justify-between font-bold text-gray-900 mb-1">
                      <span>{r.item}</span>
                      <span className={`px-1.5 py-0.5 rounded text-[10px] ${
                        r.level === '高' ? 'bg-red-50 text-red-600' : 'bg-amber-50 text-amber-600'
                      }`}>
                        風險級別：{r.level}
                      </span>
                    </div>
                    <div className="text-gray-600 text-[11px]">
                      <span className="font-semibold text-gray-700">對策：</span>{r.mitigation}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-gray-100 text-[11px] text-gray-500 flex items-center justify-between">
              <span>風險緩解達成率</span>
              <span className="font-bold text-gray-900">100% 備案就緒</span>
            </div>
          </div>

          {/* Widget 5: Quick Notes */}
          <div className="bg-white rounded-2xl border border-gray-200/80 p-6 shadow-sm flex flex-col justify-between lg:col-span-2">
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-bold text-gray-900 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#4F7DF7]" />
                  快速筆記與靈感備忘 (Quick Notes)
                </h3>
                <span className="text-xs text-gray-400">即時儲存至本地狀態</span>
              </div>

              <textarea
                value={quickNotes}
                onChange={(e) => setQuickNotes(e.target.value)}
                className="w-full h-32 bg-[#F7F7F5] border border-gray-200 rounded-xl p-3 text-xs text-gray-800 focus:outline-none focus:border-[#4F7DF7] resize-none font-mono"
                placeholder="輸入您的 PM 快速筆記..."
              ></textarea>
            </div>

            <div className="mt-3 flex items-center justify-between text-[11px] text-gray-500">
              <span>● 自動同步與加密保護</span>
              <button
                onClick={() => alert('筆記已成功暫存！')}
                className="px-3 py-1 bg-gray-900 text-white rounded-lg text-xs font-semibold hover:bg-[#4F7DF7] transition-colors"
              >
                儲存筆記
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
