import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Smartphone, 
  Battery, 
  Droplets, 
  Cpu, 
  Camera, 
  Speaker, 
  Wifi, 
  HardDrive,
  Shield,
  Wrench,
  Clock,
  CheckCircle
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Smartphone className="h-8 w-8 text-blue-600" />,
      title: "Замена экрана и тачскрина",
      description: "Профессиональная замена разбитых экранов, тачскринов и защитных стекол",
      features: ["Оригинальные дисплеи", "Калибровка тачскрина", "Проверка всех функций"],
      price: "от 2 500 ₽",
      time: "30-60 мин",
      popular: true
    },
    {
      icon: <Battery className="h-8 w-8 text-green-600" />,
      title: "Замена аккумулятора",
      description: "Установка новых батарей для восстановления автономности устройства",
      features: ["Оригинальные аккумуляторы", "Проверка зарядки", "Калибровка батареи"],
      price: "от 1 800 ₽",
      time: "20-40 мин",
      popular: true
    },
    {
      icon: <Droplets className="h-8 w-8 text-red-600" />,
      title: "Ремонт после попадания влаги",
      description: "Восстановление устройств после контакта с водой или другими жидкостями",
      features: ["Ультразвуковая чистка", "Замена поврежденных компонентов", "Полное тестирование"],
      price: "от 3 000 ₽",
      time: "1-3 дня",
      popular: false
    },
    {
      icon: <Cpu className="h-8 w-8 text-purple-600" />,
      title: "Программный ремонт",
      description: "Прошивка, разблокировка, восстановление программного обеспечения",
      features: ["Официальные прошивки", "Разблокировка операторов", "Восстановление IMEI"],
      price: "от 1 500 ₽",
      time: "1-2 часа",
      popular: false
    },
    {
      icon: <Camera className="h-8 w-8 text-indigo-600" />,
      title: "Ремонт камеры",
      description: "Замена основной и фронтальной камер, ремонт модулей фокусировки",
      features: ["Оригинальные модули", "Настройка автофокуса", "Проверка качества съемки"],
      price: "от 2 200 ₽",
      time: "40-80 мин",
      popular: false
    },
    {
      icon: <Speaker className="h-8 w-8 text-orange-600" />,
      title: "Ремонт динамиков и микрофона",
      description: "Восстановление звука, замена динамиков, микрофонов и аудиоразъемов",
      features: ["Качественные динамики", "Проверка всех режимов", "Настройка звука"],
      price: "от 1 600 ₽",
      time: "30-50 мин",
      popular: false
    },
    {
      icon: <Wifi className="h-8 w-8 text-cyan-600" />,
      title: "Ремонт модулей связи",
      description: "Восстановление Wi-Fi, Bluetooth, GPS и мобильной связи",
      features: ["Замена антенн", "Ремонт модулей", "Проверка сигнала"],
      price: "от 2 800 ₽",
      time: "1-2 часа",
      popular: false
    },
    {
      icon: <HardDrive className="h-8 w-8 text-pink-600" />,
      title: "Восстановление данных",
      description: "Извлечение фотографий, контактов и других важных данных",
      features: ["Безопасное извлечение", "Все типы файлов", "Конфиденциальность"],
      price: "от 3 500 ₽",
      time: "2-5 дней",
      popular: false
    },
    {
      icon: <Shield className="h-8 w-8 text-emerald-600" />,
      title: "Защита устройства",
      description: "Установка защитных стекол, пленок и чехлов",
      features: ["Премиум защита", "Точная установка", "Гарантия на материалы"],
      price: "от 500 ₽",
      time: "10-15 мин",
      popular: false
    }
  ];

  const additionalServices = [
    "Замена разъема зарядки",
    "Ремонт кнопок управления",
    "Замена корпуса",
    "Чистка от пыли и грязи",
    "Замена SIM-лотка",
    "Ремонт вибромотора"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Полный спектр услуг по ремонту мобильных устройств
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Профессиональный ремонт телефонов всех марок и моделей. 
              Быстро, качественно, с гарантией.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium">Бесплатная диагностика</span>
              </div>
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <Clock className="h-5 w-5 text-blue-600" />
                <span className="text-sm font-medium">Ремонт за 30-60 минут</span>
              </div>
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <Shield className="h-5 w-5 text-purple-600" />
                <span className="text-sm font-medium">Гарантия до 12 месяцев</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Основные услуги
            </h2>
            <p className="text-xl text-gray-600">
              Самые востребованные виды ремонта
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="relative hover:shadow-xl transition-all duration-300 group">
                {service.popular && (
                  <Badge className="absolute -top-3 left-4 bg-red-500 hover:bg-red-500">
                    Популярно
                  </Badge>
                )}
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <div className="text-2xl font-bold text-blue-600">{service.price}</div>
                        <div className="text-sm text-gray-500">Время: {service.time}</div>
                      </div>
                    </div>
                    <Button className="w-full group-hover:bg-blue-700 transition-colors">
                      <Wrench className="mr-2 h-4 w-4" />
                      Заказать ремонт
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Дополнительные услуги
            </h2>
            <p className="text-xl text-gray-600">
              Полный комплекс работ по обслуживанию мобильных устройств
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <Wrench className="h-5 w-5 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{service}</h3>
                      <p className="text-sm text-gray-600">Быстро и качественно</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Заказать
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Процесс ремонта
            </h2>
            <p className="text-xl text-gray-600">
              Как мы работаем с вашим устройством
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Диагностика",
                description: "Бесплатная диагностика и определение неисправностей",
                icon: <Wrench className="h-6 w-6" />
              },
              {
                step: "02", 
                title: "Оценка",
                description: "Расчет стоимости и согласование сроков ремонта",
                icon: <Clock className="h-6 w-6" />
              },
              {
                step: "03",
                title: "Ремонт", 
                description: "Выполнение работ с использованием качественных запчастей",
                icon: <Cpu className="h-6 w-6" />
              },
              {
                step: "04",
                title: "Тестирование",
                description: "Полная проверка функций и выдача гарантии",
                icon: <CheckCircle className="h-6 w-6" />
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto">
                    {item.step}
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white border-4 border-blue-600 rounded-full flex items-center justify-center">
                    {item.icon}
                  </div>
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;