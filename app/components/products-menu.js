import Ember from 'ember';

export default Ember.Component.extend({
    isOpen: false,
    actions: {
        toggleDropdown(){
            this.toggleProperty('isOpen');
        }
    }
});
