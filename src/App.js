import React from 'react'
import Cards from './components/Cards/Cards'
import Chart from './components/Chart/Chart'
import CountryPicker from './components/CountryPicker/CountryPicker'

import styles from './App.module.css'

import { fetchData } from './api'

class App extends React.Component {
	// State
	state = {
		data: {},
	}

	// getting data
	async componentDidMount() {
		const fetchedData = await fetchData()

		// populate data
		this.setState({ data: fetchedData })
	}

	render() {
		const { data } = this.state
		return (
			<div className={styles.container}>
				<Cards data={data} />
				<Chart />
				<CountryPicker />
			</div>
		)
	}
}

export default App
