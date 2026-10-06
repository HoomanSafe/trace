/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AssetGallery } from './components/AssetGallery';
import { TurnaroundInspector } from './components/TurnaroundInspector';
import { ExpressionMatrix } from './components/ExpressionMatrix';
import { QualityTests } from './components/QualityTests';
import { MemeStudio } from './components/MemeStudio';
import { BrandSystem } from './components/BrandSystem';
import { DeliverablesChecklist } from './components/DeliverablesChecklist';
import { DossierModal } from './components/DossierModal';
import { ExportModal } from './components/ExportModal';
import { Footer } from './components/Footer';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('hero');
  const [isDossierOpen, setIsDossierOpen] = useState<boolean>(false);
  const [isExportOpen, setIsExportOpen] = useState<boolean>(false);
  const [memeInitialImage, setMemeInitialImage] = useState<string | undefined>(undefined);

  const handleSelectForMeme = (imageSrc: string) => {
    setMemeInitialImage(imageSrc);
    setActiveTab('meme-studio');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateToTab = (tab: string) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#090A0A] text-[#EDECE8] flex flex-col font-sans selection:bg-[#0DF569]/30 selection:text-[#0DF569]">
      {/* Top Bar Contract compliant Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={handleNavigateToTab}
        onOpenExport={() => setIsExportOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {activeTab === 'hero' && (
          <>
            <HeroSection
              onOpenDossier={() => setIsDossierOpen(true)}
              onNavigateToTab={handleNavigateToTab}
            />
            <AssetGallery onSelectForMeme={handleSelectForMeme} />
            <TurnaroundInspector />
            <ExpressionMatrix />
            <QualityTests />
            <MemeStudio initialImageSrc={memeInitialImage} />
            <BrandSystem />
            <DeliverablesChecklist />
          </>
        )}

        {activeTab === 'assets' && (
          <div className="pt-4">
            <AssetGallery onSelectForMeme={handleSelectForMeme} />
            <DeliverablesChecklist />
          </div>
        )}

        {activeTab === 'turnaround' && (
          <div className="pt-4">
            <TurnaroundInspector />
            <DeliverablesChecklist />
          </div>
        )}

        {activeTab === 'expressions' && (
          <div className="pt-4">
            <ExpressionMatrix />
            <DeliverablesChecklist />
          </div>
        )}

        {activeTab === 'tests' && (
          <div className="pt-4">
            <QualityTests />
            <DeliverablesChecklist />
          </div>
        )}

        {activeTab === 'meme-studio' && (
          <div className="pt-4">
            <MemeStudio initialImageSrc={memeInitialImage} />
          </div>
        )}

        {activeTab === 'brand' && (
          <div className="pt-4">
            <BrandSystem />
            <DeliverablesChecklist />
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer
        onOpenDossier={() => setIsDossierOpen(true)}
        onOpenExport={() => setIsExportOpen(true)}
      />

      {/* Modals */}
      <DossierModal
        isOpen={isDossierOpen}
        onClose={() => setIsDossierOpen(false)}
      />
      <ExportModal
        isOpen={isExportOpen}
        onClose={() => setIsExportOpen(false)}
      />
    </div>
  );
}
