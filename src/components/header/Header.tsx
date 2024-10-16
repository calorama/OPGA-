'use client'

import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'; // Иконки меню


const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-black text-white border-b-2 border-gray-800">
      <div className="container mx-auto p-6">
        <nav className="flex justify-between items-center">
          {/* Логотип */}
          <div className="text-3xl font-extrabold tracking-widest">
            <a href="#" className="hover:text-gray-400">OPGA</a>
          </div>

          {/* Меню на больших экранах */}
          <ul className="hidden lg:flex space-x-8 text-xl">
            <li>
              <a href="#" className="hover:text-gray-400 transition-colors duration-300">
                Хата
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400 transition-colors duration-300">
                Братва
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400 transition-colors duration-300">
                Порядки
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400 transition-colors duration-300">
                Контакты
              </a>
            </li>
          </ul>

          {/* Бургер-меню на мобильных устройствах */}
          <div className="lg:hidden">
            <button onClick={toggleMenu}>
              {isOpen ? (
                <AiOutlineClose className="text-3xl" />
              ) : (
                <AiOutlineMenu className="text-3xl" />
              )}
            </button>
          </div>
        </nav>

        {/* Мобильное меню */}
        {isOpen && (
          <ul className="lg:hidden mt-4 space-y-4 text-xl">
            <li>
              <a href="#" className="block text-center hover:text-gray-400 transition-colors duration-300">
                Хата
              </a>
            </li>
            <li>
              <a href="#" className="block text-center hover:text-gray-400 transition-colors duration-300">
                Братва
              </a>
            </li>
            <li>
              <a href="#" className="block text-center hover:text-gray-400 transition-colors duration-300">
                Порядки
              </a>
            </li>
            <li>
              <a href="#" className="block text-center hover:text-gray-400 transition-colors duration-300">
                Контакты
              </a>
            </li>
          </ul>
        )}
      </div>
    </header>
  );
};

export default Header;
