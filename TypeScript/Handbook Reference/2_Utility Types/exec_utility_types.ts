

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
	type T0 = Exclude<"a" | "b" | "c", "a">;
	
	type T1 = Exclude<"a" | "b" | "c", "a" | "b">;
	
	type T2 = Exclude<string | number | (() => void), Function>;



	// Extract<Type, Union>
	type T3 = Extract<"a" | "b" | "c", "a" | "f">;
	
	type T4 = Extract<string | number | (() => void), Function>;



	// NonNullable<Type>
	type T5 = NonNullable<string | number | undefined>;
	
	type T6 = NonNullable<string[] | null | undefined>;



	// Parameters<Type>
	declare function f1(arg: { a: number; b: string }): void;

	type T7 = Parameters<() => string>;
	
	type T8 = Parameters<(s: string) => void>;
	
	type T9 = Parameters<<T>(arg: T) => T>;
	
	type T10 = Parameters<typeof f1>;

	type T11 = Parameters<any>;
	
	type T12 = Parameters<never>;
	
	// type T13 = Parameters<string>;
	
	// type T14 = Parameters<Function>;



	// ConstructorParameters<Type>
	type T13 = ConstructorParameters<ErrorConstructor>;
	
	type T14 = ConstructorParameters<FunctionConstructor>;
	
	type T15 = ConstructorParameters<RegExpConstructor>;
	
	type T16 = ConstructorParameters<any>;

	// type T4 = ConstructorParameters<Function>;



	// ReturnType<Type>
	declare function f1(): { a: number; b: string };

	type T17 = ReturnType<() => string>;
	
	type T18 = ReturnType<(s: string) => void>;
	
	type T19 = ReturnType<<T>() => T>;
	
	type T20 = ReturnType<<T extends U, U extends number[]>() => T>;
	
	type T21 = ReturnType<typeof f1>;

	type T22 = ReturnType<any>;
	
	type T23 = ReturnType<never>;
	
	// type T24 = ReturnType<string>;
	
	// type T25 = ReturnType<Function>;



	// InstanceType<Type>
	




	// Required<Type>






	// ThisParameterType<Type>





	// OmitThisParameter<Type>





	// ThisType<Type>



}


