import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Smartphone, 
  Pen, 
  Fold, 
  Camera, 
  Battery, 
  CheckCircle,
  Star,
  Award,
  Shield,
  Wrench
} from 'lucide-react';

const SamsungRepair = () => {
  const samsungSeries = [
    {
      series: "Galaxy S24 серия",
      models: ["Galaxy S24", "Galaxy S24+", "Galaxy S24 Ultra"],
      features: ["Snapdragon 8 Gen 3", "AI функции", "200MP камера", "S Pen (Ultra)"],
      specialRepairs: ["AMOLED экран", "S Pen", "Тройная камера", "Быстрая зарядка 45W"],
      avgPrice: "4500-7500 ₽",
      availability: "В наличии"
    },
    {
      series: "Galaxy S23 серия", 
      models: ["Galaxy S23", "Galaxy S23+", "Galaxy S23 Ultra"],
      features: ["Snapdragon 8 Gen 2", "200MP камера", "S Pen", "8K видео"],
      specialRepairs: ["Dynamic AMOLED", "Periscope камера", "S Pen", "Беспроводная зарядка"],
      avgPrice: "4000-6500 ₽",
      availability: "В наличии"
    },
    {
      series: "Galaxy A серия",
      models: ["Galaxy A54", "Galaxy A34", "Galaxy A24", "Galaxy A14"],
      features: ["Super AMOLED", "50MP камера", "5000mAh батарея", "25W зарядка"],
      specialRepairs: ["AMOLED экран", "Основная камера", "Батарея", "Разъем USB-C"],
      avgPrice: "2500-4500 ₽",
      availability: "В наличии"
    },
    {
      series: "Galaxy Z серия (складные)",
      models: ["Galaxy Z Fold 5", "Galaxy Z Flip 5", "Galaxy Z Fold 4", "Galaxy Z Flip 4"],
      features: ["Складной экран", "Flex Mode", "Hinge механизм", "Cover Display"],
      specialRepairs: ["Складной экран", "Шарнир", "Внешний экран", "Flex кабель"],
      avgPrice: "8500-15000 ₽",
      availability: "Под заказ"
    }
  ];

  const samsungSpecialties = [
    {
      specialty: "Ремонт S Pen",
      description: "Восстановление работы стилуса Samsung S Pen",
      icon: <Pen className="h-8 w-8 text-blue-600" />,
      issues: ["Не распознается", "Не заряжается", "Плохая чувствительность", "Сломался наконечник"],
      solutions: ["Замена S Pen", "Ремонт сенсора", "Калибровка", "Замена наконечника"],
      models: ["Note серия", "S Ultra", "Tab S"],
      price: "от 3500 ₽"
    },
    {
      specialty: "Ремонт складных экранов",
      description: "Специализированный ремонт гибких OLED дисплеев",
      icon: <Fold className="h-8 w-8 text-purple-600" />,
      issues: ["Полоса на сгибе", "Не складывается", "Треснул экран", "Пятна на дисплее"],
      solutions: ["Замена гибкого экрана", "Ремонт шарнира", "Замена защитной пленки", "Калибровка"],
      models: ["Z Fold", "Z Flip"],
      price: "от 12000 ₽"
    },
    {
      specialty: "AMOLED экраны",
      description: "Ремонт и замена AMOLED дисплеев Samsung",
      icon: <Star className="h-8 w-8 text-green-600" />,
      issues: ["Выгорание пикселей", "Зеленые полосы", "Не работает тач", "Битые пиксели"],
      solutions: ["Замена AMOLED", "Ремонт тачскрина", "Калибровка цветов", "Программная коррекция"],
      models: ["Все Galaxy"],
      price: "от 3500 ₽"
    }
  ];

  const samsungProblems = [
    {
      problem: "Зеленая полоса на экране",
      description: "Характерная проблема AMOLED экранов Samsung",
      affectedModels: ["Galaxy S20", "Galaxy S21", "Galaxy S22", "Galaxy Note 20"],
      symptoms: ["Вертикальная зеленая полоса", "Мерцание экрана", "Искажение цветов"],
      causes: ["Деградация OLED", "Повреждение драйвера", "Заводской брак"],
      solutions: ["Замена AMOLED дисплея", "Ремонт драйвера экрана", "Программная коррекция"],
      warranty: "Часто покрывается гарантией Samsung",
      cost: "3500-6500 ₽"
    },
    {
      problem: "Не работает S Pen",
      description: "Проблемы со стилусом в моделях Note и S Ultra",
      affectedModels: ["Galaxy Note", "Galaxy S21 Ultra", "Galaxy S22 Ultra", "Galaxy S23 Ultra"],
      symptoms: ["Не распознается стилус", "Плохая точность", "Не работают кнопки"],
      causes: ["Повреждение сенсора", "Разряд батареи S Pen", "Программный сбой"],
      solutions: ["Замена S Pen", "Ремонт сенсора Wacom", "Калибровка", "Обновление ПО"],
      warranty: "6 месяцев на S Pen",
      cost: "2500-4500 ₽"
    }
  ];

  const repairAdvantages = [
    {
      advantage: "Официальное партнерство",
      description: "Авторизованный сервисный центр Samsung",
      icon: <Award className="h-8 w-8 text-blue-600" />
    },
    {
      advantage: "Оригинальные запчасти",
      description: "Только оригинальные компоненты Samsung",
      icon: <Shield className="h-8 w-8 text-green-600" />
    },
    {
      advantage: "Специальные инструменты",
      description: "Профессиональное оборудование для Samsung",
      icon: <Wrench className="h-8 w-8 text-purple-600" />
    },
    {
      advantage: "Сохранение гарантии",
      description: "Ремонт не влияет на гарантию производителя",
      icon: <CheckCircle className="h-8 w-8 text-orange-600" />
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="text-6xl">📱</div>
                <div>
                  <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
                    Ремонт Samsung
                  </h1>
                  <p className="text-lg text-gray-600">Авторизованный сервис Samsung</p>
                </div>
              </div>
              <p className="text-xl text-gray-600">
                Профессиональный ремонт всех моделей Samsung Galaxy. 
                Специализируемся на AMOLED экранах, S Pen и складных устройствах.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                  <Award className="h-5 w-5 text-blue-600" />
                  <span className="text-sm font-medium">Официальный партнер</span>
                </div>
                <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                  <Star className="h-5 w-5 text-yellow-600" />
                  <span className="text-sm font-medium">AMOLED специалисты</span>
                </div>
                <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                  <Fold className="h-5 w-5 text-purple-600" />
                  <span className="text-sm font-medium">Складные экраны</span>
                </div>
              </div>
              <Button size="lg" className="text-lg px-8 bg-blue-600 hover:bg-blue-700">
                <Smartphone className="mr-2 h-5 w-5" />
                Отремонтировать Samsung
              </Button>
            </div>

            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Ремонт Samsung"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Samsung Series */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Линейки Samsung Galaxy
            </h2>
            <p className="text-xl text-gray-600">
              Ремонтируем все серии Samsung с учетом их особенностей
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {samsungSeries.map((series, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center space-x-2">
                    <Smartphone className="h-6 w-6 text-blue-600" />
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

      {/* Samsung Specialties */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Специализированные услуги Samsung
            </h2>
            <p className="text-xl text-gray-600">
              Уникальные технологии Samsung требуют особого подхода
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {samsungSpecialties.map((specialty, index) => (
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
                    <h4 className="font-semibold text-gray-900 mb-3">Частые проблемы:</h4>
                    <ul className="space-y-2">
                      {specialty.issues.map((issue, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                          <span>{issue}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Решения:</h4>
                    <ul className="space-y-2">
                      {specialty.solutions.map((solution, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span>{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Совместимые модели:</h4>
                    <div className="flex flex-wrap gap-1">
                      {specialty.models.map((model, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {model}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <div className="text-center mb-4">
                      <div className="text-2xl font-bold text-blue-600">{specialty.price}</div>
                    </div>
                    <Button className="w-full">
                      Заказать ремонт
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Samsung Problems */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Характерные проблемы Samsung
            </h2>
            <p className="text-xl text-gray-600">
              Специфические неисправности устройств Samsung Galaxy
            </p>
          </div>

          <div className="space-y-8">
            {samsungProblems.map((problem, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-4 gap-6">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{problem.problem}</h3>
                      <p className="text-gray-600 text-sm mb-3">{problem.description}</p>
                      <Badge className="bg-blue-100 text-blue-800">
                        Samsung специфика
                      </Badge>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Затронутые модели:</h4>
                      <div className="space-y-1">
                        {problem.affectedModels.map((model, idx) => (
                          <div key={idx} className="text-sm bg-gray-50 px-2 py-1 rounded">
                            {model}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Симптомы и причины:</h4>
                      <div className="space-y-3">
                        <div>
                          <p className="text-sm font-medium text-red-700">Симптомы:</p>
                          <ul className="space-y-1">
                            {problem.symptoms.map((symptom, idx) => (
                              <li key={idx} className="text-xs text-gray-600">• {symptom}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-orange-700">Причины:</p>
                          <ul className="space-y-1">
                            {problem.causes.map((cause, idx) => (
                              <li key={idx} className="text-xs text-gray-600">• {cause}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
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
                      
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <p className="text-sm font-medium text-blue-800">Стоимость:</p>
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

      {/* Advantages */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="text-center text-white mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Преимущества ремонта Samsung у нас
            </h2>
            <p className="text-xl text-blue-100">
              Почему стоит доверить ремонт Samsung нашим специалистам
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {repairAdvantages.map((advantage, index) => (
              <div key={index} className="text-center text-white">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  {advantage.icon}
                </div>
                <h3 className="font-semibold text-lg mb-2">{advantage.advantage}</h3>
                <p className="text-blue-100">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SamsungRepair;