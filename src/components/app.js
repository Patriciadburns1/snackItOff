import React, { Component } from 'react';

import { Route } from 'react-router-dom';
import Nav from './nav/nav';
import SearchData, {SearchDataContext} from './searchdata';
import Homepage from './homepage';
import MultipleResults from './multipleresultspage';
import SingleResult from './singleresultpage/singleresult';
import About from './about';
import Team from './team';
import Contact from './contact';
import Filters from './filters';
import CategoryHome from './categoryhome';
import SearchBar from './searchbar';
import LogIn from './login'; 
import CreateAccount from './createaccount'; 
import UserFavorites from './userfavorites';
import auth from './userauth'; 

class App extends Component {
    constructor(props) {
        super(props);
       
    }
    render() {
        return (
            <div>
                <SearchData>
                    <SearchDataContext.Consumer>
                        {(context)=>(
                            <div>
                                <Nav />
                                {/*<Route path='/' component={SearchBar} />*/}
                                <Route exact path='/' component={Homepage} />
                                <Route path='/search/:term?' component={Homepage} />
                                <Route path='/search/:term/MultipleResults/?' component={MultipleResults} />
                                <Route exact path='/MultipleResults/:term?' component={MultipleResults} />
                                <Route path='/MultipleResults/filter/:filterID/category/:categoryID' component={MultipleResults} />
                                <Route path='/SingleResult/:product_id' component={SingleResult} />
                                <Route path='/About' component={About} />
                                <Route path='/Team' component={Team} />
                                <Route path='/Contact' component={Contact} />
                                <Route path='/LogIn' component={LogIn}/> 
                                <Route path='/CreateAccount' component={CreateAccount}/> 
                                {/* <Route path='/UserFavorites' component={auth(UserFavorites)}/>  */}
                                <Route path='/UserFavorites' component={auth(UserFavorites, context)}/> 
                                {/* <Route path='/UserFavorites' component={UserFavorites}/>  */}
                            </div>
                        )}
                    </SearchDataContext.Consumer>
                </SearchData>
            </div> 
        )
    }
}
export default App;
