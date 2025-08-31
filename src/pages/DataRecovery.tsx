import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  HardDrive, 
  Image, 
  FileText, 
  Music, 
  Video, 
  Users,
  Shield,
  Clock,
  AlertTriangle,
  CheckCircle,
  Download,
  Upload
} from 'lucide-react';

const DataRecovery = () => {
  const dataTypes = [
    {
      type: "Фотографии и видео",
      icon: <Image className="h-8 w-8 text-blue-600" />,
      description: "Восстановление личных фото, видео, скриншотов",
      recoveryRate: "95%",
      avgTime: "2-4 часа",
      price: "от 2500 ₽"
    },
    {
      type: "Контакты и сообщения",
      icon: <Users className="h-8 w-8 text-green-600" />,
      description: "Восстановление телефонной книги, SMS, чатов",
      recoveryRate: "98%",
      avgTime: "1-2 часа", 
      price: "от 2000 ₽"
    },
    {
      type: "Документы и файлы",
      icon: <FileText className="h-8 w-8 text-purple-600" />,
      description: "Восстановление документов, PDF, офисных файлов",
      recoveryRate: "90%",
      avgTime: "2-6 часов",
      price: "от 3000 ₽"
    },
    {
      type: "Музыка и аудио",
      icon: <Music className="h-8 w-8 text-orange-600" />,
      description: "Восстановление музыкальных файлов, записей",
      recoveryRate: "85%",
      avgTime: "1-3 часа",
      price: "от 2200 ₽"
    },
    {
      type: "Приложения и настройки",
      icon: <Download className="h-8 w-8 text-indigo-600" />,
      description: "Восстановление данных приложений, настроек системы",
      recoveryRate: "70%",
      avgTime: "3-8 часов",
      price: "от 3500 ₽"
    },
    {
      type: "Системные данные",
      icon: <HardDrive className="h-8 w-8 text-red-600" />,
      description: "Восстановление системных файлов, логов, кэша",
      recoveryRate: "60%",
      avgTime: "4-12 часов",
      price: "от 4000 ₽"
    }
  ];

  const recoveryScenarios = [
    {
      scenario: "Случайное удаление",
      description: "Файлы удалены пользователем по ошибке",
      successRate: "95%",
      timeFrame: "До 30 дней",
      difficulty: "Низкая",
      methods: ["Анализ файловой системы", "Поиск в корзине", "Восстановление из кэша"]
    },
    {
      scenario: "Форматирование памяти",
      description: "Полная очистка внутренней памяти или карты",
      successRate: "80%", 
      timeFrame: "До 7 дней",
      difficulty: "Средняя",
      methods: ["Глубокое сканирование", "Анализ секторов", "Реконструкция файлов"]
    },
    {
      scenario: "Повреждение после воды",
      description: "Данные недоступны из-за повреждения памяти",
      successRate: "60%",
      timeFrame: "Сразу после ремонта",
      difficulty: "Высокая", 
      methods: ["Восстановление памяти", "Чип-офф метод", "Микропайка"]
    },
    {
      scenario: "Системный сбой",
      description: "Данные недоступны из-за краха операционной системы",
      successRate: "85%",
      timeFrame: "До 14 дней",
      difficulty: "Средняя",
      methods: ["Восстановление загрузчика", "Извлечение из образа", "Прямой доступ к памяти"]
    }
  ];

  const recoveryProcess = [
    {
      step: 1,
      title: "Диагностика устройства",
      description: "Определяем тип повреждения и доступность данных",
      time: "30-60 мин",
      result: "Оценка шансов восстановления"
    },
    {
      step: 2,
      title: "Создание образа памяти",
      description: "Создаем точную копию памяти для безопасной работы",
      time: "1-4 часа",
      result: "Резервная копия данных"
    },
    {
      step: 3,
      title: "Анализ и восстановление",
      description: "Поиск и восстановление удаленных или поврежденных файлов",
      time: "2-12 часов",
      result: "Список восстановленных файлов"
    },
    {
      step: 4,
      title: "Проверка и передача",
      description: "Проверяем целостность данных и передаем клиенту",
      time: "30-60 мин",
      result: "Восстановленные данные на носителе"
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
                Восстановление данных с телефонов
              </h1>
              <p className="text-xl text-gray-600">
                Восстанавливаем фотографии, контакты, сообщения и другие важные данные 
                даже с серьезно поврежденных устройств.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                  <HardDrive className="h-5 w-5 text-indigo-600" />
                  <span className="text-sm font-medium">До 95% данных</span>
                </div>
                <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                  <Shield className="h-5 w-5 text-green-600" />
                  <span className="text-sm font-medium">Конфиденциально</span>
                </div>
                <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                  <Clock className="h-5 w-5 text-purple-600" />
                  <span className="text-sm font-medium">2-5 дней</span>
                </div>
              </div>
              <Button size="lg" className="text-lg px-8 bg-indigo-600 hover:bg-indigo-700">
                <HardDrive className="mr-2 h-5 w-5" />
                Восстановить данные
              </Button>
            </div>

            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Восстановление данных"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Data Types */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Типы восстанавливаемых данных
            </h2>
            <p className="text-xl text-gray-600">
              Восстанавливаем все виды пользовательских данных
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dataTypes.map((data, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    {data.icon}
                  </div>
                  <CardTitle className="text-lg">{data.type}</CardTitle>
                  <CardDescription>{data.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Успешность восстановления</span>
                      <span className="text-sm text-gray-600">{data.recoveryRate}</span>
                    </div>
                    <Progress value={parseInt(data.recoveryRate)} className="h-2" />
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-medium text-gray-900">Время:</p>
                      <p className="text-gray-600">{data.avgTime}</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Цена:</p>
                      <p className="text-indigo-600 font-bold">{data.price}</p>
                    </div>
                  </div>

                  <Button className="w-full">
                    Восстановить
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recovery Scenarios */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Сценарии восстановления
            </h2>
            <p className="text-xl text-gray-600">
              Различные ситуации потери данных и методы их восстановления
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {recoveryScenarios.map((scenario, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{scenario.scenario}</CardTitle>
                  <CardDescription>{scenario.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium text-gray-900">Успешность:</p>
                      <div className="flex items-center space-x-2">
                        <Progress value={parseInt(scenario.successRate)} className="h-2 flex-1" />
                        <span className="text-sm font-bold text-green-600">{scenario.successRate}</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Временные рамки:</p>
                      <p className="text-sm text-gray-600">{scenario.timeFrame}</p>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-gray-900 mb-2">Сложность:</p>
                    <Badge className={
                      scenario.difficulty === 'Низкая' ? 'bg-green-100 text-green-800' :
                      scenario.difficulty === 'Средняя' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }>
                      {scenario.difficulty}
                    </Badge>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Методы восстановления:</h4>
                    <ul className="space-y-2">
                      {scenario.methods.map((method, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span>{method}</span>
                        </li>
                      ))}
                    </ul>
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

      {/* Recovery Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Процесс восстановления данных
            </h2>
            <p className="text-xl text-gray-600">
              Как проходит восстановление ваших важных файлов
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {recoveryProcess.map((step, index) => (
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
                  
                  <div className="bg-indigo-50 p-3 rounded-lg">
                    <p className="text-sm font-medium text-indigo-800">Результат:</p>
                    <p className="text-sm text-indigo-700">{step.result}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Rate */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Статистика восстановления
            </h2>
            <p className="text-xl text-gray-600">
              Наши результаты по восстановлению различных типов данных
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="shadow-xl">
              <CardContent className="p-8">
                <div className="space-y-8">
                  {[
                    { type: "Фотографии", rate: 95, color: "blue" },
                    { type: "Контакты", rate: 98, color: "green" },
                    { type: "Сообщения", rate: 92, color: "purple" },
                    { type: "Документы", rate: 88, color: "orange" },
                    { type: "Музыка", rate: 85, color: "pink" },
                    { type: "Видео", rate: 90, color: "cyan" }
                  ].map((stat, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-900">{stat.type}</span>
                        <span className="font-bold text-lg">{stat.rate}%</span>
                      </div>
                      <Progress value={stat.rate} className="h-3" />
                      <p className="text-xs text-gray-500">
                        Успешно восстановлено в {stat.rate}% случаев за последний год
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Privacy & Security */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="text-center text-white mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Конфиденциальность и безопасность
            </h2>
            <p className="text-xl text-blue-100">
              Ваши данные под надежной защитой
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Shield className="h-8 w-8" />,
                title: "Полная конфиденциальность",
                description: "Подписываем соглашение о неразглашении"
              },
              {
                icon: <Upload className="h-8 w-8" />,
                title: "Безопасная передача",
                description: "Зашифрованная передача восстановленных данных"
              },
              {
                icon: <HardDrive className="h-8 w-8" />,
                title: "Удаление копий",
                description: "Полное удаление всех копий после передачи"
              },
              {
                icon: <FileText className="h-8 w-8" />,
                title: "Документооборот",
                description: "Официальное оформление всех процедур"
              }
            ].map((security, index) => (
              <div key={index} className="text-center text-white">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  {security.icon}
                </div>
                <h3 className="font-semibold text-lg mb-2">{security.title}</h3>
                <p className="text-blue-100">{security.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DataRecovery;