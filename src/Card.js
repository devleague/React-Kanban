import React from 'react'

const Card = ({ _id, columnName, title, priority, createdBy, assignedTo, onLeftClick, onRightClick, drag }) => (
  <div id={_id} className={priority} draggable="true" onDragEnd={drag} >
    <div className="card_title"><div className="runin">TASK:</div><div className="text">{title}</div></div>
    <div className="created_by"><div className="runin">CREATED BY:</div><div className="text">{createdBy}</div></div>
    <div className="assigned_to"><div className="runin">ASSIGNED TO:</div><div className="text">{assignedTo}</div></div>
  </div>
)

export default Card

  //