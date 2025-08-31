import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Smartphone, Star, Wrench, Clock, Shield } from 'lucide-react';

const Brands = () => {
  const brands = [
    {
      name: "iPhone",
      logo: "🍎",
      description: "Ремонт всех моделей iPhone от 6 до 15 Pro Max",
      models: ["iPhone 15 Pro Max", "iPhone 14", "iPhone 13", "iPhone 12", "iPhone 11", "iPhone X"],
      specialties: ["Замена экрана", "Ремонт Face ID", "Замена батареи", "Ремонт камеры"],
      avgPrice: "3500 ₽",
      popularity: "Очень высокая",
      difficulty: "Средняя"
    },
    {
      name: "Samsung",
      logo: "📱",
      description: "Профессиональный ремонт смартфонов Samsung Galaxy",
      models: ["Galaxy S24", "Galaxy S23", "Galaxy A54", "Galaxy Note 20", "Galaxy Z Fold", "Galaxy Z Flip"],
      specialties: ["Замена AMOLED экранов", "Ремонт S Pen", "Замена стекла", "Программный ремонт"],
      avgPrice: "3200 ₽",
      popularity: "Высокая",
      difficulty: "Средняя"
    },
    {
      name: "Xiaomi",
      logo: "🔶",
      description: "Ремонт смартфонов Xiaomi, Redmi и POCO",
      models: ["Xiaomi 14", "Redmi Note 13", "POCO X6", "Mi 11", "Redmi 12", "POCO F5"],
      specialties: ["Прошивка MIUI", "Разблокировка Bootloader", "Замена экрана", "Ремонт камеры"],
      avgPrice: "2800 ₽",
      popularity: "Высокая",
      difficulty: "Низкая"
    },
    {
      name: "Huawei",
      logo: "🌸",
      description: "Ремонт устройств Huawei и Honor",
      models: ["P60 Pro", "Mate 50", "Nova 11", "Honor 90", "Honor Magic 5", "P40 Pro"],
      specialties: ["Ремонт Kirin процессоров", "Восстановление Google сервисов", "Замена экрана"],
      avgPrice: "3100 ₽",
      popularity: "Средняя",
      difficulty: "Высокая"
    },
    {
      name: "OnePlus",
      logo: "1️⃣",
      description: "Ремонт флагманских смартфонов OnePlus",
      models: ["OnePlus 12", "OnePlus 11", "OnePlus Nord 3", "OnePlus 10 Pro", "OnePlus 9"],
      specialties: ["Замена экрана", "Ремонт быстрой зарядки", "Программный ремонт"],
      avgPrice: "3400 ₽",
      popularity: "Средняя",
      difficulty: "Средняя"
    },
    {
      name: "Google Pixel",
      logo: "🔍",
      description: "Ремонт смартфонов Google Pixel",
      models: ["Pixel 8 Pro", "Pixel 7a", "Pixel 6", "Pixel 5", "Pixel 4a"],
      specialties: ["Ремонт камеры", "Программный ремонт", "Замена экрана"],
      avgPrice: "3600 ₽",
      popularity: "Низкая",
      difficulty: "Средняя"
    },
    {
      name: "Sony",
      logo: "📷",
      description: "Ремонт смартфонов Sony Xperia",
      models: ["Xperia 1 V", "Xperia 5 IV", "Xperia 10 V", "Xperia Pro"],
      specialties: ["Ремонт камеры", "Замена экрана", "Ремонт аудио"],
      avgPrice: "3800 ₽",
      popularity: "Низкая", 
      difficulty: "Высокая"
    },
    {
      name: "Другие бренды",
      logo: "📱",
      description: "Ремонт менее популярных брендов",
      models: ["Oppo", "Vivo", "Realme", "Nothing", "Asus", "Motorola"],
      specialties: ["Диагностика", "Поиск запчастей", "Стандартный ремонт"],
      avgPrice: "2500 ₽",
      popularity: "Низкая",
      difficulty: "Различная"
    }
  ];

  const getPopularityColor = (popularity: string) => {
    switch (popularity) {
      case 'Очень высокая': return 'bg-green-100 text-green-800';
      case 'Высокая': return 'bg-blue-100 text-blue-800';
      case 'Средняя': return 'bg-yellow-100 text-yellow-800';
      case 'Низкая': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Низкая': return 'text-green-600';
      case 'Средняя': return 'text-yellow-600';
      case 'Высокая': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Ремонт телефонов всех брендов
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Специализируемся на ремонте устройств всех популярных производителей. 
              Оригинальные запчасти и профессиональный подход.
            </p>
            <div className="flex justify-center space-x-8 text-sm">
              <div className="flex items-center space-x-2">
                <Smartphone className="h-5 w-5 text-blue-600" />
                <span>50+ моделей</span>
              </div>
              <div className="flex items-center space-x-2">
                <Wrench className="h-5 w-5 text-green-600" />
                <span>Все виды ремонта</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-purple-600" />
                <span>Гарантия качества</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {brands.map((brand, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 group">
                <CardHeader className="text-center">
                  <div className="text-6xl mb-4">{brand.logo}</div>
                  <CardTitle className="text-2xl flex items-center justify-center space-x-2">
                    <span>{brand.name}</span>
                    <Badge className={getPopularityColor(brand.popularity)}>
                      {brand.popularity}
                    </Badge>
                  </CardTitle>
                  <CardDescription>{brand.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {/* Popular Models */}
                  <div>
                    <h4 className="font-semibold text-sm text-gray-900 mb-3">Популярные модели:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {brand.models.slice(0, 6).map((model, idx) => (
                        <div key={idx} className="text-xs bg-gray-50 px-2 py-1 rounded text-center">
                          {model}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Specialties */}
                  <div>
                    <h4 className="font-semibold text-sm text-gray-900 mb-3">Специализация:</h4>
                    <ul className="space-y-1">
                      {brand.specialties.map((specialty, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                          <span>{specialty}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Stats */}
                  <div className="border-t pt-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Средняя цена:</span>
                      <span className="font-bold text-blue-600">{brand.avgPrice}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Сложность:</span>
                      <span className={`font-medium ${getDifficultyColor(brand.difficulty)}`}>
                        {brand.difficulty}
                      </span>
                    </div>
                  </div>

                  <Button className="w-full group-hover:bg-blue-700 transition-colors">
                    Ремонт {brand.name}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Comparison */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Сравнение брендов по ремонтопригодности
            </h2>
            <p className="text-xl text-gray-600">
              Какие устройства проще и дешевле ремонтировать
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-4 px-4">Бренд</th>
                  <th className="text-center py-4 px-4">Популярность</th>
                  <th className="text-center py-4 px-4">Сложность ремонта</th>
                  <th className="text-center py-4 px-4">Средняя цена</th>
                  <th className="text-center py-4 px-4">Доступность запчастей</th>
                </tr>
              </thead>
              <tbody>
                {brands.slice(0, 6).map((brand, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{brand.logo}</span>
                        <span className="font-semibold">{brand.name}</span>
                      </div>
                    </td>
                    <td className="text-center py-4 px-4">
                      <Badge className={getPopularityColor(brand.popularity)}>
                        {brand.popularity}
                      </Badge>
                    </td>
                    <td className="text-center py-4 px-4">
                      <span className={`font-medium ${getDifficultyColor(brand.difficulty)}`}>
                        {brand.difficulty}
                      </span>
                    </td>
                    <td className="text-center py-4 px-4 font-bold text-blue-600">
                      {brand.avgPrice}
                    </td>
                    <td className="text-center py-4 px-4">
                      <div className="flex justify-center">
                        {brand.popularity === 'Очень высокая' || brand.popularity === 'Высокая' ? (
                          <div className="flex space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                        ) : (
                          <div className="flex space-x-1">
                            {[...Array(3)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            ))}
                            {[...Array(2)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 text-gray-300" />
                            ))}
                          </div>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Brands;