
'use strict';

angular
.module('angularPractice')


.controller('RegCtrl', ['$scope', function ($scope) {
    
    $scope.showAddForm = function () {
        $scope.addFormShow = true;

    }


    $scope.addFormSubmit = function () {
        console.log('Adding Registration Details..');

        if ($scope.name) {
            var name = $scope.name
        } else {
            var name = null;
        }
        if ($scope.email) {
            var email = $scope.email
        } else {
            var email = null;
        }
        if ($scope.password) {
            var password = $scope.password
        } else {
            var password = null;
        }
        if ($scope.occupation) {
            var occupation = $scope.occupation
        } else {
            var occupation = null;
        }
        if ($scope.company) {
            var company = $scope.company
        } else {
            var company = null;
        }
        if ($scope.mobile_phone) {
            var mobile_phone = $scope.mobile_phone
        } else {
            var mobile_phone = null;
        }
        if ($scope.home_phone) {
            var home_phone = $scope.home_phone
        } else {
            var home_phone = null;
        }
        if ($scope.work_phone) {
            var work_phone = $scope.work_phone
        } else {
            var work_phone = null;
        }
        if ($scope.street_address) {
            var street_address = $scope.street_address
        } else {
            var street_address = null;
        }
        if ($scope.city) {
            var city = $scope.city
        } else {
            var city = null;
        }
        if ($scope.state) {
            var state = $scope.state
        } else {
            var state = null;
        }
        if ($scope.zipcode) {
            var zipcode = $scope.zipcode
        } else {
            var zipcode = null;
        }
        $scope.contacts.$add({
            name: name,
            email: email,
            password: password,
            occupation: occupation,
            company: company,
            phones: [{
                mobile: mobile_phone,
                home: home_phone,
                work: work_phone
        }],
            address: [
                {
                    street: street_address,
                    city: city,
                    state: state,
                    zipcode: zipcode
            }
        ]

        }).then(function (ref) {
            var id = ref.key();
            console.log("Add contacts with ID:" + id);
            clearFields();
            $scope.addFormShow = false;
            $scope.msg = "Account Registered";

        });
    }

    $scope.showContact = function (contact) {
        console.log('Getting Contact');
        $scope.name = contact.name;
        $scope.email = contact.email;
        $scope.password = contact.password;
        $scope.occupation = contact.occupation;
        $scope.company = contact.company;
        $scope.work_phone = contact.phones[0].work;
        $scope.home_phone = contact.phones[0].home;
        $scope.mobile_phone = contact.phones[0].mobile;
        $scope.street_address = contact.address[0].street_address;
        $scope.city = contact.address[0].city;
        $scope.state = contact.address[0].state;
        $scope.zipcode = contact.address[0].zipcode;
        $scope.contactShow = true;

    }

    function clearFields() {
        console.log('Clearing All Fields...');

        $scope.name = '';
        $scope.email = '';
        $scope.password = '';
        $scope.occupation = '';
        $scope.company = '';
        $scope.mobile_phone = '';
        $scope.home_phone = '';
        $scope.work_phone = '';
        $scope.street_address = '';
        $scope.city = '';
        $scope.state = '';
        $scope.zipcode = '';
    }


}]);