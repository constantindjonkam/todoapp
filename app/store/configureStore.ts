import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';

import reducer from './reducer';
import api from './middleware/api';

export default configureStore({
  reducer,
  middleware: [...getDefaultMiddleware(), api],
});
