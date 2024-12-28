import { FaTrash } from 'react-icons/fa';
import { todoProps } from '../../types';
import Form from '../form/Form';
import Input from '../input/Input'
import Button from '../button/Button';
import * as actions from '../../action/index';


function DeleteTodo({todo}: {todo: todoProps}) {
  return (
    <Form action={actions.deleteTodo} >
        <Input name='inputId' value={todo.id} type='hidden' />
        <Button text={<FaTrash />} type='submit' actionButton bgColor='bg-red-500' />
    </Form>
  )
}

export default DeleteTodo