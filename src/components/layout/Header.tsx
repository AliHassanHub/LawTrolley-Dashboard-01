import React, { useState, useEffect, useRef } from "react";

export const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showMessages, setShowMessages] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const notificationsRef = useRef<HTMLDivElement>(null);
  const messagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
      if (notificationsRef.current && !notificationsRef.current.contains(event.target as Node)) {
        setShowNotifications(false);
      }
      if (messagesRef.current && !messagesRef.current.contains(event.target as Node)) {
        setShowMessages(false);
      }
    };

    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setShowDropdown(false);
        setShowNotifications(false);
        setShowMessages(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscKey);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscKey);
    };
  }, []);

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
    setShowMessages(false);
    setShowDropdown(false);
  };

  const toggleMessages = () => {
    setShowMessages(!showMessages);
    setShowNotifications(false);
    setShowDropdown(false);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
    setShowNotifications(false);
    setShowMessages(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[#E6E6E6] bg-white w-full">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 py-3 flex flex-wrap md:flex-nowrap items-center justify-between gap-4">
        
        {/* Logo and Welcome Text */}
        <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
          <div
            className="flex items-center cursor-pointer transition-transform duration-300 hover:scale-105"
            onClick={() => window.location.href = "/"}
          >
            <img src="/image 1.png" alt="Logo" className="h-[48px] w-auto object-contain" />
          </div>
          <div className="text-[#808080] text-sm sm:text-base font-medium tracking-[-0.4px]">
            Welcome, <span className="text-[#1A011E]">Wisdom</span>
          </div>
        </div>

        {/* Right-side Tools */}
        <div className="flex flex-wrap items-center justify-between md:justify-end gap-4 md:gap-6 w-full md:w-auto">

          {/* Search */}
          <div className="relative flex-1 md:flex-none w-full sm:w-[300px] md:w-[450px] max-w-full">
            <div className="flex items-center border border-[#F2F2F2] bg-[#FAFAFA] rounded-lg px-4 py-[6px] gap-3 focus-within:border-[#6B047C] transition-colors">
              <img src="https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/94284150ceed88e340890e2172c78b78c0c3ea35" alt="Search icon" className="w-4 h-4 text-[#CCC]" />
              <input type="text" placeholder="Search" className="w-full bg-transparent border-none outline-none text-sm text-[#808080] placeholder:text-[#CCC]" />
            </div>
          </div>

          {/* Notifications, Messages, Dropdown */}
          <div className="flex items-center gap-4">
            {/* Notifications */}
            <div ref={notificationsRef} className="relative">
              <button aria-label="Notifications" className="relative p-2 hover:bg-[#F9F5FA] rounded-lg transition-colors" onClick={toggleNotifications}>
                <img src="/notification-02.svg" alt="Notifications" className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[10px] flex items-center justify-center rounded-full">2</span>
              </button>
              {showNotifications && (
                <div className="absolute right-0 top-full mt-2 w-80 bg-white rounded-lg shadow-lg py-4 px-4 z-50">
                  <div className="text-[#6B047C] font-medium mb-3">Notifications</div>
                  <div className="space-y-3">{/* Notification items */}</div>
                </div>
              )}
            </div>

            {/* Messages */}
            <div ref={messagesRef} className="relative">
              <button aria-label="Messages" className="relative p-2 hover:bg-[#F9F5FA] rounded-lg transition-colors" onClick={toggleMessages}>
                <img src="/system-uicons_message.svg" alt="Messages" className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[10px] flex items-center justify-center rounded-full">1</span>
              </button>
              {showMessages && (
                <div className="absolute right-0 top-full mt-2 w-80 bg-white rounded-lg shadow-lg py-4 px-4 z-50">
                  <div className="text-[#6B047C] font-medium mb-3">Messages</div>
                  <div className="space-y-3">{/* Message items */}</div>
                </div>
              )}
            </div>

            {/* Profile Image */}
            <img src="/Frame 106.png" alt="Profile" className="w-8 h-8 rounded-lg object-cover" />

            {/* Quick Actions Dropdown */}
            <div ref={dropdownRef} className="relative">
              <button className="flex items-center gap-2 border border-[#6B047C] text-[#6B047C] text-sm font-medium px-4 py-2 rounded-lg hover:bg-[#F9F5FA] transition-colors" onClick={toggleDropdown}>
                <span>Quick actions</span>
                <svg className={`w-4 h-4 transform transition-transform ${showDropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {showDropdown && (
                <div className="absolute right-0 top-full mt-2 w-[290px] bg-white rounded-lg shadow-lg py-4 px-4 z-50">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-2 hover:bg-[#F9F5FA] rounded-lg cursor-pointer group">
                      <img src="/Frame 106.png" alt="Profile" className="w-8 h-8 rounded-lg object-cover" />
                      <div className="flex flex-col">
                        <span className="text-[#1A011E] group-hover:text-[#6B047C] text-sm font-medium transition-colors">Wisdom Umanah</span>
                        <span className="text-[#808080] text-xs group-hover:text-[#6B047C] transition-colors">My profile</span>
                      </div>
                    </div>
                    {[
                      { label: "Dispute", icon: "/Frame 1000007971.svg" },
                      { label: "Help and support", icon: "/Frame 1000007971 (1).svg" },
                      { label: "Settings", icon: "/Frame 1000007971 (3).svg" },
                      { label: "Log out", icon: "/Frame 1000007971.svg" },
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-2 hover:bg-[#F9F5FA] rounded-lg cursor-pointer group">
                        <img src={item.icon} alt={item.label} className="w-8 h-8 p-2 bg-[#F2F2F2] rounded-lg" />
                        <span className="text-[#808080] group-hover:text-[#6B047C] text-sm transition-colors">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
