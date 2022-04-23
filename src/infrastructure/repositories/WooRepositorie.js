import {
    wooConnect
} from '../webserver/index.js';

export const WooCommerce = {
    async getAllProducts() {
        //const wooClient = await this.clientWoocommerce()
        const wooClient = await wooConnect.clientWoocommerce()
        const respo = wooClient.getAsync('products').then(function (result) {
            console.log(result.body)
            return {}//JSON.parse(result.toJSON().body);
        });
        return respo;
    },
    async createProduct(jsonData){
        const wooClient = await wooConnect.clientWoocommerce()
        const respo = wooClient.postAsync('products', jsonData).then(function (result) {
            return JSON.parse(result.toJSON().body);
        });
        return respo;
    },
    async updateProduct(id, jsonData) {
        const wooClient = await wooConnect.clientWoocommerce()
        const respo = wooClient.putAsync('products/'+id, jsonData).then(function (result) {
            return JSON.parse(result.toJSON().body);
        });
        return respo;
    }
}
