'use strict';

angular.module('anarkodApp')
  .controller('StudentCtrl', function (Contact, Students, SweetAlert, $stateParams, $scope) {

    var name = $stateParams.studentId;
    var tagId = $stateParams.tagId;

    if (tagId) {

      Students.query({'tag':tagId}).$promise
      .then(function(tags) {
        $scope.topic = tagId;
        $scope.topics = tags;
      });
      return;
    } else {


      Students.query({'name':name}).$promise
        .then(function(students) {
          $scope.student = null;
          $scope.message = null;
          if (students.length > 0)
          {
            var data = students[0];
            $scope.name = name;
            $scope.topicShareWith = name;

            $scope.image = data.image;
            $scope.quote = data.quote;

            $scope.qualifications = data.qualifications;
            $scope.workplaces = data.workplaces;
            $scope.interests = data.interests;
            $scope.schools = data.schools;
            $scope.projects = data.projects;

            Students.query({'circle':name}).$promise.then(function(circles) {
              $scope.circles = circles;
            })

            $scope.infos = data.info;
          }
          else
            $scope.message = 'Can\'t search a student you look for!';
        });

    }

    $scope.requestContact = function() {
      SweetAlert.swal({
        title: 'Want to contact ' + name,
        text: ' <form> <div class="form-group"> <input type="email" style="display:block" class="form-control" id="email" placeholder="Enter email"> </div> <div class="form-group"> <textarea type="text" class="form-control" id="question-text" placeholder="What do you want to ask?" rows="3"></textarea> </div> </form>',
        html: true
      }, function() {
        var email = document.getElementById('email').value;
        var text = document.getElementById('question-text').value;
        var to = name;

        Contact.save({'email':email,'text':text,'to':to}).$promise.then(function() {
          setTimeout(function() {
            SweetAlert.swal("Thank you!", "We will get back to you soon.", "success");
          }, 200);
        })
      });
    }
  })

  .directive('scrollToTop', function() {
    return {
      restrict: 'A',
      link: function(scope, $elm) {
        $elm.on('click', function() {
          $("body").animate({scrollTop: 0}, "slow");
        });
      }
    }
  });
