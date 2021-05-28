import {createAction} from '@reduxjs/toolkit';
import {ApiCallProps} from './middleware/api';

export const apiCallBegan = createAction<ApiCallProps>('api/apiCallBegan');
export const apiCallSuccess = createAction<object[]>('api/apiCallSuccess');
export const apiCallFailed = createAction<any>('api/apiCallFailed');
