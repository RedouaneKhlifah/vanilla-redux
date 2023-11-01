import "./style.css";

const h2Value = document.getElementById("value");

const increment_Btn = document.getElementById("increment");
const decrement_Btn = document.getElementById("decrement");
const reset_Btn = document.getElementById("reset");

const initialState = {
  type: 0,
};

const increment = { type: "increment" };
const decrement = { type: "decrement" };
const reset = { type: "reset" };

function counter(state = initialState.type, action) {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset": {
      return 0;
    }
    default:
      return state;
  }
}

const Store = Redux.createStore(counter);

function renedr() {
  h2Value.innerHTML = Store.getState().toString();
}

renedr();

increment_Btn.addEventListener("click", () => {
  Store.dispatch(increment);
});

decrement_Btn.addEventListener("click", () => {
  Store.dispatch(decrement);
});

reset_Btn.addEventListener("click", () => {
  Store.dispatch(reset);
});

Store.subscribe(() => {
  renedr();
});
