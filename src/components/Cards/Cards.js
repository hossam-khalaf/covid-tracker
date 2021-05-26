import React from 'react'
import { Card, CardContent, Typography, Grid } from '@material-ui/core'

import styles from './Cards.module.css'
import cx from 'classnames'
import CountUp from 'react-countup'

const Cards = ({
	data: { TotalConfirmed, TotalRecovered, TotalDeaths, lastUpdate },
}) => {
	if (!TotalConfirmed) return 'Loading...'

	return (
		<div className={styles.container}>
			<Grid container spacing={3} justify='center'>
				{/* Total Cases */}
				<Grid
					item
					component={Card}
					xs={12}
					md={3}
					className={cx(styles.card, styles.confirmed)}>
					<CardContent>
						<Typography color='textSecondary' gutterBottom>
							Total Infected
						</Typography>
						<Typography variant='h5'>
							<CountUp
								start={0}
								end={TotalConfirmed}
								duration={2}
								separator=','
							/>
						</Typography>
						<Typography color='textSecondary'>
							{new Date(lastUpdate).toDateString()}
						</Typography>
						<Typography variant='body2'>
							Number of Total Cases of COVID-19{' '}
						</Typography>
					</CardContent>
				</Grid>
				{/* Total Recoverd */}
				<Grid
					item
					component={Card}
					xs={12}
					md={3}
					className={cx(styles.card, styles.recovered)}>
					<CardContent>
						<Typography color='textSecondary' gutterBottom>
							Total Recoverd
						</Typography>
						<Typography variant='h5'>
							<CountUp
								start={0}
								end={TotalRecovered}
								duration={2}
								separator=','
							/>
						</Typography>
						<Typography color='textSecondary'>
							{new Date(lastUpdate).toDateString()}
						</Typography>
						<Typography variant='body2'>
							Number of Total Recovered Cases from COVID-19{' '}
						</Typography>
					</CardContent>
				</Grid>
				{/* Total Deaths */}
				<Grid
					item
					component={Card}
					xs={12}
					md={3}
					className={cx(styles.card, styles.dead)}>
					<CardContent>
						<Typography color='textSecondary' gutterBottom>
							Total Deaths
						</Typography>
						<Typography variant='h5'>
							<CountUp start={0} end={TotalDeaths} duration={2} separator=',' />
						</Typography>
						<Typography color='textSecondary'>
							{new Date(lastUpdate).toDateString()}
						</Typography>
						<Typography variant='body2'>
							Number of Total Deaths Caused by COVID-19{' '}
						</Typography>
					</CardContent>
				</Grid>
			</Grid>
		</div>
	)
}

export default Cards
