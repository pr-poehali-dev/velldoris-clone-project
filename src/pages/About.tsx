import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function About() {
  const values = [
    {
      icon: 'Star',
      title: 'Качество',
      description: 'Используем только проверенные материалы и технологии производства',
    },
    {
      icon: 'Users',
      title: 'Клиентоориентированность',
      description: 'Каждый клиент для нас важен, мы ценим доверие и комфорт',
    },
    {
      icon: 'TrendingUp',
      title: 'Инновации',
      description: 'Следим за трендами и предлагаем современные решения',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header cartItemsCount={0} />

      <main className="flex-1">
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">О нас</h1>
            <p className="text-lg text-muted-foreground">
              Узнайте больше о компании VELLDORIS
            </p>
          </div>
        </section>

        <section className="py-16 container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-heading font-bold mb-6">Наша история</h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                VELLDORIS — фабрика межкомнатных дверей премиум-класса с собственным
                производством в Санкт-Петербурге. Мы создаем двери, которые становятся
                частью вашего интерьера.
              </p>
              <p>
                С 2010 года мы помогаем тысячам семей создавать уютные пространства.
                Наша философия: качественные двери должны быть доступными каждому.
              </p>
              <p>
                Полный цикл производства на собственной фабрике позволяет нам контролировать
                каждый этап: от подбора материалов до финальной отделки. Каждая дверь
                проходит строгий контроль качества.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-heading font-bold text-center mb-12">
              Наши ценности
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {values.map((value, index) => (
                <Card
                  key={value.title}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name={value.icon} size={32} className="text-primary" />
                    </div>
                    <h3 className="font-heading font-semibold text-xl mb-3">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-heading font-bold mb-6">
              Цифры, которые говорят за нас
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              <div>
                <div className="text-4xl font-heading font-bold text-primary mb-2">
                  14+
                </div>
                <div className="text-muted-foreground">лет производства</div>
              </div>
              <div>
                <div className="text-4xl font-heading font-bold text-primary mb-2">
                  15К+
                </div>
                <div className="text-muted-foreground">довольных клиентов</div>
              </div>
              <div>
                <div className="text-4xl font-heading font-bold text-primary mb-2">
                  500+
                </div>
                <div className="text-muted-foreground">моделей дверей</div>
              </div>
              <div>
                <div className="text-4xl font-heading font-bold text-primary mb-2">
                  98%
                </div>
                <div className="text-muted-foreground">положительных отзывов</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}