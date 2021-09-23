export const state = () => ({
    userDashboardRoot: 'dashboard',
  
  })
  
  export const getters = {
    
  }
    
  export const mutations = {
    setUser(state, newUserDetails) {
      Object.entries(newUserDetails).forEach(([key, value]) => {
        this.$auth.user[key] = value;
      });
    }, 
  }
  
  export const actions = {
    async logout({commit, state}) {
  
      this.$auth.logout();
      this.$router.push('/login')
    },
    async adminLogout({commit, state}) {
      this.$auth.logout().then(() => {
          this.$router.push('/admin/login')
      });
      
    },
  }