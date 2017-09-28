export class ShopCartController {

    constructor($scope,ngCart) {
        'ngInject';

        ngCart.setTaxRate(7.5);
        ngCart.setShipping(2.99);
    }

}
