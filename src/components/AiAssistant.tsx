import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, Sparkles, Loader2, ArrowRight } from 'lucide-react';
import { ChatMessage } from '../types';

export default function AiAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'assistant',
      content: '您好！我是「Ask Eric AI」，您可以向我詢問關於 Eric 的背景、專案經歷、核心技能或任何錄用評估相關的問題。',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const suggestedQuestions = [
    '告訴我關於 Eric 的背景',
    'Eric 管理過哪些專案？',
    'Eric 的核心優勢是什麼？',
    '為什麼我們應該錄用 Eric？'
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = async (textToSend?: string) => {
    const query = textToSend || input;
    if (!query.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      role: 'user',
      content: query.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    if (!textToSend) setInput('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: newMessages.map(m => ({ role: m.role, content: m.content }))
        })
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to fetch response');
      }

      const botMsg: ChatMessage = {
        role: 'assistant',
        content: data.reply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages([...newMessages, botMsg]);
    } catch (error: any) {
      console.error(error);
      const errorMsg: ChatMessage = {
        role: 'assistant',
        content: `抱歉，目前連線發生狀況：${error.message || '請確認伺服器或 API Key 設定是否正確。'}`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages([...newMessages, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Trigger Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 bg-gray-900 text-white p-4 rounded-full shadow-2xl hover:bg-[#4F7DF7] transition-all duration-300 flex items-center gap-2.5 group cursor-pointer border border-gray-700"
          aria-label="Open Ask Eric AI"
        >
          <Bot className="w-5 h-5 text-blue-400 group-hover:text-white transition-colors" />
          <span className="text-xs font-semibold pr-1">Ask Eric AI</span>
          <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse absolute -top-1 -right-1"></span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-full max-w-md bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col h-[560px] animate-fadeIn">
          
          {/* Header */}
          <div className="bg-gray-900 text-white p-4 px-5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#4F7DF7] text-white flex items-center justify-center font-bold">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold tracking-tight">Ask Eric AI 助理</div>
                <div className="text-[10px] text-gray-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-green-500"></span>
                  Gemini 2.5 Flash 驅動
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#F7F7F5]">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`flex gap-3 ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {m.role === 'assistant' && (
                  <div className="w-7 h-7 rounded-lg bg-gray-900 text-white flex items-center justify-center shrink-0 mt-1">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                )}
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 text-xs leading-relaxed ${
                    m.role === 'user'
                      ? 'bg-[#4F7DF7] text-white rounded-br-xs'
                      : 'bg-white text-gray-800 border border-gray-200 shadow-2xs rounded-bl-xs'
                  }`}
                >
                  <div className="whitespace-pre-wrap">{m.content}</div>
                  <div className={`text-[9px] mt-1 text-right ${m.role === 'user' ? 'text-blue-100' : 'text-gray-400'}`}>
                    {m.timestamp}
                  </div>
                </div>
                {m.role === 'user' && (
                  <div className="w-7 h-7 rounded-lg bg-blue-100 text-[#4F7DF7] flex items-center justify-center shrink-0 mt-1">
                    <User className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            ))}

            {isLoading && (
              <div className="flex gap-3 justify-start">
                <div className="w-7 h-7 rounded-lg bg-gray-900 text-white flex items-center justify-center shrink-0">
                  <Bot className="w-3.5 h-3.5" />
                </div>
                <div className="bg-white border border-gray-200 rounded-2xl px-4 py-3 text-xs text-gray-500 flex items-center gap-2 shadow-2xs">
                  <Loader2 className="w-3.5 h-3.5 animate-spin text-[#4F7DF7]" />
                  Eric AI 正在整理專業背景資料...
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Questions Chips */}
          <div className="p-3 bg-white border-t border-gray-200/60 overflow-x-auto flex gap-2">
            {suggestedQuestions.map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(q)}
                disabled={isLoading}
                className="whitespace-nowrap px-3 py-1.5 rounded-full text-[11px] font-medium bg-[#F7F7F5] text-gray-700 hover:bg-gray-200 border border-gray-200 transition-colors cursor-pointer"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input Box */}
          <div className="p-3 bg-white border-t border-gray-200 flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="向 Ask Eric AI 提問關於 Eric 的經歷..."
              className="flex-1 bg-[#F7F7F5] border border-gray-200 rounded-xl px-4 py-2.5 text-xs text-gray-800 focus:outline-none focus:border-[#4F7DF7]"
            />
            <button
              onClick={() => handleSend()}
              disabled={isLoading || !input.trim()}
              className="p-2.5 rounded-xl bg-gray-900 text-white hover:bg-[#4F7DF7] disabled:opacity-40 transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>

        </div>
      )}
    </>
  );
}
