import React from 'react';


class Thumbnail extends React.Component {
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
Thumbnail.propTypes = {
    title: React.PropTypes.string.isRequired,
    left_caption: React.PropTypes.string.isRequired,
    right_caption: React.PropTypes.string.isRequired
}
/*Thumbnail.defaultProps = {
    title: "Undefined",
    left_caption: "Undefined",
    right_caption: "Undefined"
}*/

export default Thumbnail;
