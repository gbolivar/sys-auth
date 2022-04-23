/**
 * @desc Configuration the swagger
 * @version 1.0.0
 *
 */
export const swagger = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Methodo Express API with Swagger",
            version: "0.1",
            description:
                "Documentación del servicio de api del Api asociado a woocommerce",
            license: {
                name: "MIT",
                url: "https://spdx.org/licenses/MIT.html",
            },
            contact: {
                name: "Methodos cl",
                url: "https://www.methodo.cl/",
                email: "desarrollo@methodo.cl",
            },
        },
        servers: [
            {
                url: "http://localhost:9090",
            },
        ],
    },
    apis: ["./src/interfaces/controllers/*.js"],
};