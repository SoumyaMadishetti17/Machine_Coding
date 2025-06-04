import React from 'react'

const Archive = ({archives}) => {
  return (
    <div className="Todo-table-archives">
      <h2>Archived Todos</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Priority</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {archives.map((ele) => (
            <tr key={ele.id}>
              <td>{ele.text}</td>
              <td>{ele.Priority}</td>
              <td>{ele.completed ? 'Completed' : 'Pending'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Archive