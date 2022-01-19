
import classes from './MyModel.module.css'
import { useNavigate } from "react-router";

function MyModel({children, visible, setVisible }) {

  const navigate = useNavigate()
  function closeModal(){
    navigate('/')
    setVisible(false)
  }


  const rootClasses = [classes.myModal]
  if (visible) {
    rootClasses.push(classes.active)

  }

  return (
    <div className={rootClasses.join(' ')} onClick={() => closeModal()}>
      <div className={classes.myModalContent} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}

export default MyModel
