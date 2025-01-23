import category_1 from '@/public/category-1.jpg';
import category_2 from '@/public/category-2.jpg';
import category_3 from '@/public/category-3.jpg';
import category_4 from '@/public/category-4.jpg';
import category_5 from '@/public/category-5.jpg';
import category_6 from '@/public/category-6.jpg';

export const category = [
    {
        id: 1,
        name: 'Frozen Foods',
        image: category_1,
        children: ['Baby Food', 'Strawberry'],
    },
    {
        id: 2,
        name: 'Mear and Fish',
        image: category_2,
        children: ['Meat', 'Fish'],
    },
    {
        id: 3,
        name: 'Milk & Dairy',
        image: category_3,
        children: ['Milk', 'Dairy'],
    },
    {
        id: 4,
        name: 'Bevarages',
        image: category_4,
        children: [],
    },
    {
        id: 5,
        name: 'Vegetables',
        image: category_5,
        children: ['Tomato', 'Potato'],
    },
    {
        id: 5,
        name: 'Fruits',
        image: category_6,
        children: [],
    },
];
