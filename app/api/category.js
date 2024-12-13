// pages/api/category.js
export default function handler(req, res) {
    const category = {
        id: 1,
        name: 'Frozen Foods',
        children: ['Baby Food', 'Strawberry'],
    };

    return res.status(200).json(category);
}
