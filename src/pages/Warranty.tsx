import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  Shield, 
  CheckCircle, 
  Clock, 
  AlertTriangle, 
  FileText, 
  Search,
  Award,
  Phone,
  Calendar
} from 'lucide-react';

const Warranty = () => {
  const warrantyTypes = [
    {
      type: "Стандартная гарантия",
      duration: "3 месяца",
      coverage: "Качество выполненных работ",
      description: "Гарантируем качество ремонта и установленных запчастей",
      color: "blue",
      services: ["Замена экрана", "Замена батареи", "Ремонт разъемов", "Замена кнопок"]
    },
    {
      type: "Расширенная гарантия",
      duration: "6 месяцев", 
      coverage: "Работы + запчасти",
      description: "Полная гарантия на работы и оригинальные запчасти",
      color: "green",
      services: ["Ремонт материнской платы", "Замена камеры", "Программный ремонт"]
    },
    {
      type: "Премиум гарантия",
      duration: "12 месяцев",
      coverage: "Полное покрытие",
      description: "Максимальная защита для сложных ремонтов",
      color: "purple", 
      services: ["Ремонт после воды", "Восстановление данных", "Сложная микропайка"]
    }
  ];

  const warrantyConditions = [
    {
      title: "Что покрывает гарантия",
      items: [
        "Качество выполненных работ",
        "Функциональность замененных деталей", 
        "Правильность установки компонентов",
        "Соответствие заявленным характеристикам"
      ],
      icon: <CheckCircle className="h-6 w-6 text-green-600" />
    },
    {
      title: "Что НЕ покрывает гарантия",
      items: [
        "Механические повреждения после ремонта",
        "Попадание влаги после ремонта",
        "Неправильная эксплуатация устройства",
        "Вмешательство третьих лиц"
      ],
      icon: <AlertTriangle className="h-6 w-6 text-red-600" />
    }
  ];

  const warrantyProcess = [
    {
      step: "1",
      title: "Обращение",
      description: "Свяжитесь с нами по телефону или приезжайте в сервис",
      action: "Позвонить или приехать"
    },
    {
      step: "2", 
      title: "Проверка",
      description: "Предъявите гарантийный талон и опишите проблему",
      action: "Принести талон"
    },
    {
      step: "3",
      title: "Диагностика",
      description: "Бесплатная диагностика для определения гарантийного случая",
      action: "Ожидать результат"
    },
    {
      step: "4",
      title: "Устранение",
      description: "Бесплатное устранение неисправности по гарантии",
      action: "Получить устройство"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Гарантия на ремонт
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Мы уверены в качестве наших работ и предоставляем официальную гарантию 
              на все виды ремонта от 3 до 12 месяцев.
            </p>
            <div className="bg-white p-6 rounded-xl shadow-lg inline-block">
              <div className="flex items-center space-x-4">
                <Shield className="h-10 w-10 text-blue-600" />
                <div className="text-left">
                  <div className="font-bold text-3xl text-gray-900">до 12 месяцев</div>
                  <div className="text-gray-600">гарантии на ремонт</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Warranty Types */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Типы гарантии
            </h2>
            <p className="text-xl text-gray-600">
              Различные варианты гарантийного обслуживания
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {warrantyTypes.map((warranty, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 relative">
                {index === 1 && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-500 hover:bg-green-500">
                    Рекомендуем
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 bg-${warranty.color}-100 rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <Shield className={`h-8 w-8 text-${warranty.color}-600`} />
                  </div>
                  <CardTitle className="text-2xl">{warranty.type}</CardTitle>
                  <div className={`text-3xl font-bold text-${warranty.color}-600`}>
                    {warranty.duration}
                  </div>
                  <CardDescription className="text-lg">
                    {warranty.coverage}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <p className="text-gray-600 text-center">{warranty.description}</p>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Применяется к:</h4>
                    <ul className="space-y-2">
                      {warranty.services.map((service, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span>{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button className={`w-full bg-${warranty.color}-600 hover:bg-${warranty.color}-700`}>
                    Узнать подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Warranty Conditions */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Условия гарантии
            </h2>
            <p className="text-xl text-gray-600">
              Важная информация о гарантийном обслуживании
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {warrantyConditions.map((condition, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3 text-xl">
                    {condition.icon}
                    <span>{condition.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {condition.items.map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Warranty Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Как воспользоваться гарантией
            </h2>
            <p className="text-xl text-gray-600">
              Простой процесс обращения по гарантийному случаю
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {warrantyProcess.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 mb-4">{step.description}</p>
                <Badge variant="outline" className="text-blue-600 border-blue-600">
                  {step.action}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Warranty Check */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="shadow-xl">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl flex items-center justify-center space-x-2">
                  <Search className="h-6 w-6 text-blue-600" />
                  <span>Проверить гарантию</span>
                </CardTitle>
                <CardDescription>
                  Введите номер гарантийного талона для проверки статуса
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="warranty-number">Номер гарантийного талона</Label>
                  <Input 
                    id="warranty-number"
                    placeholder="Например: WR-2024-001234"
                    className="text-center text-lg"
                  />
                </div>
                
                <Button className="w-full" size="lg">
                  <Search className="mr-2 h-5 w-5" />
                  Проверить гарантию
                </Button>

                <div className="text-center text-sm text-gray-600">
                  <p>Не можете найти гарантийный талон?</p>
                  <Button variant="link" className="text-blue-600">
                    <Phone className="mr-1 h-4 w-4" />
                    Позвоните нам: +7 (999) 123-45-67
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Warranty;