import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Jumbotron from './components/jumbotron';
import Cards from './components/cards';
import Footer from './components/Footer';


const App = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <Jumbotron title="A Warm Welcome!" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat numquam repellat." btn="Learn more" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <Cards img="https://picsum.photos/id/237/200/300" title="Card title" text="Some quick example text to build on the card title and make up the bulk of the card's content." />
                    </div>

                    <div className="col-md-3">
                        <Cards img="https://picsum.photos/id/237/200/300" title="Card title" text="Some quick example text to build on the card title and make up the bulk of the card's content." />
                    </div>

                    <div className="col-md-3">
                        <Cards img="https://picsum.photos/id/237/200/300" title="Card title" text="Some quick example text to build on the card title and make up the bulk of the card's content." />
                    </div>

                    <div className="col-md-3">
                        <Cards img="https://picsum.photos/id/237/200/300" title="Card title" text="Some quick example text to build on the card title and make up the bulk of the card's content." />
                    </div>
                </div>
            </div>
            <Footer textfooter="Copyright © My Website 2019" />
        </>
    );
}


export default App;