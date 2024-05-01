/* eslint-disable import/no-cycle */

export default function useUsers() {

  const user = ref([])
  const loader = ref(false)
  const userProcess = ref(false)
  const user_donations = ref([])
  const users = ref([])
  const errors = ref('')
  const API_URL = 'http://127.0.0.1:8000/api'
  const token = useTokenStore();
  const auth = useAuthStore();


  // Liste des Users
  const getListeUsers = async () => {
    try {
      loader.value = true
      const response: any = await $fetch(`${API_URL}/users`, { method: "GET", headers: { Authorization: `Bearer ${token.getToken}` }});
      loader.value = false
      users.value = response
    } catch (error:any) {
      if (error.response.hasOwnProperty("_data")) {
        const isInvalidToken = error.response._data.code === "token_not_valid";
        if(isInvalidToken) auth.logout();
      }
      loader.value = false
    }
  }
  const getListeBlockedUsers = async () => {
    try {
      loader.value = true;
      const response: any = await $fetch(`${API_URL}/blocked-users`, { method: "GET", headers: { Authorization: `Bearer ${token.getToken}` } });
      loader.value = false;

      users.value = response;
    } catch (error:any) {
      if (error.response.hasOwnProperty("_data")) {
        const isInvalidToken = error.response._data.code === "token_not_valid";
        if (isInvalidToken) auth.logout();
      }
      loader.value = false;
    }
  };
  const getUserDonations = async (id:any) => {
    try {
      loader.value = true;
      const response: any = await $fetch(`${API_URL}/user/${id}/donations`, { method: "GET", headers: { Authorization: `Bearer ${token.getToken}` } });
      loader.value = false;

      user_donations.value = response;
    } catch (error:any) {
      if (error.response.hasOwnProperty("_data")) {
        const isInvalidToken = error.response._data.code === "token_not_valid";
        if (isInvalidToken) auth.logout();
      }
      loader.value = false;
    }
  };
  const changeStatus = async (id:any) => {
    try {
      loader.value = true;
      const response: any = await $fetch(`${API_URL}/user/${id}/change-status`, { method: "PATCH", body: {}, headers: { Authorization: `Bearer ${token.getToken}` } });
      loader.value = false;
      if (!response.data.is_active)  getListeUsers();
      else getListeBlockedUsers()
    } catch (error:any) {
      if (error.response.hasOwnProperty("_data")) {
        const isInvalidToken = error.response._data.code === "token_not_valid";
        if (isInvalidToken) auth.logout();
      }
      loader.value = false;
    }
  };
 
  return {
    errors,
    user,
    users,
    userProcess,
    loader,
    getListeUsers,
    changeStatus,
    getListeBlockedUsers,
    getUserDonations,
    user_donations,
  };
}
