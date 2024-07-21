import { createAsyncThunk } from "@reduxjs/toolkit";
import { APIError } from "../types";
import { publicRequest, getExceptionPayload } from "../respHandlingUtils";
import { UserState } from "./userSlice";
import { setSuccessNotification } from "../common/commonSlice";

export const fetchUsers = createAsyncThunk<UserState, void, { rejectValue: APIError }>(
    "user/fetchUsers",
    async (_, { rejectWithValue }) => {
        try {
            const response = await publicRequest.get<UserState>('/users.json');
            return response.data;
        }
        catch (ex) {
            return rejectWithValue(getExceptionPayload(ex));
        }
    }
);

export const updateUserMicrophone = createAsyncThunk(
    'user/updateUserMicrophone',
    async (_, {dispatch}) => {
        try {
            // await publicRequest.post<UserState>('users', user);
            dispatch(setSuccessNotification('User moved successfully!'));
            setTimeout(() => {
                dispatch(setSuccessNotification(''));
            }, 3000);
        }
        catch(err)  {
            console.log(err);
        }
    }
);
