import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { changeText } from '../../store/slices/TodosSlice'
import { add } from '../../store/slices/TodosSlice'

const Input = ( ) => {
    
    const dispatch = useAppDispatch()
    const text = useAppSelector((state)=>state.todosData.text)
  return (
    <div>
        <input value={text} onChange={(e)=>dispatch(changeText(e.target.value)) } />
        <button onClick={()=>dispatch(add())}>+</button>
    </div>
  )
}

export default Input