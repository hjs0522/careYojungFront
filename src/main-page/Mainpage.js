import styled from "styled-components";
import { Button, Divider, Grid, Image } from 'semantic-ui-react'
import Footer from "../Footer";
import Recentlist from "./Recentlist";
import Popularlist from "./Popularlist";
import Themelist from "./Themelist";



function Mainpage(){
    return (
        <div>
          <Recentlist />
          <Popularlist />
          <Themelist />
          <Footer />
        </div>
    )
}

export default Mainpage;