var app = app || {};
app.CardView = Backbone.View.extend({
    collection: null,
    events: {},
    parallaxTemplate: Handlebars.compile($('#parallax').html()),
    detailTemplate: Handlebars.compile($('#detail').html()),
    render: function(){
        var that = this;
        this.collection.each(function(m,i){
            if (m.get('type') === 'parallax') {
                that.$el.append(that.parallaxTemplate({
                    card: m.toJSON(),
                    title1: m.getTitle()[0],
                    title2: m.getTitle()[1]
                }));
            } else if (m.get('type') === 'details') {
                that.$el.append(that.detailTemplate({
                    card: m.toJSON(),
                    title1: m.getTitle()[0],
                    title2: m.getTitle()[1]
                }));
            }
        });
    },
    initialize: function(){}
});