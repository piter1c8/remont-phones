import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Smartphone, 
  Zap, 
  AlertTriangle, 
  Wrench, 
  Clock, 
  DollarSign,
  CheckCircle,
  XCircle
} from 'lucide-react';

const RepairTypes = () => {
  const repairTypes = [
    {
      category: "Экспресс-ремонт",
      icon: <Zap className="h-8 w-8 text-yellow-500" />,
      description: "Быстрый ремонт за 15-60 минут",
      services: [
        { name: "Замена защитного стекла", time: "15 мин", price: "500 ₽" },
        { name: "Замена экрана (простые модели)", time: "30 мин", price: "2500 ₽" },
        { name: "Замена батареи", time: "25 мин", price: "1800 ₽" },
        { name: "Замена разъема зарядки", time: "45 мин", price: "2200 ₽" }
      ],
      color: "yellow"
    },
    {
      category: "Стандартный ремонт", 
      icon: <Wrench className="h-8 w-8 text-blue-500" />,
      description: "Обычный ремонт за 1-4 часа",
      services: [
        { name: "Замена экрана (сложные модели)", time: "1-2 ч", price: "4500 ₽" },
        { name: "Ремонт материнской платы", time: "2-4 ч", price: "5500 ₽" },
        { name: "Замена камеры", time: "1 ч", price: "3200 ₽" },
        { name: "Программный ремонт", time: "1-2 ч", price: "1500 ₽" }
      ],
      color: "blue"
    },
    {
      category: "Сложный ремонт",
      icon: <AlertTriangle className="h-8 w-8 text-red-500" />,
      description: "Восстановление после серьезных повреждений",
      services: [
        { name: "Ремонт после воды", time: "1-3 дня", price: "3000 ₽" },
        { name: "Восстановление данных", time: "2-5 дней", price: "3500 ₽" },
        { name: "Замена корпуса", time: "2-3 ч", price: "4200 ₽" },
        { name: "Микропайка компонентов", time: "1-2 дня", price: "6500 ₽" }
      ],
      color: "red"
    }
  ];

  const damageTypes = [
    {
      type: "Разбитый экран",
      severity: "Средняя",
      repairability: "Высокая",
      avgCost: "2500-4500 ₽",
      avgTime: "30-60 мин",
      description: "Трещины на экране, нерабочий тачскрин"
    },
    {
      type: "Не заряжается",
      severity: "Средняя", 
      repairability: "Высокая",
      avgCost: "1800-3000 ₽",
      avgTime: "30-90 мин",
      description: "Проблемы с батареей или разъемом зарядки"
    },
    {
      type: "Попадание воды",
      severity: "Высокая",
      repairability: "Средняя",
      avgCost: "3000-8000 ₽", 
      avgTime: "1-3 дня",
      description: "Окисление контактов, короткое замыкание"
    },
    {
      type: "Не включается",
      severity: "Высокая",
      repairability: "Средняя",
      avgCost: "2000-7000 ₽",
      avgTime: "2-24 ч",
      description: "Проблемы с материнской платой или ПО"
    },
    {
      type: "Плохо слышно",
      severity: "Низкая",
      repairability: "Высокая", 
      avgCost: "1600-2800 ₽",
      avgTime: "30-60 мин",
      description: "Неисправность динамика или микрофона"
    },
    {
      type: "Не работает камера",
      severity: "Средняя",
      repairability: "Высокая",
      avgCost: "2200-4000 ₽",
      avgTime: "40-80 мин", 
      description: "Поломка модуля камеры или шлейфа"
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'Низкая': return 'bg-green-100 text-green-800';
      case 'Средняя': return 'bg-yellow-100 text-yellow-800';
      case 'Высокая': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getRepairabilityIcon = (repairability: string) => {
    switch (repairability) {
      case 'Высокая': return <CheckCircle className="h-5 w-5 text-green-600" />;
      case 'Средняя': return <Clock className="h-5 w-5 text-yellow-600" />;
      case 'Низкая': return <XCircle className="h-5 w-5 text-red-600" />;
      default: return <Clock className="h-5 w-5 text-gray-600" />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Виды ремонта мобильных устройств
            </h1>
            <p className="text-xl text-gray-600">
              Классификация ремонтных работ по сложности и времени выполнения
            </p>
          </div>
        </div>
      </section>

      {/* Repair Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {repairTypes.map((category, index) => (
              <div key={index}>
                <div className="text-center mb-12">
                  <div className="flex items-center justify-center space-x-4 mb-4">
                    <div className={`w-16 h-16 bg-${category.color}-100 rounded-full flex items-center justify-center`}>
                      {category.icon}
                    </div>
                    <div className="text-left">
                      <h2 className="text-3xl font-bold text-gray-900">{category.category}</h2>
                      <p className="text-gray-600">{category.description}</p>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.services.map((service, idx) => (
                    <Card key={idx} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <h3 className="font-semibold text-lg text-gray-900 mb-2">
                          {service.name}
                        </h3>
                        <div className="space-y-2 mb-4">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Время:</span>
                            <span className="font-medium">{service.time}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Цена:</span>
                            <span className="font-bold text-blue-600">{service.price}</span>
                          </div>
                        </div>
                        <Button variant="outline" className="w-full">
                          Подробнее
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Damage Types */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Типы повреждений
            </h2>
            <p className="text-xl text-gray-600">
              Анализ наиболее частых поломок и методов их устранения
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {damageTypes.map((damage, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-xl">{damage.type}</CardTitle>
                    <Badge className={getSeverityColor(damage.severity)}>
                      {damage.severity}
                    </Badge>
                  </div>
                  <CardDescription>{damage.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Ремонтопригодность:</span>
                      <div className="flex items-center space-x-1">
                        {getRepairabilityIcon(damage.repairability)}
                        <span className="text-sm font-medium">{damage.repairability}</span>
                      </div>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Стоимость:</span>
                      <span className="font-bold text-blue-600">{damage.avgCost}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Время:</span>
                      <span className="font-medium">{damage.avgTime}</span>
                    </div>
                  </div>
                  <Button className="w-full">
                    Диагностика
                  </Button>
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

export default RepairTypes;