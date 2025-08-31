import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Smartphone, 
  Shield, 
  Clock, 
  CheckCircle, 
  AlertTriangle,
  Wrench,
  Star,
  DollarSign
} from 'lucide-react';

const ScreenRepair = () => {
  const screenTypes = [
    {
      type: "LCD дисплеи",
      description: "Стандартные LCD экраны для бюджетных моделей",
      pros: ["Доступная цена", "Быстрая замена", "Хорошее качество"],
      cons: ["Менее яркие цвета", "Больше энергопотребления"],
      price: "от 1500 ₽",
      warranty: "3 месяца"
    },
    {
      type: "OLED/AMOLED",
      description: "Премиум дисплеи с глубокими черными цветами",
      pros: ["Отличная цветопередача", "Энергоэффективность", "Тонкий профиль"],
      cons: ["Высокая стоимость", "Сложность ремонта"],
      price: "от 4500 ₽", 
      warranty: "6 месяцев"
    },
    {
      type: "Retina дисплеи",
      description: "Высококачественные экраны для устройств Apple",
      pros: ["Высокое разрешение", "Точная цветопередача", "Оригинальное качество"],
      cons: ["Высокая цена", "Требует специальных навыков"],
      price: "от 5500 ₽",
      warranty: "6 месяцев"
    }
  ];

  const repairSteps = [
    {
      step: 1,
      title: "Диагностика",
      description: "Определяем тип повреждения и необходимые запчасти",
      time: "5-10 мин",
      details: ["Проверка тачскрина", "Оценка повреждений", "Подбор запчастей"]
    },
    {
      step: 2,
      title: "Разборка",
      description: "Аккуратная разборка устройства с сохранением всех компонентов",
      time: "10-15 мин",
      details: ["Снятие задней крышки", "Отключение шлейфов", "Извлечение дисплея"]
    },
    {
      step: 3,
      title: "Замена экрана",
      description: "Установка нового дисплейного модуля",
      time: "15-20 мин", 
      details: ["Установка нового экрана", "Подключение шлейфов", "Проверка крепления"]
    },
    {
      step: 4,
      title: "Тестирование",
      description: "Полная проверка функциональности экрана",
      time: "5-10 мин",
      details: ["Проверка тачскрина", "Тест цветопередачи", "Проверка яркости"]
    }
  ];

  const priceList = [
    { brand: "iPhone", models: ["iPhone 15 Pro Max", "iPhone 14 Pro", "iPhone 13"], price: "5500-8500 ₽" },
    { brand: "Samsung", models: ["Galaxy S24", "Galaxy S23", "Galaxy A54"], price: "3500-6500 ₽" },
    { brand: "Xiaomi", models: ["Xiaomi 14", "Redmi Note 13", "POCO X6"], price: "2500-4500 ₽" },
    { brand: "Huawei", models: ["P60 Pro", "Mate 50", "Nova 11"], price: "3000-5500 ₽" }
  ];

  const tips = [
    {
      title: "Как предотвратить повреждение экрана",
      tips: [
        "Используйте качественное защитное стекло",
        "Носите телефон в чехле с бортиками",
        "Избегайте падений на твердые поверхности",
        "Не кладите телефон вместе с ключами"
      ]
    },
    {
      title: "Что делать при повреждении",
      tips: [
        "Не пытайтесь самостоятельно снимать осколки",
        "Заклейте трещины скотчем для безопасности",
        "Сделайте резервную копию данных",
        "Обратитесь к специалистам как можно скорее"
      ]
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
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
                Замена экрана телефона
              </h1>
              <p className="text-xl text-gray-600">
                Профессиональная замена разбитых экранов для всех моделей смартфонов. 
                Используем только качественные дисплеи с гарантией до 6 месяцев.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                  <Clock className="h-5 w-5 text-blue-600" />
                  <span className="text-sm font-medium">30-60 минут</span>
                </div>
                <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                  <Shield className="h-5 w-5 text-green-600" />
                  <span className="text-sm font-medium">Гарантия 6 месяцев</span>
                </div>
                <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                  <DollarSign className="h-5 w-5 text-purple-600" />
                  <span className="text-sm font-medium">от 2500 ₽</span>
                </div>
              </div>
              <Button size="lg" className="text-lg px-8">
                <Wrench className="mr-2 h-5 w-5" />
                Заказать замену экрана
              </Button>
            </div>

            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1482476/pexels-photo-1482476.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Замена экрана телефона"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Screen Types */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Типы экранов
            </h2>
            <p className="text-xl text-gray-600">
              Работаем со всеми типами дисплеев
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {screenTypes.map((screen, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">{screen.type}</CardTitle>
                  <CardDescription>{screen.description}</CardDescription>
                  <div className="text-2xl font-bold text-blue-600">{screen.price}</div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-green-700 mb-2 flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4" />
                      <span>Преимущества:</span>
                    </h4>
                    <ul className="space-y-1">
                      {screen.pros.map((pro, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                          <span>{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-orange-700 mb-2 flex items-center space-x-2">
                      <AlertTriangle className="h-4 w-4" />
                      <span>Особенности:</span>
                    </h4>
                    <ul className="space-y-1">
                      {screen.cons.map((con, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                          <span>{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Гарантия:</span>
                      <Badge>{screen.warranty}</Badge>
                    </div>
                  </div>

                  <Button className="w-full">Выбрать этот тип</Button>
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
              Процесс замены экрана
            </h2>
            <p className="text-xl text-gray-600">
              Как проходит замена дисплея в нашем сервисе
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
                    <Badge variant="outline">{step.time}</Badge>
                  </div>
                  
                  <ul className="space-y-2">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-center space-x-2">
                        <CheckCircle className="h-3 w-3 text-green-600" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Price List */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Стоимость замены экрана
            </h2>
            <p className="text-xl text-gray-600">
              Цены на замену дисплеев популярных моделей
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="shadow-xl">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="text-left py-4 px-6 font-semibold">Бренд</th>
                        <th className="text-left py-4 px-6 font-semibold">Популярные модели</th>
                        <th className="text-center py-4 px-6 font-semibold">Стоимость</th>
                        <th className="text-center py-4 px-6 font-semibold">Действие</th>
                      </tr>
                    </thead>
                    <tbody>
                      {priceList.map((item, index) => (
                        <tr key={index} className="border-b hover:bg-gray-50">
                          <td className="py-4 px-6">
                            <div className="font-semibold text-lg">{item.brand}</div>
                          </td>
                          <td className="py-4 px-6">
                            <div className="space-y-1">
                              {item.models.map((model, idx) => (
                                <div key={idx} className="text-sm text-gray-600">{model}</div>
                              ))}
                            </div>
                          </td>
                          <td className="text-center py-4 px-6">
                            <div className="font-bold text-lg text-blue-600">{item.price}</div>
                          </td>
                          <td className="text-center py-4 px-6">
                            <Button size="sm">Заказать</Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Полезные советы
            </h2>
            <p className="text-xl text-gray-600">
              Как защитить экран и что делать при повреждении
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {tips.map((tipGroup, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{tipGroup.title}</CardTitle>
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

      {/* Quality Guarantee */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Гарантия качества замены экрана
            </h2>
            <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
              Мы используем только качественные дисплеи и предоставляем гарантию на все работы
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: <Shield className="h-8 w-8" />, title: "6 месяцев гарантии", desc: "На все виды экранов" },
                { icon: <Star className="h-8 w-8" />, title: "Оригинальное качество", desc: "Проверенные поставщики" },
                { icon: <Wrench className="h-8 w-8" />, title: "Профессиональная установка", desc: "Опытные мастера" },
                { icon: <CheckCircle className="h-8 w-8" />, title: "Полное тестирование", desc: "Проверка всех функций" }
              ].map((guarantee, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    {guarantee.icon}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{guarantee.title}</h3>
                  <p className="text-blue-100">{guarantee.desc}</p>
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

export default ScreenRepair;