/* eslint-disable import/no-cycle */

import useAlertNotification from "./notification"

export default function useIdNumbers() {

  const idNumber = ref([])
  const loader = ref(false)
  const idNumberProcess = ref(false)
  const idNumberSuccess = ref(false)
  const idNumbers = ref([])
  const errors = ref('')
  const API_URL = 'http://127.0.0.1:8000/api'
  const token = useTokenStore();
  const auth = useAuthStore();
  const { errorSweetAlert } = useAlertNotification();

  const getListeIdNumbers = async () => {
    try {
      loader.value = true
      const response: any = await $fetch(`${API_URL}/id_numbers`, { method: "GET", headers: { Authorization: `Bearer ${token.getToken}` } });
      loader.value = false
      idNumbers.value = response.data
    } catch (error:any) {
      if (error.response.hasOwnProperty("_data")) {
        const isInvalidToken = error.response._data.code === "token_not_valid";
        if (isInvalidToken) auth.logout();
      }
      loader.value = false
    }
  }
  const createIdNumber = async (data: any) => {
    try {
      loader.value = true
      idNumberSuccess.value = false
      await $fetch(`${API_URL}/id_numbers`, { method: "POST", body: { ...data }, headers: { Authorization: `Bearer ${token.getToken}` } });
      idNumberSuccess.value = true
      loader.value = false
      getListeIdNumbers();
    } catch (error:any) {
      idNumberSuccess.value = false
      
      if (error.response.hasOwnProperty("_data")) {
        const isInvalidToken = error.response._data.code === "token_not_valid";
        if (isInvalidToken) auth.logout();
        errorSweetAlert("Oups! Error", error.response._data.detail);

      }
      
      loader.value = false
    }
  }
  const updateIdNumber = async (data: any) => {
    try {
      loader.value = true
      await $fetch(`${API_URL}/id_numbers`, { method: "POST", body: { ...data }, headers: { Authorization: `Bearer ${token.getToken}` } });
      loader.value = false
      getListeIdNumbers();
    } catch (error:any) {
      if (error.response.hasOwnProperty("_data")) {
        const isInvalidToken = error.response._data.code === "token_not_valid";
        if (isInvalidToken) auth.logout();
      }
      loader.value = false
    }
  }
  const deleteIdNumber = async (id: any) => {
    try {
      loader.value = true
      await $fetch(`${API_URL}/id_numbers/${id}`, { method: "DELETE", headers: { Authorization: `Bearer ${token.getToken}` } });
      loader.value = false
      getListeIdNumbers();
    } catch (error:any) {
      if (error.response.hasOwnProperty("_data")) {
        const isInvalidToken = error.response._data.code === "token_not_valid";
        if (isInvalidToken) auth.logout();
      }
      loader.value = false
    }
  }
 
  return {
    errors,
    idNumber,
    idNumbers,
    idNumberProcess,
    deleteIdNumber,
    loader,
    getListeIdNumbers,
    createIdNumber,
    idNumberSuccess,
  };
}
