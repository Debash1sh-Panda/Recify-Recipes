import { axiosInstance } from "../apiClient";

class httpClient{
    
    private http;

    constructor(){
        this.http=axiosInstance;
    }

    public _get(url:string,config={}){
        this.http.get(url,config)
    }

    public _post(url:string,data={},config={}){
        this.http.post(url,data,config)
    }

    public _put(url:string,data={},config={}){
        this.http.put(url,data,config)
    }

    public _delete(url:string,config={}){
        this.http.delete(url,config)
    }

}


export const httpService=new httpClient();

