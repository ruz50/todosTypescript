import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { checked, del } from '../../store/slices/TodosSlice'




const Todos = () => {
    const dispatch = useAppDispatch()
    const {todos} = useAppSelector((state)=>state.todosData)
  return (
    <div><div>
    {todos.map((el) => {
      return (
        <div>
          <div>{el.title}</div>
          <input type="checkbox" checked={el.isDone} onChange={()=>dispatch(checked(el.id))} />
          <button onClick={()=>dispatch(del(el.id))}>X</button>
        </div>
      );
    })}
  </div></div>
  )
}

export default Todos