import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Payment() {
  const paymentMethods = [
    {
      icon: 'CreditCard',
      title: 'Банковской картой',
      description: 'Принимаем Visa, Mastercard, МИР. Оплата через безопасный платежный шлюз.',
    },
    {
      icon: 'Wallet',
      title: 'Наличными',
      description: 'Оплата курьеру при получении заказа. Возможна оплата в шоуруме.',
    },
    {
      icon: 'Building',
      title: 'Банковский перевод',
      description: 'Для юридических лиц. Работаем с НДС, предоставляем все документы.',
    },
    {
      icon: 'CalendarClock',
      title: 'Рассрочка',
      description: 'Рассрочка 0% на 6 или 12 месяцев. Одобрение за 5 минут онлайн.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header cartItemsCount={0} />

      <main className="flex-1">
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Оплата</h1>
            <p className="text-lg text-muted-foreground">
              Удобные способы оплаты для вас
            </p>
          </div>
        </section>

        <section className="py-16 container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-center mb-12">
            Способы оплаты
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {paymentMethods.map((method, index) => (
              <Card
                key={method.title}
                className="animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name={method.icon} size={32} className="text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl mb-3">
                    {method.title}
                  </h3>
                  <p className="text-muted-foreground">{method.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-heading font-bold mb-8">
                Безопасность платежей
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4 items-start animate-fade-in">
                  <Icon name="Shield" size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-2">
                      Защищенные транзакции
                    </h3>
                    <p className="text-muted-foreground">
                      Все платежи проходят через защищенное соединение с использованием
                      SSL-сертификата. Мы не храним данные ваших банковских карт.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start animate-fade-in" style={{ animationDelay: '100ms' }}>
                  <Icon name="CheckCircle2" size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-2">
                      Проверенные платежные системы
                    </h3>
                    <p className="text-muted-foreground">
                      Мы работаем только с надежными и проверенными платежными провайдерами,
                      которые гарантируют безопасность ваших средств.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start animate-fade-in" style={{ animationDelay: '200ms' }}>
                  <Icon name="FileText" size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-2">
                      Полный пакет документов
                    </h3>
                    <p className="text-muted-foreground">
                      После оплаты вы получите все необходимые документы: кассовый чек,
                      товарную накладную и гарантийный талон.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-heading font-bold mb-8">
              Рассрочка 0%
            </h2>
            <div className="bg-gradient-to-br from-primary/10 to-accent/5 rounded-lg p-8">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                  <p className="text-lg">
                    Без переплат — вы платите только стоимость товара
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                  <p className="text-lg">
                    Быстрое одобрение — решение за 5 минут онлайн
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                  <p className="text-lg">
                    Минимум документов — только паспорт РФ
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                  <p className="text-lg">
                    Гибкие сроки — выберите 6 или 12 месяцев
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
