import { Comment } from './comment';
export class Dish {
    id: any;
    name: string;
    image: string;
    category: string;
    featured: boolean;
    label: string;
    price: string;
    comments:Comment[];
    description: string;
}