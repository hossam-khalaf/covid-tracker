import axios from 'axios'

// Api url !!!
const url = 'https://api.covid19api.com/summary'

// using axios to fetch the response asynchronously
export const fetchData = async () => {
	try {
		// destructure data
		const response = await axios.get(url)
		const {
			Global: { TotalConfirmed, TotalRecovered, TotalDeaths, Date },
		} = response.data

		return {
			TotalConfirmed,
			TotalRecovered,
			TotalDeaths,
			lastUpdate: Date,
		}
	} catch (error) {
		return error
	}
}
