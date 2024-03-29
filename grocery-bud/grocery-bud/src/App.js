import React, { useState } from 'react'
import List from './List'
import Alert from './Alert'

const App = () => {
  const [name, setName] = useState('')
  const [list, setList] = useState([])
  const [isEditing, setIsEditing] = useState(false)
  const [editId, setEditId] = useState(null)
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name) {
    } else if (name && isEditing) {
    } else {
      const newItem = { id: new Date().getTime().toString, title: name }
      setList([...list, newItem])
      setName('')
    }
  }

  return (
    <section className="section-center">
      <form className="grocery-from" onSubmit={handleSubmit}>
        {alert.show && <Alert />}
        <h3>Grocery time</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="hahah"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit" className="submit-btn">
            {isEditing ? 'edit' : 'submit'}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className="grocery-container">
          <List items={list} />
          <button className="clear-btn">Clear Items</button>
        </div>
      )}
    </section>
  )
}

export default App
