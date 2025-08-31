import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Power, 
  Volume2, 
  Home, 
  ArrowLeft, 
  MoreHorizontal,
  CheckCircle,
  AlertTriangle,
  Settings,
  Wrench,
  Clock
} from 'lucide-react';

const ButtonRepair = () => {
  const buttonTypes = [
    {
      type: "Кнопка питания",
      icon: <Power className="h-8 w-8 text-red-600" />,
      description: "Включение/выключение устройства, блокировка экрана",
      location: "Боковая грань",
      functions: ["Включение/выключение", "Блокировка экрана", "Перезагрузка", "Скриншоты"],
      commonIssues: ["Не нажимается", "Западает", "Не реагирует", "Сломалась"],
      repairMethods: ["Замена кнопки", "Ремонт шлейфа", "Чистка механизма"],
      price: "от 1800 ₽",
      time: "40-60 мин"
    },
    {
      type: "Кнопки громкости",
      icon: <Volume2 className="h-8 w-8 text-blue-600" />,
      description: "Регулировка громкости звука и управление медиа",
      location: "Боковая грань",
      functions: ["Увеличение громкости", "Уменьшение громкости", "Управление медиа", "Быстрые действия"],
      commonIssues: ["Одна кнопка не работает", "Залипают", "Плохой отклик", "Сломались"],
      repairMethods: ["Замена блока кнопок", "Ремонт контактов", "Чистка механизма"],
      price: "от 1600 ₽",
      time: "35-55 мин"
    },
    {
      type: "Кнопка Home",
      icon: <Home className="h-8 w-8 text-green-600" />,
      description: "Возврат на главный экран, Touch ID/отпечаток пальца",
      location: "Передняя панель",
      functions: ["Возврат домой", "Touch ID", "Многозадачность", "Siri/Assistant"],
      commonIssues: ["Не работает Touch ID", "Не нажимается", "Треснула", "Не реагирует"],
      repairMethods: ["Замена кнопки", "Ремонт сенсора", "Калибровка Touch ID"],
      price: "от 2500 ₽",
      time: "60-90 мин"
    },
    {
      type: "Сенсорные кнопки",
      icon: <MoreHorizontal className="h-8 w-8 text-purple-600" />,
      description: "Программные кнопки на экране (Назад, Меню, Домой)",
      location: "Нижняя часть экрана",
      functions: ["Навигация", "Возврат назад", "Меню приложений", "Многозадачность"],
      commonIssues: ["Не реагируют на касания", "Ложные срабатывания", "Не подсвечиваются"],
      repairMethods: ["Калибровка тачскрина", "Замена сенсора", "Программная настройка"],
      price: "от 2000 ₽",
      time: "45-70 мин"
    }
  ];

  const buttonProblems = [
    {
      problem: "Кнопка не нажимается",
      causes: ["Механический износ", "Попадание грязи", "Деформация корпуса", "Поломка пружины"],
      symptoms: ["Нет тактильного отклика", "Кнопка провалилась", "Требует сильного нажатия"],
      solutions: ["Замена кнопки", "Чистка механизма", "Ремонт корпуса", "Замена пружины"],
      difficulty: "Средняя"
    },
    {
      problem: "Кнопка залипает",
      causes: ["Загрязнение", "Износ механизма", "Попадание влаги", "Деформация"],
      symptoms: ["Кнопка не возвращается", "Постоянное нажатие", "Медленный отклик"],
      solutions: ["Чистка кнопки", "Замена механизма", "Сушка устройства", "Регулировка"],
      difficulty: "Низкая"
    },
    {
      problem: "Не работает функция",
      causes: ["Обрыв шлейфа", "Программный сбой", "Повреждение контроллера"],
      symptoms: ["Кнопка нажимается, но не работает", "Частичная работа функций"],
      solutions: ["Ремонт шлейфа", "Переустановка ПО", "Замена контроллера"],
      difficulty: "Высокая"
    }
  ];

  const repairSteps = [
    {
      step: 1,
      title: "Диагностика кнопок",
      description: "Тестируем все кнопки и их функции",
      procedures: ["Проверка отклика", "Тест функций", "Осмотр механизма"],
      time: "10 мин"
    },
    {
      step: 2,
      title: "Разборка устройства",
      description: "Получаем доступ к кнопочному механизму",
      procedures: ["Снятие крышки", "Отключение шлейфов", "Извлечение кнопок"],
      time: "25 мин"
    },
    {
      step: 3,
      title: "Ремонт или замена",
      description: "Чистим, ремонтируем или заменяем кнопки",
      procedures: ["Замена кнопки", "Чистка механизма", "Пайка контактов"],
      time: "20-35 мин"
    },
    {
      step: 4,
      title: "Сборка и тестирование",
      description: "Собираем устройство и проверяем работу кнопок",
      procedures: ["Сборка устройства", "Тест всех кнопок", "Калибровка функций"],
      time: "15-25 мин"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-50 to-pink-100 py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
                Ремонт кнопок телефона
              </h1>
              <p className="text-xl text-gray-600">
                Восстанавливаем работу всех кнопок: питания, громкости, Home, 
                сенсорных кнопок. Быстро и с гарантией.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                  <Power className="h-5 w-5 text-red-600" />
                  <span className="text-sm font-medium">Все типы кнопок</span>
                </div>
                <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                  <Clock className="h-5 w-5 text-blue-600" />
                  <span className="text-sm font-medium">35-90 минут</span>
                </div>
                <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-sm font-medium">от 1600 ₽</span>
                </div>
              </div>
              <Button size="lg" className="text-lg px-8 bg-red-600 hover:bg-red-700">
                <Power className="mr-2 h-5 w-5" />
                Отремонтировать кнопки
              </Button>
            </div>

            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Ремонт кнопок"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Button Types */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Типы кнопок
            </h2>
            <p className="text-xl text-gray-600">
              Ремонтируем все виды кнопок в современных смартфонах
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {buttonTypes.map((button, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center">
                      {button.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl">{button.type}</CardTitle>
                      <Badge variant="outline">{button.location}</Badge>
                    </div>
                  </div>
                  <CardDescription>{button.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Функции:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {button.functions.map((func, idx) => (
                        <div key={idx} className="text-xs bg-gray-50 px-2 py-1 rounded text-center">
                          {func}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Частые проблемы:</h4>
                    <ul className="space-y-2">
                      {button.commonIssues.map((issue, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-sm">
                          <AlertTriangle className="h-4 w-4 text-orange-600" />
                          <span>{issue}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Методы ремонта:</h4>
                    <ul className="space-y-2">
                      {button.repairMethods.map((method, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span>{method}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t pt-4 grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium text-gray-900">Цена:</p>
                      <p className="text-red-600 font-bold">{button.price}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Время:</p>
                      <p className="text-gray-600">{button.time}</p>
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

      {/* Button Problems */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Частые проблемы с кнопками
            </h2>
            <p className="text-xl text-gray-600">
              Типичные неисправности кнопок и способы их устранения
            </p>
          </div>

          <div className="space-y-8">
            {buttonProblems.map((problem, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-4 gap-6">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center space-x-2">
                        <Power className="h-6 w-6 text-red-600" />
                        <span>{problem.problem}</span>
                      </h3>
                      <Badge className={
                        problem.difficulty === 'Низкая' ? 'bg-green-100 text-green-800' :
                        problem.difficulty === 'Средняя' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }>
                        {problem.difficulty}
                      </Badge>
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
                      <h4 className="font-semibold text-gray-900 mb-3">Решения:</h4>
                      <ul className="space-y-1 mb-4">
                        {problem.solutions.map((solution, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            <span>{solution}</span>
                          </li>
                        ))}
                      </ul>
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
              Процесс ремонта кнопок
            </h2>
            <p className="text-xl text-gray-600">
              Как мы восстанавливаем работу кнопок вашего устройства
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {repairSteps.map((step, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                  <CardDescription>{step.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <Badge variant="outline" className="text-red-600 border-red-600">
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

      {/* Button Care Tips */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Уход за кнопками
            </h2>
            <p className="text-xl text-gray-600">
              Как продлить срок службы кнопок вашего устройства
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl flex items-center space-x-2">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <span>Правильный уход</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "Регулярно протирайте кнопки сухой тканью",
                    "Не нажимайте кнопки мокрыми руками",
                    "Используйте чехлы с защитой кнопок",
                    "Избегайте сильных нажатий",
                    "Чистите от пыли и грязи"
                  ].map((tip, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <span className="text-gray-700">{tip}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl flex items-center space-x-2">
                  <AlertTriangle className="h-6 w-6 text-orange-600" />
                  <span>Признаки износа</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "Кнопка стала туго нажиматься",
                    "Нет тактильного отклика",
                    "Кнопка западает или залипает",
                    "Требуется несколько нажатий",
                    "Видимые повреждения или трещины"
                  ].map((sign, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <AlertTriangle className="h-5 w-5 text-orange-600 mt-0.5" />
                      <span className="text-gray-700">{sign}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ButtonRepair;