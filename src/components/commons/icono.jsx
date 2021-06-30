import React from "react";
import "./icono.css"
import { Icon } from '@iconify/react';
import homeIcon from '@iconify/icons-vaadin/home';
import movieIcon from '@iconify/icons-vaadin/movie';
import newspaperIcon from '@iconify/icons-vaadin/newspaper';
import pillsIcon from '@iconify/icons-vaadin/pills';
import thumbsUp from '@iconify/icons-vaadin/thumbs-up';
import commentsIcon from '@iconify/icons-vaadin/comments';
import filterIcon from '@iconify/icons-vaadin/filter';
import doctorIcon from '@iconify/icons-vaadin/doctor';
import trashIcon from '@iconify/icons-vaadin/trash';

class Icono extends React.Component {
  render() {
    return (
      <Icon icon={homeIcon} className='icon' />
    );
  } 
}

export default Icono;