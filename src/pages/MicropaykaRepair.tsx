import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Cpu, 
  Zap, 
  Eye, 
  Thermometer, 
  AlertTriangle, 
  CheckCircle,
  Clock,
  Award,
  Wrench,
  Target
} from 'lucide-react';

const MicropaykaRepair = () => {
  const micropaykaServices = [
    {
      service: "Ремонт цепей питания",
      description: "Восстановление поврежденных дорожек питания на материнской плате",
      complexity: "Очень высокая",
      equipment: ["Микроскоп", "Паяльная станция", "Тепловизор"],
      price: "от 4500 ₽",
      time: "2-6 часов",
      successRate: "85%"
    },
    {
      service: "Замена микросхем",
      description: "Замена поврежденных чипов: контроллеры, усилители, процессоры",
      complexity: "Критическая",
      equipment: ["BGA станция", "Микроскоп", "Преднагреватель"],
      price: "от 6500 ₽",
      time: "4-8 часов",
      successRate: "75%"
    },
    {
      service: "Восстановление контактных площадок",
      description: "Восстановление оторванных или поврежденных контактов",
      complexity: "Высокая",
      equipment: ["Микроскоп", "Тонкий припой", "Флюс"],
      price: "от 3500 ₽",
      time: "1-3 часа",
      successRate: "90%"
    },
    {
      service: "Ремонт после короткого замыкания",
      description: "Устранение последствий КЗ, замена сгоревших элементов",
      complexity: "Критическая",
      equipment: ["Тепловизор", "Микроскоп", "Мультиметр"],
      price: "от 5500 ₽",
      time: "3-10 часов",
      successRate: "70%"
    }
  ];

  const micropaykaProblems = [
    {
      problem: "Не включается после воды",
      description: "Короткое замыкание из-за попадания влаги",
      symptoms: ["Полностью не реагирует", "Нагрев при подключении зарядки", "Запах гари"],
      repairSteps: ["Диагностика КЗ", "Поиск поврежденных элементов", "Замена компонентов", "Тестирование"],
      difficulty: "Критическая",
      cost: "4000-8000 ₽"
    },
    {
      problem: "Проблемы с зарядкой",
      description: "Повреждение цепей питания и зарядки",
      symptoms: ["Не заряжается", "Медленная зарядка", "Перегрев при зарядке"],
      repairSteps: ["Диагностика цепей", "Поиск обрывов", "Восстановление дорожек", "Проверка"],
      difficulty: "Высокая",
      cost: "3000-6000 ₽"
    },
    {
      problem: "Нет сети/Wi-Fi",
      description: "Повреждение радиочастотных цепей",
      symptoms: ["Нет сигнала сети", "Не работает Wi-Fi", "Проблемы с Bluetooth"],
      repairSteps: ["Диагностика RF", "Проверка антенн", "Ремонт усилителей", "Калибровка"],
      difficulty: "Очень высокая",
      cost: "4500-7500 ₽"
    }
  ];

  const equipment = [
    {
      tool: "Микроскоп",
      description: "Увеличение до 200x для точной работы с мелкими элементами",
      usage: "Осмотр, диагностика, контроль качества пайки",
      precision: "0.01 мм"
    },
    {
      tool: "BGA станция",
      description: "Профессиональная станция для работы с микросхемами",
      usage: "Снятие и установка процессоров, памяти, контроллеров",
      precision: "±1°C"
    },
    {
      tool: "Тепловизор",
      description: "Поиск перегревающихся элементов и коротких замыканий",
      usage: "Диагностика КЗ, поиск неисправных компонентов",
      precision: "0.1°C"
    },
    {
      tool: "Ультразвуковая ванна",
      description: "Очистка плат от флюса и загрязнений",
      usage: "Подготовка к ремонту, финальная очистка",
      precision: "Молекулярный уровень"
    }
  ];

  const repairSteps = [
    {
      step: 1,
      title: "Диагностика под микроскопом",
      description: "Детальный осмотр платы для выявления повреждений",
      procedures: ["Визуальный осмотр", "Поиск КЗ", "Проверка элементов"],
      time: "30-60 мин"
    },
    {
      step: 2,
      title: "Подготовка к ремонту",
      description: "Очистка платы и подготовка рабочего места",
      procedures: ["Ультразвуковая чистка", "Нанесение флюса", "Настройка оборудования"],
      time: "20-30 мин"
    },
    {
      step: 3,
      title: "Микропайка",
      description: "Выполнение ремонтных работ под микроскопом",
      procedures: ["Демонтаж элементов", "Восстановление дорожек", "Установка новых компонентов"],
      time: "1-6 часов"
    },
    {
      step: 4,
      title: "Контроль качества",
      description: "Проверка качества пайки и тестирование функций",
      procedures: ["Осмотр под микроскопом", "Электрические тесты", "Функциональное тестирование"],
      time: "30-45 мин"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 to-purple-100 py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
                Микропайка и сложный ремонт
              </h1>
              <p className="text-xl text-gray-600">
                Профессиональный ремонт материнских плат на компонентном уровне. 
                Восстанавливаем устройства после серьезных повреждений.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                  <Eye className="h-5 w-5 text-indigo-600" />
                  <span className="text-sm font-medium">Микроскоп 200x</span>
                </div>
                <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                  <Award className="h-5 w-5 text-purple-600" />
                  <span className="text-sm font-medium">Сертифицированные мастера</span>
                </div>
                <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                  <Target className="h-5 w-5 text-green-600" />
                  <span className="text-sm font-medium">85% успеха</span>
                </div>
              </div>
              <Button size="lg" className="text-lg px-8 bg-indigo-600 hover:bg-indigo-700">
                <Cpu className="mr-2 h-5 w-5" />
                Заказать микропайку
              </Button>
            </div>

            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Микропайка"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Micropayka Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Услуги микропайки
            </h2>
            <p className="text-xl text-gray-600">
              Сложные ремонтные работы на компонентном уровне
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {micropaykaServices.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center space-x-2">
                    <Cpu className="h-6 w-6 text-indigo-600" />
                    <span>{service.service}</span>
                  </CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Оборудование:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {service.equipment.map((eq, idx) => (
                        <Badge key={idx} variant="outline" className="justify-center">
                          {eq}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium text-gray-900">Успешность:</p>
                      <div className="text-lg font-bold text-green-600">{service.successRate}</div>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Сложность:</p>
                      <Badge className={
                        service.complexity === 'Высокая' ? 'bg-orange-100 text-orange-800' :
                        service.complexity === 'Очень высокая' ? 'bg-red-100 text-red-800' :
                        'bg-red-100 text-red-800'
                      }>
                        {service.complexity}
                      </Badge>
                    </div>
                  </div>

                  <div className="border-t pt-4 grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium text-gray-900">Цена:</p>
                      <p className="text-indigo-600 font-bold">{service.price}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Время:</p>
                      <p className="text-gray-600">{service.time}</p>
                    </div>
                  </div>

                  <Button className="w-full">
                    Консультация
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Complex Problems */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Сложные случаи для микропайки
            </h2>
            <p className="text-xl text-gray-600">
              Проблемы, требующие профессионального вмешательства на компонентном уровне
            </p>
          </div>

          <div className="space-y-8">
            {micropaykaProblems.map((problem, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-5 gap-6">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center space-x-2">
                        <Zap className="h-6 w-6 text-red-600" />
                        <span>{problem.problem}</span>
                      </h3>
                      <Badge className={
                        problem.difficulty === 'Высокая' ? 'bg-orange-100 text-orange-800' :
                        'bg-red-100 text-red-800'
                      }>
                        {problem.difficulty}
                      </Badge>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Описание:</h4>
                      <p className="text-sm text-gray-600">{problem.description}</p>
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
                      <h4 className="font-semibold text-gray-900 mb-3">Этапы ремонта:</h4>
                      <ul className="space-y-1">
                        {problem.repairSteps.map((step, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            <span>{step}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <div className="bg-indigo-50 p-4 rounded-lg">
                        <p className="font-semibold text-indigo-800 mb-1">Стоимость:</p>
                        <p className="text-indigo-600 font-bold">{problem.cost}</p>
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

      {/* Equipment */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Профессиональное оборудование
            </h2>
            <p className="text-xl text-gray-600">
              Используем современное высокоточное оборудование для микропайки
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {equipment.map((eq, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center space-x-2">
                    <Eye className="h-6 w-6 text-blue-600" />
                    <span>{eq.tool}</span>
                  </CardTitle>
                  <CardDescription>{eq.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Применение:</h4>
                    <p className="text-gray-600 text-sm">{eq.usage}</p>
                  </div>

                  <div className="bg-blue-50 p-3 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-blue-800">Точность:</span>
                      <span className="font-bold text-blue-600">{eq.precision}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Repair Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Процесс микропайки
            </h2>
            <p className="text-xl text-gray-600">
              Как проходят сложные ремонтные работы в нашей лаборатории
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {repairSteps.map((step, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                  <CardDescription>{step.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <Badge variant="outline" className="text-indigo-600 border-indigo-600">
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

      {/* Expert Level */}
      <section className="py-20 bg-indigo-600">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Экспертный уровень ремонта
            </h2>
            <p className="text-xl text-indigo-100 mb-12 max-w-3xl mx-auto">
              Наши мастера имеют многолетний опыт работы с микроэлектроникой и сертификаты международного уровня
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: <Award className="h-8 w-8" />, title: "Сертификация IPC", desc: "Международные стандарты пайки" },
                { icon: <Eye className="h-8 w-8" />, title: "Микроскопия", desc: "Работа с увеличением до 200x" },
                { icon: <Thermometer className="h-8 w-8" />, title: "Контроль температуры", desc: "Точность до 1°C" },
                { icon: <Target className="h-8 w-8" />, title: "Высокая точность", desc: "Работа с элементами 0.01мм" }
              ].map((expertise, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    {expertise.icon}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{expertise.title}</h3>
                  <p className="text-indigo-100">{expertise.desc}</p>
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

export default MicropaykaRepair;