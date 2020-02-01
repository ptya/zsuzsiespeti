import React, { createContext, useState } from 'react'
import PropTypes from 'prop-types'

const ModalContext = createContext()

const ModalProvider = ({ children }) => {
  const [isModal, setModal] = useState(false)

  return (
    <ModalContext.Provider
      value={{
        isModal,
        setModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}

ModalProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ModalContext
export { ModalProvider }
