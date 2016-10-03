(function () {
    /*
     declare the main application
     */
    var app = angular.module('app', []);

    /*
     main controller declaration
     */
    app.controller('mainController', ["$scope", "dataConsumerService", function ($scope, dataConsumerService) {
        $scope.notes = dataConsumerService.getNotes();
    }]);

    /*
     http service consuming service declartion
     */
    app.service('dataConsumerService', function () {

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

        var dataConsumerService = {};

        dataConsumerService.getNotes = function () {
            return notes;
        };

        dataConsumerService.addNotes = function (note) {
            notes.push(note);
        };

        dataConsumerService.deleteNote = function (noteId) {
            /*
             logic to delete the note with given ID
             */
        };

        dataConsumerService.changeNote = function (noteId, newNote) {
            /*
             logic to change the note with given noteId
             */
        };

        return dataConsumerService;
    });

})();