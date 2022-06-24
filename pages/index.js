import Head from "next/head";
// import { useEffect, useState } from "react";

export async function getServerSideProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();

  return {
    props: {
      todos: data,
    },
  };
}

export default function Home({ todos }) {
  // const [todos, setTodos] = useState([]);

  // useEffect(() => {
  //   const fetchTodos = async () => {
  //     const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  //     const data = await res.json();
  //     setTodos(data);
  //   };

  //   fetchTodos();
  // }, []);

  return (
    <div>
      <Head>
        <title>SSR for NEXT.JS </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {todos?.length === 0 ? (
        <p>Loading...</p>
      ) : (
        todos?.map((todo) => (
          <div key={todo.id}>
            <p>
              {todo.id} : {todo.title}
            </p>
          </div>
        ))
      )}
    </div>
  );
}
