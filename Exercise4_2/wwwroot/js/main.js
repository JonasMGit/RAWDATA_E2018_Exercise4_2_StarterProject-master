requirejs.config({
    baseUrl: "js",
    paths: {
        jquery: "lib/jQuery/dist/jquery.min",
        knockout: "lib/knockout/dist/knockout.debug",
        text: "lib/text/text",
    }
});

require(['knockout', 'app/postviewModel'], function (ko, vm) {
    ko.applyBindings(vm);
});