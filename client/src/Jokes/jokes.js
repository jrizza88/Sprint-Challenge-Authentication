import React from 'react';
import axios from 'axios';



class Jokes extends React.Component {
    state = {
        jokes: [],
    };

    render() {
        if (!this.state.jokes) {
            return <div>Only registered users can view!</div>
        }
        return (
            <>
                <h2>Jokes</h2>
                    <ul>{this.state.jokes.map( j => (
                        <li key={j.id}> {j.joke}</li>
                    ))}
                </ul>
            </>
        )
    }

    

   componentDidMount(){
      
      
        const headers = {Authorization: localStorage.getItem('jwt') };
        const endpoint = 'http://localhost:3300/api/jokes';

        axios.get(endpoint, {headers})
        .then (res => {
            this.setState({ jokes: res.data})
        }).catch(e => {
            console.error(e);
        })
    };
}

export default Jokes;