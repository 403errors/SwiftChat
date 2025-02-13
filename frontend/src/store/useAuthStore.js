import { create } from 'zustand'
import { axiosInstance } from '../lib/axios'

export const useAuthStore = create((set) => ({
    authUser: null,
    isSigningIn: false,
    isLoggingIn: false,
    isUpdatingProfile: false,

    isCheckingAuth: true,

    checkAuth: async() => {
        try {
            const respose = await axiosInstance.get("/auth/check");
            set({authUser: respose.data})
        } catch (error) {
            console.log("Error in checkAuth: ", error);
            set({authUser: null})
        } finally {
            set({isCheckingAuth: false})
        }
    },

    signup: async(data) => {
        set({isSigningUp: true})
        try {
            const res = await axiosInstance.post("/auth/signup", data);
            set({authUser: res.data});
            toast.success("Account created successfully");
        } catch (error) {
            toast.error(error.respose.data.message);
        } finally {
            set({ isSigningUp: false})
        }
    }
}))