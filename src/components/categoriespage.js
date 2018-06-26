import React, {Component} from 'react';
import '../assets/css/categoriespage.css';
import popcornpretzel from '../assets/images/categoriesicons/popcornpretzel.png';
import meat from '../assets/images/categoriesicons/meat.png';
import chipscrackers from '../assets/images/categoriesicons/chipscrackers.png';
import bar from '../assets/images/categoriesicons/bar.png';
import nutsdriedfruit from '../assets/images/categoriesicons/nutsdriedfruit.png';
import candychocolate from '../assets/images/categoriesicons/candychocolate.png';
import { Link } from 'react-router-dom';


class Categories extends Component {
    constructor(props) {
        super(props);
    }
    render () {
        return(
            <div className='categoryPageContainer'>
                <h2 className='categoryTitle'>Choose a snack category</h2>
                <div className='categoryContainer'>
                    <div className='categoryItem'>
                        <img className='categoryImage' src={popcornpretzel}/>
                        <p className='categoryLabel'>Popcorn &amp; Pretzels</p>
                    </div>
                    <div className='categoryItem'>
                        <img className='categoryImage' src={meat}/>
                        <p className='categoryLabel'>Jerky &amp; Rinds</p>
                    </div>
                    <div className='categoryItem'>
                        <a href='results_quiz.html'>
                            <img className='categoryImage' src={chipscrackers}/>
                            <p className='categoryLabel'>Chips &amp; Crackers</p>
                        </a>
                    </div>
                    <div className='categoryItem'>
                        <img className='categoryImage' src={bar}/>
                        <p className='categoryLabel'>Snack Bars</p>
                    </div>
                    <div className='categoryItem'>
                        <img className='categoryImage' src={nutsdriedfruit}/>
                        <p className='categoryLabel'>Nuts &amp; Dried Fruit</p>
                    </div>
                    <div className='categoryItem'>
                        <img className='categoryImage' src={candychocolate}/>
                        <p className='categoryLabel'>Candy &amp; Chocolate</p>
                    </div>
                </div>
                <div className='footerButtons'>
                    <div type='button' className='btnStyle btnNormal'> <Link to='/AllergenPage'> Back </Link> </div>
                    <div type='button' className='btnStyle btnNormal'> <Link to='/'> Home </Link> </div>
                </div>
            </div>
        )
    }
}

export default Categories;