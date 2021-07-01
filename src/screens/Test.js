import React from "react";
import AppImage from '../components/commons/AppImage'
import MenuHamburger from "../components/Header/MenuHamburger";

export default function Test(){
return(
    <React.Fragment>
        <MenuHamburger />
    <AppImage pathImage="https://i.picsum.photos/id/670/200/300.jpg?hmac=Ib58hZuwIQfcFZjEvKKi0p-j4GN1BGIkE7wLsa95Xk4" altImage="Holi" classImage ="avatar-profile" />
    </React.Fragment>
    )
}