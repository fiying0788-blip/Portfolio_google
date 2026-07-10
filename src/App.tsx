/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Achievements from './components/Achievements';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import Skills from './components/Skills';
import DashboardSection from './components/DashboardSection';
import SideProjects from './components/SideProjects';
import ContactFooter from './components/ContactFooter';
import AiAssistant from './components/AiAssistant';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F7F7F5] text-[#1F2937] selection:bg-blue-100 selection:text-blue-900">
      <Navbar onOpenResume={() => setResumeModalOpen(true)} />
      
      <main>
        <Hero onOpenResume={() => setResumeModalOpen(true)} />
        <Achievements />
        <Timeline />
        <Projects />
        <Skills />
        <DashboardSection />
        <SideProjects />
      </main>

      <ContactFooter onOpenResume={() => setResumeModalOpen(true)} />
      
      <AiAssistant />
      
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </div>
  );
}

