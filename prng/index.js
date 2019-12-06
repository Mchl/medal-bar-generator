const seed = (reseed = false, newSeed) => {
  const url = new URL(window.location)
  let seed = newSeed || Date.now()
  if (!reseed && url.searchParams.get('seed')) {
    seed = url.searchParams.get('seed')
  } else {
    url.searchParams.set('seed', seed)
  }
  window.history.pushState({seed}, '', url)
  return new Alea(seed)
}

let alea = seed()

export const reseed = (newSeed) => {
  alea = seed(true, newSeed)
}

const prng = () => alea()

export default prng
