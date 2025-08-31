import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  Award, 
  Clock, 
  Shield, 
  Star, 
  Wrench, 
  Smartphone,
  CheckCircle,
  Target,
  Heart,
  Lightbulb
} from 'lucide-react';

const About = () => {
  const stats = [
    { number: "15,000+", label: "Отремонтированных устройств", icon: <Smartphone className="h-6 w-6" /> },
    { number: "10+", label: "Лет опыта", icon: <Clock className="h-6 w-6" /> },
    { number: "98%", label: "Довольных клиентов", icon: <Star className="h-6 w-6" /> },
    { number: "50+", label: "Сертифицированных мастеров", icon: <Users className="h-6 w-6" /> }
  ];

  const team = [
    {
      name: "Алексей Петров",
      position: "Главный инженер",
      experience: "12 лет",
      specialization: "iPhone, сложная микропайка",
      photo: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300",
      achievements: ["Сертификат Apple", "Эксперт по микропайке", "Более 5000 ремонтов"]
    },
    {
      name: "Мария Сидорова", 
      position: "Ведущий мастер",
      experience: "8 лет",
      specialization: "Samsung, программный ремонт",
      photo: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=300",
      achievements: ["Сертификат Samsung", "Специалист по Android", "Более 3000 ремонтов"]
    },
    {
      name: "Дмитрий Козлов",
      position: "Мастер-диагност",
      experience: "6 лет", 
      specialization: "Диагностика, восстановление данных",
      photo: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300",
      achievements: ["Эксперт по диагностике", "Специалист по данным", "Более 2000 диагностик"]
    }
  ];

  const values = [
    {
      icon: <Target className="h-8 w-8 text-blue-600" />,
      title: "Профессионализм",
      description: "Высокий уровень квалификации и постоянное обучение наших мастеров"
    },
    {
      icon: <Heart className="h-8 w-8 text-red-600" />,
      title: "Забота о клиентах",
      description: "Индивидуальный подход к каждому клиенту и его потребностям"
    },
    {
      icon: <Shield className="h-8 w-8 text-green-600" />,
      title: "Надежность",
      description: "Гарантия качества и ответственность за результат работы"
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-yellow-600" />,
      title: "Инновации",
      description: "Использование современного оборудования и передовых технологий"
    }
  ];

  const achievements = [
    {
      year: "2014",
      title: "Основание компании",
      description: "Открытие первого сервисного центра в Москве"
    },
    {
      year: "2016", 
      title: "Расширение услуг",
      description: "Добавление программного ремонта и восстановления данных"
    },
    {
      year: "2018",
      title: "Сертификация",
      description: "Получение официальных сертификатов от Apple и Samsung"
    },
    {
      year: "2020",
      title: "Новые технологии",
      description: "Внедрение микропайки и ремонта материнских плат"
    },
    {
      year: "2022",
      title: "Второй филиал",
      description: "Открытие дополнительного сервисного центра"
    },
    {
      year: "2024",
      title: "15,000 ремонтов",
      description: "Достижение отметки в 15 тысяч отремонтированных устройств"
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
              О нашем сервисном центре
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Более 10 лет мы профессионально занимаемся ремонтом мобильных устройств. 
              Наша миссия — вернуть к жизни ваши гаджеты быстро и качественно.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Наши ценности
            </h2>
            <p className="text-xl text-gray-600">
              Принципы, которыми мы руководствуемся в работе
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center mx-auto mb-6">
                  {value.icon}
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Наша команда
            </h2>
            <p className="text-xl text-gray-600">
              Опытные мастера с многолетним стажем работы
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow text-center">
                <CardHeader>
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                    <img 
                      src={member.photo} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-lg">{member.position}</CardDescription>
                  <Badge className="mx-auto">
                    Опыт: {member.experience}
                  </Badge>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Специализация:</h4>
                    <p className="text-gray-600">{member.specialization}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Достижения:</h4>
                    <ul className="space-y-1">
                      {member.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-center justify-center space-x-2">
                          <Award className="h-3 w-3 text-yellow-600" />
                          <span>{achievement}</span>
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

      {/* History Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              История развития
            </h2>
            <p className="text-xl text-gray-600">
              Ключевые этапы развития нашего сервисного центра
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>
              
              <div className="space-y-12">
                {achievements.map((achievement, index) => (
                  <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                      <Card className="hover:shadow-lg transition-shadow">
                        <CardContent className="p-6">
                          <Badge className="mb-3 bg-blue-600 hover:bg-blue-600">
                            {achievement.year}
                          </Badge>
                          <h3 className="font-bold text-lg text-gray-900 mb-2">
                            {achievement.title}
                          </h3>
                          <p className="text-gray-600">{achievement.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                    
                    <div className="relative z-10 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                    
                    <div className="w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Сертификаты и награды
            </h2>
            <p className="text-xl text-gray-600">
              Официальные подтверждения нашей квалификации
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Сертификат Apple", year: "2018", type: "Авторизованный сервис" },
              { name: "Сертификат Samsung", year: "2019", type: "Официальный партнер" },
              { name: "ISO 9001", year: "2020", type: "Система качества" },
              { name: "Лучший сервис года", year: "2023", type: "Отраслевая награда" }
            ].map((cert, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-yellow-600" />
                  </div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">{cert.name}</h3>
                  <p className="text-gray-600 mb-2">{cert.type}</p>
                  <Badge variant="outline">{cert.year}</Badge>
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

export default About;