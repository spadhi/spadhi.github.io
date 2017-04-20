jQuery(document).ready(function ($) {
    var c = new app.Cards([
        {
            title: 'title 1',
            type: 'parallax',
            image: {
                src: 'img/5.jpg',
                credit: 'name',
                creditSource: 'url'
            },
            details: [
                [{value: 'Dek',class: 'description'}]
            ]
        },
        {
            title: 'Personal Details',
            type: 'details',
            details: [
                {key: 'Name',value: 'xxxxxx',keyClass: 'large',valueClass: 'mediumBold'},
                {key: 'abc',value: '1234',keyClass: 'smallBold',valueClass: 'large'},
                {key: 'xyz',value: '123445',keyClass: 'medium',valueClass: 'largeBold'},                
            ]
        },
{
            title: 'title 2',
            type: 'parallax',
            image: {
                src: 'img/0.jpg',
                credit: 'name',
                creditSource: 'url'
            },
            details: [
                [{value: 'Dek',class: 'description'}]
            ]
        },
        {
            title: 'Personal Details',
            type: 'details',
            details: [
                {key: 'Name',value: 'xxxxxx',keyClass: 'large',valueClass: 'mediumBold'},
                {key: 'abc',value: '1234',keyClass: 'smallBold',valueClass: 'large'},
                {key: 'xyz',value: '123445',keyClass: 'medium',valueClass: 'largeBold'},                
            ]
        },
		{
            title: 'title 3',
            type: 'parallax',
            image: {
                src: 'img/3.jpg',
                credit: 'name',
                creditSource: 'url'
            },
            details: [
                [{value: 'Dek',class: 'description'}]
            ]
        },
        {
            title: 'Personal Details',
            type: 'details',
            details: [
                {key: 'Name',value: 'xxxxxx',keyClass: 'large',valueClass: 'mediumBold'},
                {key: 'abc',value: '1234',keyClass: 'smallBold',valueClass: 'large'},
                {key: 'xyz',value: '123445',keyClass: 'medium',valueClass: 'largeBold'},                
            ]
        },
		{
            title: 'title 4',
            type: 'parallax',
            image: {
                src: 'img/4.jpg',
                credit: 'name',
                creditSource: 'url'
            },
            details: [
                [{value: 'Dek',class: 'description'}]
            ]
        },
        {
            title: 'Personal Details',
            type: 'details',
            details: [
                {key: 'Name',value: 'xxxxxx',keyClass: 'large',valueClass: 'mediumBold'},
                {key: 'abc',value: '1234',keyClass: 'smallBold',valueClass: 'large'},
                {key: 'xyz',value: '123445',keyClass: 'medium',valueClass: 'largeBold'},                
            ]
        }
    ]);
    var a = new app.CardView({
        el: '.homepage .sections',
        collection: c
    }).render();
    $(window).stellar();
});