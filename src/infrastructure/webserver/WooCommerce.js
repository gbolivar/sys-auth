import dotenv from 'dotenv';
import WooCommerceAPI from 'woocommerce-api';
import {wooConfig} from '../config/index.js';

export const wooConnect = {
    async clientWoocommerce() {

        const conf = {
            url:process.env.WOO_URL,
            consumerKey:process.env.WOO_CLIENT,
            consumerSecret:process.env.WOO_SECRET,
            wpAPI: true,
            wpAPIPrefix: '?rest_route=',
            verifySsl: false,
            version:'wc/v2',
            queryStringAuth: false
        }
        console.log(conf)
        return new WooCommerceAPI(conf);
    }
}
