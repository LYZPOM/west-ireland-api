export class SliderController {

    constructor($scope) {
        'ngInject';

      $scope.myInterval = 2000;
      $scope.noWrapSlides = false;
      $scope.active = 0;
      var slides = $scope.slides = [];
      var addSlide = function () {
          slides.push({
              image: 'assets/images/slider-surfing.jpg',
              title:'Surfing',
              text: 'Grab your board and dive into a world of watery wonder along Ireland’s coasts',
              id: 0
          });
          slides.push({
              image: 'assets/images/slider-cycling.png',
               title:'Cycling',
               text: 'Cycling, also called bicycling or biking, is the use of bicycles for transport, recreation, exercise or sport. ',
               id: 1
           });
           slides.push({
               image: 'assets/images/slider-sup.png',
                title:'SUP',
                text: 'SUP DUDE is the leading Stand Up Paddle School in Ireland. It is owned and run by Emmet O’Doherty, Irish SUP Champion, fully qualified and super experienced coach.',
                id: 2
            });
            slides.push({
                 image : 'assets/images/slider-horseriding.jpg',
                 title : 'Horse Riding',
                 text: 'We have a selection of packages available for horse riding holidays in Ireland, including horse riding weekend breaks',
                 id: 3
             });
       };
       addSlide();
    }

}
