import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Phone, Smartphone, Wrench } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigationItems = [
    { href: '/', label: 'Главная' },
    { href: '/services', label: 'Услуги' },
    { href: '/repair-types', label: 'Виды ремонта' },
    { href: '/brands', label: 'Бренды' },
    { href: '/diagnostics', label: 'Диагностика' },
    { href: '/warranty', label: 'Гарантия' },
    { href: '/about', label: 'О нас' },
    { href: '/contacts', label: 'Контакты' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-10 h-10 bg-blue-600 rounded-lg">
              <Smartphone className="h-6 w-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg text-gray-900">МобилСервис</span>
              <span className="text-xs text-gray-500">Ремонт телефонов</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2 text-sm">
              <Phone className="h-4 w-4 text-blue-600" />
              <span className="font-medium">+7 (999) 123-45-67</span>
            </div>
            <Button className="hidden md:inline-flex">
              Заказать ремонт
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col space-y-4 mt-8">
                  {navigationItems.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      className="text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <div className="pt-4 border-t">
                    <div className="flex items-center space-x-2 text-sm mb-4">
                      <Phone className="h-4 w-4 text-blue-600" />
                      <span className="font-medium">+7 (999) 123-45-67</span>
                    </div>
                    <Button className="w-full">
                      Заказать ремонт
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;