import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

function App(props: any) {
    console.log("Render")

    return (
        <div className = "App">
            <AppTitle title = {'My SPA!'} />
            <Rating value = { 3 } />
            <Accordion titleValue = {'Menu'} collapsedMenu={false} />
            <Accordion titleValue = {'Users'} collapsedMenu={true} />
        </div>
    );
}


type AppTitlePropsType = {
    title: string
}

function AppTitle(props: AppTitlePropsType){
    console.log("Rendering AppTitle")

    return(
        <div>{props.title}</div>
    )
}


export default App;
