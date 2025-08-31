import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Speaker, 
  Mic, 
  Volume2, 
  VolumeX, 
  Headphones, 
  Phone,
  CheckCircle,
  AlertTriangle,
  Settings,
  Wrench
} from 'lucide-react';

const SpeakerRepair = () => {
  const audioComponents = [
    {
      component: "Основной динамик",
      description: "Динамик для воспроизведения музыки, звонков, уведомлений",
      location: "Нижняя часть устройства",
      commonIssues: ["Нет звука", "Хрипы", "Тихий звук", "Искажения"],
      repairMethods: ["Замена динамика", "Чистка от пыли", "Ремонт контактов"],
      price: "от 1600 ₽",
      time: "30-50 мин"
    },
    {
      component: "Разговорный динамик",
      description: "Динамик для разговоров, расположенный у экрана",
      location: "Верхняя часть экрана",
      commonIssues: ["Не слышно собеседника", "Тихий звук", "Треск"],
      repairMethods: ["Замена динамика", "Чистка сетки", "Ремонт шлейфа"],
      price: "от 1800 ₽",
      time: "40-60 мин"
    },
    {
      component: "Микрофон",
      description: "Основной микрофон для записи звука и разговоров",
      location: "Нижняя часть устройства",
      commonIssues: ["Собеседник не слышит", "Шумы", "Эхо", "Тихая запись"],
      repairMethods: ["Замена микрофона", "Чистка отверстия", "Настройка ПО"],
      price: "от 1500 ₽",
      time: "25-45 мин"
    },
    {
      component: "Аудиоразъем",
      description: "Разъем для подключения наушников (3.5мм)",
      location: "Верх или низ устройства",
      commonIssues: ["Не работают наушники", "Звук только в одном канале", "Плохой контакт"],
      repairMethods: ["Замена разъема", "Чистка контактов", "Пайка соединений"],
      price: "от 2000 ₽",
      time: "45-75 мин"
    }
  ];

  const audioProblems = [
    {
      problem: "Полное отсутствие звука",
      symptoms: ["Нет звука при звонках", "Не работает музыка", "Нет звука уведомлений"],
      diagnosis: ["Проверка динамиков", "Тест аудиокодека", "Проверка настроек"],
      solutions: ["Замена динамика", "Ремонт аудиочипа", "Восстановление ПО"],
      urgency: "Высокая"
    },
    {
      problem: "Искажение звука",
      symptoms: ["Хрипы при громкости", "Металлический звук", "Прерывистый звук"],
      diagnosis: ["Тест частотной характеристики", "Проверка мембраны", "Анализ сигнала"],
      solutions: ["Замена динамика", "Чистка от пыли", "Настройка эквалайзера"],
      urgency: "Средняя"
    },
    {
      problem: "Проблемы с микрофоном",
      symptoms: ["Собеседник не слышит", "Шумы при записи", "Эхо в разговоре"],
      diagnosis: ["Тест записи", "Проверка шумоподавления", "Анализ чувствительности"],
      solutions: ["Замена микрофона", "Чистка отверстия", "Калибровка ПО"],
      urgency: "Высокая"
    }
  ];

  const repairSteps = [
    {
      step: 1,
      title: "Аудио диагностика",
      description: "Тестируем все аудио компоненты устройства",
      tests: ["Тест динамиков", "Проверка микрофона", "Анализ частот"],
      time: "15 мин"
    },
    {
      step: 2,
      title: "Разборка и доступ",
      description: "Получаем доступ к аудио компонентам",
      tests: ["Снятие задней крышки", "Отключение шлейфов", "Извлечение компонентов"],
      time: "20 мин"
    },
    {
      step: 3,
      title: "Ремонт или замена",
      description: "Чистим, ремонтируем или заменяем неисправные части",
      tests: ["Замена динамика/микрофона", "Чистка от загрязнений", "Пайка контактов"],
      time: "20-40 мин"
    },
    {
      step: 4,
      title: "Настройка и тестирование",
      description: "Калибруем звук и проверяем качество",
      tests: ["Настройка громкости", "Тест всех режимов", "Проверка качества"],
      time: "10-20 мин"
    }
  ];

  const audioTips = [
    {
      title: "Профилактика аудио проблем",
      tips: [
        "Регулярно чистите динамики от пыли",
        "Не слушайте музыку на максимальной громкости",
        "Защищайте устройство от влаги",
        "Используйте качественные наушники",
        "Избегайте попадания мелких частиц в разъемы"
      ]
    },
    {
      title: "Когда обращаться к специалистам",
      tips: [
        "Звук стал тише обычного",
        "Появились хрипы или искажения",
        "Собеседник жалуется на качество связи",
        "Не работают наушники",
        "Звук идет только из одного канала"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-red-100 py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
                Ремонт динамиков и микрофона
              </h1>
              <p className="text-xl text-gray-600">
                Восстанавливаем качество звука вашего устройства. Ремонтируем динамики, 
                микрофоны и аудиоразъемы всех типов.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                  <Speaker className="h-5 w-5 text-orange-600" />
                  <span className="text-sm font-medium">Все аудио компоненты</span>
                </div>
                <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                  <Settings className="h-5 w-5 text-blue-600" />
                  <span className="text-sm font-medium">Калибровка звука</span>
                </div>
                <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-sm font-medium">от 1500 ₽</span>
                </div>
              </div>
              <Button size="lg" className="text-lg px-8 bg-orange-600 hover:bg-orange-700">
                <Speaker className="mr-2 h-5 w-5" />
                Отремонтировать звук
              </Button>
            </div>

            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Ремонт динамиков"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Audio Components */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Аудио компоненты
            </h2>
            <p className="text-xl text-gray-600">
              Ремонтируем все элементы звуковой системы смартфона
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {audioComponents.map((component, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center space-x-2">
                    <Speaker className="h-6 w-6 text-orange-600" />
                    <span>{component.component}</span>
                  </CardTitle>
                  <CardDescription>{component.description}</CardDescription>
                  <Badge variant="outline">{component.location}</Badge>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Частые проблемы:</h4>
                    <ul className="space-y-2">
                      {component.commonIssues.map((issue, idx) => (
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
                      {component.repairMethods.map((method, idx) => (
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
                      <p className="text-orange-600 font-bold">{component.price}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Время:</p>
                      <p className="text-gray-600">{component.time}</p>
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

      {/* Audio Problems */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Частые проблемы со звуком
            </h2>
            <p className="text-xl text-gray-600">
              Типичные неисправности аудиосистемы и их решение
            </p>
          </div>

          <div className="space-y-8">
            {audioProblems.map((problem, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-4 gap-6">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center space-x-2">
                        <Volume2 className="h-6 w-6 text-orange-600" />
                        <span>{problem.problem}</span>
                      </h3>
                      <Badge className={
                        problem.urgency === 'Высокая' ? 'bg-red-100 text-red-800' :
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
                      <h4 className="font-semibold text-gray-900 mb-3">Диагностика:</h4>
                      <ul className="space-y-1">
                        {problem.diagnosis.map((diag, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-center space-x-2">
                            <Settings className="h-4 w-4 text-blue-600" />
                            <span>{diag}</span>
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
              Процесс ремонта аудиосистемы
            </h2>
            <p className="text-xl text-gray-600">
              Как мы восстанавливаем качество звука вашего устройства
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {repairSteps.map((step, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                  <CardDescription>{step.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <Badge variant="outline" className="text-orange-600 border-orange-600">
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

      {/* Audio Tips */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Советы по уходу за аудиосистемой
            </h2>
            <p className="text-xl text-gray-600">
              Как сохранить качество звука вашего устройства
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {audioTips.map((tipGroup, index) => (
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

      <Footer />
    </div>
  );
};

export default SpeakerRepair;