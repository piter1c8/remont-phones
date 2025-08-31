import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { 
  Droplets, 
  AlertTriangle, 
  Clock, 
  Shield, 
  CheckCircle, 
  XCircle,
  Zap,
  Thermometer,
  Wind,
  Wrench
} from 'lucide-react';

const WaterDamage = () => {
  const damageTypes = [
    {
      type: "Пресная вода",
      severity: "Низкая",
      description: "Попадание чистой воды (дождь, раковина)",
      recoveryChance: "90%",
      timeLimit: "24 часа",
      color: "green"
    },
    {
      type: "Соленая вода",
      severity: "Высокая", 
      description: "Морская вода, соленые растворы",
      recoveryChance: "60%",
      timeLimit: "6 часов",
      color: "orange"
    },
    {
      type: "Сладкие напитки",
      severity: "Очень высокая",
      description: "Кола, соки, сладкий чай/кофе",
      recoveryChance: "40%",
      timeLimit: "2 часа",
      color: "red"
    }
  ];

  const emergencySteps = [
    {
      step: 1,
      title: "Немедленно выключите",
      description: "Выключите устройство и не пытайтесь его включать",
      critical: true,
      icon: <Zap className="h-6 w-6" />
    },
    {
      step: 2,
      title: "Извлеките аксессуары",
      description: "Выньте SIM-карту, карту памяти, снимите чехол",
      critical: true,
      icon: <Wrench className="h-6 w-6" />
    },
    {
      step: 3,
      title: "Удалите влагу",
      description: "Протрите устройство сухой тканью, не трясите",
      critical: false,
      icon: <Wind className="h-6 w-6" />
    },
    {
      step: 4,
      title: "Обратитесь к специалистам",
      description: "Как можно скорее доставьте в сервисный центр",
      critical: true,
      icon: <Clock className="h-6 w-6" />
    }
  ];

  const recoveryProcess = [
    {
      stage: "Первичная оценка",
      description: "Осмотр устройства и оценка степени повреждения",
      time: "15 мин",
      actions: ["Внешний осмотр", "Проверка индикаторов влаги", "Оценка шансов восстановления"]
    },
    {
      stage: "Разборка и чистка",
      description: "Полная разборка и ультразвуковая чистка компонентов",
      time: "1-2 часа",
      actions: ["Разборка устройства", "Ультразвуковая ванна", "Чистка контактов"]
    },
    {
      stage: "Сушка и восстановление",
      description: "Профессиональная сушка и замена поврежденных деталей",
      time: "12-24 часа",
      actions: ["Сушка в специальной камере", "Замена окисленных компонентов", "Восстановление дорожек"]
    },
    {
      stage: "Тестирование",
      description: "Полная проверка всех функций устройства",
      time: "30-60 мин",
      actions: ["Проверка включения", "Тест всех функций", "Калибровка сенсоров"]
    }
  ];

  const preventionTips = [
    {
      title: "Защита от воды",
      tips: [
        "Используйте водонепроницаемые чехлы",
        "Избегайте использования во время дождя",
        "Не берите телефон в ванную/душ",
        "Проверяйте целостность уплотнителей"
      ]
    },
    {
      title: "Что НЕ делать при попадании воды",
      tips: [
        "НЕ включайте устройство",
        "НЕ заряжайте телефон",
        "НЕ трясите и не стучите",
        "НЕ используйте фен или микроволновку",
        "НЕ кладите в рис (это миф!)"
      ]
    }
  ];

  const successStories = [
    {
      device: "iPhone 13 Pro",
      situation: "Упал в море на 30 секунд",
      damage: "Соленая вода, полное погружение",
      result: "Полное восстановление",
      time: "2 дня",
      cost: "4500 ₽"
    },
    {
      device: "Samsung Galaxy S23",
      situation: "Пролили кофе с сахаром",
      damage: "Сладкая жидкость, частичное попадание",
      result: "Восстановлено 95% функций",
      time: "1 день",
      cost: "3200 ₽"
    },
    {
      device: "Xiaomi Redmi Note 12",
      situation: "Попал под дождь",
      damage: "Пресная вода через разъемы",
      result: "Полное восстановление",
      time: "6 часов",
      cost: "2800 ₽"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-cyan-100 py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
                Ремонт телефонов после попадания воды
              </h1>
              <p className="text-xl text-gray-600">
                Профессиональное восстановление устройств после контакта с жидкостями. 
                Чем быстрее обратитесь - тем больше шансов на полное восстановление.
              </p>
              
              <Alert className="border-red-200 bg-red-50">
                <AlertTriangle className="h-4 w-4 text-red-600" />
                <AlertDescription className="text-red-800">
                  <strong>Важно!</strong> Не включайте устройство после попадания воды. 
                  Обратитесь к нам в течение 2-6 часов для максимальных шансов восстановления.
                </AlertDescription>
              </Alert>

              <Button size="lg" className="text-lg px-8 bg-blue-600 hover:bg-blue-700">
                <Droplets className="mr-2 h-5 w-5" />
                Срочный ремонт после воды
              </Button>
            </div>

            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1482476/pexels-photo-1482476.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Ремонт после воды"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Damage Types */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Типы повреждений от жидкости
            </h2>
            <p className="text-xl text-gray-600">
              Различные жидкости по-разному влияют на устройство
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {damageTypes.map((damage, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 bg-${damage.color}-100 rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <Droplets className={`h-8 w-8 text-${damage.color}-600`} />
                  </div>
                  <CardTitle className="text-xl">{damage.type}</CardTitle>
                  <Badge className={
                    damage.severity === 'Низкая' ? 'bg-green-100 text-green-800' :
                    damage.severity === 'Высокая' ? 'bg-orange-100 text-orange-800' :
                    'bg-red-100 text-red-800'
                  }>
                    {damage.severity}
                  </Badge>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-gray-600 text-center">{damage.description}</p>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Шанс восстановления:</span>
                      <span className={`font-bold ${
                        damage.recoveryChance === '90%' ? 'text-green-600' :
                        damage.recoveryChance === '60%' ? 'text-orange-600' :
                        'text-red-600'
                      }`}>
                        {damage.recoveryChance}
                      </span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Критическое время:</span>
                      <span className="font-medium text-red-600">{damage.timeLimit}</span>
                    </div>
                  </div>

                  <Button className="w-full">
                    Срочная помощь
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Steps */}
      <section className="py-20 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Первая помощь при попадании воды
            </h2>
            <p className="text-xl text-gray-600">
              Что нужно сделать немедленно для спасения устройства
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {emergencySteps.map((step, index) => (
              <Card key={index} className={`hover:shadow-lg transition-shadow ${step.critical ? 'border-red-300 bg-red-50' : ''}`}>
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 ${step.critical ? 'bg-red-600' : 'bg-blue-600'} text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4`}>
                    {step.step}
                  </div>
                  <CardTitle className="text-lg flex items-center justify-center space-x-2">
                    {step.icon}
                    <span>{step.title}</span>
                  </CardTitle>
                  {step.critical && (
                    <Badge className="bg-red-500 hover:bg-red-500">КРИТИЧНО</Badge>
                  )}
                </CardHeader>
                
                <CardContent>
                  <p className="text-gray-600 text-center">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recovery Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Процесс восстановления
            </h2>
            <p className="text-xl text-gray-600">
              Как мы восстанавливаем устройства после попадания влаги
            </p>
          </div>

          <div className="space-y-8">
            {recoveryProcess.map((stage, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-3 gap-8 items-center">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{stage.stage}</h3>
                      <p className="text-gray-600 mb-4">{stage.description}</p>
                      <Badge className="bg-blue-100 text-blue-800">
                        Время: {stage.time}
                      </Badge>
                    </div>

                    <div className="lg:col-span-2">
                      <h4 className="font-semibold text-gray-900 mb-4">Выполняемые действия:</h4>
                      <div className="grid md:grid-cols-3 gap-4">
                        {stage.actions.map((action, idx) => (
                          <div key={idx} className="flex items-center space-x-2 bg-gray-50 p-3 rounded-lg">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            <span className="text-sm">{action}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Истории успешного восстановления
            </h2>
            <p className="text-xl text-gray-600">
              Реальные случаи спасения устройств после попадания воды
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{story.device}</CardTitle>
                  <CardDescription>{story.situation}</CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Повреждение:</h4>
                    <p className="text-sm text-gray-600">{story.damage}</p>
                  </div>

                  <div className="bg-green-50 p-3 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="font-semibold text-green-800">Результат</span>
                    </div>
                    <p className="text-green-700 text-sm">{story.result}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-medium text-gray-900">Время:</p>
                      <p className="text-gray-600">{story.time}</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Стоимость:</p>
                      <p className="text-blue-600 font-bold">{story.cost}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Prevention Tips */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Профилактика и советы
            </h2>
            <p className="text-xl text-gray-600">
              Как защитить устройство от попадания влаги
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
                      <XCircle className="h-6 w-6 text-red-600" />
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
                          <XCircle className="h-5 w-5 text-red-600 mt-0.5" />
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

      {/* Emergency Contact */}
      <section className="py-20 bg-red-600">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Экстренная помощь 24/7
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
              Попала вода в телефон? Звоните немедленно! Каждая минута на счету.
            </p>
            <div className="space-y-4">
              <div className="text-4xl font-bold">+7 (999) 911-24-7</div>
              <p className="text-red-100">Круглосуточная экстренная линия</p>
              <Button size="lg" variant="secondary" className="text-lg px-8">
                <Droplets className="mr-2 h-5 w-5" />
                Вызвать мастера срочно
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WaterDamage;