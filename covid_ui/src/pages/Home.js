import React, { Component } from 'react'
import Graph from './components/Graph'
import Grid from '@material-ui/core/Grid'
import graph1 from '../images/graphs/covid_us_cases_30_day_forecast.png'
import graph2 from '../images/graphs/covid_us_cases_30_day_forecast_5_12_2020.png'



export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isHidden: false,
        }
    }

    render() {
        return (
            <React.Fragment>
                <h1>US Covid-19 Forecaster</h1>
                <Grid
                    container
                    direction="row"
                    justify="space-evenly"
                    alignItems="center"
                >
                    <Grid item>
                        <Grid
                            container
                            direction="column"
                            justify="space-evenly"
                            alignItems="center"
                        >
                            <Grid item><Graph graphName={"January - April 2020"} graphImage={graph1} /></Grid>
                            <Grid item><Graph graphName={"January - May 2020"} graphImage={graph2} /></Grid>
                        </Grid>

                    </Grid>
                    <Grid item>
                        <Grid
                            container
                            direction="column"
                            justify="space-evenly"
                            alignItems="space-evenly"
                        >
                            <Grid item>Current Covid Cases: 200</Grid>
                            <Grid item>Today's Forecast: 150 (125-175). Forecasted on 3/22/2020</Grid>
                            <Grid item>Tooling: CDC, FBProphet, Material UI, React</Grid>
                        </Grid>

                    </Grid>
                </Grid>
            </React.Fragment >
        )
    }
}
