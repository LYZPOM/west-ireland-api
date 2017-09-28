export function CustomizedSectionDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/customizedSection/customizedSection.html',
    scope: {
    },
    controller: CustomizedSectionController,
    controllerAs: 'vm',
    bindToController: true
  };

  return directive;
}

class CustomizedSectionController {
  constructor () {
    'ngInject';

  }
}
