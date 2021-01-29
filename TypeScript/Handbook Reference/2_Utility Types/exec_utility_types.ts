

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
	interface Todo2 {
	  title: string;
	}

	const todo3: Readonly<Todo2> = {
	  title: "Delete inactive users",
	};

	// todo3.title = "Hello";



	// Record<Keys,Type>
	interface PageInfo {
	  title: string;
	}

	type Page = "home" | "about" | "contact";

	const nav: Record<Page, PageInfo> = {
	  about: { title: "about" },
	  contact: { title: "contact" },
	  home: { title: "home" },
	};

	console.log(nav.about);



	// Pick<Type, Keys>
	interface Todo3 {
	  title: string;
	  description: string;
	  completed: boolean;
	}

	type TodoPreview = Pick<Todo3, "title" | "completed">;

	const todo4: TodoPreview = {
	  title: "Clean room",
	  completed: false,
	};

	console.log(todo4);



	// Omit<Type, Keys>
	interface Todo4 {
	  title: string;
	  description: string;
	  completed: boolean;
	}

	type TodoPreview2 = Omit<Todo4, "description">;

	const todo5: TodoPreview2 = {
	  title: "Clean room2",
	  completed: false,
	};

	console.log(todo5);



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


