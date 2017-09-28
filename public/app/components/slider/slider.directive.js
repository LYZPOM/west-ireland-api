export function SliderDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/slider/slider.html',
    scope: {
    },
    controller: SliderController,
    controllerAs: 'vm',
    bindToController: true
  };

  return directive;
}

class SliderController {
  constructor () {
    'ngInject';
    
  }
}
