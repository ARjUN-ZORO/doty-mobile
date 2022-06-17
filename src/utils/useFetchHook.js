import axios from 'axios';

const BASE_URL = 'https://app.doty.com/';
const API_URL = 'api/';

const API_PATH = BASE_URL + API_URL; //API Path

const useFetch = ENDPOINT => {
  const defaultHeader = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  const handleRequest = async (
    url,
    method,
    data = false,
    headers = defaultHeader,
  ) => {
    const options = {
      method,
      url,
      headers,
    };
    if (data) {
      options.data = data;
    }
    try {
      const response = await axios(options);
      return response;
    } catch (err) {
      throw new Error(err);
    }
  };

  //   POST REQEST

  const post = (data = false) => {
    if (!data) {
      throw new Error('to make a post you must provide a body');
    }
    return handleRequest(API_PATH + ENDPOINT, 'POST', data);
  };

  //   GET REQEST

  const get = id => {
    const url = `${API_PATH + ENDPOINT}${id ? `/${id}` : ''}`;
    return handleRequest(url, 'GET');
  };

  //   PUT REQEST

  const put = (id = false, data = false) => {
    if (!id || !data) {
      throw new Error('to make a put you must provide the id and the   body');
    }
    const url = `${API_PATH + ENDPOINT}/${id}`;
    return handleRequest(url, 'PUT', data);
  };

  //   DELETE REQEST

  const del = (id = false) => {
    if (!id) {
      throw new Error('to make a delete you must provide the id and the body');
    }
    const url = `${API_PATH + ENDPOINT}/${id}`;
    return handleRequest(url, 'DELETE');
  };

  return {
    post,
    get,
    put,
    del,
  };
};

export default useFetch;
