import crypto from 'crypto'

export const RandomID = number => {
  return crypto
    .randomBytes(number + 20)
    .toString('hex')
    .substr(Math.random() * number, number)
}

// global opts = prefix - add prefix
/**
 *
 * @param {string} strategy either 'date' or 'random'
 * @param {Object} opts options for random
 * @param {String} opts.prefix prefix of random string
 * @param {String} opts.suffix suffix of random string
 */
export const GenerateID = (strategy, opts) => {
  const strategies = [
    {
      name: 'date',
      generate: opts => {
        const date = +new Date()
        const _id = date - opts.date

        const __id = RandomID(4)

        return `${_id}p${__id}`
      },
      post: id => {
        return id.toUpperCase()
      }
    }
  ]

  const algorithm = strategies.find(s => s.name === strategy)
  if (!algorithm) return RandomID(10)

  return algorithm.post(
    `${opts.prefix || 'KCNT'}${algorithm.generate(opts)}${opts.suffix || ''}`,
    opts
  )
}
