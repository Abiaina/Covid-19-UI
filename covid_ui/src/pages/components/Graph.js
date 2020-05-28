import React, { Component } from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import Tooltip from "@material-ui/core/Tooltip"


export default class Graph extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            graphOn: false,
        }
    }

    toggle = () => {
        this.setState({
            graphOn: !this.state.graphOn,
        })
    }

    showButton = () => {
        return (
            <Tooltip title={this.props.graphName}>
                <Avatar alt={this.props.graphName} src="https://image.freepik.com/free-icon/graph_318-10306.jpg" />
            </Tooltip>
        )
    }

    showGraphData = () => {
        return (
            <Tooltip title={this.props.graphName}>
                <img alt={this.props.graphName} src={this.props.graphHref} width="500px" />
            </Tooltip>
        )
    }

    render() {
        return (
            <Button onClick={this.toggle}>
                {this.state.graphOn ? this.showGraphData() : this.showButton()}
            </Button>
        )
    }
}
