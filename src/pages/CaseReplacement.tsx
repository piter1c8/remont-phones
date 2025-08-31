import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Smartphone, 
  Palette, 
  Shield, 
  Wrench, 
  Clock, 
  CheckCircle,
  AlertTriangle,
  Star,
  Package
} from 'lucide-react';

const CaseReplacement = () => {
  const caseTypes = [
    {
      type: "Задняя крышка",
      description: "Замена поврежденной задней панели устройства",
      materials: ["Стекло", "Пластик", "Металл", "Керамика"],
      repairReasons: ["Трещины", "Сколы", "Царапины", "Потеря цвета"],
      price: "от 2500 ₽",
      time: "60-90 мин",
      difficulty: "Средняя"
    },
    {
      type: "Рамка корпуса",
      description: "Замена средней части корпуса (рамки)",
      materials: ["Алюминий", "Нержавеющая сталь", "Пластик"],
      repairReasons: ["Деформация", "Трещины", "Износ покрытия", "Повреждение разъемов"],
      price: "от 3500 ₽",
      time: "90-120 мин",
      difficulty: "Высокая"
    },
    {
      type: "Полная замена корпуса",
      description: "Комплексная замена всех элементов корпуса",
      materials: ["Оригинальные детали", "Качественные аналоги"],
      repairReasons: ["Серьезные повреждения", "Множественные дефекты", "Изменение цвета"],
      price: "от 4500 ₽",
      time: "2-3 часа",
      difficulty: "Очень высокая"
    }
  ];

  const colorOptions = [
    { color: "Черный", popularity: "Очень высокая", availability: "В наличии" },
    { color: "Белый", popularity: "Высокая", availability: "В наличии" },
    { color: "Синий", popularity: "Высокая", availability: "В наличии" },
    { color: "Красный", popularity: "Средняя", availability: "Под заказ" },
    { color: "Зеленый", popularity: "Средняя", availability: "Под заказ" },
    { color: "Фиолетовый", popularity: "Низкая", availability: "Под заказ" },
    { color: "Золотой", popularity: "Средняя", availability: "В наличии" },
    { color: "Розовый", popularity: "Низкая", availability: "Под заказ" }
  ];

  const repairSteps = [
    {
      step: 1,
      title: "Оценка повреждений",
      description: "Определяем объем работ и необходимые детали",
      procedures: ["Осмотр корпуса", "Оценка повреждений", "Подбор деталей"],
      time: "15 мин"
    },
    {
      step: 2,
      title: "Полная разборка",
      description: "Извлекаем все компоненты из старого корпуса",
      procedures: ["Снятие экрана", "Извлечение платы", "Демонтаж компонентов"],
      time: "45-60 мин"
    },
    {
      step: 3,
      title: "Установка в новый корпус",
      description: "Переносим все детали в новый корпус",
      procedures: ["Установка платы", "Подключение шлейфов", "Установка экрана"],
      time: "60-90 мин"
    },
    {
      step: 4,
      title: "Финальная сборка",
      description: "Окончательная сборка и тестирование",
      procedures: ["Проверка креплений", "Тест всех функций", "Контроль качества"],
      time: "30-45 мин"
    }
  ];

  const caseProblems = [
    {
      problem: "Трещины и сколы",
      description: "Повреждения от падений и ударов",
      severity: "Средняя",
      solutions: ["Замена поврежденной части", "Полировка мелких царапин", "Защитная пленка"],
      prevention: ["Использование чехла", "Осторожное обращение", "Избегание падений"]
    },
    {
      problem: "Деформация корпуса",
      description: "Изгиб или искривление рамки устройства",
      severity: "Высокая",
      solutions: ["Замена рамки", "Правка деформации", "Полная замена корпуса"],
      prevention: ["Качественный чехол", "Избегание давления", "Правильное хранение"]
    },
    {
      problem: "Износ покрытия",
      description: "Потертости, царапины, потеря цвета",
      severity: "Низкая",
      solutions: ["Полировка", "Покраска", "Замена крышки"],
      prevention: ["Защитная пленка", "Аккуратное использование", "Регулярная чистка"]
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
                Замена корпуса телефона
              </h1>
              <p className="text-xl text-gray-600">
                Восстанавливаем внешний вид вашего устройства. Заменяем поврежденные 
                части корпуса или меняем цвет на любой доступный.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                  <Palette className="h-5 w-5 text-purple-600" />
                  <span className="text-sm font-medium">8 цветов</span>
                </div>
                <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                  <Clock className="h-5 w-5 text-blue-600" />
                  <span className="text-sm font-medium">2-3 часа</span>
                </div>
                <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                  <Shield className="h-5 w-5 text-green-600" />
                  <span className="text-sm font-medium">от 2500 ₽</span>
                </div>
              </div>
              <Button size="lg" className="text-lg px-8 bg-purple-600 hover:bg-purple-700">
                <Package className="mr-2 h-5 w-5" />
                Заменить корпус
              </Button>
            </div>

            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Замена корпуса"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Case Types */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Типы замены корпуса
            </h2>
            <p className="text-xl text-gray-600">
              Различные варианты восстановления внешнего вида устройства
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseTypes.map((caseType, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Smartphone className="h-8 w-8 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl">{caseType.type}</CardTitle>
                  <CardDescription>{caseType.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Материалы:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {caseType.materials.map((material, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs justify-center">
                          {material}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Причины замены:</h4>
                    <ul className="space-y-2">
                      {caseType.repairReasons.map((reason, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-sm">
                          <AlertTriangle className="h-4 w-4 text-orange-600" />
                          <span>{reason}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t pt-4 space-y-3">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="font-medium text-gray-900">Цена:</p>
                        <p className="text-purple-600 font-bold">{caseType.price}</p>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Время:</p>
                        <p className="text-gray-600">{caseType.time}</p>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Сложность:</span>
                      <Badge className={
                        caseType.difficulty === 'Средняя' ? 'bg-yellow-100 text-yellow-800' :
                        caseType.difficulty === 'Высокая' ? 'bg-orange-100 text-orange-800' :
                        'bg-red-100 text-red-800'
                      }>
                        {caseType.difficulty}
                      </Badge>
                    </div>
                  </div>

                  <Button className="w-full">
                    Заказать замену
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Color Options */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Доступные цвета
            </h2>
            <p className="text-xl text-gray-600">
              Выберите цвет корпуса из доступных вариантов
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {colorOptions.map((option, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow text-center">
                <CardContent className="p-6">
                  <div className={`w-16 h-16 rounded-full mx-auto mb-4 ${
                    option.color === 'Черный' ? 'bg-black' :
                    option.color === 'Белый' ? 'bg-white border-2 border-gray-200' :
                    option.color === 'Синий' ? 'bg-blue-500' :
                    option.color === 'Красный' ? 'bg-red-500' :
                    option.color === 'Зеленый' ? 'bg-green-500' :
                    option.color === 'Фиолетовый' ? 'bg-purple-500' :
                    option.color === 'Золотой' ? 'bg-yellow-400' :
                    'bg-pink-400'
                  }`}></div>
                  
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">{option.color}</h3>
                  
                  <div className="space-y-2">
                    <Badge className={
                      option.popularity === 'Очень высокая' ? 'bg-green-100 text-green-800' :
                      option.popularity === 'Высокая' ? 'bg-blue-100 text-blue-800' :
                      option.popularity === 'Средняя' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-gray-100 text-gray-800'
                    }>
                      {option.popularity}
                    </Badge>
                    
                    <div className="text-sm">
                      <span className={`font-medium ${
                        option.availability === 'В наличии' ? 'text-green-600' : 'text-orange-600'
                      }`}>
                        {option.availability}
                      </span>
                    </div>
                  </div>

                  <Button className="w-full mt-4" variant={option.availability === 'В наличии' ? 'default' : 'outline'}>
                    {option.availability === 'В наличии' ? 'Выбрать' : 'Заказать'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Problems */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Проблемы с корпусом
            </h2>
            <p className="text-xl text-gray-600">
              Частые повреждения корпуса и способы их устранения
            </p>
          </div>

          <div className="space-y-8">
            {caseProblems.map((problem, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-4 gap-6">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center space-x-2">
                        <Smartphone className="h-6 w-6 text-purple-600" />
                        <span>{problem.problem}</span>
                      </h3>
                      <Badge className={
                        problem.severity === 'Низкая' ? 'bg-green-100 text-green-800' :
                        problem.severity === 'Средняя' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }>
                        {problem.severity}
                      </Badge>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Описание:</h4>
                      <p className="text-sm text-gray-600">{problem.description}</p>
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

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Профилактика:</h4>
                      <ul className="space-y-1 mb-4">
                        {problem.prevention.map((prev, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-center space-x-2">
                            <Shield className="h-4 w-4 text-blue-600" />
                            <span>{prev}</span>
                          </li>
                        ))}
                      </ul>
                      <Button className="w-full">
                        Консультация
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
              Процесс замены корпуса
            </h2>
            <p className="text-xl text-gray-600">
              Как проходит замена корпуса в нашем сервисном центре
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {repairSteps.map((step, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                  <CardDescription>{step.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <Badge variant="outline" className="text-purple-600 border-purple-600">
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

      {/* Quality Guarantee */}
      <section className="py-20 bg-purple-600">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Гарантия качества замены
            </h2>
            <p className="text-xl text-purple-100 mb-12 max-w-3xl mx-auto">
              Используем только качественные корпуса и предоставляем гарантию на все работы
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: <Star className="h-8 w-8" />, title: "Оригинальное качество", desc: "Корпуса высшего качества" },
                { icon: <Palette className="h-8 w-8" />, title: "Точное соответствие", desc: "Идеальная подгонка деталей" },
                { icon: <Shield className="h-8 w-8" />, title: "Гарантия 6 месяцев", desc: "На все виды работ" },
                { icon: <CheckCircle className="h-8 w-8" />, title: "Полное тестирование", desc: "Проверка всех функций" }
              ].map((guarantee, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    {guarantee.icon}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{guarantee.title}</h3>
                  <p className="text-purple-100">{guarantee.desc}</p>
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

export default CaseReplacement;