import Form from '@/app/src/component/form/Form';
import Input from '@/app/src/component/input/Input';
import Button from '@/app/src/component/button/Button';
import * as actions from '@/app/src/action/index';


function AddTodo() {
  return (
    <div className=" w-5/6 flex justify-center items-center flex-row">
        <Form action={actions.createTodo} className="flex gap-2 w-5/6 justify-center items-center"> 
            <div className="w-5/6 flex gap-2 justify-center">
                <Input name="input" type="text" placeholder='Add Todo Here ...' />
                <Button type="submit" text="Add" bgColor='bg-green-600' />
            </div>
        </Form>
    </div>
  )
}

export default AddTodo