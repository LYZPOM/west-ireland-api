export function CenterContentDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/centerContent/centerContent.html',
    scope: {
    },
    controller: CenterContentController,
    controllerAs: 'vm',
    bindToController: true
  };

  return directive;
}

class CenterContentController {
  constructor () {
    'ngInject';

  }
}
