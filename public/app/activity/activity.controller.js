export class ActivityController {

    constructor($http) {
        'ngInject';

        this.$http = $http;
        this.getActivities();
    }

    getActivities() {
        var vm = this;
        this.$http.get('http://localhost:5000/api/activity').then(function(result){
            vm.items = result.data;
        });
    }

}
