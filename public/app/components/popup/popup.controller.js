export class PopupController {
    constructor($scope, $uibModal) {
        'ngInject';

        $scope.user = {
           user: 'name',
           password: null,
           notes: null
         };

        $scope.open = function () {
           $uibModal.open({
               templateUrl: 'app/components/popup/popup_checkout.html', // loads the template
               backdrop: true, // setting backdrop allows us to close the modal window on clicking outside the modal window
               windowClass: 'modal', // windowClass - additional CSS class(es) to be added to a modal window template
               controller: function ($scope, $uibModalInstance, $log, user) {
                   $scope.user = user;
                   $scope.submit = function () {
                       $log.log('Submiting user info.'); // kinda console logs this statement
                       $log.log(user);
                       $uibModalInstance.dismiss('cancel'); // dismiss(reason) - a method that can be used to dismiss a modal, passing a reason
                   }
                   $scope.cancel = function () {
                       $uibModalInstance.dismiss('cancel');
                   };

                   $uibModalInstance.rendered.then(function() {
                       initCard();
                    });

               },
               resolve: {
                   user: function () {
                       return $scope.user;
                   }
               }
           });//end of modal.open
         }; // end of scope.open function

         function initCard(){
            //  var stripe = Stripe('pk_test_zPqSHrAg3NSb1rXNsGErDlPT');
            //  var elements = stripe.elements();
             //
            //  var card = elements.create('card', {
            //    hidePostalCode: true,
            //    style: {
            //      base: {
            //        iconColor: '#F99A52',
            //        color: '#32315E',
            //        lineHeight: '48px',
            //        fontWeight: 400,
            //        fontFamily: '"Helvetica Neue", "Helvetica", sans-serif',
            //        fontSize: '15px',
             //
            //        '::placeholder': {
            //          color: '#CFD7DF',
            //        }
            //      },
            //    }
            //  });
            //  card.mount('#card-element');
             //
            //  card.on('change', function(event) {
            //    setOutcome(event);
            //  });
             //
            //  document.querySelector('form').addEventListener('submit', function(e) {
            //    e.preventDefault();
            //    var form = document.querySelector('form');
            //    var extraDetails = {
            //      name: form.querySelector('input[name=cardholder-name]').value,
            //      address_zip: form.querySelector('input[name=address-zip]').value
            //    };
            //    stripe.createToken(card, extraDetails).then(setOutcome);
            //  });
         }

        //  function setOutcome(result) {
        //    var successElement = document.querySelector('.success');
        //    var errorElement = document.querySelector('.error');
        //    successElement.classList.remove('visible');
        //    errorElement.classList.remove('visible');
         //
        //    if (result.token) {
        //      // Use the token to create a charge or a customer
        //      // https://stripe.com/docs/charges
        //      successElement.querySelector('.token').textContent = result.token.id;
        //      successElement.classList.add('visible');
        //    } else if (result.error) {
        //      errorElement.textContent = result.error.message;
        //      errorElement.classList.add('visible');
        //    }
        //  }


    }
}
