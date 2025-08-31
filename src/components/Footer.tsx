import React from 'react';
import { Link } from 'react-router-dom';
import { Smartphone, Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-10 h-10 bg-blue-600 rounded-lg">
                <Smartphone className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg">МобилСервис</h3>
                <p className="text-sm text-gray-400">Ремонт телефонов</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              Профессиональный ремонт мобильных устройств с гарантией качества. 
              Более 10 лет опыта в сфере ремонта электроники.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Услуги</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/screen-repair" className="text-gray-300 hover:text-white transition-colors">Замена экрана</Link></li>
              <li><Link to="/battery-replacement" className="text-gray-300 hover:text-white transition-colors">Замена батареи</Link></li>
              <li><Link to="/water-damage" className="text-gray-300 hover:text-white transition-colors">Ремонт после воды</Link></li>
              <li><Link to="/software-repair" className="text-gray-300 hover:text-white transition-colors">Программный ремонт</Link></li>
              <li><Link to="/data-recovery" className="text-gray-300 hover:text-white transition-colors">Восстановление данных</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Контакты</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-400" />
                <span>+7 (999) 123-45-67</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-400" />
                <span>info@mobilservice.ru</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span>ул. Ремонтная, 123, Москва</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-blue-400" />
                <span>Пн-Вс: 9:00 - 21:00</span>
              </div>
            </div>
          </div>

          {/* Social & Additional */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Мы в соцсетях</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
            <div className="space-y-2 text-sm">
              <Link to="/privacy" className="block text-gray-300 hover:text-white transition-colors">
                Политика конфиденциальности
              </Link>
              <Link to="/terms" className="block text-gray-300 hover:text-white transition-colors">
                Условия обслуживания
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 МобилСервис. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;