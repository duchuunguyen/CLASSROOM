import * as React from 'react';
import {Link} from 'react-router-dom';
import {Avatar} from '@material-ui/core';
import "./JoinedClasses.css"
const JoinedClasses = (props) => {
  return (
    <div className="joined__list">
      <div className="joined__wrapper">
        <div className="joined__container">
          <div className="joined__imgWrapper"/>
          <div className="joined__image"/>
          <Link className="joined__content" to={`/${props.id}`}>
            <div className="joined__title"><h1>{props.className}</h1>
            </div>
            <p className="joined__owner" style={{color: "white"}}>{props.teacherName}</p>
          </Link>
        </div>
        <Avatar className="joined__avatar"
          src=""/>
      </div>
    </div>
  );
}
export default JoinedClasses;