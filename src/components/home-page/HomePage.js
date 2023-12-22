import React from 'react'
import {Header} from "../shared/Header";
import {Stats} from "./Stats";
import {Services} from "./Services";
import {Footer} from "../shared/Footer";
import {ContactCTA} from "./ContactCTA";
export const HomePage = () => {
    return (
        <div>
            <Header fontColor="white"/>
            <Stats/>
            <Services/>
            <ContactCTA/>
            <Footer/>
        </div>
    )
}
