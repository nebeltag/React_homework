export let CHANGE_NAME = '@@name/CHANGE';

export let changeName = (profile) => ({
  type: CHANGE_NAME,
  profile

})