import type {
  ICreateMobiles,
  IDeleteMobiles,
  IGetMobiles,
} from "../types/types";
import axios from "axios";

const api = "https://69e5ff70ce4e908a155ec5a1.mockapi.io/users";

export const getMobiles = async (search: string): Promise<IGetMobiles[]> => {
  return (
    await axios.get(api, {
      params: search ? { search } : {},
    })
  ).data;
};

export const deleteMobile = async (id: number): Promise<IDeleteMobiles> => {
  return await axios.delete(`${api}/${id}`);
};

export const createUsers = async (data: ICreateMobiles) => {
  return (await axios.post(api, data)).data;
};

export const updateMobile = async (id: number, data: ICreateMobiles) => {
  return (await axios.put(`${api}/${id}`, data)).data;
};