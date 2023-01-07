export let SET_NAME = '@@name/SET';


export let setName = (newProfileName) => ({
  type: SET_NAME,
  newProfileName
});

