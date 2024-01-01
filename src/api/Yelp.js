import axios from "axios";


export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer iXQyg2L4lyAbLz2ggq-Msn3oVAccMrMD63zLVw4TBNTQFmXOOXIll9Z69x9Y3_uQOIhDKhGRpF-A7wxfC9Z3QWxXLoz4n5Bxxt5tH1ngMEDehT6levoupegBRlmKZXYx',
    }
});