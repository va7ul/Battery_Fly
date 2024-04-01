import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { baseURL } from 'utils/constants/baseURL';

axios.defaults.baseURL = baseURL;

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

const handleError = error => {
  if (error.response && error.response.data && error.response.data.message) {
    return `Oops! Something was wrong... ${error.response.data.message}`;
  } else {
    return `Oops! Something was wrong... ${error.message}`;
  }
};

export const register = createAsyncThunk(
  'user/signup',
  async (dataUser, thunkApi) => {
    try {
      const { data } = await axios.post('auth/signup', dataUser);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      const errorMessage = handleError(error);
      return thunkApi.rejectWithValue(errorMessage);
    }
  }
);

export const login = createAsyncThunk('user/signin', async (dataUser, thunkApi) => {
  try {
    const { data } = await axios.post('auth/signin', dataUser);
    setAuthHeader(data.token);
    return data;
  } catch (error) {
    const errorMessage = handleError(error);
    return thunkApi.rejectWithValue(errorMessage);
  }
});

export const logOut = createAsyncThunk('user/signout', async (_, thunkAPI) => {
  try {
    await axios.post('auth/signout');
    clearAuthHeader();
  } catch (error) {
    const errorMessage = handleError(error);
    return thunkAPI.rejectWithValue(errorMessage);
  }
});

export const refreshUser = createAsyncThunk('user/refresh', async (_, thunkAPI) => {
  const { token } = thunkAPI.getState().user;

  if (token === '') {
    return thunkAPI.rejectWithValue('Unable to fetch user');
  }

  try {
    setAuthHeader(token);
    const { data } = await axios.get('auth/current');
    return data;
  } catch (error) {
    const errorMessage = handleError(error);
    return thunkAPI.rejectWithValue(errorMessage);
  }
});

// export const forgotPassword = createAsyncThunk(
//   'auth/forgot-password',
//   async (dataUser, thunkAPI) => {
//     try {
//       await axios.post('auth/forgot-password', dataUser);
//     } catch (error) {
//       const errorMessage = handleError(error);
//       return thunkAPI.rejectWithValue(errorMessage);
//     }
//   }
// );

// export const verifyEmail = createAsyncThunk(
//   'auth/verify-email',
//   async (dataUser, thunkAPI) => {
//     try {
//       await axios.post('auth/verify-email', dataUser);
//     } catch (error) {
//       const errorMessage = handleError(error);
//       return thunkAPI.rejectWithValue(errorMessage);
//     }
//   }
// );

export const updateUser = createAsyncThunk(
  'user/update-profile',
  async (dataUser, thunkApi) => {
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };
    try {
      const { data } = await axios.put('user/update', dataUser, config);

      return data;
    } catch (error) {
      const errorMessage = handleError(error);
      return thunkApi.rejectWithValue(errorMessage);
    }
  }
);


export const addToFavorites = createAsyncThunk(
  'user/addToFavorites',
  async (id, thunkApi) => {
    try {
      const { data } = await axios.post(`user/favorite`, id);

      return data;
    } catch (error) {
      const errorMessage = handleError(error);
      return thunkApi.rejectWithValue(errorMessage);
    }
  }
);

export const deleteFromFavorites = createAsyncThunk(
  'user/deleteFromFavorites',
  async (dataUser, id, thunkApi) => {
    try {
      const { data } = await axios.delete(`user/favorite/${id}`, dataUser);

      return data;
    } catch (error) {
      const errorMessage = handleError(error);
      return thunkApi.rejectWithValue(errorMessage);
    }
  }
);

export const getOneOrder = createAsyncThunk(
  'user/getOneOrder',
  async (dataUser, id, thunkApi) => {
    try {
      const { data } = await axios.get(`user/order/${id}`, dataUser);

      return data;
    } catch (error) {
      const errorMessage = handleError(error);
      return thunkApi.rejectWithValue(errorMessage);
    }
  }
);