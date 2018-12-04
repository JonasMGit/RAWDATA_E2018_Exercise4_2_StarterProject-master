requirejs.config({
    baseUrl: "js",
    paths: {
        jquery: "lib/jQuery/dist/jquery.min",
        knockout: "lib/knockout/dist/knockout.debug",
        text: "lib/text/text",
        dataService: "DataAccessLayer/DataService.cs"
    }
});

require(['knockout', 'app/postviewModel'], function (ko, vm) {
    ko.applyBindings(vm);
});