import React from "react";
import Alert from "sweetalert2";

export default function Todo() {
  const [todos, setTodos] = React.useState([
    "main admin inbox",
    "view player",
    "certi gen"
  ]);

  const handleAdd = () => {
    Alert.fire({
      title: "Add todo",
      input: "text",

      inputPlaceholder: "Enter",

      showCancelButton: true,
      confirmButtonColor: "#00a65a",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Add Event",
      cancelButtonText: "Close"
    }).then(result => {
      if (result.value) {
        setTodos(todos.concat(result.value));
        // Alert.fire("Success!", "Your todo has been added.", "success");
      }
    });
  };

  const Listtodos = todos.map((todo, i) => {
    let name = `todo${i}`;
    let id = `todoCheck${i}`;
    return (
      <li>
        <span class="handle">
          <i class="fas fa-ellipsis-v"></i>
          <i class="fas fa-ellipsis-v"></i>
        </span>
        <div class="icheck-primary d-inline ml-2">
          <input type="checkbox" value="" name={name} id={id} />
          <label for={id}></label>
        </div>
        <span class="text">{todo}</span>

        <div class="tools">
          <i class="fas fa-trash-o"></i>
        </div>
      </li>
    );
  });
  return (
    <>
      <div class="card-body">
        <ul class="todo-list" data-widget="todo-list">
          {/* <li>
            <span class="handle">
              <i class="fas fa-ellipsis-v"></i>
              <i class="fas fa-ellipsis-v"></i>
            </span>
            <div class="icheck-primary d-inline ml-2">
              <input type="checkbox" value="" name="todo1" id="todoCheck1" />
              <label for="todoCheck1"></label>
            </div>
            <span class="text">Design a nice theme</span>
            <small class="badge badge-danger">
              <i class="far fa-clock"></i> 2 mins
            </small>
            <div class="tools">
              <i class="fas fa-edit"></i>
              <i class="fas fa-trash-o"></i>
            </div>
          </li>
          <li>
            <span class="handle">
              <i class="fas fa-ellipsis-v"></i>
              <i class="fas fa-ellipsis-v"></i>
            </span>
            <div class="icheck-primary d-inline ml-2">
              <input type="checkbox" value="" name="todo2" id="todoCheck2" />
              <label for="todoCheck2"></label>
            </div>
            <span class="text">Make the theme responsive</span>
            <small class="badge badge-info">
              <i class="far fa-clock"></i> 4 hours
            </small>
            <div class="tools">
              <i class="fas fa-edit"></i>
              <i class="fas fa-trash-o"></i>
            </div>
          </li>
          <li>
            <span class="handle">
              <i class="fas fa-ellipsis-v"></i>
              <i class="fas fa-ellipsis-v"></i>
            </span>
            <div class="icheck-primary d-inline ml-2">
              <input type="checkbox" value="" name="todo3" id="todoCheck3" />
              <label for="todoCheck3"></label>
            </div>
            <span class="text">Let theme shine like a star</span>
            <small class="badge badge-warning">
              <i class="far fa-clock"></i> 1 day
            </small>
            <div class="tools">
              <i class="fas fa-edit"></i>
              <i class="fas fa-trash-o"></i>
            </div>
          </li>
          <li>
            <span class="handle">
              <i class="fas fa-ellipsis-v"></i>
              <i class="fas fa-ellipsis-v"></i>
            </span>
            <div class="icheck-primary d-inline ml-2">
              <input type="checkbox" value="" name="todo4" id="todoCheck4" />
              <label for="todoCheck4"></label>
            </div>
            <span class="text">Let theme shine like a star</span>
            <small class="badge badge-success">
              <i class="far fa-clock"></i> 3 days
            </small>
            <div class="tools">
              <i class="fas fa-edit"></i>
              <i class="fas fa-trash-o"></i>
            </div>
          </li>
          <li>
            <span class="handle">
              <i class="fas fa-ellipsis-v"></i>
              <i class="fas fa-ellipsis-v"></i>
            </span>
            <div class="icheck-primary d-inline ml-2">
              <input type="checkbox" value="" name="todo5" id="todoCheck5" />
              <label for="todoCheck5"></label>
            </div>
            <span class="text">Check your messages and notifications</span>
            <small class="badge badge-primary">
              <i class="far fa-clock"></i> 1 week
            </small>
            <div class="tools">
              <i class="fas fa-edit"></i>
              <i class="fas fa-trash-o"></i>
            </div>
          </li>
          <li> 
            <span class="handle">
              <i class="fas fa-ellipsis-v"></i>
              <i class="fas fa-ellipsis-v"></i>
            </span>
            <div class="icheck-primary d-inline ml-2">
              <input type="checkbox" value="" name="todo6" id="todoCheck6" />
              <label for="todoCheck6"></label>
            </div>
            <span class="text">Let theme shine like a star</span>
            <small class="badge badge-secondary">
              <i class="far fa-clock"></i> 1 month
            </small>
            <div class="tools">
              <i class="fas fa-edit"></i>
              <i class="fas fa-trash-o"></i>
            </div>
          </li>
            */}
          {Listtodos}
        </ul>
      </div>
      <div class="card-footer clearfix">
        <button
          type="button"
          class="btn btn-info float-right"
          onClick={handleAdd}
        >
          <i class="fas fa-plus"></i> Add item
        </button>
      </div>
    </>
  );
}
