import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

export default function Cart() {
  const cartItems = [
    { id: 1, name: 'Диван "Комфорт"', price: 45900, quantity: 1, image: 'https://cdn.poehali.dev/projects/d15b8b88-32ee-4397-8ff1-5dfdc3335286/files/05ab1f5c-2044-4e52-8307-b128f14329c8.jpg' },
    { id: 2, name: 'Кресло "Уют"', price: 18900, quantity: 2, image: 'https://cdn.poehali.dev/projects/d15b8b88-32ee-4397-8ff1-5dfdc3335286/files/83c4781d-85ff-4933-8aa9-748c17ccba05.jpg' },
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const delivery = 1500;
  const total = subtotal + delivery;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header cartItemsCount={0} />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <Icon name="ShoppingCart" size={64} className="mx-auto mb-4 text-muted-foreground" />
            <h2 className="text-2xl font-heading font-bold mb-2">Корзина пуста</h2>
            <p className="text-muted-foreground mb-6">Добавьте товары из каталога</p>
            <Button asChild>
              <Link to="/catalog">Перейти в каталог</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header cartItemsCount={cartItems.length} />

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-heading font-bold mb-8">Корзина</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <Card key={item.id}>
                  <CardContent className="p-6">
                    <div className="flex gap-6">
                      <div className="w-24 h-24 bg-muted rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-heading font-semibold text-lg mb-2">
                          {item.name}
                        </h3>
                        <p className="text-xl font-bold text-primary">
                          {item.price.toLocaleString('ru-RU')} ₽
                        </p>
                      </div>
                      <div className="flex flex-col items-end justify-between">
                        <Button variant="ghost" size="icon">
                          <Icon name="Trash2" size={18} />
                        </Button>
                        <div className="flex items-center gap-2">
                          <Button variant="outline" size="icon" className="h-8 w-8">
                            <Icon name="Minus" size={14} />
                          </Button>
                          <span className="w-8 text-center font-semibold">
                            {item.quantity}
                          </span>
                          <Button variant="outline" size="icon" className="h-8 w-8">
                            <Icon name="Plus" size={14} />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div>
              <Card className="sticky top-20">
                <CardContent className="p-6">
                  <h3 className="font-heading font-semibold text-xl mb-4">
                    Итого
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Товары:</span>
                      <span className="font-semibold">
                        {subtotal.toLocaleString('ru-RU')} ₽
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Доставка:</span>
                      <span className="font-semibold">
                        {delivery.toLocaleString('ru-RU')} ₽
                      </span>
                    </div>
                    <Separator />
                    <div className="flex justify-between text-lg">
                      <span className="font-semibold">Всего:</span>
                      <span className="font-bold text-primary">
                        {total.toLocaleString('ru-RU')} ₽
                      </span>
                    </div>
                  </div>
                  <Button className="w-full mt-6" size="lg">
                    Оформить заказ
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full mt-2"
                    asChild
                  >
                    <Link to="/catalog">
                      <Icon name="ArrowLeft" size={18} className="mr-2" />
                      Продолжить покупки
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}