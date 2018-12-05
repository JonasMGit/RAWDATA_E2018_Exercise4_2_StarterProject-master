define(["jquery", "knockout"], function ($, ko) {

    var posts = ko.observableArray([]);
    var pages = ko.observable(5);
    var currentPage = 0;
    var current = ko.observable(currentPage);
     var hasNext = ko.computed(function () {
        return current() < pages() - 1; 
    }, this);

    var hasPrev = ko.computed(function () {
        return current() > 0;
    }, this);


    //current(currentPage +1)


    var nextPosts = function () {
       // if (current != pages() -1) {
            //current()++
        //}
        //var currentPage = current()
        currentPage++
        current(currentPage);
        return $.getJSON("api/posts?page=" + current() + "&pageSize=10", function (data) {
           posts(data.items)
           
        });

    }
    var prevPosts = function () {
        /*if (current > 0 ) {
            current--
        }*/
      //  var currentPage = current()
        currentPage--
        current(currentPage);
        return $.getJSON("api/posts?page=" + current() + "&pageSize=10", function (data) {
            posts(data.items)
        });

    }


    //loads data into posts array
     $.getJSON("api/posts", function (data) {
         posts(data.items)
    });

    return {

        posts,
        //current,
        nextPosts,
        prevPosts,
        hasNext,
        hasPrev

       
    };


});

