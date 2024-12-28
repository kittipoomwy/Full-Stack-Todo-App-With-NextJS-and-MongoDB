import AddTodo from "@/app/src/component/todos/AddTodo";
import { prisma } from "@/app/src/utils/prisma";
import Todo from "@/app/src/component/todos/Todo";

async function getData() {
  const data = await prisma.todo.findMany({
    select: {
      title: true,
      id: true,
      isCompleted: true,
    },
    orderBy: {
      createdAt: "asc",
    },
  });

  return data;
}

export default async function Home() {

  const data = await getData();
  
  return (
    <div className="w-screen py-20 flex justify-center items-center flex-col">
    
      <span className="text-4xl font-extrabold uppercase mb-6">Todo App</span>
      {/* <h1 className="text-5xl font-extrabold uppercase mb-5 text-center">
        <span className="lowercase">with</span>
        <span>NextJS & Prisma</span>
      </h1> */}

      <div className="flex justify-center flex-col items-center">
        <AddTodo />
        <div className="flex flex-col gap-5 items-center justify-center mt-10 w-screen">
          {data.map((todo, id) => (
            <div className="w-5/6" key={id}><Todo todo={todo} /></div>
          ))}
        </div>
      </div>
      
    </div>
    
  );
}