export const Integration = class {
    constructor(id = null, token, cliente_id, secret, url_api, local_id, canel_integracion, estato ) {
        this.id = id;
        this.token = token;
        this.cliente_id = cliente_id;
        this.secret = secret;
        this.url_api = url_api;
        this.local_id = local_id;
        this.canel_integracion = canel_integracion;
        this.estata = estato
    }
}

