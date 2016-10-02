(function () {
    /*
     declare the main application
     */
    var app = angular.module('app', []);

    /*
     main controller declaration
     */
    app.controller('mainController', ["$scope", "httpConsumerService", function ($scope, httpConsumerService) {
        $scope.notes = httpConsumerService.getNotes();
    }]);

    /*
     http service consuming service declartion
     */
    app.service('httpConsumerService', function () {

        var notes = [
            {
                topic: "sample topic one",
                description: "sample description one sample description one sample description one",
                time: "01.00PM",
                date: "2016 Sep 01"
            }, {
                topic: "sample topic one",
                description: "sample description one sample description one sample description one",
                time: "01.00PM",
                date: "2016 Sep 01"
            }, {
                topic: "sample topic one",
                description: "sample description one sample description one",
                time: "01.00PM",
                date: "2016 Sep 01"
            }, {
                topic: "sample topic one",
                description: "sample description one",
                time: "01.00PM",
                date: "2016 Sep 01"
            }, {
                topic: "sample topic one",
                description: "sample description one sample description one sample description onesample description one sample description onesample description one sample description onesample description one sample description one",
                time: "01.00PM",
                date: "2016 Sep 01"
            }, {
                topic: "sample topic one",
                description: "sample description one",
                time: "01.00PM",
                date: "2016 Sep 01"
            }, {
                topic: "sample topic one",
                description: "sample description one sample description one sample description one sample description one sample description one",
                time: "01.00PM",
                date: "2016 Sep 01"
            }, {
                topic: "sample topic one",
                description: "sample description one sample description one sample description one",
                time: "01.00PM",
                date: "2016 Sep 01"
            }, {
                topic: "sample topic one",
                description: "sample description one sample description one ",
                time: "01.00PM",
                date: "2016 Sep 01"
            }, {
                topic: "sample topic one",
                description: "sample description one sample description one sample description one",
                time: "01.00PM",
                date: "2016 Sep 01"
            }, {
                topic: "sample topic one",
                description: "sample description one sample description one",
                time: "01.00PM",
                date: "2016 Sep 01"
            }
        ];

        var httpConsumerService = {};

        httpConsumerService.getNotes = function () {
            return notes;
        };

        httpConsumerService.addNotes = function (note) {
            notes.push(note);
        };

        httpConsumerService.deleteNote = function (noteId) {
            /*
             logic to delete the note with given ID
             */
        };

        httpConsumerService.changeNote = function (noteId, newNote) {
            /*
             logic to change the note with given noteId
             */
        };

        return httpConsumerService;
    });

})();