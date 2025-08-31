import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Smartphone, 
  Shield, 
  Star, 
  CheckCircle, 
  Clock, 
  Award,
  FaceIcon as Face,
  Camera,
  Battery,
  Wrench
} from 'lucide-react';

const IPhoneRepair = () => {
  const iPhoneModels = [
    {
      series: "iPhone 15 серия",
      models: ["iPhone 15", "iPhone 15 Plus", "iPhone 15 Pro", "iPhone 15 Pro Max"],
      features: ["USB-C", "Dynamic Island", "A17 Pro", "Titanium"],
      commonRepairs: ["Замена экрана", "Замена батареи", "Ремонт камеры", "Замена USB-C"],
      avgPrice: "5500-8500 ₽",
      availability: "В наличии"
    },
    {
      series: "iPhone 14 серия",
      models: ["iPhone 14", "iPhone 14 Plus", "iPhone 14 Pro", "iPhone 14 Pro Max"],
      features: ["A16 Bionic", "Dynamic Island", "48MP камера", "Crash Detection"],
      commonRepairs: ["Замена экрана", "Замена батареи", "Ремонт Face ID", "Ремонт камеры"],
      avgPrice: "5000-7500 ₽",
      availability: "В наличии"
    },
    {
      series: "iPhone 13 серия",
      models: ["iPhone 13 mini", "iPhone 13", "iPhone 13 Pro", "iPhone 13 Pro Max"],
      features: ["A15 Bionic", "Cinematic mode", "ProRes", "120Hz ProMotion"],
      commonRepairs: ["Замена экрана", "Замена батареи", "Ремонт камеры", "Ремонт Face ID"],
      avgPrice: "4500-6500 ₽",
      availability: "В наличии"
    },
    {
      series: "iPhone 12 серия",
      models: ["iPhone 12 mini", "iPhone 12", "iPhone 12 Pro", "iPhone 12 Pro Max"],
      features: ["A14 Bionic", "5G", "MagSafe", "Ceramic Shield"],
      commonRepairs: ["Замена экрана", "Замена батареи", "Ремонт MagSafe", "Ремонт 5G"],
      avgPrice: "4000-6000 ₽",
      availability: "В наличии"
    }
  ];

  const iPhoneSpecialties = [
    {
      specialty: "Face ID ремонт",
      description: "Восстановление системы распознавания лица",
      icon: <Face className="h-8 w-8 text-blue-600" />,
      complexity: "Очень высокая",
      successRate: "85%",
      price: "от 4500 ₽",
      time: "2-4 часа",
      requirements: ["Оригинальные компоненты", "Специальное ПО", "Калибровка"]
    },
    {
      specialty: "True Tone калибровка",
      description: "Восстановление автоматической настройки цветовой температуры",
      icon: <Star className="h-8 w-8 text-yellow-600" />,
      complexity: "Высокая",
      successRate: "95%",
      price: "от 2500 ₽",
      time: "1-2 часа",
      requirements: ["Программатор", "Оригинальные датчики", "Заводские настройки"]
    },
    {
      specialty: "Ремонт тройной камеры",
      description: "Восстановление системы камер Pro моделей",
      icon: <Camera className="h-8 w-8 text-purple-600" />,
      complexity: "Высокая",
      successRate: "90%",
      price: "от 5500 ₽",
      time: "1-3 часа",
      requirements: ["Оригинальные модули", "Калибровка", "Тестирование"]
    },
    {
      specialty: "MagSafe ремонт",
      description: "Восстановление беспроводной зарядки и магнитного крепления",
      icon: <Battery className="h-8 w-8 text-green-600" />,
      complexity: "Средняя",
      successRate: "92%",
      price: "от 3500 ₽",
      time: "1-2 часа",
      requirements: ["Оригинальные катушки", "Магниты", "Калибровка"]
    }
  ];

  const iPhoneProblems = [
    {
      problem: "Не работает Face ID",
      models: ["iPhone X", "iPhone 11", "iPhone 12", "iPhone 13", "iPhone 14", "iPhone 15"],
      symptoms: ["Не распознает лицо", "Ошибка настройки", "Камера TrueDepth недоступна"],
      causes: ["Повреждение модуля", "Обрыв шлейфа", "Программный сбой", "Неоригинальный экран"],
      solutions: ["Замена модуля Face ID", "Ремонт шлейфа", "Программирование", "Установка оригинального экрана"],
      cost: "4500-7500 ₽"
    },
    {
      problem: "Проблемы с зарядкой Lightning",
      models: ["iPhone 5s", "iPhone 6", "iPhone 7", "iPhone 8", "iPhone X", "iPhone 11", "iPhone 12", "iPhone 13", "iPhone 14"],
      symptoms: ["Не заряжается", "Медленная зарядка", "Не распознает кабель"],
      causes: ["Износ разъема", "Загрязнение", "Повреждение контроллера", "Неисправность кабеля"],
      solutions: ["Замена разъема Lightning", "Чистка контактов", "Ремонт контроллера", "Проверка кабеля"],
      cost: "2800-4500 ₽"
    },
    {
      problem: "Не работает Touch ID",
      models: ["iPhone 5s", "iPhone 6", "iPhone 7", "iPhone 8", "iPhone SE"],
      symptoms: ["Не читает отпечаток", "Ошибка настройки", "Кнопка Home не работает"],
      causes: ["Повреждение сенсора", "Обрыв шлейфа", "Неоригинальная кнопка"],
      solutions: ["Замена кнопки Home", "Ремонт шлейфа", "Программирование Touch ID"],
      cost: "3500-5500 ₽"
    }
  ];

  const certifications = [
    {
      cert: "Apple Authorized Service Provider",
      description: "Официальная авторизация от Apple",
      benefits: ["Оригинальные запчасти", "Сохранение гарантии", "Официальные процедуры"],
      year: "2018"
    },
    {
      cert: "Apple Certified Technician",
      description: "Сертифицированные мастера Apple",
      benefits: ["Глубокие знания iOS", "Доступ к служебной документации", "Специальные инструменты"],
      year: "2019"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-100 py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="text-6xl">🍎</div>
                <div>
                  <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
                    Ремонт iPhone
                  </h1>
                  <p className="text-lg text-gray-600">Авторизованный сервис Apple</p>
                </div>
              </div>
              <p className="text-xl text-gray-600">
                Профессиональный ремонт всех моделей iPhone от 6 до 15 Pro Max. 
                Используем только оригинальные запчасти Apple.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                  <Award className="h-5 w-5 text-blue-600" />
                  <span className="text-sm font-medium">Авторизованный сервис</span>
                </div>
                <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                  <Shield className="h-5 w-5 text-green-600" />
                  <span className="text-sm font-medium">Оригинальные запчасти</span>
                </div>
                <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                  <Star className="h-5 w-5 text-yellow-600" />
                  <span className="text-sm font-medium">Сохранение гарантии</span>
                </div>
              </div>
              <Button size="lg" className="text-lg px-8 bg-blue-600 hover:bg-blue-700">
                <Smartphone className="mr-2 h-5 w-5" />
                Отремонтировать iPhone
              </Button>
            </div>

            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Ремонт iPhone"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* iPhone Models */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Поддерживаемые модели iPhone
            </h2>
            <p className="text-xl text-gray-600">
              Ремонтируем все модели iPhone с использованием оригинальных запчастей
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {iPhoneModels.map((series, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center space-x-2">
                    <Smartphone className="h-6 w-6 text-blue-600" />
                    <span>{series.series}</span>
                  </CardTitle>
                  <Badge className="w-fit bg-green-100 text-green-800">
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
                    <h4 className="font-semibold text-gray-900 mb-3">Ключевые особенности:</h4>
                    <div className="flex flex-wrap gap-2">
                      {series.features.map((feature, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Частые ремонты:</h4>
                    <ul className="space-y-2">
                      {series.commonRepairs.map((repair, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span>{repair}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t pt-4">
                    <div className="text-center mb-4">
                      <div className="text-2xl font-bold text-blue-600">{series.avgPrice}</div>
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

      {/* iPhone Specialties */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Специализированные услуги для iPhone
            </h2>
            <p className="text-xl text-gray-600">
              Уникальные технологии Apple требуют особого подхода
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {iPhoneSpecialties.map((specialty, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center">
                      {specialty.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl">{specialty.specialty}</CardTitle>
                      <Badge className={
                        specialty.complexity === 'Средняя' ? 'bg-yellow-100 text-yellow-800' :
                        specialty.complexity === 'Высокая' ? 'bg-orange-100 text-orange-800' :
                        'bg-red-100 text-red-800'
                      }>
                        {specialty.complexity}
                      </Badge>
                    </div>
                  </div>
                  <CardDescription>{specialty.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Успешность ремонта</span>
                      <span className="text-sm text-gray-600">{specialty.successRate}</span>
                    </div>
                    <Progress value={parseInt(specialty.successRate)} className="h-2" />
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Требования:</h4>
                    <ul className="space-y-2">
                      {specialty.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t pt-4 grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium text-gray-900">Цена:</p>
                      <p className="text-blue-600 font-bold">{specialty.price}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Время:</p>
                      <p className="text-gray-600">{specialty.time}</p>
                    </div>
                  </div>

                  <Button className="w-full">
                    Заказать ремонт
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* iPhone Problems */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Частые проблемы iPhone
            </h2>
            <p className="text-xl text-gray-600">
              Типичные неисправности устройств Apple и их решение
            </p>
          </div>

          <div className="space-y-8">
            {iPhoneProblems.map((problem, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-5 gap-6">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{problem.problem}</h3>
                      <div className="space-y-2">
                        <p className="text-sm font-medium text-gray-900">Затронутые модели:</p>
                        <div className="flex flex-wrap gap-1">
                          {problem.models.slice(0, 3).map((model, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {model}
                            </Badge>
                          ))}
                          {problem.models.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                              +{problem.models.length - 3}
                            </Badge>
                          )}
                        </div>
                      </div>
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

                    <div className="space-y-4">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <p className="font-semibold text-blue-800 mb-1">Стоимость:</p>
                        <p className="text-blue-600 font-bold">{problem.cost}</p>
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

      {/* Certifications */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="text-center text-white mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Официальная авторизация Apple
            </h2>
            <p className="text-xl text-blue-100">
              Мы являемся авторизованным сервисным центром Apple
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <Card key={index} className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-colors">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Award className="h-8 w-8 text-yellow-400" />
                    <div>
                      <CardTitle className="text-xl text-white">{cert.cert}</CardTitle>
                      <Badge className="bg-yellow-400 text-yellow-900 hover:bg-yellow-400">
                        С {cert.year} года
                      </Badge>
                    </div>
                  </div>
                  <CardDescription className="text-blue-100">
                    {cert.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <h4 className="font-semibold text-white mb-3">Преимущества:</h4>
                  <ul className="space-y-2">
                    {cert.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        <span className="text-blue-100">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IPhoneRepair;