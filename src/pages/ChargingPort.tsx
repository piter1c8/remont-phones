import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Zap, 
  Usb, 
  Battery, 
  AlertTriangle, 
  CheckCircle, 
  Clock,
  Wrench,
  Shield,
  Cable
} from 'lucide-react';

const ChargingPort = () => {
  const portTypes = [
    {
      type: "USB-C",
      description: "Современный стандарт для большинства Android устройств",
      features: ["Быстрая зарядка", "Передача данных", "Обратимый разъем"],
      devices: ["Samsung Galaxy", "Google Pixel", "OnePlus", "Xiaomi"],
      repairComplexity: "Средняя",
      price: "от 2200 ₽"
    },
    {
      type: "Lightning",
      description: "Фирменный разъем Apple для iPhone и iPad",
      features: ["Компактный размер", "Надежное соединение", "Быстрая зарядка"],
      devices: ["iPhone", "iPad", "AirPods"],
      repairComplexity: "Высокая",
      price: "от 2800 ₽"
    },
    {
      type: "Micro-USB",
      description: "Старый стандарт для бюджетных устройств",
      features: ["Простота", "Доступность", "Совместимость"],
      devices: ["Старые Android", "Бюджетные модели"],
      repairComplexity: "Низкая", 
      price: "от 1800 ₽"
    }
  ];

  const chargingProblems = [
    {
      problem: "Не заряжается совсем",
      symptoms: ["Нет реакции на зарядку", "Не показывает зарядку", "Быстро разряжается"],
      causes: ["Поврежден разъем", "Обрыв контактов", "Неисправность контроллера", "Проблемы с батареей"],
      solutions: ["Замена разъема", "Пайка контактов", "Ремонт контроллера", "Замена батареи"],
      urgency: "Критическая",
      cost: "2000-4500 ₽"
    },
    {
      problem: "Медленная зарядка",
      symptoms: ["Заряжается очень долго", "Прерывистая зарядка", "Нагрев при зарядке"],
      causes: ["Загрязнение разъема", "Износ контактов", "Неисправность кабеля", "Проблемы с ПО"],
      solutions: ["Чистка разъема", "Замена контактов", "Проверка кабеля", "Обновление ПО"],
      urgency: "Средняя",
      cost: "800-2500 ₽"
    },
    {
      problem: "Плохой контакт",
      symptoms: ["Нужно держать кабель в определенном положении", "Прерывается зарядка", "Искры"],
      causes: ["Расшатанный разъем", "Окисление контактов", "Деформация разъема"],
      solutions: ["Замена разъема", "Чистка контактов", "Укрепление крепления"],
      urgency: "Высокая",
      cost: "1500-3000 ₽"
    }
  ];

  const repairSteps = [
    {
      step: 1,
      title: "Диагностика зарядки",
      description: "Проверяем разъем, кабель и зарядную систему",
      procedures: ["Тест разных кабелей", "Проверка контактов", "Измерение тока"],
      time: "15 мин"
    },
    {
      step: 2,
      title: "Разборка устройства",
      description: "Получаем доступ к разъему зарядки",
      procedures: ["Снятие задней крышки", "Отключение батареи", "Доступ к разъему"],
      time: "20 мин"
    },
    {
      step: 3,
      title: "Замена разъема",
      description: "Выпаиваем старый и устанавливаем новый разъем",
      procedures: ["Выпайка старого разъема", "Чистка контактных площадок", "Установка нового"],
      time: "30-45 мин"
    },
    {
      step: 4,
      title: "Тестирование зарядки",
      description: "Проверяем работу зарядки и передачи данных",
      procedures: ["Тест зарядки", "Проверка скорости", "Тест передачи данных"],
      time: "10-15 мин"
    }
  ];

  const preventionTips = [
    {
      title: "Как продлить жизнь разъема",
      tips: [
        "Аккуратно вставляйте и извлекайте кабель",
        "Не дергайте за кабель при отключении",
        "Регулярно чистите разъем от пыли",
        "Используйте качественные кабели",
        "Избегайте зарядки во влажных условиях"
      ]
    },
    {
      title: "Признаки износа разъема",
      tips: [
        "Кабель плохо держится в разъеме",
        "Нужно подбирать положение для зарядки",
        "Прерывистая зарядка",
        "Искры при подключении",
        "Деформация или трещины разъема"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-50 to-orange-100 py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
                Ремонт разъема зарядки
              </h1>
              <p className="text-xl text-gray-600">
                Восстанавливаем возможность зарядки вашего устройства. Работаем со всеми 
                типами разъемов: USB-C, Lightning, Micro-USB.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                  <Zap className="h-5 w-5 text-yellow-600" />
                  <span className="text-sm font-medium">Все типы разъемов</span>
                </div>
                <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                  <Clock className="h-5 w-5 text-blue-600" />
                  <span className="text-sm font-medium">45-75 минут</span>
                </div>
                <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                  <Shield className="h-5 w-5 text-green-600" />
                  <span className="text-sm font-medium">от 1800 ₽</span>
                </div>
              </div>
              <Button size="lg" className="text-lg px-8 bg-yellow-600 hover:bg-yellow-700">
                <Zap className="mr-2 h-5 w-5" />
                Отремонтировать разъем
              </Button>
            </div>

            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/4219654/pexels-photo-4219654.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Ремонт разъема зарядки"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Port Types */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Типы разъемов зарядки
            </h2>
            <p className="text-xl text-gray-600">
              Ремонтируем все современные стандарты зарядных разъемов
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {portTypes.map((port, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Usb className="h-8 w-8 text-yellow-600" />
                  </div>
                  <CardTitle className="text-xl">{port.type}</CardTitle>
                  <CardDescription>{port.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Особенности:</h4>
                    <ul className="space-y-2">
                      {port.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Устройства:</h4>
                    <div className="flex flex-wrap gap-2">
                      {port.devices.map((device, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {device}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="border-t pt-4 space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Сложность:</span>
                      <Badge className={
                        port.repairComplexity === 'Низкая' ? 'bg-green-100 text-green-800' :
                        port.repairComplexity === 'Средняя' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }>
                        {port.repairComplexity}
                      </Badge>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-yellow-600">{port.price}</div>
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

      {/* Charging Problems */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Проблемы с зарядкой
            </h2>
            <p className="text-xl text-gray-600">
              Частые неисправности зарядных разъемов и их решение
            </p>
          </div>

          <div className="space-y-8">
            {chargingProblems.map((problem, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-5 gap-6">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center space-x-2">
                        <Zap className="h-6 w-6 text-yellow-600" />
                        <span>{problem.problem}</span>
                      </h3>
                      <Badge className={
                        problem.urgency === 'Критическая' ? 'bg-red-100 text-red-800' :
                        problem.urgency === 'Высокая' ? 'bg-orange-100 text-orange-800' :
                        'bg-yellow-100 text-yellow-800'
                      }>
                        {problem.urgency}
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
                            <AlertTriangle className="h-4 w-4 text-orange-600" />
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
                      <div className="bg-yellow-50 p-4 rounded-lg">
                        <p className="font-semibold text-yellow-800 mb-1">Стоимость:</p>
                        <p className="text-yellow-600 font-bold">{problem.cost}</p>
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

      {/* Repair Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Процесс замены разъема
            </h2>
            <p className="text-xl text-gray-600">
              Как проходит ремонт зарядного разъема в нашем сервисе
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {repairSteps.map((step, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-yellow-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                  <CardDescription>{step.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <Badge variant="outline" className="text-yellow-600 border-yellow-600">
                      {step.time}
                    </Badge>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Процедуры:</h4>
                    <ul className="space-y-1">
                      {step.procedures.map((procedure, idx) => (
                        <li key={idx} className="text-xs text-gray-600 flex items-center space-x-2">
                          <CheckCircle className="h-3 w-3 text-green-600" />
                          <span>{procedure}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Prevention Tips */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Уход за разъемом зарядки
            </h2>
            <p className="text-xl text-gray-600">
              Как избежать поломки и продлить срок службы разъема
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {preventionTips.map((tipGroup, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center space-x-2">
                    {index === 0 ? (
                      <Shield className="h-6 w-6 text-green-600" />
                    ) : (
                      <AlertTriangle className="h-6 w-6 text-orange-600" />
                    )}
                    <span>{tipGroup.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {tipGroup.tips.map((tip, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        {index === 0 ? (
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                        ) : (
                          <AlertTriangle className="h-5 w-5 text-orange-600 mt-0.5" />
                        )}
                        <span className="text-gray-700">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Fast Charging Info */}
      <section className="py-20 bg-yellow-600">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Восстановление быстрой зарядки
            </h2>
            <p className="text-xl text-yellow-100 mb-12 max-w-3xl mx-auto">
              После ремонта ваше устройство будет заряжаться с оригинальной скоростью
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: <Zap className="h-8 w-8" />, title: "Быстрая зарядка", desc: "Восстановление оригинальной скорости" },
                { icon: <Cable className="h-8 w-8" />, title: "Передача данных", desc: "Полная функциональность USB" },
                { icon: <Battery className="h-8 w-8" />, title: "Безопасность", desc: "Защита от перегрева" },
                { icon: <CheckCircle className="h-8 w-8" />, title: "Тестирование", desc: "Проверка всех режимов" }
              ].map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-yellow-100">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ChargingPort;