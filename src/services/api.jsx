import axios from "axios"

export const client = axios.create({
    baseURL:"http://localhost:8000"
})

export async function getLocations(){

    const {data} =  await client ("/products") 

   return data;
}

export async function getLocation(id){
  const {data} = await client(`/products/${id}`);

  return data;

}