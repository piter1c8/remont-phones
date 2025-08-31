import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Smartphone, 
  Wrench, 
  Shield, 
  Clock, 
  Star, 
  CheckCircle, 
  Phone, 
  Battery, 
  Droplets, 
  Cpu,
  Users,
  Award,
  MapPin,
  Headphones
} from 'lucide-react';

const Index = () => {
  const services = [
    {
      icon: <Smartphone className="h-8 w-8 text-blue-600" />,
      title: "Замена экрана",
      description: "Профессиональная замена разбитых экранов для всех моделей телефонов",
      price: "от 2 500 ₽",
      time: "30-60 мин"
    },
    {
      icon: <Battery className="h-8 w-8 text-green-600" />,
      title: "Замена батареи",
      description: "Установка оригинальных аккумуляторов с гарантией",
      price: "от 1 800 ₽",
      time: "20-40 мин"
    },
    {
      icon: <Droplets className="h-8 w-8 text-red-600" />,
      title: "Ремонт после воды",
      description: "Восстановление устройств после попадания влаги",
      price: "от 3 000 ₽",
      time: "1-3 дня"
    },
    {
      icon: <Cpu className="h-8 w-8 text-purple-600" />,
      title: "Программный ремонт",
      description: "Прошивка, разблокировка, восстановление ПО",
      price: "от 1 500 ₽",
      time: "1-2 часа"
    }
  ];

  const features = [
    {
      icon: <Shield className="h-6 w-6 text-blue-600" />,
      title: "Гарантия качества",
      description: "До 12 месяцев гарантии на все виды работ"
    },
    {
      icon: <Clock className="h-6 w-6 text-green-600" />,
      title: "Быстрый ремонт",
      description: "Большинство ремонтов выполняем за 30-60 минут"
    },
    {
      icon: <Star className="h-6 w-6 text-yellow-600" />,
      title: "Опытные мастера",
      description: "Сертифицированные специалисты с опытом 10+ лет"
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-purple-600" />,
      title: "Оригинальные запчасти",
      description: "Используем только качественные комплектующие"
    },
    {
      icon: <Users className="h-6 w-6 text-indigo-600" />,
      title: "Довольные клиенты",
      description: "Более 15 000 успешно отремонтированных устройств"
    },
    {
      icon: <Award className="h-6 w-6 text-orange-600" />,
      title: "Лучшие цены",
      description: "Конкурентные цены и скидки постоянным клиентам"
    }
  ];

  const brands = [
    "iPhone", "Samsung", "Xiaomi", "Huawei", "Honor", "OnePlus", "Google Pixel", "Sony"
  ];

  const stats = [
    { number: "15,000+", label: "Отремонтированных устройств" },
    { number: "10+", label: "Лет опыта" },
    { number: "98%", label: "Довольных клиентов" },
    { number: "24/7", label: "Поддержка клиентов" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">
                  Профессиональный ремонт
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Ремонт и обслуживание 
                  <span className="text-blue-600"> мобильных телефонов</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Быстро, качественно и с гарантией. Восстановим ваш телефон 
                  в кратчайшие сроки с использованием оригинальных запчастей.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8">
                  <Wrench className="mr-2 h-5 w-5" />
                  Заказать ремонт
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8">
                  <Phone className="mr-2 h-5 w-5" />
                  Позвонить сейчас
                </Button>
              </div>

              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>Бесплатная диагностика</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>Гарантия до 12 месяцев</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Ремонт телефонов"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Ремонт за 30 минут</p>
                    <p className="text-sm text-gray-600">Экспресс-сервис</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Наши основные услуги
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Предоставляем полный спектр услуг по ремонту и обслуживанию мобильных устройств
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-blue-600">{service.price}</div>
                    <div className="text-sm text-gray-500">Время: {service.time}</div>
                  </div>
                  <Button className="w-full">Заказать</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Почему выбирают нас
            </h2>
            <p className="text-xl text-gray-600">
              Преимущества работы с нашим сервисным центром
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Ремонтируем все бренды
            </h2>
            <p className="text-xl text-gray-600">
              Работаем с устройствами всех популярных производителей
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {brands.map((brand, index) => (
              <Link 
                key={index} 
                to={`/brand/${brand.toLowerCase().replace(' ', '-')}`}
                className="bg-gray-50 hover:bg-gray-100 rounded-lg p-6 text-center transition-colors duration-300"
              >
                <div className="font-semibold text-gray-900">{brand}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center text-white">
                <div className="text-4xl lg:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Как проходит ремонт
            </h2>
            <p className="text-xl text-gray-600">
              Простой и прозрачный процесс восстановления вашего устройства
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Диагностика", desc: "Бесплатная диагностика и оценка стоимости" },
              { step: "02", title: "Согласование", desc: "Обсуждаем стоимость и сроки ремонта" },
              { step: "03", title: "Ремонт", desc: "Выполняем ремонт с использованием качественных запчастей" },
              { step: "04", title: "Тестирование", desc: "Проверяем работоспособность и выдаем гарантию" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Section */}
      <section className="py-20 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Экстренный ремонт 24/7
                </h2>
                <p className="text-xl text-gray-600 mb-6">
                  Срочный ремонт в любое время суток. Выезд мастера на дом или в офис.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Выезд мастера в течение часа</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Ремонт на месте</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Оплата после выполнения работ</span>
                  </div>
                </div>
              </div>
              <div className="text-center lg:text-right">
                <div className="text-3xl font-bold text-red-600 mb-2">
                  +7 (999) 911-24-7
                </div>
                <p className="text-gray-600 mb-6">Круглосуточная горячая линия</p>
                <Button size="lg" className="bg-red-600 hover:bg-red-700">
                  <Phone className="mr-2 h-5 w-5" />
                  Вызвать мастера
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Наши сервисные центры
            </h2>
            <p className="text-xl text-gray-600">
              Удобное расположение в центре города
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Главный офис</h3>
                    <p className="text-gray-600">ул. Ремонтная, 123, Москва</p>
                    <p className="text-sm text-gray-500">Пн-Вс: 9:00 - 21:00</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Филиал на Арбате</h3>
                    <p className="text-gray-600">ул. Арбат, 45, Москва</p>
                    <p className="text-sm text-gray-500">Пн-Вс: 10:00 - 20:00</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold text-lg mb-3">Как добраться</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Метро "Технопарк" - 5 минут пешком</li>
                  <li>• Автобус №123, остановка "Ремонтная"</li>
                  <li>• Бесплатная парковка для клиентов</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-100 rounded-2xl h-96 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <MapPin className="h-12 w-12 mx-auto mb-4" />
                <p>Интерактивная карта</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Отзывы наших клиентов
            </h2>
            <p className="text-xl text-gray-600">
              Что говорят о нас довольные клиенты
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Анна Петрова",
                rating: 5,
                text: "Отличный сервис! Заменили экран iPhone за 40 минут. Качество на высоте, цена приемлемая.",
                service: "Замена экрана iPhone 13"
              },
              {
                name: "Михаил Сидоров",
                rating: 5,
                text: "Спасли мой Samsung после купания в море. Думал, что всё - конец, но ребята восстановили!",
                service: "Ремонт после воды"
              },
              {
                name: "Елена Козлова",
                rating: 5,
                text: "Быстро поменяли батарею в Xiaomi. Теперь телефон работает как новый. Рекомендую!",
                service: "Замена батареи"
              }
            ].map((review, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{review.text}"</p>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-gray-900">{review.name}</p>
                    <p className="text-sm text-gray-500">{review.service}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Часто задаваемые вопросы
            </h2>
            <p className="text-xl text-gray-600">
              Ответы на популярные вопросы о ремонте
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "Сколько времени занимает ремонт?",
                answer: "Большинство ремонтов выполняется за 30-60 минут. Сложные случаи могут занять 1-3 дня."
              },
              {
                question: "Какая гарантия на ремонт?",
                answer: "Предоставляем гарантию от 3 до 12 месяцев в зависимости от вида работ."
              },
              {
                question: "Используете ли вы оригинальные запчасти?",
                answer: "Да, мы работаем только с оригинальными и качественными аналогами запчастей."
              }
            ].map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Готовы починить ваш телефон?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Свяжитесь с нами прямо сейчас для бесплатной консультации и диагностики
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                <Phone className="mr-2 h-5 w-5" />
                +7 (999) 123-45-67
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 border-white text-white hover:bg-white hover:text-blue-600">
                <Headphones className="mr-2 h-5 w-5" />
                Онлайн консультация
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;