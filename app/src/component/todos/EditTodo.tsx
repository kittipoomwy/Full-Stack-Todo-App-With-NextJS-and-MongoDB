'use client'

import { useState } from "react"
import { MdEdit } from "react-icons/md";
import { todoProps } from "@/app/src/types/index";
import Button from "../button/Button";
import Input from "../input/Input";
import Form from "../form/Form";
import * as actions from "@/app/src/action/index";


function EditTodo({todo}: {todo: todoProps}) {
    const [editTodo, setEditTodoState] = useState(false);

    const handleEdit = () => {
        if (todo.isCompleted) return;
        setEditTodoState(!editTodo);
    };

    const handleSubmit = () => {
        setEditTodoState(false);
    }

    return (
        <div className="flex gap-5 items-center">
            <Button onClick={handleEdit} text={<MdEdit />} actionButton />
            {editTodo && (
                <Form action={actions.editTodo} onSubmit={handleSubmit}>
                    <Input name='inputId' value={todo.id} type='hidden' />
                    <div className="flex justify-center">
                        <Input name='newTitle' placeholder="Edit Todo..." type="text" />
                        <Button type='submit' text="Save" actionButton />
                    </div>
                </Form>
            )}
        </div>
    );
}

export default EditTodo