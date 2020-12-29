import axios from 'axios';

const API_BASEURL = 'http://localhost:8888/graphql';
const header = {
  headers: {
    'Content-Type': 'application/json'
  }
}

export default async query => {
  return await axios.post(API_BASEURL, query, header);
}
