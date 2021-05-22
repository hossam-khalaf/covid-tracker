import axios from 'axios'

// Api url !!!
const url = 'https://covid19.mathdro.id/api'

// using axios to fetch the response asynchronously
export const fetchData = async () => {
	try {
		// destructure data
		const {
			data: { confirmed, recoverd, deaths, lastUpdate },
		} = await axios.get(url)

		return {
			confirmed,
			recoverd,
			deaths,
			lastUpdate,
		}
	} catch (error) {
		console.log(error)
	}
}
