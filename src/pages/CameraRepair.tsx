import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Camera, 
  Video, 
  Focus, 
  Aperture, 
  Image, 
  Zap,
  CheckCircle,
  AlertTriangle,
  Settings,
  Wrench
} from 'lucide-react';

const CameraRepair = () => {
  const cameraTypes = [
    {
      type: "Основная камера",
      description: "Главный модуль камеры для фото и видео",
      commonIssues: ["Размытые фото", "Черный экран", "Не фокусируется", "Пятна на фото"],
      repairMethods: ["Замена модуля", "Чистка линз", "Калибровка автофокуса"],
      price: "от 2500 ₽",
      time: "40-80 мин"
    },
    {
      type: "Фронтальная камера",
      description: "Передняя камера для селфи и видеозвонков",
      commonIssues: ["Не работает", "Плохое качество", "Перевернутое изображение"],
      repairMethods: ["Замена модуля", "Ремонт шлейфа", "Программная настройка"],
      price: "от 2000 ₽",
      time: "30-60 мин"
    },
    {
      type: "Телеобъектив",
      description: "Дополнительная камера с оптическим зумом",
      commonIssues: ["Не переключается", "Шум при зуме", "Размытость"],
      repairMethods: ["Замена модуля", "Ремонт механизма", "Калибровка"],
      price: "от 3500 ₽",
      time: "60-120 мин"
    },
    {
      type: "Широкоугольная камера",
      description: "Камера для съемки с широким углом обзора",
      commonIssues: ["Искажения", "Темные углы", "Не работает"],
      repairMethods: ["Замена модуля", "Калибровка", "Программная коррекция"],
      price: "от 3000 ₽",
      time: "50-90 мин"
    }
  ];

  const cameraProblems = [
    {
      problem: "Размытые фотографии",
      causes: ["Грязная линза", "Поврежден автофокус", "Сбой калибровки", "Поврежден стабилизатор"],
      solutions: ["Чистка линзы", "Замена модуля автофокуса", "Калибровка камеры", "Ремонт стабилизатора"],
      severity: "Средняя",
      cost: "1500-4000 ₽"
    },
    {
      problem: "Черный экран камеры",
      causes: ["Поврежден модуль", "Обрыв шлейфа", "Программный сбой", "Проблемы с питанием"],
      solutions: ["Замена модуля камеры", "Ремонт шлейфа", "Переустановка ПО", "Ремонт цепей питания"],
      severity: "Высокая",
      cost: "2000-5000 ₽"
    },
    {
      problem: "Пятна на фотографиях",
      causes: ["Пыль на линзе", "Повреждение матрицы", "Конденсат", "Царапины на стекле"],
      solutions: ["Чистка камеры", "Замена матрицы", "Удаление влаги", "Замена защитного стекла"],
      severity: "Низкая",
      cost: "800-3000 ₽"
    }
  ];

  const repairSteps = [
    {
      step: 1,
      title: "Диагностика камеры",
      description: "Тестируем все режимы съемки и определяем неисправность",
      tests: ["Проверка фокусировки", "Тест качества изображения", "Проверка стабилизации"],
      time: "15 мин"
    },
    {
      step: 2,
      title: "Разборка устройства",
      description: "Аккуратно извлекаем модуль камеры",
      tests: ["Отключение шлейфов", "Извлечение модуля", "Осмотр компонентов"],
      time: "20 мин"
    },
    {
      step: 3,
      title: "Ремонт или замена",
      description: "Чистим, ремонтируем или заменяем поврежденные части",
      tests: ["Чистка линз", "Замена модуля", "Ремонт автофокуса"],
      time: "30-60 мин"
    },
    {
      step: 4,
      title: "Калибровка и тестирование",
      description: "Настраиваем камеру и проверяем качество съемки",
      tests: ["Калибровка автофокуса", "Настройка цветопередачи", "Тест всех режимов"],
      time: "15-30 мин"
    }
  ];

  const cameraFeatures = [
    "Автофокус и макросъемка",
    "Оптическая стабилизация изображения",
    "Ночной режим съемки",
    "Портретный режим с размытием фона",
    "Видеосъемка 4K",
    "Замедленная съемка (Slow Motion)",
    "Панорамная съемка",
    "HDR фотографии"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-pink-100 py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
                Ремонт камеры телефона
              </h1>
              <p className="text-xl text-gray-600">
                Восстанавливаем качество съемки вашего устройства. Ремонтируем основные, 
                фронтальные камеры и дополнительные модули.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                  <Camera className="h-5 w-5 text-purple-600" />
                  <span className="text-sm font-medium">Все типы камер</span>
                </div>
                <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                  <Settings className="h-5 w-5 text-blue-600" />
                  <span className="text-sm font-medium">Калибровка</span>
                </div>
                <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-sm font-medium">от 2000 ₽</span>
                </div>
              </div>
              <Button size="lg" className="text-lg px-8 bg-purple-600 hover:bg-purple-700">
                <Camera className="mr-2 h-5 w-5" />
                Отремонтировать камеру
              </Button>
            </div>

            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Ремонт камеры"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Camera Types */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Типы камер
            </h2>
            <p className="text-xl text-gray-600">
              Ремонтируем все виды камер в современных смартфонах
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {cameraTypes.map((camera, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center space-x-2">
                    <Camera className="h-6 w-6 text-purple-600" />
                    <span>{camera.type}</span>
                  </CardTitle>
                  <CardDescription>{camera.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Частые проблемы:</h4>
                    <ul className="space-y-2">
                      {camera.commonIssues.map((issue, idx) => (
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
                      {camera.repairMethods.map((method, idx) => (
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
                      <p className="text-purple-600 font-bold">{camera.price}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Время:</p>
                      <p className="text-gray-600">{camera.time}</p>
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

      {/* Common Problems */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Частые проблемы с камерой
            </h2>
            <p className="text-xl text-gray-600">
              Типичные неисправности и способы их устранения
            </p>
          </div>

          <div className="space-y-8">
            {cameraProblems.map((problem, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-4 gap-6">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center space-x-2">
                        <Camera className="h-6 w-6 text-purple-600" />
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
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <p className="font-semibold text-purple-800 mb-1">Стоимость:</p>
                        <p className="text-purple-600 font-bold">{problem.cost}</p>
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
              Процесс ремонта камеры
            </h2>
            <p className="text-xl text-gray-600">
              Как мы восстанавливаем качество съемки вашего устройства
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
                      {step.tests.map((test, idx) => (
                        <li key={idx} className="text-xs text-gray-600 flex items-center space-x-2">
                          <CheckCircle className="h-3 w-3 text-green-600" />
                          <span>{test}</span>
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

      {/* Camera Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Восстанавливаемые функции
            </h2>
            <p className="text-xl text-gray-600">
              После ремонта все функции камеры работают как новые
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cameraFeatures.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Camera className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{feature}</h3>
                  <CheckCircle className="h-5 w-5 text-green-600 mx-auto" />
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
              Гарантия качества съемки
            </h2>
            <p className="text-xl text-purple-100 mb-12 max-w-3xl mx-auto">
              Гарантируем восстановление оригинального качества съемки или полный возврат средств
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: <Image className="h-8 w-8" />, title: "Качество как новое", desc: "100% восстановление функций" },
                { icon: <Focus className="h-8 w-8" />, title: "Точная фокусировка", desc: "Калибровка автофокуса" },
                { icon: <Video className="h-8 w-8" />, title: "Стабилизация видео", desc: "Восстановление OIS" },
                { icon: <Aperture className="h-8 w-8" />, title: "Все режимы съемки", desc: "Полная функциональность" }
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

export default CameraRepair;