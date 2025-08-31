import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Battery, 
  Zap, 
  Clock, 
  Shield, 
  CheckCircle, 
  AlertTriangle,
  TrendingDown,
  Smartphone,
  Wrench
} from 'lucide-react';

const BatteryReplacement = () => {
  const batteryTypes = [
    {
      type: "Литий-ионные (Li-Ion)",
      description: "Стандартные батареи для большинства смартфонов",
      capacity: "2000-5000 mAh",
      lifespan: "2-3 года",
      price: "от 1800 ₽",
      pros: ["Доступная цена", "Быстрая зарядка", "Стабильная работа"],
      usage: "iPhone, Samsung Galaxy, большинство Android"
    },
    {
      type: "Литий-полимерные (Li-Po)",
      description: "Современные батареи с улучшенными характеристиками",
      capacity: "3000-6000 mAh", 
      lifespan: "3-4 года",
      price: "от 2500 ₽",
      pros: ["Большая емкость", "Долгий срок службы", "Безопасность"],
      usage: "Флагманские модели, игровые смартфоны"
    }
  ];

  const batteryProblems = [
    {
      problem: "Быстрая разрядка",
      symptoms: ["Батарея садится за 2-4 часа", "Резкое падение заряда", "Нагрев устройства"],
      causes: ["Износ батареи", "Фоновые приложения", "Неисправность контроллера"],
      solution: "Замена аккумулятора",
      urgency: "Средняя"
    },
    {
      problem: "Не заряжается",
      symptoms: ["Не реагирует на зарядку", "Заряжается очень медленно", "Прерывистая зарядка"],
      causes: ["Неисправность батареи", "Проблемы с разъемом", "Неисправность контроллера"],
      solution: "Диагностика + замена компонентов",
      urgency: "Высокая"
    },
    {
      problem: "Вздутие батареи",
      symptoms: ["Выпуклость корпуса", "Отходящий экран", "Деформация устройства"],
      causes: ["Перегрев", "Заводской брак", "Неправильная зарядка"],
      solution: "Срочная замена батареи",
      urgency: "Критическая"
    }
  ];

  const replacementProcess = [
    {
      step: 1,
      title: "Диагностика батареи",
      description: "Проверяем состояние аккумулятора и зарядной системы",
      time: "10 мин",
      tools: ["Мультиметр", "Программы диагностики"]
    },
    {
      step: 2,
      title: "Разборка устройства", 
      description: "Аккуратно разбираем телефон для доступа к батарее",
      time: "15 мин",
      tools: ["Специальные отвертки", "Присоски", "Медиаторы"]
    },
    {
      step: 3,
      title: "Замена аккумулятора",
      description: "Устанавливаем новую батарею и подключаем все разъемы",
      time: "10 мин", 
      tools: ["Новая батарея", "Термопаста", "Изолента"]
    },
    {
      step: 4,
      title: "Калибровка и тестирование",
      description: "Калибруем батарею и проверяем корректность зарядки",
      time: "15 мин",
      tools: ["Зарядное устройство", "Программы тестирования"]
    }
  ];

  const batteryTips = [
    {
      title: "Как продлить жизнь батареи",
      tips: [
        "Избегайте полной разрядки (заряжайте при 20-30%)",
        "Не оставляйте телефон на зарядке на всю ночь",
        "Используйте оригинальные зарядные устройства",
        "Избегайте перегрева устройства",
        "Отключайте неиспользуемые функции (GPS, Bluetooth)"
      ]
    },
    {
      title: "Признаки износа батареи",
      tips: [
        "Быстрая разрядка (менее 8 часов работы)",
        "Медленная зарядка (более 3 часов до 100%)",
        "Внезапные выключения при низком заряде",
        "Нагрев во время зарядки",
        "Вздутие корпуса или экрана"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-emerald-100 py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
                Замена батареи телефона
              </h1>
              <p className="text-xl text-gray-600">
                Восстановите автономность вашего устройства. Используем только качественные 
                аккумуляторы с гарантией до 12 месяцев.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                  <Clock className="h-5 w-5 text-green-600" />
                  <span className="text-sm font-medium">20-40 минут</span>
                </div>
                <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                  <Shield className="h-5 w-5 text-blue-600" />
                  <span className="text-sm font-medium">Гарантия 12 месяцев</span>
                </div>
                <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                  <Zap className="h-5 w-5 text-yellow-600" />
                  <span className="text-sm font-medium">от 1800 ₽</span>
                </div>
              </div>
              <Button size="lg" className="text-lg px-8 bg-green-600 hover:bg-green-700">
                <Battery className="mr-2 h-5 w-5" />
                Заказать замену батареи
              </Button>
            </div>

            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Замена батареи"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Battery Health Check */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Проверка состояния батареи
            </h2>
            <p className="text-xl text-gray-600">
              Определите, нужна ли замена аккумулятора вашему устройству
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="shadow-xl">
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-gray-900">Тест батареи</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium">Емкость батареи</span>
                          <span className="text-sm text-gray-600">78%</span>
                        </div>
                        <Progress value={78} className="h-3" />
                        <p className="text-xs text-gray-500 mt-1">Рекомендуется замена при снижении до 80%</p>
                      </div>

                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium">Циклы зарядки</span>
                          <span className="text-sm text-gray-600">847 из 1000</span>
                        </div>
                        <Progress value={84.7} className="h-3" />
                        <p className="text-xs text-gray-500 mt-1">Критический износ после 1000 циклов</p>
                      </div>

                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium">Время автономной работы</span>
                          <span className="text-sm text-gray-600">6.5 часов</span>
                        </div>
                        <Progress value={54} className="h-3" />
                        <p className="text-xs text-gray-500 mt-1">Норма: 12+ часов</p>
                      </div>
                    </div>

                    <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <AlertTriangle className="h-5 w-5 text-orange-600" />
                        <span className="font-semibold text-orange-800">Рекомендация</span>
                      </div>
                      <p className="text-orange-700 text-sm">
                        Состояние батареи ухудшилось. Рекомендуем замену для восстановления нормальной работы.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-gray-900">Симптомы износа</h3>
                    
                    <div className="space-y-3">
                      {[
                        { symptom: "Быстрая разрядка", severity: "high" },
                        { symptom: "Медленная зарядка", severity: "medium" },
                        { symptom: "Нагрев при зарядке", severity: "high" },
                        { symptom: "Внезапные выключения", severity: "critical" }
                      ].map((item, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <span className="text-gray-700">{item.symptom}</span>
                          <Badge className={
                            item.severity === 'critical' ? 'bg-red-500 hover:bg-red-500' :
                            item.severity === 'high' ? 'bg-orange-500 hover:bg-orange-500' :
                            'bg-yellow-500 hover:bg-yellow-500'
                          }>
                            {item.severity === 'critical' ? 'Критично' :
                             item.severity === 'high' ? 'Высокий' : 'Средний'}
                          </Badge>
                        </div>
                      ))}
                    </div>

                    <Button className="w-full bg-green-600 hover:bg-green-700" size="lg">
                      <Battery className="mr-2 h-5 w-5" />
                      Заменить батарею сейчас
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Battery Types */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Типы аккумуляторов
            </h2>
            <p className="text-xl text-gray-600">
              Используем только качественные батареи проверенных производителей
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {batteryTypes.map((battery, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center space-x-2">
                    <Battery className="h-6 w-6 text-green-600" />
                    <span>{battery.type}</span>
                  </CardTitle>
                  <CardDescription>{battery.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-medium text-gray-900">Емкость:</p>
                      <p className="text-gray-600">{battery.capacity}</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Срок службы:</p>
                      <p className="text-gray-600">{battery.lifespan}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Преимущества:</h4>
                    <ul className="space-y-2">
                      {battery.pros.map((pro, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span>{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="font-medium text-gray-900 mb-2">Подходит для:</p>
                    <p className="text-gray-600 text-sm">{battery.usage}</p>
                  </div>

                  <div className="border-t pt-4 flex justify-between items-center">
                    <div className="text-2xl font-bold text-green-600">{battery.price}</div>
                    <Button>Выбрать</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Common Problems */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Частые проблемы с батареей
            </h2>
            <p className="text-xl text-gray-600">
              Как определить, что пора менять аккумулятор
            </p>
          </div>

          <div className="space-y-8">
            {batteryProblems.map((problem, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-4 gap-6">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center space-x-2">
                        <TrendingDown className="h-6 w-6 text-red-600" />
                        <span>{problem.problem}</span>
                      </h3>
                      <Badge className={
                        problem.urgency === 'Критическая' ? 'bg-red-500 hover:bg-red-500' :
                        problem.urgency === 'Высокая' ? 'bg-orange-500 hover:bg-orange-500' :
                        'bg-yellow-500 hover:bg-yellow-500'
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
                      <h4 className="font-semibold text-gray-900 mb-3">Возможные причины:</h4>
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
                        <h4 className="font-semibold text-gray-900 mb-2">Решение:</h4>
                        <p className="text-gray-600 text-sm">{problem.solution}</p>
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

      {/* Replacement Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Процесс замены батареи
            </h2>
            <p className="text-xl text-gray-600">
              Как проходит замена аккумулятора в нашем сервисе
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {replacementProcess.map((step, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                  <CardDescription>{step.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <Badge variant="outline" className="text-green-600 border-green-600">
                      {step.time}
                    </Badge>
                  </div>
                  
                  <div>
                    <p className="font-medium text-gray-900 mb-2 text-sm">Инструменты:</p>
                    <div className="flex flex-wrap gap-1">
                      {step.tools.map((tool, idx) => (
                        <span key={idx} className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Полезные советы
            </h2>
            <p className="text-xl text-gray-600">
              Как ухаживать за батареей и продлить её срок службы
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {batteryTips.map((tipGroup, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center space-x-2">
                    <Battery className="h-6 w-6 text-green-600" />
                    <span>{tipGroup.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {tipGroup.tips.map((tip, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
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

      <Footer />
    </div>
  );
};

export default BatteryReplacement;