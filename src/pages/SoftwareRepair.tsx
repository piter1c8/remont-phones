import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Cpu, 
  Download, 
  Unlock, 
  RefreshCw, 
  Shield, 
  AlertTriangle,
  CheckCircle,
  Smartphone,
  Settings,
  Code
} from 'lucide-react';

const SoftwareRepair = () => {
  const softwareServices = [
    {
      service: "Прошивка устройства",
      description: "Установка официальной или кастомной прошивки",
      icon: <Download className="h-8 w-8 text-blue-600" />,
      price: "от 1500 ₽",
      time: "1-2 часа",
      complexity: "Средняя",
      risks: "Низкие"
    },
    {
      service: "Разблокировка от оператора",
      description: "Снятие блокировки мобильного оператора",
      icon: <Unlock className="h-8 w-8 text-green-600" />,
      price: "от 2000 ₽", 
      time: "30-60 мин",
      complexity: "Низкая",
      risks: "Минимальные"
    },
    {
      service: "Восстановление IMEI",
      description: "Восстановление уникального идентификатора устройства",
      icon: <RefreshCw className="h-8 w-8 text-purple-600" />,
      price: "от 2500 ₽",
      time: "1-3 часа", 
      complexity: "Высокая",
      risks: "Средние"
    },
    {
      service: "Сброс к заводским настройкам",
      description: "Полная очистка устройства с сохранением данных",
      icon: <Settings className="h-8 w-8 text-orange-600" />,
      price: "от 800 ₽",
      time: "30-45 мин",
      complexity: "Низкая", 
      risks: "Минимальные"
    },
    {
      service: "Установка кастомных прошивок",
      description: "LineageOS, Pixel Experience и другие кастомы",
      icon: <Code className="h-8 w-8 text-indigo-600" />,
      price: "от 3000 ₽",
      time: "2-4 часа",
      complexity: "Очень высокая",
      risks: "Высокие"
    },
    {
      service: "Восстановление после неудачной прошивки",
      description: "Восстановление 'окирпиченных' устройств",
      icon: <AlertTriangle className="h-8 w-8 text-red-600" />,
      price: "от 3500 ₽",
      time: "2-6 часов",
      complexity: "Очень высокая", 
      risks: "Высокие"
    }
  ];

  const commonIssues = [
    {
      issue: "Зависает при загрузке",
      symptoms: ["Логотип производителя", "Бесконечная загрузка", "Циклическая перезагрузка"],
      causes: ["Поврежденная прошивка", "Конфликт приложений", "Аппаратная неисправность"],
      solution: "Переустановка ПО или аппаратный ремонт"
    },
    {
      issue: "Медленная работа",
      symptoms: ["Долгий отклик", "Зависания приложений", "Перегрев"],
      causes: ["Переполненная память", "Вирусы", "Устаревшая прошивка"],
      solution: "Оптимизация системы или обновление ПО"
    },
    {
      issue: "Ошибки приложений",
      symptoms: ["Вылеты приложений", "Ошибки установки", "Проблемы с Play Market"],
      causes: ["Поврежденный кэш", "Конфликт версий", "Проблемы с аккаунтом"],
      solution: "Очистка системы и переустановка сервисов"
    }
  ];

  const supportedBrands = [
    {
      brand: "Android",
      systems: ["Stock Android", "MIUI", "One UI", "EMUI", "OxygenOS"],
      services: ["Прошивка", "Root", "Разблокировка", "Кастомные ROM"],
      difficulty: "Средняя"
    },
    {
      brand: "iOS", 
      systems: ["iOS 12-17", "iPadOS"],
      services: ["Восстановление", "Джейлбрейк", "Разблокировка iCloud"],
      difficulty: "Высокая"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-indigo-100 py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
                Программный ремонт телефонов
              </h1>
              <p className="text-xl text-gray-600">
                Решаем любые программные проблемы: прошивка, разблокировка, 
                восстановление после неудачных обновлений.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                  <Cpu className="h-5 w-5 text-purple-600" />
                  <span className="text-sm font-medium">Все ОС</span>
                </div>
                <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                  <Shield className="h-5 w-5 text-green-600" />
                  <span className="text-sm font-medium">Безопасно</span>
                </div>
                <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                  <RefreshCw className="h-5 w-5 text-blue-600" />
                  <span className="text-sm font-medium">от 1500 ₽</span>
                </div>
              </div>
              <Button size="lg" className="text-lg px-8 bg-purple-600 hover:bg-purple-700">
                <Cpu className="mr-2 h-5 w-5" />
                Заказать программный ремонт
              </Button>
            </div>

            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Программный ремонт"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Software Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Программные услуги
            </h2>
            <p className="text-xl text-gray-600">
              Полный спектр программного обслуживания мобильных устройств
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {softwareServices.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-lg">{service.service}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-medium text-gray-900">Цена:</p>
                      <p className="text-blue-600 font-bold">{service.price}</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Время:</p>
                      <p className="text-gray-600">{service.time}</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Сложность:</span>
                      <Badge className={
                        service.complexity === 'Низкая' ? 'bg-green-100 text-green-800' :
                        service.complexity === 'Средняя' ? 'bg-yellow-100 text-yellow-800' :
                        service.complexity === 'Высокая' ? 'bg-orange-100 text-orange-800' :
                        'bg-red-100 text-red-800'
                      }>
                        {service.complexity}
                      </Badge>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Риски:</span>
                      <span className={`text-sm font-medium ${
                        service.risks === 'Минимальные' || service.risks === 'Низкие' ? 'text-green-600' :
                        service.risks === 'Средние' ? 'text-yellow-600' :
                        'text-red-600'
                      }`}>
                        {service.risks}
                      </span>
                    </div>
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

      {/* Common Issues */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Частые программные проблемы
            </h2>
            <p className="text-xl text-gray-600">
              Типичные неисправности ПО и способы их устранения
            </p>
          </div>

          <div className="space-y-8">
            {commonIssues.map((issue, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-4 gap-6">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center space-x-2">
                        <AlertTriangle className="h-6 w-6 text-red-600" />
                        <span>{issue.issue}</span>
                      </h3>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Симптомы:</h4>
                      <ul className="space-y-1">
                        {issue.symptoms.map((symptom, idx) => (
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
                        {issue.causes.map((cause, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                            <span>{cause}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Решение:</h4>
                        <p className="text-gray-600 text-sm">{issue.solution}</p>
                      </div>
                      <Button className="w-full">
                        Диагностика ПО
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Systems */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Поддерживаемые системы
            </h2>
            <p className="text-xl text-gray-600">
              Работаем со всеми популярными операционными системами
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {supportedBrands.map((brand, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center space-x-2">
                    <Smartphone className="h-6 w-6 text-blue-600" />
                    <span>{brand.brand}</span>
                  </CardTitle>
                  <Badge className={
                    brand.difficulty === 'Средняя' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }>
                    Сложность: {brand.difficulty}
                  </Badge>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Поддерживаемые системы:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {brand.systems.map((system, idx) => (
                        <div key={idx} className="bg-gray-50 px-3 py-2 rounded text-sm text-center">
                          {system}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Доступные услуги:</h4>
                    <ul className="space-y-2">
                      {brand.services.map((service, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span>{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button className="w-full">
                    Выбрать {brand.brand}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Warning Section */}
      <section className="py-20 bg-yellow-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-yellow-200 bg-yellow-50">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <AlertTriangle className="h-16 w-16 text-yellow-600 mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Важные предупреждения
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-4">Риски программного ремонта:</h3>
                    <ul className="space-y-3">
                      {[
                        "Потеря гарантии производителя",
                        "Возможность 'окирпичивания' устройства",
                        "Потеря данных при неудачной прошивке",
                        "Нестабильная работа кастомных прошивок"
                      ].map((risk, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
                          <span className="text-gray-700">{risk}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-4">Наши гарантии:</h3>
                    <ul className="space-y-3">
                      {[
                        "Предварительное резервное копирование",
                        "Возможность отката к исходной прошивке",
                        "Гарантия на выполненные работы",
                        "Бесплатное исправление в случае проблем"
                      ].map((guarantee, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                          <span className="text-gray-700">{guarantee}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SoftwareRepair;