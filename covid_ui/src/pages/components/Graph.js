import React, { Component } from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import Tooltip from "@material-ui/core/Tooltip"


export default class Graph extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }


    render() {
        return (
            <Button>
                <Tooltip title={this.props.graphName}>
                    <Avatar alt={this.props.graphName} src="https://image.freepik.com/free-icon/graph_318-10306.jpg" />
                </Tooltip>
            </Button>
        )
    }
}
