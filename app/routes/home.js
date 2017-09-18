import Ember from 'ember';

export default Ember.Route.extend({
    model(){
        return [
            {
                id: 'mon-9600',
                title: 'MON-9600 Universal Monitoring System',
                description: 'ITL\'s Universal monitoring solution with pluggable board to allow any desired inputs.',
                image: '/assets/images/MON-9600-000_OPEN_T_1000.png'
            },
            {
                id: 'ILS-S810',
                title: 'ILS-S810 Temporary Solar Light',
                description: 'ITL\'s new fully enclosed solar powered temporary obstruction light.',
                image: '/assets/images/ILS-S810-000_CLOSED_1_T_1000.png'
            },
            {
                id: 'ILS-3600',
                title: 'ILS-3600 Dual LED Lighting System',
                description: 'ITL\'s new dual LED lighting system includes Infrared LED operation and optional internal monitoring for advanced diagnostics.',
                image: '/assets/images/ILS-3600-000_CLOSED_1_T_1000.png'
            }

        ]

    }
});
