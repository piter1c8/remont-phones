import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Smartphone, 
  Unlock, 
  Download, 
  Cpu, 
  Camera, 
  CheckCircle,
  Code,
  Shield,
  Star,
  Wrench
} from 'lucide-react';

const XiaomiRepair = () => {
  const xiaomiSeries = [
    {
      series: "Xiaomi 14 серия",
      models: ["Xiaomi 14", "Xiaomi 14 Pro", "Xiaomi 14 Ultra"],
      features: ["Snapdragon 8 Gen 3", "Leica камеры", "120W зарядка", "MIUI 15"],
      specialRepairs: ["Leica камера", "Быстрая зарядка", "AMOLED экран", "Разблокировка"],
      avgPrice: "3500-5500 ₽",
      availability: "В наличии"
    },
    {
      series: "Redmi Note серия",
      models: ["Redmi Note 13", "Redmi Note 12", "Redmi Note 11"],
      features: ["MediaTek/Snapdragon", "108MP камера", "5000mAh", "MIUI"],
      specialRepairs: ["LCD/AMOLED экран", "Основная камера", "Батарея", "Прошивка MIUI"],
      avgPrice: "2000-3500 ₽",
      availability: "В наличии"
    },
    {
      series: "POCO серия",
      models: ["POCO X6", "POCO F5", "POCO M6", "POCO C65"],
      features: ["Игровая производительность", "Быстрая зарядка", "Доступная цена"],
      specialRepairs: ["Экран", "Система охлаждения", "Батарея", "Разблокировка Bootloader"],
      avgPrice: "2200-4000 ₽",
      availability: "В наличии"
    },
    {
      series: "Mi серия",
      models: ["Mi 11", "Mi 10", "Mi 9", "Mi Mix"],
      features: ["Флагманские характеристики", "Премиум материалы", "Беспроводная зарядка"],
      specialRepairs: ["AMOLED экран", "Тройная камера", "Беспроводная зарядка", "NFC"],
      avgPrice: "3000-5000 ₽",
      availability: "Под заказ"
    }
  ];

  const xiaomiSpecialties = [
    {
      specialty: "Разблокировка Bootloader",
      description: "Официальная разблокировка загрузчика Xiaomi",
      icon: <Unlock className="h-8 w-8 text-orange-600" />,
      process: ["Регистрация Mi аккаунта", "Подача заявки", "Ожидание разрешения", "Разблокировка"],
      time: "7-14 дней ожидания + 30 мин",
      price: "от 1500 ₽",
      risks: "Потеря гарантии"
    },
    {
      specialty: "Прошивка MIUI",
      description: "Установка официальных и кастомных прошивок MIUI",
      icon: <Download className="h-8 w-8 text-blue-600" />,
      process: ["Резервное копирование", "Разблокировка", "Прошивка", "Настройка"],
      time: "1-3 часа",
      price: "от 2000 ₽",
      risks: "Возможность brick"
    },
    {
      specialty: "Установка Google сервисов",
      description: "Установка Google Play на устройства без GMS",
      icon: <Code className="h-8 w-8 text-green-600" />,
      process: ["Проверка совместимости", "Установка GMS", "Настройка", "Тестирование"],
      time: "30-60 мин",
      price: "от 1000 ₽",
      risks: "Минимальные"
    }
  ];

  const xiaomiProblems = [
    {
      problem: "Проблемы с MIUI",
      symptoms: ["Зависания интерфейса", "Быстрая разрядка", "Ошибки приложений", "Медленная работа"],
      causes: ["Переполненная память", "Конфликт приложений", "Устаревшая прошивка", "Вирусы"],
      solutions: ["Очистка системы", "Обновление MIUI", "Сброс настроек", "Переустановка ПО"],
      models: "Все Xiaomi",
      cost: "800-2500 ₽"
    },
    {
      problem: "Не работает NFC",
      symptoms: ["Не читает карты", "Не работает оплата", "Ошибка NFC"],
      causes: ["Повреждение антенны", "Программный сбой", "Отключен в настройках"],
      solutions: ["Замена NFC антенны", "Настройка ПО", "Проверка настроек"],
      models: "Mi, Redmi Note Pro",
      cost: "2000-3500 ₽"
    },
    {
      problem: "Перегрев при играх",
      symptoms: ["Сильный нагрев", "Снижение FPS", "Выключения", "Троттлинг"],
      causes: ["Засорение системы охлаждения", "Высокие настройки", "Фоновые процессы"],
      solutions: ["Чистка системы охлаждения", "Оптимизация ПО", "Замена термопасты"],
      models: "POCO, Mi Gaming",
      cost: "1500-3000 ₽"
    }
  ];

  const miuiFeatures = [
    "Темы и персонализация",
    "Жесты навигации",
    "Второе пространство",
    "Клонирование приложений",
    "Игровой режим",
    "Супер обои",
    "Mi Share",
    "Контроль конфиденциальности"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-red-100 py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="text-6xl">🔶</div>
                <div>
                  <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
                    Ремонт Xiaomi
                  </h1>
                  <p className="text-lg text-gray-600">Специалисты по MIUI и экосистеме Mi</p>
                </div>
              </div>
              <p className="text-xl text-gray-600">
                Профессиональный ремонт всех устройств Xiaomi, Redmi и POCO. 
                Специализируемся на прошивке MIUI и разблокировке.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                  <Code className="h-5 w-5 text-orange-600" />
                  <span className="text-sm font-medium">MIUI эксперты</span>
                </div>
                <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                  <Unlock className="h-5 w-5 text-blue-600" />
                  <span className="text-sm font-medium">Разблокировка</span>
                </div>
                <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                  <Star className="h-5 w-5 text-yellow-600" />
                  <span className="text-sm font-medium">Доступные цены</span>
                </div>
              </div>
              <Button size="lg" className="text-lg px-8 bg-orange-600 hover:bg-orange-700">
                <Smartphone className="mr-2 h-5 w-5" />
                Отремонтировать Xiaomi
              </Button>
            </div>

            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Ремонт Xiaomi"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Xiaomi Series */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Линейки Xiaomi
            </h2>
            <p className="text-xl text-gray-600">
              Ремонтируем все серии Xiaomi, Redmi и POCO
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {xiaomiSeries.map((series, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center space-x-2">
                    <Smartphone className="h-6 w-6 text-orange-600" />
                    <span>{series.series}</span>
                  </CardTitle>
                  <Badge className={
                    series.availability === 'В наличии' ? 'bg-green-100 text-green-800' :
                    'bg-orange-100 text-orange-800'
                  }>
                    {series.availability}
                  </Badge>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Модели:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {series.models.map((model, idx) => (
                        <div key={idx} className="text-xs bg-gray-50 px-2 py-1 rounded text-center">
                          {model}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Особенности:</h4>
                    <div className="flex flex-wrap gap-2">
                      {series.features.map((feature, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Специализированные ремонты:</h4>
                    <ul className="space-y-2">
                      {series.specialRepairs.map((repair, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span>{repair}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t pt-4">
                    <div className="text-center mb-4">
                      <div className="text-2xl font-bold text-orange-600">{series.avgPrice}</div>
                      <div className="text-sm text-gray-600">Средняя стоимость ремонта</div>
                    </div>
                    <Button className="w-full">
                      Ремонт {series.series}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Xiaomi Specialties */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Специализированные услуги Xiaomi
            </h2>
            <p className="text-xl text-gray-600">
              Уникальные возможности экосистемы Xiaomi
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {xiaomiSpecialties.map((specialty, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    {specialty.icon}
                  </div>
                  <CardTitle className="text-lg">{specialty.specialty}</CardTitle>
                  <CardDescription>{specialty.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Процесс:</h4>
                    <ul className="space-y-2">
                      {specialty.process.map((step, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-sm">
                          <div className="w-6 h-6 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-xs font-bold">
                            {idx + 1}
                          </div>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-medium text-gray-900">Время:</p>
                      <p className="text-gray-600">{specialty.time}</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Цена:</p>
                      <p className="text-orange-600 font-bold">{specialty.price}</p>
                    </div>
                  </div>

                  <div className="bg-yellow-50 p-3 rounded-lg">
                    <p className="text-sm font-medium text-yellow-800">Внимание:</p>
                    <p className="text-yellow-700 text-sm">{specialty.risks}</p>
                  </div>

                  <Button className="w-full">
                    Заказать услугу
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Xiaomi Problems */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Частые проблемы Xiaomi
            </h2>
            <p className="text-xl text-gray-600">
              Типичные неисправности устройств Xiaomi и их решение
            </p>
          </div>

          <div className="space-y-8">
            {xiaomiProblems.map((problem, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-4 gap-6">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{problem.problem}</h3>
                      <Badge className="bg-orange-100 text-orange-800">
                        {problem.models}
                      </Badge>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Симптомы:</h4>
                      <ul className="space-y-1">
                        {problem.symptoms.map((symptom, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                            <span>{symptom}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Причины:</h4>
                      <ul className="space-y-1">
                        {problem.causes.map((cause, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                            <span>{cause}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Решения:</h4>
                        <ul className="space-y-1">
                          {problem.solutions.map((solution, idx) => (
                            <li key={idx} className="text-sm text-gray-600 flex items-center space-x-2">
                              <CheckCircle className="h-4 w-4 text-green-600" />
                              <span>{solution}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="bg-orange-50 p-3 rounded-lg">
                        <p className="text-orange-600 font-bold">{problem.cost}</p>
                      </div>
                      
                      <Button className="w-full">
                        Диагностика
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* MIUI Features */}
      <section className="py-20 bg-orange-600">
        <div className="container mx-auto px-4">
          <div className="text-center text-white mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Восстанавливаем все функции MIUI
            </h2>
            <p className="text-xl text-orange-100">
              После ремонта все уникальные возможности MIUI работают корректно
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {miuiFeatures.map((feature, index) => (
              <div key={index} className="text-center text-white">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-lg">{feature}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default XiaomiRepair;