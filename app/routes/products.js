import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return [
            {
                id: 1,
                title: 'ILS-3600-0IR',
                description: 'Dual LED Lighting System w/Infrared',
                image: '/assets/images/products/ILS-3600-000_CLOSED_1_T.png'
            },
            {
                id: 2,
                title: 'ILS-3600-CAT-IR',
                description: 'Medium Intensity Catenary Dual System',
                image: '/assets/images/products/ILS-3600-CAT_T.png'
            },
            {
                id: 3,
                title: 'ILS-2600-OIR',
                description: 'White LED Lighting System w/Infrared',
                image: '/assets/images/products/ILS-3600-000_CLOSED_1_T.png'
            },
            {
                id: 4,
                title: 'ILS-2600-CAT-IR',
                description: 'Medium Intensity Catenary White System',
                image: '/assets/images/products/ILS-3600-CAT_T.png'
            },
            {
                id: 5,
                title: 'ILS-D1RW-8SP',
                description: 'Dual LED Lighting System',
                image: '/assets/images/products/ILS-D1RW-8SP_CLOSED_1_T.png'
            },
            {
                id: 6,
                title: 'IFH-1710-000',
                description: 'Wind Turbine Lighting System',
                image: '/assets/images/products/IFH-1710-000_CLOSED_1_T.png'
            },
        ]
    }
});
