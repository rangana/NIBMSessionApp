(function () {
    /**
     * declare the main application
     */
    var app = angular.module('app', ['ui.bootstrap']);

    /**
     * main controller declaration
     */
    app.controller('mainController', ["$scope", "dataConsumerService", "$uibModal", function ($scope, dataConsumerService, $uibModal) {
        /**
         * fetching notes in initial load
         */
        $scope.notes = dataConsumerService.getNotes().then(function (success) {
            $scope.notes = success.data;
        }, function (error) {
            alert("error occurred while retrieving the notes " + error);
        });

        /**
         * add new note function
         */
        $scope.addNewNote = function () {
            $scope.modalInstance = $uibModal.open({
                templateUrl: 'myTestModal.tmpl.html',
                scope: $scope
            });
        };

        /**
         * edit note function placeholder
         * @param noteData
         */
        $scope.editNote = function (noteData) {
            alert("Edit Note");
            console.log(noteData);
        };

        /**
         * delete note function placeholder
         * @param noteData
         */
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
            $scope.modalInstance.dismiss();
        };

        /**
         * save note to the database
         */
        $scope.saveNote = function () {
            /**
             * call the save API , data is not validated
             */
            dataConsumerService.addNotes({
                topic: $scope.note.title,
                description: $scope.note.desc
            }).then(function (success) {
                $scope.notes.push(success.data);
                $scope.modalInstance.dismiss();
                $scope.note = {
                    title: "",
                    desc: ""
                };
            }, function (error) {
                $scope.modalInstance.dismiss();
                alert("error occurred while adding a note " + error)
            });
        };

    }]);

    /**
     * http service consuming service declaration
     */
    app.service('dataConsumerService', ["$http", function ($http) {

        var _notesUrl = "http://localhost:8080/notes";

        var dataConsumerService = {};

        /**
         * getNotes service method return a promise
         * @returns {HttpPromise}
         */
        dataConsumerService.getNotes = function () {
            return $http.get(_notesUrl);
        };

        /**
         * add note service returns a promise
         * @param note
         * @returns {HttpPromise}
         */
        dataConsumerService.addNotes = function (note) {
            return $http.post(_notesUrl, note);
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
    }]);

})();