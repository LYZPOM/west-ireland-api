export function TopContentDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/topContent/topContent.html',
    scope: {
    },
    controller: TopContentController,
    controllerAs: 'vm',
    bindToController: true
  };

  return directive;
}

class TopContentController {
  constructor () {
    'ngInject';

  }
}
