export const updateStatus = (status) => {
  return {
    type: 'UPDATE_STATUS',
    status
  }
};
export const initApp = () => {
  return {
    type: 'INIT'
  }
};
