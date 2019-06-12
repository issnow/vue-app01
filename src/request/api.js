import axios from './http'
export const getTable = (params) => {
  return axios.get('tabs')
};
