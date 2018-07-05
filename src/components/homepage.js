import React, {Component} from 'react';
import '../assets/css/homepage.css';
import {Link} from 'react-router-dom';
import hero from '../assets/images/hero.png';
import data from '../../server/wizardDummyData.json';
import axios from 'axios'; 
import debounce from 'lodash/debounce'; 


class Homepage extends Component {
    constructor(props) {
        super(props); 
        this.setTimer=null; 
        this.state = {
            userInput: ''
        };
        this.handleInputChange=this.handleInputChange.bind(this); 
        this.ajaxCalltoServerUponUserInput=this.ajaxCalltoServerUponUserInput.bind(this); 
        this.autocompleteFromUser=this.autocompleteFromUser.bind(this); 
    }


    handleInputChange = (event) => {
        let value = event.target.value;
        this.props.history.push( '/search/'+value );
        this.setState({
            userInput: value,
        })   
    }


      async ajaxCalltoServerUponUserInput(props){
        const params = this.props.match.params.term; 
        //once server is running this is what it would look like
        //const response = await axios.get('http://danielpaschal.com/patricia.php', {action:{ autocomplete:{params}}}); 
        const response = await axios.get('http://danielpaschal.com/patricia.php', {params:{ term:{params}}}); 
        console.log(response);  
    }

    autocompleteFromUser = debounce( ()=>{
    //   const params = this.props.match.params.term; 
    //   console.log(params)
      const {userInput}=this.state; 
        console.log('hello?');
        const response = axios.get('http://danielpaschal.com/patricia.php', {params:{ term:{userInput}}}).then(function(){
            console.log("server response", response); 
        });
    },500);
    

    render() {
        const userInput= this.state.userInput;  
        const searchTerm = this.props.match.params.term || ''; 
        // const params = this.props.match.params.term;
        return(
            <div>
                <div className="heroImage">
                    <img src={hero} width="200"/>
                </div>
                <div className="searchBar">
                    <input className="searchArea" value={searchTerm} placeholder="Search by brand or type of snack" onKeyUp={this.autocompleteFromUser} onChange={this.handleInputChange}/>
                    <Link to = {`/MultipleResults/${userInput}`} ><button onClick={this.ajaxCalltoServerUponUserInput} className="btnSearch">&#x1F50D;</button></Link>
                </div>
                <Link to="/MultipleResults"><div className="btnStyle btnRandomSnack">Pick a Random Snack</div></Link>
            </div>
        )
    }
}

export default Homepage;