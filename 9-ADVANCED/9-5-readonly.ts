{
    type ToDo = {
        title: string;
        description: string;
    }

    function display(todo: Readonly<ToDo>) {
        // todo.title = 'jaja'; ---> Readonly이기때문에 에러
    }
}