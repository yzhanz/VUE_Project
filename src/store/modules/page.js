const state = {
  siderCollapsed: false,
  activeMenuName: '',
  submenuName: '',
  loginStatus: 0, //登录状态，是否是跨域登录，是0，否1
  headerBadgeNumber: 0 // 顶部导航头像徽标数字
};
const getters = {
  getSiderCollapsed(state) {
    return state.siderCollapsed;
  },
  getLoginStatus(state) {
    return state.loginStatus;
  },
  getActiveMenuName(state) {
    return state.activeMenuName;
  },
  getHeaderBadgeNumber(state) {
    return state.headerBadgeNumber;
  }
};
const mutations = {
  switchSiderCollapsed(state) {
    state.siderCollapsed = !state.siderCollapsed;
  },
  set_active_menu_name(state, activeMenuName) {
    state.activeMenuName = activeMenuName;
  },
  set_loginStatus(state, loginStatus) {
    state.loginStatus = loginStatus;
  },
  set_submenu(state, submenuName) {
    state.submenuName = submenuName;
  },
  set_header_badge_number(state, headerBadgeNumber) {
    state.headerBadgeNumber = headerBadgeNumber;
  }
};
const actions = {
  switchSider(context) {
    context.commit('switchSiderCollapsed');
  },
  set_active_menu_name({commit}, activeMenuName) {
    commit('set_active_menu_name', activeMenuName);
  },
  set_submenu({commit}, submenuName) {
    commit('set_submenu', submenuName);
  },
  set_loginStatus({commit}, loginStatus) {
    commit('set_loginStatus', loginStatus);
  },
  set_header_badge_number({commit}, headerBadgeNumber) {
    commit('set_header_badge_number', headerBadgeNumber);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
