import React from 'react'
import LogList from './LogList'

const Log = ({pokemon}) => {
  return (
    <div className="logg">
      <div>
        <div className="titleLog">
          <p className="">Battle log</p>
        </div>
        <div className="logContent">
          <div>
            <div className="logContentTitle">
              <p>Despliega el historial de acciones realizadas.</p>
            </div>
            <LogList pokemon={pokemon} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Log