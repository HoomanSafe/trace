import React from 'react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenExport: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab, onOpenExport }) => {
  const navItems = [
    { id: 'hero', label: 'Master View' },
    { id: 'assets', label: 'Asset Vault' },
    { id: 'turnaround', label: 'Turnaround' },
    { id: 'expressions', label: 'Expressions' },
    { id: 'tests', label: 'Design Tests' },
    { id: 'meme-studio', label: 'Meme Studio' },
    { id: 'brand', label: 'Brand System' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#090A0A]/90 backdrop-blur-md border-b border-[#1C201F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <button
          onClick={() => setActiveTab('hero')}
          className="text-xl font-extrabold tracking-wider text-[#EDECE8] hover:text-[#0DF569] transition-colors focus:outline-none flex items-center gap-2 cursor-pointer"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          <span>TRACE</span>
        </button>

        {/* Zone 2: Clean text navigation links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-[#8F9B95]">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`transition-colors whitespace-nowrap py-1 relative cursor-pointer ${
                  isActive
                    ? 'text-[#EDECE8] font-semibold'
                    : 'hover:text-[#EDECE8]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#0DF569] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Primary action */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenExport}
            className="px-4 py-2 text-xs font-semibold text-[#090A0A] bg-[#0DF569] hover:bg-[#00E05B] active:scale-[0.98] transition-all rounded-md shadow-[0_0_15px_rgba(13,245,105,0.25)] whitespace-nowrap cursor-pointer"
          >
            Export Assets
          </button>
        </div>
      </div>

      {/* Mobile nav scrollbar */}
      <div className="flex md:hidden overflow-x-auto px-4 py-2 gap-4 border-t border-[#151817] text-xs font-medium text-[#8F9B95] no-scrollbar">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`whitespace-nowrap px-2.5 py-1 rounded transition-colors cursor-pointer ${
              activeTab === item.id
                ? 'text-[#0DF569] bg-[#151817] font-semibold'
                : 'hover:text-[#EDECE8]'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </header>
  );
};
