import React from "react";
import "./icons.css"
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


function Icons(props) {
  switch(props.value) {
    case 'home':
      return <Icon icon={homeIcon}className='icon'/>;
    case 'webinars':
      return <Icon icon={movieIcon} className='icon'/>;
    case 'articles':
      return <Icon icon={newspaperIcon} className='icon'/>;
    case 'products':
      return <Icon icon={pillsIcon} className='icon'/>;
    case 'likes':
      return <Icon icon={thumbsUp} className='icon'/>;
    case 'comments':
      return <Icon icon={commentsIcon} className='icon'/>;
    case 'filter':
      return <Icon icon={filterIcon} className= 'icon'/>;
    case 'doctor':
      return <Icon icon={doctorIcon} className= 'icon'/>;
    case 'delete':
      return <Icon icon={trashIcon} className= 'icon'/>;
    default:
      return "sin icono"
  }
}

export default Icons;