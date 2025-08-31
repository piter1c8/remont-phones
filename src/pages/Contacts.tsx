import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Navigation,
  Car,
  Metro,
  Bus
} from 'lucide-react';

const Contacts = () => {
  const contacts = [
    {
      type: "Главный офис",
      address: "ул. Ремонтная, 123, Москва, 119991",
      phone: "+7 (999) 123-45-67",
      email: "info@mobilservice.ru",
      hours: "Пн-Вс: 9:00 - 21:00",
      metro: "Технопарк",
      parking: "Бесплатная парковка"
    },
    {
      type: "Филиал на Арбате", 
      address: "ул. Арбат, 45, Москва, 119002",
      phone: "+7 (999) 123-45-68",
      email: "arbat@mobilservice.ru", 
      hours: "Пн-Вс: 10:00 - 20:00",
      metro: "Арбатская",
      parking: "Платная парковка"
    }
  ];

  const transportInfo = [
    {
      icon: <Metro className="h-5 w-5 text-blue-600" />,
      title: "Метро",
      description: "Станция «Технопарк», выход №2, 5 минут пешком"
    },
    {
      icon: <Bus className="h-5 w-5 text-green-600" />,
      title: "Автобус",
      description: "Маршруты №123, №456, остановка «Ремонтная улица»"
    },
    {
      icon: <Car className="h-5 w-5 text-purple-600" />,
      title: "Автомобиль",
      description: "Бесплатная парковка для клиентов на 20 мест"
    },
    {
      icon: <Navigation className="h-5 w-5 text-orange-600" />,
      title: "Навигация",
      description: "GPS координаты: 55.123456, 37.654321"
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
              Контакты и адреса
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Свяжитесь с нами удобным способом или приезжайте в один из наших сервисных центров
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                <Phone className="mr-2 h-5 w-5" />
                +7 (999) 123-45-67
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                <MessageCircle className="mr-2 h-5 w-5" />
                Написать в WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {contacts.map((contact, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center space-x-2">
                    <MapPin className="h-6 w-6 text-blue-600" />
                    <span>{contact.type}</span>
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-gray-600 mt-1" />
                      <div>
                        <p className="font-medium text-gray-900">Адрес:</p>
                        <p className="text-gray-600">{contact.address}</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-gray-600" />
                      <div>
                        <p className="font-medium text-gray-900">Телефон:</p>
                        <p className="text-blue-600 font-medium">{contact.phone}</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-gray-600" />
                      <div>
                        <p className="font-medium text-gray-900">Email:</p>
                        <p className="text-blue-600">{contact.email}</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Clock className="h-5 w-5 text-gray-600" />
                      <div>
                        <p className="font-medium text-gray-900">Режим работы:</p>
                        <p className="text-gray-600">{contact.hours}</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="font-medium text-gray-900">Метро:</p>
                        <p className="text-gray-600">{contact.metro}</p>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Парковка:</p>
                        <p className="text-gray-600">{contact.parking}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <Button className="flex-1">
                      <Phone className="mr-2 h-4 w-4" />
                      Позвонить
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <Navigation className="mr-2 h-4 w-4" />
                      Маршрут
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Transport Info */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Как добраться
            </h2>
            <p className="text-xl text-gray-600">
              Удобные способы добраться до наших сервисных центров
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {transportInfo.map((transport, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    {transport.icon}
                  </div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">
                    {transport.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{transport.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="shadow-xl">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Связаться с нами</CardTitle>
                <CardDescription>
                  Оставьте сообщение, и мы свяжемся с вами в течение 15 минут
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Имя</Label>
                    <Input id="name" placeholder="Ваше имя" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон</Label>
                    <Input id="phone" placeholder="+7 (999) 123-45-67" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email (необязательно)</Label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Сообщение</Label>
                  <Textarea 
                    id="message"
                    placeholder="Опишите проблему с устройством или задайте вопрос..."
                    className="min-h-[120px]"
                  />
                </div>

                <Button className="w-full" size="lg">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Отправить сообщение
                </Button>

                <div className="text-center text-sm text-gray-600">
                  <p>Или позвоните нам прямо сейчас:</p>
                  <p className="font-bold text-lg text-blue-600">+7 (999) 123-45-67</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Расположение на карте
            </h2>
            <p className="text-xl text-gray-600">
              Найдите ближайший к вам сервисный центр
            </p>
          </div>

          <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
            <div className="text-center text-gray-500">
              <MapPin className="h-16 w-16 mx-auto mb-4" />
              <p className="text-lg font-medium">Интерактивная карта</p>
              <p>с расположением наших офисов</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contacts;