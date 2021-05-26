import React from 'react'
import { Card, CardContent, Typography, Grid } from '@material-ui/core'

import styles from './Cards.module.css'

const Cards = ({
	data: { TotalConfirmed, TotalRecovered, TotalDeaths, Date },
}) => {
	if (!TotalConfirmed) return 'Loading...'

	return (
		<div className={styles.container}>
			<Grid container spacing={3} justify='center'>
				{/* Total Cases */}
				<Grid item component={Card}>
					<CardContent>
						<Typography color='textSecondary' gutterBottom>
							Total Infected
						</Typography>
						<Typography variant='h5'>{TotalConfirmed}</Typography>
						<Typography color='textSecondary'>{Date}</Typography>
						<Typography variant='body2'>
							Number of Total Cases of COVID-19{' '}
						</Typography>
					</CardContent>
				</Grid>
				{/* Total Recoverd */}
				<Grid item component={Card}>
					<CardContent>
						<Typography color='textSecondary' gutterBottom>
							Total Recoverd
						</Typography>
						<Typography variant='h5'>{TotalRecovered}</Typography>
						<Typography color='textSecondary'>{Date}</Typography>
						<Typography variant='body2'>
							Number of Total Recovered Cases from COVID-19{' '}
						</Typography>
					</CardContent>
				</Grid>
				{/* Total Deaths */}
				<Grid item component={Card}>
					<CardContent>
						<Typography color='textSecondary' gutterBottom>
							Total Deaths
						</Typography>
						<Typography variant='h5'>{TotalDeaths}</Typography>
						<Typography color='textSecondary'>{Date}</Typography>
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
