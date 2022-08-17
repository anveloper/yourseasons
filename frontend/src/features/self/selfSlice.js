import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Axios from 'api/Axios'

const initialState = {
  session: undefined,
  customer: undefined,
  isSetClear: false,
  mySessionName: 's-s-s',
  selfConsultingId: 0,
  state: 'idle'
}

export const selfConsulting = createAsyncThunk(
  'self/openConsulting',
  async (payload, { rejectWithValue }) => {
    try {
      const response = await Axios.post(`self-consultings`)
      return response.data
    } catch (err) {
      return rejectWithValue(err)
    }
  }
)

export const selfConsultingClose = createAsyncThunk(
  'self/selfConsultingClose',
  async (payload, { rejectWithValue }) => {
    try {
      console.log(payload)
      const response = await Axios.post(`self-consultings/1`, payload)
      return response.data
    } catch (err) {
      console.log(err)
      return rejectWithValue(err)
    }
  }
)

export const selfSlice = createSlice({
  name: 'self',
  initialState,
  reducers: {
    settingModalOn: (state) => {
      state.isSetClear = true;
    },
    settingModalOff: (state) => {
      state.isSetClear = false;
    },
    setCustomer: (state, { payload }) => {
      state.customer = payload
    },
    setSession: (state, { payload }) => {
      state.session = payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(selfConsulting.pending, (state, action) => {
      state.status = 'loading';
    })
    builder.addCase(selfConsulting.fulfilled, (state, { payload }) => {
      state.status = 'succeeded';
      state.selfConsultingId = payload.selfConsultingId;
    })
    builder.addCase(selfConsulting.rejected, (state, action) => {
      state.status = 'failed';
    })
  }
})

export const { settingModalOn, settingModalOff, setSession, setCustomer } = selfSlice.actions;

export default selfSlice.reducer