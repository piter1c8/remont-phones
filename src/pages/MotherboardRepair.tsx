import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Cpu, 
  Zap, 
  AlertTriangle, 
  CheckCircle, 
  Clock, 
  Shield,
  Thermometer,
  Eye,
  Wrench,
  CircuitBoard
} from 'lucide-react';

const MotherboardRepair = () => {
  const motherboardServices = [
    {
      service: "Диагностика материнской платы",
      description: "Полная диагностика всех компонентов и цепей платы",
      procedures: ["Визуальный осмотр", "Электрические измерения", "Тепловизионный анализ", "Функциональное тестирование"],
      price: "Бесплатно при ремонте",
      time: "1-2 часа",
      complexity: "Высокая"
    },
    {
      service: "Ремонт цепей питания",
      description: "Восстановление поврежденных цепей питания процессора и компонентов",
      procedures: ["Поиск КЗ", "Замена элементов", "Восстановление дорожек", "Проверка напряжений"],
      price: "от 4500 ₽",
      time: "2-6 часов",
      complexity: "Очень высокая"
    },
    {
      service: "Замена процессора",
      description: "Замена главного процессора устройства (SoC)",
      procedures: ["Демонтаж старого CPU", "Подготовка площадки", "Установка нового", "Прошивка"],
      price: "от 8500 ₽",
      time: "4-8 часов",
      complexity: "Критическая"
    },
    {
      service: "Ремонт памяти",
      description: "Восстановление или замена модулей оперативной и постоянной памяти",
      procedures: ["Диагностика памяти", "Демонтаж чипов", "Установка новых", "Программирование"],
      price: "от 6500 ₽",
      time: "3-6 часов",
      complexity: "Критическая"
    },
    {
      service: "Восстановление после КЗ",
      description: "Устранение последствий короткого замыкания",
      procedures: ["Поиск места КЗ", "Замена сгоревших элементов", "Восстановление дорожек", "Тестирование"],
      price: "от 5500 ₽",
      time: "3-10 часов",
      complexity: "Критическая"
    },
    {
      service: "Реболлинг BGA чипов",
      description: "Восстановление контактов микросхем в корпусе BGA",
      procedures: ["Демонтаж чипа", "Очистка контактов", "Нанесение новых шариков", "Установка"],
      price: "от 7500 ₽",
      time: "4-6 часов",
      complexity: "Критическая"
    }
  ];

  const motherboardProblems = [
    {
      problem: "Не включается",
      symptoms: ["Нет реакции на кнопку питания", "Не заряжается", "Нет признаков жизни"],
      causes: ["Повреждение цепей питания", "Неисправность процессора", "КЗ на плате"],
      diagnostics: ["Измерение напряжений", "Тепловизионный анализ", "Проверка ключевых элементов"],
      repairMethods: ["Ремонт цепей питания", "Замена процессора", "Устранение КЗ"],
      successRate: "75%",
      avgCost: "4500-8500 ₽"
    },
    {
      problem: "Перегрев и выключения",
      symptoms: ["Сильный нагрев", "Внезапные выключения", "Снижение производительности"],
      causes: ["Неисправность системы охлаждения", "КЗ в цепях", "Деградация процессора"],
      diagnostics: ["Тепловизионная съемка", "Мониторинг температур", "Анализ потребления"],
      repairMethods: ["Замена термопасты", "Ремонт цепей", "Замена процессора"],
      successRate: "85%",
      avgCost: "3500-7000 ₽"
    },
    {
      problem: "Нестабильная работа",
      symptoms: ["Случайные перезагрузки", "Зависания", "Ошибки приложений"],
      causes: ["Проблемы с памятью", "Нестабильное питание", "Перегрев компонентов"],
      diagnostics: ["Тест памяти", "Проверка питания", "Стресс-тестирование"],
      repairMethods: ["Ремонт/замена памяти", "Стабилизация питания", "Улучшение охлаждения"],
      successRate: "80%",
      avgCost: "4000-6500 ₽"
    }
  ];

  const repairSteps = [
    {
      step: 1,
      title: "Предварительная диагностика",
      description: "Определяем характер и масштаб повреждений",
      tools: ["Мультиметр", "Осциллограф", "Тепловизор"],
      time: "1-2 часа"
    },
    {
      step: 2,
      title: "Детальный анализ",
      description: "Микроскопический осмотр и электрические измерения",
      tools: ["Микроскоп", "Источник питания", "Логический анализатор"],
      time: "1-3 часа"
    },
    {
      step: 3,
      title: "Ремонтные работы",
      description: "Выполнение необходимых ремонтных процедур",
      tools: ["BGA станция", "Паяльная станция", "Ультразвуковая ванна"],
      time: "2-8 часов"
    },
    {
      step: 4,
      title: "Тестирование и контроль",
      description: "Проверка работоспособности всех систем",
      tools: ["Тестовые стенды", "Программы диагностики", "Измерительные приборы"],
      time: "1-2 часа"
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
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
                Ремонт материнской платы
              </h1>
              <p className="text-xl text-gray-600">
                Сложный ремонт материнских плат на компонентном уровне. 
                Восстанавливаем устройства после серьезных повреждений.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                  <CircuitBoard className="h-5 w-5 text-blue-600" />
                  <span className="text-sm font-medium">Компонентный уровень</span>
                </div>
                <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                  <Eye className="h-5 w-5 text-purple-600" />
                  <span className="text-sm font-medium">Микроскопия</span>
                </div>
                <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                  <Shield className="h-5 w-5 text-green-600" />
                  <span className="text-sm font-medium">75-85% успеха</span>
                </div>
              </div>
              <Button size="lg" className="text-lg px-8 bg-blue-600 hover:bg-blue-700">
                <Cpu className="mr-2 h-5 w-5" />
                Диагностика материнской платы
              </Button>
            </div>

            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Материнская плата"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Motherboard Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Услуги по ремонту материнских плат
            </h2>
            <p className="text-xl text-gray-600">
              Полный спектр работ по восстановлению главной платы устройства
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {motherboardServices.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center space-x-2">
                    <CircuitBoard className="h-6 w-6 text-blue-600" />
                    <span>{service.service}</span>
                  </CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Процедуры:</h4>
                    <ul className="space-y-2">
                      {service.procedures.map((procedure, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span>{procedure}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t pt-4 space-y-3">
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
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Сложность:</span>
                      <Badge className={
                        service.complexity === 'Высокая' ? 'bg-orange-100 text-orange-800' :
                        service.complexity === 'Очень высокая' ? 'bg-red-100 text-red-800' :
                        'bg-red-100 text-red-800'
                      }>
                        {service.complexity}
                      </Badge>
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

      {/* Motherboard Problems */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Проблемы материнской платы
            </h2>
            <p className="text-xl text-gray-600">
              Сложные неисправности, требующие профессионального вмешательства
            </p>
          </div>

          <div className="space-y-8">
            {motherboardProblems.map((problem, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-6 gap-6">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center space-x-2">
                        <Cpu className="h-6 w-6 text-blue-600" />
                        <span>{problem.problem}</span>
                      </h3>
                      <div className="space-y-2">
                        <div>
                          <p className="text-sm font-medium text-gray-900">Успешность:</p>
                          <div className="flex items-center space-x-2">
                            <Progress value={parseInt(problem.successRate)} className="h-2 flex-1" />
                            <span className="text-sm font-bold text-green-600">{problem.successRate}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Симптомы:</h4>
                      <ul className="space-y-1">
                        {problem.symptoms.map((symptom, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-center space-x-2">
                            <AlertTriangle className="h-4 w-4 text-red-600" />
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
                      <h4 className="font-semibold text-gray-900 mb-3">Диагностика:</h4>
                      <ul className="space-y-1">
                        {problem.diagnostics.map((diag, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-center space-x-2">
                            <Eye className="h-4 w-4 text-blue-600" />
                            <span>{diag}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Методы ремонта:</h4>
                      <ul className="space-y-1">
                        {problem.repairMethods.map((method, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            <span>{method}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <p className="font-semibold text-blue-800 mb-1">Стоимость:</p>
                        <p className="text-blue-600 font-bold">{problem.avgCost}</p>
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
              Процесс ремонта материнской платы
            </h2>
            <p className="text-xl text-gray-600">
              Как проходит сложный ремонт главной платы устройства
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {repairSteps.map((step, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                  <CardDescription>{step.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <Badge variant="outline" className="text-blue-600 border-blue-600">
                      {step.time}
                    </Badge>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Инструменты:</h4>
                    <div className="space-y-1">
                      {step.tools.map((tool, idx) => (
                        <div key={idx} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded text-center">
                          {tool}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Warning */}
      <section className="py-20 bg-yellow-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-yellow-200 bg-yellow-50">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <AlertTriangle className="h-16 w-16 text-yellow-600 mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Предупреждение о сложности ремонта
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-4">Высокие риски:</h3>
                    <ul className="space-y-3">
                      {[
                        "Возможность полной потери устройства",
                        "Невозможность восстановления данных",
                        "Высокая стоимость ремонта",
                        "Длительные сроки выполнения"
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
                        "Бесплатная диагностика",
                        "Честная оценка шансов восстановления",
                        "Возврат средств при неудаче",
                        "Сохранение всех извлекаемых данных"
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

export default MotherboardRepair;