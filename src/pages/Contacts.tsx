import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

export default function Contacts() {
  const contactInfo = [
    {
      icon: 'Phone',
      title: 'Телефон',
      content: '+7 (495) 123-45-67',
      link: 'tel:+74951234567',
    },
    {
      icon: 'Mail',
      title: 'Email',
      content: 'info@velldoris.net',
      link: 'mailto:info@velldoris.net',
    },
    {
      icon: 'MapPin',
      title: 'Адрес',
      content: 'Санкт-Петербург',
      link: null,
    },
    {
      icon: 'Clock',
      title: 'Режим работы',
      content: 'Пн-Вс: 10:00 - 21:00',
      link: null,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header cartItemsCount={0} />

      <main className="flex-1">
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Контакты</h1>
            <p className="text-lg text-muted-foreground">
              Свяжитесь с нами удобным способом
            </p>
          </div>
        </section>

        <section className="py-16 container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card
                key={info.title}
                className="animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name={info.icon} size={24} className="text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold mb-2">{info.title}</h3>
                  {info.link ? (
                    <a
                      href={info.link}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-muted-foreground">{info.content}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-heading font-bold mb-6">
                Напишите нам
              </h2>
              <form className="space-y-4">
                <div>
                  <Label htmlFor="name">Ваше имя</Label>
                  <Input id="name" placeholder="Иван Иванов" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="ivan@example.com" />
                </div>
                <div>
                  <Label htmlFor="phone">Телефон</Label>
                  <Input id="phone" type="tel" placeholder="+7 (___) ___-__-__" />
                </div>
                <div>
                  <Label htmlFor="message">Сообщение</Label>
                  <Textarea
                    id="message"
                    placeholder="Расскажите, чем мы можем вам помочь"
                    rows={5}
                  />
                </div>
                <Button size="lg" className="w-full">
                  Отправить сообщение
                </Button>
              </form>
            </div>

            <div>
              <h2 className="text-3xl font-heading font-bold mb-6">
                Наш шоурум
              </h2>
              <div className="aspect-video bg-muted rounded-lg overflow-hidden mb-6">
                <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                  <Icon name="MapPin" size={48} />
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Приглашаем вас посетить наш шоурум, где вы сможете увидеть и
                  потрогать мебель вживую, получить консультацию специалистов и
                  сделать заказ с комфортом.
                </p>
                <div className="bg-muted/50 rounded-lg p-4 space-y-3">
                  <div className="flex items-start gap-3">
                    <Icon name="MapPin" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold mb-1">Адрес</p>
                      <p className="text-sm text-muted-foreground">
                        Москва, ул. Примерная, д. 123
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Clock" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold mb-1">Режим работы</p>
                      <p className="text-sm text-muted-foreground">
                        Понедельник - Воскресенье<br />
                        10:00 - 21:00
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Car" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold mb-1">Парковка</p>
                      <p className="text-sm text-muted-foreground">
                        Бесплатная парковка для посетителей
                      </p>
                    </div>
                  </div>
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