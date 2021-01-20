const drinks = [
    {id: "1", description: 'Refrigerante', image: 'https://images.pexels.com/photos/3008/drinks-supermarket-cans-beverage.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
    {id: "2", description: 'Água de Coco', image: 'https://images.pexels.com/photos/5945745/pexels-photo-5945745.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
    {id: "3",  description: 'Suco de Laranja', image: 'https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
]

export default {
    drinks,
    getById: (id) => drinks.find(drink => drink.id === id)
}