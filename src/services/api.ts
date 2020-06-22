import axios, { AxiosError, AxiosResponse, Method } from 'axios';
import { API_URL } from '~/config/variables';

const tokenApi =
  // eslint-disable-next-line max-len
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imx1Y2F6ZmVybmFuZGVzMUBnbWFpbC5jb20iLCJzdWIiOiI1ZWEyZGU2YzY1ZDczMjAwMzk5OTM4NzUiLCJpYXQiOjE1OTI4NDg5MDgsImV4cCI6MTU5Mjg1MjUwOH0.nnsNzIT8oUw6H30NSMzob8B20RopXk8GhwAAk8YnPgc';

export async function get<T>(url: string, params?: any): Promise<T> {
  const response = await request<T>('GET', url, params);

  return response.data;
}

export async function post<T>(url: string, data: any): Promise<T> {
  const response = await request<T>('POST', url, data);

  return response.data;
}

async function request<T = any>(method: Method, url: string, data: any = null): Promise<AxiosResponse<T>> {
  const headers = { Authorization: `Bearer ${tokenApi}` };
  try {
    const response = await axios.request({
      baseURL: API_URL,
      url,
      method,
      timeout: 30000,
      headers: {
        'Content-type': 'application/json',
        ...headers
      },
      params: method === 'GET' ? data : null,
      data: method !== 'GET' ? data : null
    });

    return response;
  } catch (err) {
    const error: AxiosError = err;
    throw error;
  }
}
