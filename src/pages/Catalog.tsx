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
      name: 'Диван "Комфорт"',
      price: 45900,
      category: 'Диваны',
      image: 'https://cdn.poehali.dev/projects/d15b8b88-32ee-4397-8ff1-5dfdc3335286/files/05ab1f5c-2044-4e52-8307-b128f14329c8.jpg',
      inStock: true,
    },
    {
      id: 2,
      name: 'Кресло "Уют"',
      price: 18900,
      category: 'Кресла',
      image: 'https://cdn.poehali.dev/projects/d15b8b88-32ee-4397-8ff1-5dfdc3335286/files/83c4781d-85ff-4933-8aa9-748c17ccba05.jpg',
      inStock: true,
    },
    {
      id: 3,
      name: 'Обеденный стол "Классик"',
      price: 32900,
      category: 'Столы',
      image: 'https://cdn.poehali.dev/projects/d15b8b88-32ee-4397-8ff1-5dfdc3335286/files/5ea48167-012f-4975-9b8a-9f7a60ee9666.jpg',
      inStock: true,
    },
    {
      id: 4,
      name: 'Кровать "Сон"',
      price: 54900,
      category: 'Кровати',
      image: 'https://cdn.poehali.dev/projects/d15b8b88-32ee-4397-8ff1-5dfdc3335286/files/05ab1f5c-2044-4e52-8307-b128f14329c8.jpg',
      inStock: true,
    },
    {
      id: 5,
      name: 'Угловой диван "Престиж"',
      price: 67900,
      category: 'Диваны',
      image: 'https://cdn.poehali.dev/projects/d15b8b88-32ee-4397-8ff1-5dfdc3335286/files/05ab1f5c-2044-4e52-8307-b128f14329c8.jpg',
      inStock: true,
    },
    {
      id: 6,
      name: 'Кресло-качалка "Релакс"',
      price: 24900,
      category: 'Кресла',
      image: 'https://cdn.poehali.dev/projects/d15b8b88-32ee-4397-8ff1-5dfdc3335286/files/83c4781d-85ff-4933-8aa9-748c17ccba05.jpg',
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
              Каталог мебели
            </h1>
            <p className="text-lg text-muted-foreground">
              Найдите идеальную мебель для вашего дома
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