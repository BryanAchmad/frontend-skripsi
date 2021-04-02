import React, { Component } from 'react'
import { Collapse } from 'antd'

const { Panel } = Collapse;


class CollapseDataProker extends Component {
    render() {
        return (
            <Panel header={this.props.obj.judul}>
                <p>{this.props.obj.deskripsi}</p>
            </Panel>
        )
    }
}

export default CollapseDataProker;