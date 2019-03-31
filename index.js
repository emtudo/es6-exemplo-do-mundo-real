const world = require('./world.js')

const { luciana, leandro } = world

const mergePeople = (luciana, leandro) => ({...luciana, ...leandro})

const newBirth = async female => {
  if (!female.isPregnant) {
    Promise.reject(new Error('Esta pessoa não está grávida!'))
    return
  }

  const { weeks }= female.pregnant

  if (weeks === 39) {
    const { baby } = female

    return baby
  }

  return await newBirth(female)
}

const createLeticia = async (luciana, leandro) => {
  let { female } = mergePeople(luciana, leandro)
  if (!female.isPregnant) {
    return createLeticia(luciana, leandro)
  }

  return await newBirth(female)
}

const addLeticiaTheWorld = () => createLeticia(luciana, leandro)
  .then(leticia => world.addPerson(leticia))

addLeticiaTheWorld()
