(function () {
    /**
     * declare the main application
     */
    var app = angular.module('app', ['ui.bootstrap']);

    /**
     * main controller declaration
     */
    app.controller('mainController', ["$scope", "dataConsumerService", "$uibModal", function ($scope, dataConsumerService, $uibModal) {
        $scope.notes = dataConsumerService.getNotes();
        $scope.addNewNote = function () {
            $scope.modalInstance = $uibModal.open({
                templateUrl: 'myTestModal.tmpl.html',
                scope: $scope
            });
        };

        $scope.editNote = function (noteData) {
            alert("Edit Note");
            console.log(noteData);
        };

        $scope.deleteNote = function (noteData) {
            alert("Delete Note");
            console.log(noteData);
        };


        /* modal window functions */

        $scope.note = {
            title: "",
            desc: ""
        };

        $scope.close = function () {
            $scope.modalInstance.dismiss();//$scope.modalInstance.close() also works I think
        };

        $scope.saveNote = function () {

            var today = new Date();
            var dd = today.getDate();
            var mm = today.getMonth() + 1; //January is 0!
            var yyyy = today.getFullYear();
            if (dd < 10) {
                dd = '0' + dd
            }
            if (mm < 10) {
                mm = '0' + mm
            }
            var date = mm + '/' + dd + '/' + yyyy;


            var hours = today.getHours();
            var minutes = today.getMinutes();
            var ampm = (hours >= 12 ) ? 'pm' : 'am';
            hours = hours % 12;
            hours = hours ? hours : 12; // the hour '0' should be '12'
            minutes = minutes < 10 ? '0' + minutes : minutes;
            var time = hours + ':' + minutes + ' ' + ampm;

            /**
             * call the save API , data is not validated
             */
            dataConsumerService.addNotes({
                topic: $scope.note.title,
                description: $scope.note.desc,
                time: time,
                date: date
            });

            $scope.modalInstance.dismiss();

        };

    }]);

    /**
     * http service consuming service declaration
     */
    app.service('dataConsumerService', function () {

        var notes = [
            {
                topic: "sample topic one",
                description: "sample description one sample description one sample description one",
                time: "7:35 pm",
                date: "10/08/2016"
            }, {
                topic: "sample topic one",
                description: "sample description one sample description one sample description one",
                time: "7:35 pm",
                date: "10/08/2016"
            }, {
                topic: "sample topic one",
                description: "sample description one sample description one",
                time: "7:35 pm",
                date: "10/08/2016"
            }, {
                topic: "sample topic one",
                description: "sample description one",
                time: "7:35 pm",
                date: "10/08/2016"
            }, {
                topic: "sample topic one",
                description: "sample description one sample description one sample description onesample description one sample description onesample description one sample description onesample description one sample description one",
                time: "7:35 pm",
                date: "10/08/2016"
            }, {
                topic: "sample topic one",
                description: "sample description one",
                time: "7:35 pm",
                date: "10/08/2016"
            }, {
                topic: "sample topic one",
                description: "sample description one sample description one sample description one sample description one sample description one",
                time: "7:35 pm",
                date: "10/08/2016"
            }, {
                topic: "sample topic one",
                description: "sample description one sample description one sample description one",
                time: "7:35 pm",
                date: "10/08/2016"
            }, {
                topic: "sample topic one",
                description: "sample description one sample description one ",
                time: "7:35 pm",
                date: "10/08/2016"
            }, {
                topic: "sample topic one",
                description: "sample description one sample description one sample description one",
                time: "7:35 pm",
                date: "10/08/2016"
            }, {
                topic: "sample topic one",
                description: "sample description one sample description one",
                time: "7:35 pm",
                date: "10/08/2016"
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
            /**
             * logic to delete the note with given ID
             */
        };

        dataConsumerService.changeNote = function (noteId, newNote) {
            /**
             * logic to change the note with given noteId
             */
        };

        return dataConsumerService;
    });

})();