import * as actions from '@/app/src/action/index';
import Form from '@/app/src/component/form/Form';
import Input from '@/app/src/component/input/Input';
import Button from '@/app/src/component/button/Button';
import { todoProps } from '@/app/src/types';
import { FaCheck } from 'react-icons/fa';



function ChangeTodo({ todo }: { todo: todoProps }) {
  return (
    <Form action={actions.changeStatus}>
        <Input name="inputId" value={todo.id} type="hidden"/>
        <Button text={<FaCheck />} type='submit' actionButton bgColor={todo.isCompleted ? 'bg-green-400' : 'bg-blue-500'}></Button>
    </Form>
  )
}

export default ChangeTodo