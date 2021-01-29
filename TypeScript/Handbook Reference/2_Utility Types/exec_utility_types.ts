

namespace demo_02_01 {

	// Partial<Type>
	interface Todo {
	  title: string;
	  description: string;
	}

	function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
	  return { ...todo, ...fieldsToUpdate };
	}

	const todo1 = {
	  title: "organize desk",
	  description: "clear clutter",
	};

	const todo2 = updateTodo(todo1, {
	  description: "throw out trash",
	});

	console.log(todo1);
	console.log(todo2);



	// Readonly<Type>




	// Record<Keys,Type>





	// Pick<Type, Keys>




	// Omit<Type, Keys>




	// Exclude<Type, ExcludedUnion>




	// Extract<Type, Union>





	// NonNullable<Type>





	// Parameters<Type>






	// ConstructorParameters<Type>







	// ReturnType<Type>






	// InstanceType<Type>





	// Required<Type>






	// ThisParameterType<Type>





	// OmitThisParameter<Type>





	// ThisType<Type>



}


