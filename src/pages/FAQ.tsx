import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function FAQ() {
  const faqCategories = [
    {
      category: 'Заказ и доставка',
      questions: [
        {
          q: 'Как оформить заказ?',
          a: 'Вы можете оформить заказ на сайте, добавив товары в корзину и заполнив форму заказа, или позвонив по телефону +7 (495) 123-45-67.',
        },
        {
          q: 'Сколько времени занимает доставка?',
          a: 'Доставка по Москве занимает 1-2 дня для товаров в наличии. По Московской области — 2-3 дня. Товары под заказ доставляются в течение 7-14 дней.',
        },
        {
          q: 'Можно ли отследить заказ?',
          a: 'Да, после отправки заказа вы получите номер для отслеживания. Также менеджер свяжется с вами для согласования точного времени доставки.',
        },
      ],
    },
    {
      category: 'Оплата',
      questions: [
        {
          q: 'Какие способы оплаты доступны?',
          a: 'Мы принимаем оплату банковскими картами, наличными курьеру, банковским переводом для юрлиц, а также предлагаем рассрочку 0% на 6-12 месяцев.',
        },
        {
          q: 'Безопасно ли оплачивать онлайн?',
          a: 'Да, все платежи проходят через защищенное соединение. Мы используем проверенные платежные системы и не храним данные банковских карт.',
        },
        {
          q: 'Можно ли оплатить частями?',
          a: 'Да, мы предлагаем рассрочку 0% на 6 или 12 месяцев. Одобрение происходит онлайн за 5 минут, нужен только паспорт РФ.',
        },
      ],
    },
    {
      category: 'Товары и гарантия',
      questions: [
        {
          q: 'Какая гарантия на мебель?',
          a: 'На всю мебель предоставляется гарантия от производителя. Срок гарантии зависит от конкретной модели и указан в карточке товара (обычно от 12 до 24 месяцев).',
        },
        {
          q: 'Можно ли вернуть товар?',
          a: 'Да, вы можете вернуть товар в течение 14 дней с момента получения, если он не использовался и сохранен товарный вид. Для мебели на заказ условия возврата уточняйте у менеджера.',
        },
        {
          q: 'Как ухаживать за мебелью?',
          a: 'Рекомендации по уходу указаны в инструкции к каждому изделию. В общем случае: регулярная чистка от пыли, избегание прямых солнечных лучей и повышенной влажности.',
        },
      ],
    },
    {
      category: 'Сборка',
      questions: [
        {
          q: 'Нужно ли собирать мебель самостоятельно?',
          a: 'Большинство товаров доставляется в разобранном виде. Вы можете собрать мебель самостоятельно по инструкции или заказать услугу сборки у наших специалистов.',
        },
        {
          q: 'Сколько стоит сборка?',
          a: 'Стоимость сборки зависит от сложности изделия и указана в карточке товара. В среднем: диван — 1500₽, шкаф — 2000₽, кровать — 1800₽.',
        },
        {
          q: 'Как долго занимает сборка?',
          a: 'Время сборки зависит от типа мебели. Обычно: кресло — 30 минут, диван — 1-2 часа, шкаф — 2-4 часа.',
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header cartItemsCount={0} />

      <main className="flex-1">
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Вопросы и ответы
            </h1>
            <p className="text-lg text-muted-foreground">
              Ответы на часто задаваемые вопросы
            </p>
          </div>
        </section>

        <section className="py-16 container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-12">
            {faqCategories.map((category, catIndex) => (
              <div
                key={category.category}
                className="animate-fade-in"
                style={{ animationDelay: `${catIndex * 100}ms` }}
              >
                <h2 className="text-2xl font-heading font-bold mb-6">
                  {category.category}
                </h2>
                <Accordion type="single" collapsible>
                  {category.questions.map((item, index) => (
                    <AccordionItem key={index} value={`item-${catIndex}-${index}`}>
                      <AccordionTrigger className="text-left">
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-heading font-bold mb-4">
                Не нашли ответ?
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Свяжитесь с нами любым удобным способом, и мы с радостью поможем вам
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+74951234567"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                >
                  +7 (495) 123-45-67
                </a>
                <a
                  href="mailto:info@velldoris.net"
                  className="inline-flex items-center justify-center px-6 py-3 border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
                >
                  info@velldoris.net
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
