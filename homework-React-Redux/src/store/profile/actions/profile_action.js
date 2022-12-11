export let SET_NAME = '@@name/SET';
export let CLEAR_INP = '@@inp/CLEAR'

export let setName = (newProfileName) => ({
  type: SET_NAME,
  newProfileName
});

export let clearInp = (value) => ({
  type: CLEAR_INP,
  value
})