import type { IGetMobiles } from "../types/types";
import axios from "axios";



const api = "https://69e5ff70ce4e908a155ec5a1.mockapi.io/users";


export const getMobiles = async (search:string):Promise<IGetMobiles[]>=>{
    return (await axios.get(api,{
        params:search?{search}:{},
    })).data;
};