define(["jquery", "knockout"], function ($, ko) {

    var posts = ko.observableArray([]);

   /* var next = function () {


    }*/
    //hello

  
    
    //loads data into posts array
     $.getJSON("api/posts", function (data) {
        posts(data.items);
    });

    return {
        
        posts
       
    };


});

