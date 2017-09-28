export function VideoSectionDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/videoSection/videoSection.html',
    scope: {
    },
    controller: VideoSectionController,
    controllerAs: 'vm',
    bindToController: true
  };

  return directive;
}

class VideoSectionController {
  constructor () {
    'ngInject';

  }
}
