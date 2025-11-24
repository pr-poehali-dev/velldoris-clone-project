import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
  const categories = [
    { name: 'Классические', icon: 'DoorOpen', count: 45 },
    { name: 'Современные', icon: 'Maximize2', count: 38 },
    { name: 'Со стеклом', icon: 'Grid3x3', count: 32 },
    { name: 'Глухие', icon: 'SquareStack', count: 28 },
  ];

  const features = [
    {
      icon: 'Truck',
      title: 'Доставка по России',
      description: 'Доставка по всей России собственной службой',
    },
    {
      icon: 'Shield',
      title: 'Собственное производство',
      description: 'Фабрика в Санкт-Петербурге с контролем качества',
    },
    {
      icon: 'CreditCard',
      title: 'Удобная оплата',
      description: 'Оплата картой, наличными или в рассрочку',
    },
    {
      icon: 'Palette',
      title: 'Широкий выбор',
      description: 'Более 500 моделей дверей и 50 вариантов отделки',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header cartItemsCount={0} />
      
      <main className="flex-1">
        <section className="relative h-[600px] flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-accent/5">
          <div className="container mx-auto px-4 text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
              Межкомнатные двери<br />премиум-класса
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Собственное производство межкомнатных дверей в Санкт-Петербурге.
              Высокое качество, последние интерьерные тренды.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" asChild className="text-lg">
                <Link to="/catalog">
                  Перейти в каталог
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg">
                <Link to="/about">О нас</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20 container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold text-center mb-12">
            Категории дверей
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Link
                key={category.name}
                to={`/catalog?category=${category.name.toLowerCase()}`}
                className="animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Card className="hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name={category.icon} size={32} className="text-primary" />
                    </div>
                    <h3 className="font-heading font-semibold text-lg mb-2">
                      {category.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {category.count} товаров
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-heading font-bold text-center mb-12">
              Почему выбирают нас
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="text-center animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name={feature.icon} size={32} className="text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-heading font-bold mb-6">
              Готовы обновить интерьер?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Посетите наш каталог и найдите идеальные двери для вашего дома
            </p>
            <Button size="lg" asChild className="text-lg">
              <Link to="/catalog">
                Смотреть каталог
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}