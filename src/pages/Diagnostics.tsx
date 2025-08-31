import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { 
  Search, 
  Smartphone, 
  AlertCircle, 
  CheckCircle, 
  Clock, 
  Wrench,
  Battery,
  Wifi,
  Camera,
  Speaker,
  Droplets
} from 'lucide-react';

const Diagnostics = () => {
  const [formData, setFormData] = useState({
    brand: '',
    model: '',
    problem: '',
    description: '',
    symptoms: []
  });

  const symptoms = [
    { id: 'screen', label: 'Разбитый экран', icon: <Smartphone className="h-4 w-4" /> },
    { id: 'battery', label: 'Быстро разряжается', icon: <Battery className="h-4 w-4" /> },
    { id: 'charging', label: 'Не заряжается', icon: <Battery className="h-4 w-4" /> },
    { id: 'water', label: 'Попала вода', icon: <Droplets className="h-4 w-4" /> },
    { id: 'wifi', label: 'Проблемы с Wi-Fi', icon: <Wifi className="h-4 w-4" /> },
    { id: 'camera', label: 'Не работает камера', icon: <Camera className="h-4 w-4" /> },
    { id: 'sound', label: 'Нет звука', icon: <Speaker className="h-4 w-4" /> },
    { id: 'power', label: 'Не включается', icon: <AlertCircle className="h-4 w-4" /> }
  ];

  const diagnosticSteps = [
    {
      step: 1,
      title: "Внешний осмотр",
      description: "Проверка корпуса, экрана и разъемов на наличие видимых повреждений",
      time: "2-3 мин",
      tools: ["Лупа", "Фонарик"]
    },
    {
      step: 2,
      title: "Функциональное тестирование",
      description: "Проверка работы всех функций: звук, камера, сенсоры, связь",
      time: "5-10 мин", 
      tools: ["Тестовые приложения", "Мультиметр"]
    },
    {
      step: 3,
      title: "Программная диагностика",
      description: "Анализ системных логов, проверка прошивки и настроек",
      time: "3-5 мин",
      tools: ["Специальное ПО", "Диагностические утилиты"]
    },
    {
      step: 4,
      title: "Аппаратная диагностика",
      description: "Проверка материнской платы, процессора и других компонентов",
      time: "10-15 мин",
      tools: ["Осциллограф", "Тепловизор", "Микроскоп"]
    }
  ];

  const commonProblems = [
    {
      problem: "Разбитый экран",
      symptoms: ["Трещины на экране", "Черные пятна", "Не реагирует на касания"],
      diagnosis: "Визуальный осмотр",
      solution: "Замена дисплейного модуля",
      cost: "2500-4500 ₽",
      time: "30-60 мин"
    },
    {
      problem: "Быстро разряжается",
      symptoms: ["Батарея садится за несколько часов", "Внезапные выключения", "Долго заряжается"],
      diagnosis: "Проверка батареи и зарядной системы",
      solution: "Замена аккумулятора",
      cost: "1800-3000 ₽", 
      time: "20-40 мин"
    },
    {
      problem: "Попадание воды",
      symptoms: ["Не включается", "Работает нестабильно", "Коррозия на разъемах"],
      diagnosis: "Разборка и осмотр платы",
      solution: "Чистка, сушка, замена поврежденных компонентов",
      cost: "3000-8000 ₽",
      time: "1-3 дня"
    },
    {
      problem: "Не работает камера",
      symptoms: ["Черный экран при запуске камеры", "Размытые фото", "Ошибка камеры"],
      diagnosis: "Тестирование модулей камеры",
      solution: "Замена модуля камеры или шлейфа",
      cost: "2200-4000 ₽",
      time: "40-80 мин"
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
              Бесплатная диагностика телефонов
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Точное определение неисправностей с помощью профессионального оборудования. 
              Диагностика бесплатно при ремонте в нашем сервисе.
            </p>
            <div className="bg-white p-6 rounded-xl shadow-lg inline-block">
              <div className="flex items-center space-x-4">
                <Search className="h-8 w-8 text-blue-600" />
                <div className="text-left">
                  <div className="font-bold text-2xl text-gray-900">100% точность</div>
                  <div className="text-gray-600">диагностики неисправностей</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diagnostic Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Предварительная диагностика онлайн
              </h2>
              <p className="text-xl text-gray-600">
                Опишите проблему, и мы дадим предварительную оценку
              </p>
            </div>

            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl">Форма диагностики</CardTitle>
                <CardDescription>
                  Заполните форму для получения предварительной оценки стоимости ремонта
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="brand">Бренд устройства</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите бренд" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="iphone">iPhone</SelectItem>
                        <SelectItem value="samsung">Samsung</SelectItem>
                        <SelectItem value="xiaomi">Xiaomi</SelectItem>
                        <SelectItem value="huawei">Huawei</SelectItem>
                        <SelectItem value="oneplus">OnePlus</SelectItem>
                        <SelectItem value="other">Другой</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="model">Модель</Label>
                    <Input placeholder="Например: iPhone 14 Pro" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Симптомы (выберите все подходящие)</Label>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {symptoms.map((symptom) => (
                      <div key={symptom.id} className="flex items-center space-x-2">
                        <Checkbox id={symptom.id} />
                        <Label htmlFor={symptom.id} className="flex items-center space-x-2 cursor-pointer">
                          {symptom.icon}
                          <span className="text-sm">{symptom.label}</span>
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Подробное описание проблемы</Label>
                  <Textarea 
                    placeholder="Опишите, что именно не работает, при каких условиях возникла проблема..."
                    className="min-h-[100px]"
                  />
                </div>

                <Button className="w-full" size="lg">
                  <Search className="mr-2 h-5 w-5" />
                  Получить предварительную диагностику
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Diagnostic Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Этапы профессиональной диагностики
            </h2>
            <p className="text-xl text-gray-600">
              Как мы определяем неисправности в нашем сервисном центре
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {diagnosticSteps.map((step, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                  <CardDescription>{step.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Время:</span>
                    <span className="font-medium">{step.time}</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-2">Инструменты:</p>
                    <div className="flex flex-wrap gap-1">
                      {step.tools.map((tool, idx) => (
                        <span key={idx} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Common Problems */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Частые проблемы и их диагностика
            </h2>
            <p className="text-xl text-gray-600">
              Как мы определяем и решаем самые распространенные неисправности
            </p>
          </div>

          <div className="space-y-8">
            {commonProblems.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-3 gap-8">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
                        <AlertCircle className="h-6 w-6 text-red-600" />
                        <span>{item.problem}</span>
                      </h3>
                      <div className="space-y-2">
                        <p className="font-semibold text-sm text-gray-700">Симптомы:</p>
                        <ul className="space-y-1">
                          {item.symptoms.map((symptom, idx) => (
                            <li key={idx} className="text-sm text-gray-600 flex items-center space-x-2">
                              <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                              <span>{symptom}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center space-x-2">
                        <Search className="h-5 w-5 text-blue-600" />
                        <span>Диагностика</span>
                      </h4>
                      <p className="text-gray-600 mb-4">{item.diagnosis}</p>
                      
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center space-x-2">
                        <Wrench className="h-5 w-5 text-green-600" />
                        <span>Решение</span>
                      </h4>
                      <p className="text-gray-600">{item.solution}</p>
                    </div>

                    <div className="space-y-4">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600 mb-1">{item.cost}</div>
                        <div className="text-sm text-gray-600">Стоимость ремонта</div>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg">
                        <div className="text-xl font-bold text-green-600 mb-1">{item.time}</div>
                        <div className="text-sm text-gray-600">Время выполнения</div>
                      </div>
                      <Button className="w-full">
                        Записаться на диагностику
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="text-center text-white mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Преимущества нашей диагностики
            </h2>
            <p className="text-xl text-blue-100">
              Почему стоит доверить диагностику профессионалам
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <CheckCircle className="h-8 w-8" />,
                title: "Бесплатно",
                description: "Диагностика бесплатно при ремонте в нашем сервисе"
              },
              {
                icon: <Clock className="h-8 w-8" />,
                title: "Быстро",
                description: "Полная диагностика за 15-30 минут"
              },
              {
                icon: <Search className="h-8 w-8" />,
                title: "Точно",
                description: "Профессиональное оборудование и опытные мастера"
              },
              {
                icon: <Wrench className="h-8 w-8" />,
                title: "Подробно",
                description: "Детальный отчет о состоянии устройства"
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center text-white">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                <p className="text-blue-100">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Diagnostics;