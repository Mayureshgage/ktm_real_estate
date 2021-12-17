import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': '260abb2e1cmshecfe514d6d46b6ep189502jsnd5e283ce8c41' ,
    },
  });
    
  return data;
}