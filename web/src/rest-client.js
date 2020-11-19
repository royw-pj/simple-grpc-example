import axios from 'axios';


class RestClient{
    constructor(url){
        this.url = url;
    }
    async getProducts(){
        return await axios.get(this.url + '/products');
    }
}

export default new RestClient(process.env.REACT_APP_RESTFUL_SERVER_ENDPOINT);