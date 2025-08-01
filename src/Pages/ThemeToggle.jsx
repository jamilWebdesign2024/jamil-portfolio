import React, { useState, useEffect } from 'react';
import { AiOutlineMoon, AiOutlineSun } from 'react-icons/ai';

const ThemeToggle = () => {
  // localStorage থেকে থিমের বর্তমান অবস্থা লোড করা হচ্ছে
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem('theme') === 'dark'
  );

  // থিম পরিবর্তন হলে HTML এলিমেন্টে 'dark' ক্লাস যোগ বা সরানো এবং localStorage আপডেট করা
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  // থিম টগল করার ফাংশন
  const handleThemeToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <button
      onClick={handleThemeToggle}
      className="p-2 rounded-full transition duration-300 ease-in-out focus:outline-none"
      style={{
        color: 'var(--link-color)',
        backgroundColor: 'transparent',
        '--tw-bg-opacity': '0',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--secondary-bg)')}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
      aria-label="Toggle dark mode"
    >
      {darkMode ? (
        <AiOutlineSun className="text-xl" style={{ color: 'var(--link-color)' }} />
      ) : (
        <AiOutlineMoon className="text-xl" style={{ color: 'var(--link-color)' }} />
      )}
    </button>
  );
};

export default ThemeToggle;
