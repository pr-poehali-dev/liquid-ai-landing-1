import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-liquid-gray via-white to-liquid-purple/10 font-inter">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-sm border-b border-liquid-gray/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-liquid-purple to-liquid-cyan rounded-lg flex items-center justify-center">
                <Icon name="Zap" size={20} className="text-white" />
              </div>
              <span className="text-xl font-black text-gray-900">FlowAI</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a
                href="#product"
                className="text-gray-700 hover:text-liquid-purple transition-colors"
              >
                Продукт
              </a>
              <a
                href="#features"
                className="text-gray-700 hover:text-liquid-purple transition-colors"
              >
                Функции
              </a>
              <a
                href="#team"
                className="text-gray-700 hover:text-liquid-purple transition-colors"
              >
                Команда
              </a>
              <a
                href="#investors"
                className="text-gray-700 hover:text-liquid-purple transition-colors"
              >
                Инвестиции
              </a>
            </div>
            <Button className="bg-gradient-to-r from-liquid-purple to-liquid-cyan hover:shadow-lg transition-all">
              Начать
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center relative">
            {/* Floating blob animations */}
            <div className="absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-r from-liquid-purple/20 to-liquid-cyan/20 rounded-full blur-xl animate-blob-spin"></div>
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-r from-liquid-cyan/20 to-liquid-purple/20 rounded-full blur-xl animate-float"></div>

            <Badge className="mb-6 bg-gradient-to-r from-liquid-purple/10 to-liquid-cyan/10 text-liquid-purple border-liquid-purple/20 animate-pulse-slow">
              🚀 Революция в автоматизации
            </Badge>

            <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 leading-tight">
              Автоматизируем
              <br />
              <span className="bg-gradient-to-r from-liquid-purple to-liquid-cyan bg-clip-text text-transparent">
                бизнес-процессы
              </span>
              <br />с помощью ИИ
            </h1>

            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto font-medium">
              FlowAI превращает сложные рабочие процессы в интеллектуальные
              автоматизированные системы, экономя до 80% времени и ресурсов
              компании
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-liquid-purple to-liquid-cyan hover:shadow-xl transition-all text-lg px-8 py-6"
              >
                <Icon name="Rocket" size={20} className="mr-2" />
                Запустить демо
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-liquid-purple text-liquid-purple hover:bg-liquid-purple hover:text-white transition-all text-lg px-8 py-6"
              >
                <Icon name="Play" size={20} className="mr-2" />
                Смотреть видео
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section
        id="product"
        className="py-20 px-6 bg-gradient-to-r from-liquid-gray/30 to-white"
      >
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-6 bg-liquid-cyan/10 text-liquid-cyan border-liquid-cyan/20">
                💡 Наш продукт
              </Badge>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                Платформа нового поколения
              </h2>
              <p className="text-lg text-gray-600 mb-8 font-medium">
                Объединяем машинное обучение, нейронные сети и интуитивный
                интерфейс для создания самообучающихся систем автоматизации
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-liquid-purple to-liquid-cyan rounded-lg flex items-center justify-center">
                    <Icon name="Brain" size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-black text-gray-900">Нейронные сети</h3>
                    <p className="text-gray-600">
                      Глубокое обучение для сложных задач
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-liquid-cyan to-liquid-purple rounded-lg flex items-center justify-center">
                    <Icon name="Workflow" size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-black text-gray-900">Умные процессы</h3>
                    <p className="text-gray-600">
                      Автоматическая оптимизация workflow
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              {/* Neural network visualization */}
              <div className="relative bg-gradient-to-br from-liquid-purple/5 to-liquid-cyan/5 rounded-2xl p-8 backdrop-blur-sm">
                <div className="grid grid-cols-3 gap-8 h-80">
                  {/* Input layer */}
                  <div className="flex flex-col justify-center gap-4">
                    <div className="w-4 h-4 bg-liquid-purple rounded-full animate-pulse-slow"></div>
                    <div className="w-4 h-4 bg-liquid-purple rounded-full animate-pulse-slow delay-100"></div>
                    <div className="w-4 h-4 bg-liquid-purple rounded-full animate-pulse-slow delay-200"></div>
                    <div className="w-4 h-4 bg-liquid-purple rounded-full animate-pulse-slow delay-300"></div>
                  </div>

                  {/* Hidden layer */}
                  <div className="flex flex-col justify-center gap-3">
                    <div className="w-3 h-3 bg-liquid-cyan rounded-full animate-pulse-slow delay-75"></div>
                    <div className="w-3 h-3 bg-liquid-cyan rounded-full animate-pulse-slow delay-150"></div>
                    <div className="w-3 h-3 bg-liquid-cyan rounded-full animate-pulse-slow delay-225"></div>
                    <div className="w-3 h-3 bg-liquid-cyan rounded-full animate-pulse-slow delay-300"></div>
                    <div className="w-3 h-3 bg-liquid-cyan rounded-full animate-pulse-slow delay-375"></div>
                    <div className="w-3 h-3 bg-liquid-cyan rounded-full animate-pulse-slow delay-450"></div>
                  </div>

                  {/* Output layer */}
                  <div className="flex flex-col justify-center gap-6">
                    <div className="w-4 h-4 bg-gradient-to-r from-liquid-purple to-liquid-cyan rounded-full animate-pulse-slow delay-200"></div>
                    <div className="w-4 h-4 bg-gradient-to-r from-liquid-purple to-liquid-cyan rounded-full animate-pulse-slow delay-400"></div>
                    <div className="w-4 h-4 bg-gradient-to-r from-liquid-purple to-liquid-cyan rounded-full animate-pulse-slow delay-600"></div>
                  </div>
                </div>

                {/* Connecting lines */}
                <div className="absolute inset-0 pointer-events-none">
                  <svg className="w-full h-full">
                    <line
                      x1="20%"
                      y1="30%"
                      x2="50%"
                      y2="25%"
                      stroke="url(#gradient)"
                      strokeWidth="1"
                      opacity="0.3"
                      className="animate-pulse-slow"
                    />
                    <line
                      x1="20%"
                      y1="45%"
                      x2="50%"
                      y2="35%"
                      stroke="url(#gradient)"
                      strokeWidth="1"
                      opacity="0.3"
                      className="animate-pulse-slow"
                    />
                    <line
                      x1="20%"
                      y1="60%"
                      x2="50%"
                      y2="45%"
                      stroke="url(#gradient)"
                      strokeWidth="1"
                      opacity="0.3"
                      className="animate-pulse-slow"
                    />
                    <line
                      x1="50%"
                      y1="35%"
                      x2="80%"
                      y2="40%"
                      stroke="url(#gradient)"
                      strokeWidth="1"
                      opacity="0.3"
                      className="animate-pulse-slow"
                    />
                    <line
                      x1="50%"
                      y1="55%"
                      x2="80%"
                      y2="60%"
                      stroke="url(#gradient)"
                      strokeWidth="1"
                      opacity="0.3"
                      className="animate-pulse-slow"
                    />
                    <defs>
                      <linearGradient
                        id="gradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop offset="0%" stopColor="#7C3AED" />
                        <stop offset="100%" stopColor="#06B6D4" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-liquid-purple/10 text-liquid-purple border-liquid-purple/20">
              ⚡ Функции
            </Badge>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Почему выбирают FlowAI
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium">
              Мощные возможности для полной автоматизации бизнес-процессов
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "Bot",
                title: "Умные боты",
                description: "ИИ-помощники для автоматизации рутинных задач",
                color: "from-liquid-purple to-liquid-cyan",
              },
              {
                icon: "TrendingUp",
                title: "Аналитика процессов",
                description: "Глубокие инсайты для оптимизации workflow",
                color: "from-liquid-cyan to-liquid-purple",
              },
              {
                icon: "Shield",
                title: "Безопасность",
                description: "Защита данных на уровне банковских систем",
                color: "from-liquid-purple to-liquid-cyan",
              },
              {
                icon: "Zap",
                title: "Быстрая интеграция",
                description: "Подключение к любым системам за 15 минут",
                color: "from-liquid-cyan to-liquid-purple",
              },
              {
                icon: "Users",
                title: "Командная работа",
                description: "Совместное управление процессами",
                color: "from-liquid-purple to-liquid-cyan",
              },
              {
                icon: "BarChart",
                title: "Реальная экономия",
                description: "Сокращение затрат на 80% уже в первый месяц",
                color: "from-liquid-cyan to-liquid-purple",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className={`hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br ${feature.color}/5 hover:${feature.color}/10 animate-float`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-4`}
                  >
                    <Icon
                      name={feature.icon}
                      size={24}
                      className="text-white"
                    />
                  </div>
                  <CardTitle className="text-xl font-black text-gray-900">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 font-medium">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section
        id="team"
        className="py-20 px-6 bg-gradient-to-r from-liquid-gray/30 to-white"
      >
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-liquid-cyan/10 text-liquid-cyan border-liquid-cyan/20">
              👥 Команда
            </Badge>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Эксперты мирового уровня
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium">
              Наша команда объединяет лучших специалистов в области ИИ и
              автоматизации
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Анна Петрова",
                role: "CEO & Founder",
                experience: "Ex-Google AI, Stanford PhD",
                avatar: "А",
              },
              {
                name: "Дмитрий Козлов",
                role: "CTO",
                experience: "Ex-Tesla Autopilot, MIT",
                avatar: "Д",
              },
              {
                name: "Елена Смирнова",
                role: "Head of AI",
                experience: "Ex-OpenAI, Carnegie Mellon",
                avatar: "Е",
              },
            ].map((member, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 border-0 bg-white/70 backdrop-blur-sm animate-float"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-liquid-purple to-liquid-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-black text-white">
                      {member.avatar}
                    </span>
                  </div>
                  <CardTitle className="text-xl font-black text-gray-900">
                    {member.name}
                  </CardTitle>
                  <CardDescription className="text-liquid-purple font-medium">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 font-medium">
                    {member.experience}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Investors Section */}
      <section id="investors" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-liquid-purple/10 text-liquid-purple border-liquid-purple/20">
              💰 Инвестиции
            </Badge>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Поддержка венчурных фондов
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium">
              Ведущие инвесторы мира доверяют нашему видению будущего
              автоматизации
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card className="border-0 bg-gradient-to-br from-liquid-purple/5 to-liquid-cyan/5 hover:shadow-xl transition-all">
              <CardHeader>
                <CardTitle className="text-3xl font-black text-gray-900">
                  $15M
                </CardTitle>
                <CardDescription className="text-liquid-purple font-medium">
                  Раунд Series A
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-medium">
                  Закрыт в 2024 году при участии топовых венчурных фондов
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-gradient-to-br from-liquid-cyan/5 to-liquid-purple/5 hover:shadow-xl transition-all">
              <CardHeader>
                <CardTitle className="text-3xl font-black text-gray-900">
                  500+
                </CardTitle>
                <CardDescription className="text-liquid-cyan font-medium">
                  Корпоративных клиентов
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-medium">
                  Среди которых Fortune 500 компании и стартапы-единороги
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            {["TechStars", "Y Combinator", "Sequoia", "a16z"].map(
              (investor, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-liquid-purple to-liquid-cyan rounded-lg flex items-center justify-center mx-auto mb-2">
                    <span className="text-white font-black text-lg">
                      {investor.charAt(0)}
                    </span>
                  </div>
                  <p className="text-gray-600 font-medium">{investor}</p>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-liquid-purple to-liquid-cyan">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Готовы к революции в автоматизации?
          </h2>
          <p className="text-xl text-white/90 mb-10 font-medium">
            Присоединяйтесь к тысячам компаний, которые уже трансформируют свой
            бизнес с FlowAI
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-liquid-purple hover:bg-white/90 transition-all text-lg px-8 py-6"
            >
              <Icon name="Rocket" size={20} className="mr-2" />
              Начать бесплатно
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-liquid-purple transition-all text-lg px-8 py-6"
            >
              <Icon name="Phone" size={20} className="mr-2" />
              Заказать демо
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gray-900 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-liquid-purple to-liquid-cyan rounded-lg flex items-center justify-center">
                  <Icon name="Zap" size={20} className="text-white" />
                </div>
                <span className="text-xl font-black">FlowAI</span>
              </div>
              <p className="text-gray-400 font-medium">
                Революция в автоматизации бизнес-процессов
              </p>
            </div>

            <div>
              <h3 className="font-black text-white mb-3">Продукт</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Функции
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Цены
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    API
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-black text-white mb-3">Компания</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    О нас
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Карьера
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Пресса
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-black text-white mb-3">Поддержка</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Документация
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Помощь
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Контакты
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2024 FlowAI. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
