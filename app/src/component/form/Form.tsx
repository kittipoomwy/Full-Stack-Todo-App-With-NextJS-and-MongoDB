"use client"

import {useRef} from 'react'
import { formProps } from '@/app/src/types'

const Form = ({children, action, className, onSubmit}: formProps) => {

    const ref = useRef<HTMLFormElement>(null);

    return (
        <form action={async (formData) => {
            await action(formData);
            ref.current?.reset();
        } 
        } onSubmit={onSubmit} ref={ref} className={className}>
        {children}
        </form>
    )
}

export default Form