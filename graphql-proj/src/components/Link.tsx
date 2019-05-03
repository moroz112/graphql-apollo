import React, { Component } from 'react'

interface LinkProps {
    link: any
}
export class Link extends Component<LinkProps> {
    render() {
        return (
            <div>
                <div>
                    {this.props.link.description} ({this.props.link.url})
                </div>
            </div>
        )
    }
}