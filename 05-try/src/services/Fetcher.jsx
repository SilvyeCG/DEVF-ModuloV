// export default async function name (params){}

import { getApiUrl } from '../config'

export const Fetcher = async ({ url = '', options = {} }) => {
  const response = await fetch(url, options)
  return response.ok && response.json()
}

export const getCountries = async () => {
  const countriesData = getApiUrl('/all')
  return await Fetcher({ url: countriesData, options: { method: 'GET' } })
}

export const getCountry = async (code) => {
  const countryData = getApiUrl('alpha/' + code)
  return await Fetcher({ url: countryData, options: { method: 'GET' } })
}
