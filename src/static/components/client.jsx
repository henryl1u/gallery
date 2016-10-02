import React from 'react';
import ReactDOM from 'react-dom';
import Thumbnail from './thumbnail';
import Grid from './grid';


class Main extends React.Component {
    render() {
        return (
            <div>
                <h1>This is one slick app112!</h1>
                <h1>This is another slick app1134!</h1>
                <Grid title="This is a grid"/>
                <Thumbnail title="A nice drawing"/>
                <Thumbnail title="Better drawing"/>
                <Thumbnail title="Siiiick"/>
            </div>
        );
    }
}

const app = document.getElementById('app');
ReactDOM.render(<Main />, app);
