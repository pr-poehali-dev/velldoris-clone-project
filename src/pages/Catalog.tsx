import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useToast } from '@/hooks/use-toast';

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  inStock: boolean;
}

export default function Catalog() {
  const { toast } = useToast();
  const [cartItems, setCartItems] = useState<number[]>([]);

  const products: Product[] = [
    {
      id: 1,
      name: 'Дверь "Милан" белый мат',
      price: 8900,
      category: 'Глухие',
      image: 'https://cdn.poehali.dev/projects/d15b8b88-32ee-4397-8ff1-5dfdc3335286/files/01ad58d4-538c-450e-8151-5c8d579960fa.jpg',
      inStock: true,
    },
    {
      id: 2,
      name: 'Дверь "Венеция" со стеклом',
      price: 12500,
      category: 'Со стеклом',
      image: 'https://cdn.poehali.dev/projects/d15b8b88-32ee-4397-8ff1-5dfdc3335286/files/31d9f965-6bf0-438d-8a0d-e8615c42d13b.jpg',
      inStock: true,
    },
    {
      id: 3,
      name: 'Дверь "Берлин" серый дуб',
      price: 10200,
      category: 'Современные',
      image: 'https://cdn.poehali.dev/projects/d15b8b88-32ee-4397-8ff1-5dfdc3335286/files/e13835af-cacb-4259-82a2-3b7276d9841d.jpg',
      inStock: true,
    },
    {
      id: 4,
      name: 'Дверь "Рим" классика',
      price: 11800,
      category: 'Классические',
      image: 'https://cdn.poehali.dev/projects/d15b8b88-32ee-4397-8ff1-5dfdc3335286/files/31d9f965-6bf0-438d-8a0d-e8615c42d13b.jpg',
      inStock: true,
    },
    {
      id: 5,
      name: 'Дверь "Париж" эмаль белая',
      price: 13900,
      category: 'Современные',
      image: 'https://cdn.poehali.dev/projects/d15b8b88-32ee-4397-8ff1-5dfdc3335286/files/01ad58d4-538c-450e-8151-5c8d579960fa.jpg',
      inStock: true,
    },
    {
      id: 6,
      name: 'Дверь "Лондон" со стеклом',
      price: 14500,
      category: 'Со стеклом',
      image: 'https://cdn.poehali.dev/projects/d15b8b88-32ee-4397-8ff1-5dfdc3335286/files/31d9f965-6bf0-438d-8a0d-e8615c42d13b.jpg',
      inStock: false,
    },
  ];

  const addToCart = (productId: number, productName: string) => {
    setCartItems([...cartItems, productId]);
    toast({
      title: 'Добавлено в корзину',
      description: `${productName} успешно добавлен в корзину`,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header cartItemsCount={cartItems.length} />

      <main className="flex-1">
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Каталог дверей
            </h1>
            <p className="text-lg text-muted-foreground">
              Найдите идеальную дверь для вашего интерьера
            </p>
          </div>
        </section>

        <section className="py-12 container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card
                key={product.id}
                className="overflow-hidden hover:shadow-lg transition-all animate-scale-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="aspect-square bg-muted relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  {!product.inStock && (
                    <Badge className="absolute top-4 right-4" variant="secondary">
                      Нет в наличии
                    </Badge>
                  )}
                </div>
                <CardContent className="p-6">
                  <Badge variant="outline" className="mb-2">
                    {product.category}
                  </Badge>
                  <h3 className="font-heading font-semibold text-xl mb-2">
                    {product.name}
                  </h3>
                  <p className="text-2xl font-bold text-primary">
                    {product.price.toLocaleString('ru-RU')} ₽
                  </p>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button
                    className="w-full"
                    disabled={!product.inStock}
                    onClick={() => addToCart(product.id, product.name)}
                  >
                    <Icon name="ShoppingCart" size={18} className="mr-2" />
                    {product.inStock ? 'В корзину' : 'Нет в наличии'}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}