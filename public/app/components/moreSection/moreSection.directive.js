export function MoreSectionDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/moreSection/moreSection.html',
    scope: {
    },
    controller: MoreSectionController,
    controllerAs: 'vm',
    bindToController: true
  };

  return directive;
}

class MoreSectionController {
  constructor () {
    'ngInject';

  }
}
