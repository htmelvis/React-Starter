const statusApp = (
  state = {
    status: 'Ready'
  },
  action ) => {

    switch (action.type) {
      case 'INIT':
        return Object.assign({}, state, {
          status: 'You just ran an action!'
        });
      case 'UPDATE_STATUS':
        return Object.assign({}, state, {
          status: action.status
        });
      default:
        return state
    }
  }

export default statusApp;

