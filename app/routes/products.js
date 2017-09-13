import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return [
            {
                id: 1,
                title: 'product 1',
                description: 'This is the description for product 1',
                image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg'
            },
            {
                id: 2,
                title: 'product 2',
                description: 'This is the description for product 2',
                image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg'
            },
            {
                id: 3,
                title: 'product 3',
                description: 'This is the description for product 3',
                image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg'
            },
            {
                id: 4,
                title: 'product 4',
                description: 'This is the description for product 4',
                image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg'
            },
        ]
    }
});
