const state = {
  userName: sessionStorage.getItem('userName') || '',
  token: sessionStorage.getItem('token') || '',
  userId: sessionStorage.getItem('userId') || '',
  role: sessionStorage.getItem('role') || '',
  show: false,
};
const getters = {
  not_show(state) {
    return !state.show;
  },
  token(state) {
    return state.token;
  },
  userName(state) {
    return state.userName;
  },
  userId(state) {
    return state.userId;
  },
  role(state) {
    return state.role;
  }
};
const mutations = {
  userName(state, userName) {
    sessionStorage.setItem('userName', userName)
    state.userName = userName
  },
  userId(state, userId) {
    sessionStorage.setItem('userId', userId)
    state.userId = userId
  },
  role(state, role) {
    sessionStorage.setItem('role', role)
    state.role = role
  },
  switch_show(state) {
    state.show = !state.show;
  },
  token(state, token) {
    sessionStorage.setItem('token', token);
    state.token = token;
  },
  del_token(state) {
    sessionStorage.removeItem('token');
    state.token = '';
  }
};
const actions = {
  switch_show(context) {
    context.commit('switch_show');
  },
  token({commit}, token) {
    commit('token', token);
  },
  userName({commit}, userName) {
    commit('userName', userName);
  },
  del_token({commit}) {
    commit('del_token');
  },
  userId({commit}, userId) {
    commit('userId', userId);
  },
  role({commit}, role) {
    commit('role', role);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
