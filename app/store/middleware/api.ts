import {create} from 'apisauce';
import settings from '../../config/settings';

import {apiCallBegan, apiCallFailed, apiCallSuccess} from './../api';

export interface ApiCallProps {
  url: string;
  method?: 'get' | 'post' | 'put' | 'delete';
  data?: object[];
  onSuccess?: string;
  onError?: string;
  onStart?: string;
}

export interface ActionProps {
  payload: ApiCallProps;
  type: string;
}

const api = (store: any) => (next: any) => async (action: ActionProps) => {
  if (action?.type !== apiCallBegan?.type) return next(action);

  const {
    url,
    method = 'get', // default method
    data,
    onSuccess,
    onError,
    onStart,
  } = action.payload;

  if (onStart) store.dispatch({type: onStart});

  next(action);

  const request = create({
    baseURL: settings.apiUrl,
  });

  const response = await request[method](url, data);

  if (response.ok) {
    store.dispatch(apiCallSuccess(response.data as object[]));

    console.log(onSuccess);

    if (onSuccess) store.dispatch({type: onSuccess, payload: response.data});
  } else {
    store.dispatch(apiCallFailed(response.problem));

    if (onError) store.dispatch({type: onError, payload: response.problem});
  }
};

export default api;
