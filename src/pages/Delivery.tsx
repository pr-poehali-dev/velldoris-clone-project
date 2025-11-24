import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function Delivery() {
  const deliveryOptions = [
    {
      icon: 'Truck',
      title: 'Доставка по Москве',
      price: '1 500 ₽',
      time: '1-2 дня',
      description: 'Доставим в удобное для вас время',
    },
    {
      icon: 'MapPin',
      title: 'Доставка по МО',
      price: 'от 2 500 ₽',
      time: '2-3 дня',
      description: 'Стоимость зависит от удаленности',
    },
    {
      icon: 'Package',
      title: 'Самовывоз',
      price: 'Бесплатно',
      time: 'В день заказа',
      description: 'Забрать из нашего шоурума',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header cartItemsCount={0} />

      <main className="flex-1">
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Доставка</h1>
            <p className="text-lg text-muted-foreground">
              Информация о доставке мебели
            </p>
          </div>
        </section>

        <section className="py-16 container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-center mb-12">
            Варианты доставки
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {deliveryOptions.map((option, index) => (
              <Card
                key={option.title}
                className="animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name={option.icon} size={32} className="text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl mb-2">
                    {option.title}
                  </h3>
                  <div className="text-2xl font-bold text-primary mb-2">
                    {option.price}
                  </div>
                  <div className="text-muted-foreground mb-4">
                    <Icon name="Clock" size={16} className="inline mr-1" />
                    {option.time}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {option.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-heading font-bold text-center mb-12">
              Как работает доставка
            </h2>
            <div className="max-w-3xl mx-auto">
              <div className="space-y-8">
                <div className="flex gap-4 animate-fade-in">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-heading font-bold text-xl flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-2">
                      Оформление заказа
                    </h3>
                    <p className="text-muted-foreground">
                      Выберите товары в каталоге и оформите заказ на сайте или по телефону
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 animate-fade-in" style={{ animationDelay: '100ms' }}>
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-heading font-bold text-xl flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-2">
                      Подтверждение
                    </h3>
                    <p className="text-muted-foreground">
                      Менеджер свяжется с вами для уточнения деталей и согласования времени доставки
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 animate-fade-in" style={{ animationDelay: '200ms' }}>
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-heading font-bold text-xl flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-2">
                      Доставка
                    </h3>
                    <p className="text-muted-foreground">
                      Мы доставим мебель в указанное время и поможем с подъемом на этаж
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 animate-fade-in" style={{ animationDelay: '300ms' }}>
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-heading font-bold text-xl flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-2">
                      Сборка
                    </h3>
                    <p className="text-muted-foreground">
                      По желанию наши специалисты соберут мебель (услуга оплачивается отдельно)
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
              Часто задаваемые вопросы о доставке
            </h2>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Можно ли выбрать время доставки?</AccordionTrigger>
                <AccordionContent>
                  Да, вы можете выбрать удобный временной интервал при оформлении заказа.
                  Мы предлагаем доставку с 10:00 до 22:00.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Входит ли подъем на этаж в стоимость?</AccordionTrigger>
                <AccordionContent>
                  Подъем на первый этаж включен в стоимость доставки. Подъем на последующие
                  этажи оплачивается отдельно — 500 ₽ за этаж.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Как быстро можно получить заказ?</AccordionTrigger>
                <AccordionContent>
                  Товары в наличии доставляются по Москве в течение 1-2 дней. Товары под
                  заказ — 7-14 дней в зависимости от модели.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
