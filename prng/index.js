const url = new URL(window.location)

let seed = Date.now()
if (url.searchParams.get('seed')) {
  seed = url.searchParams.get('seed')
} else {
  url.searchParams.set('seed', seed)
}
window.history.pushState({seed}, '', url)

const prng = new Alea(seed)

export default prng
