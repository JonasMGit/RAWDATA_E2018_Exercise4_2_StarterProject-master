define(["jquery", "knockout"], function ($, ko) {

    var posts = ko.observableArray([]);
    var pages = ko.observable(5);
    var current = ko.observable(0);
    var next = ko.observable(current()+1)

    /*var getPosts = function () {
        return $.getJSON("api/posts", function (data) {
            posts(data.items)
        });  
    }*/
    //var nextarr = ko.observableArray([])

   
    

    var nextPosts = function () {
       return  $.getJSON("api/posts?page="+next()+"&pageSize=10", function (data) {
           posts(data.items)
           
        });

    }

      
    
    
    //loads data into posts array
     $.getJSON("api/posts", function (data) {
         posts(data.items)
    });

    return {

        posts,
        next,
        //nextPage,
       // nextarr,
       // getPosts,
        nextPosts

       
    };


});

