import Ember from 'ember';

export default Ember.Component.extend({
    isFooterDrop: false,
    actions: {
        toggleFooterDrop() {
            this.toggleProperty('isFooterDrop')
        }
    }
});
