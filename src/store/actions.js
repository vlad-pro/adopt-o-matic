export default {
  // addPet: (contex, pet) => {
  //   contex.commit('appendPet', pet)
  // },
  addPet: ({ commit }, payload) => {
    commit('appendPet', payload)
  }
}
