
export default {

  namespace: 'example',

  state: {
    test: "testData",
    sorting: false
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },

    handleChangeSort(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
