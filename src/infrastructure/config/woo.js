/**
 * @desc Configuration the logger woocomerse if is static
 * @version 1.0.0
 *
 */
export const wooConfig = {
    config: {
        url: process.env.WOO_URL,
        client: process.env.WOO_CLIENT,
        secret: process.env.WOO_SECRET
    }
}