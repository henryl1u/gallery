import React from 'react';

class Grid extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {title: 'points', completed: false};
    }
    render() {
        let title = this.props.title;
        let left_caption = this.props.left_caption;
        let right_caption = this.props.right_caption;
        return (
            <div>
                <img src="http://lorempixel.com/225/178/sports"/>
                <div id="thumbnail-title">{ title }</div>
                <div id="thumbnail-footer-left">{ left_caption }</div>
                <div id="thumbnail-footer-right">{ right_caption }</div>
            </div>
        );
    }
}

export default Grid;
