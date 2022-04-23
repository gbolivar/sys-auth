import cache from "memory-cache";
/**
 * Author Gregorio Bolivar <elalconxvii@gmail.com>
 * Version 1.0.1
 * Description: Module for Cache
 * Create: 2021-12-14 10:14
 * last update: 2021-12-14 00:14
 */

export const Cache = {
    put(key, value) {
        if (typeof key !== 'undefined' && typeof value !== 'undefined') {
            cache.put(key, value, 200);
        }
    },
    get(key) {
        if (typeof key !== 'undefined') {
            return cache.get(key);
        }
    },
    del(key){
        if (typeof key !== 'undefined') {
            cache.del(key);
        }
    },
    clear(){
        cache.clear();
    }

}