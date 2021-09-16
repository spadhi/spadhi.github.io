var app = app || {};
app.Card = Backbone.Model.extend({
    defaults: {
        title: null,
        type: null,
        image: {
            src: null,
            width: null,
            height: null
        },
        details: []
    },
    getTitle: function(){
        return this.get('title').split(' ');
    }
});