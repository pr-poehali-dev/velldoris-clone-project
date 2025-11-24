import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

export default function Footer() {
  return (
    <footer className="border-t bg-muted/50 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">VELLDORIS</h3>
            <p className="text-sm text-muted-foreground">
              Производство межкомнатных дверей премиум-класса. Фабрика в Санкт-Петербурге.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Покупателям</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/catalog" className="text-muted-foreground hover:text-primary transition-colors">
                  Каталог
                </Link>
              </li>
              <li>
                <Link to="/delivery" className="text-muted-foreground hover:text-primary transition-colors">
                  Доставка
                </Link>
              </li>
              <li>
                <Link to="/payment" className="text-muted-foreground hover:text-primary transition-colors">
                  Оплата
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-muted-foreground hover:text-primary transition-colors">
                  Вопросы и ответы
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">О компании</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  О нас
                </Link>
              </li>
              <li>
                <Link to="/contacts" className="text-muted-foreground hover:text-primary transition-colors">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2 text-muted-foreground">
                <Icon name="Phone" size={16} />
                <span>+7 (495) 123-45-67</span>
              </li>
              <li className="flex items-center space-x-2 text-muted-foreground">
                <Icon name="Mail" size={16} />
                <span>info@velldoris.net</span>
              </li>
              <li className="flex items-center space-x-2 text-muted-foreground">
                <Icon name="MapPin" size={16} />
                <span>Санкт-Петербург</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          © 2024 VELLDORIS. Все права защищены.
        </div>
      </div>
    </footer>
  );
}