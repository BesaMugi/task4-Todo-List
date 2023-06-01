button.addEventListener("click", (e) => {
  const list = document.getElementById("list");
  const input = document.getElementById("input");
//   const button = document.getElementById("button");
  const input2 = document.createElement("input");
  const p = document.createElement("p");

  input2.type = "checkbox";

  e.preventDefault();

  const li = document.createElement("li");

  p.textContent = input.value;

//   const chekBox = document.createElement("input");

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "X";

  deleteButton.addEventListener("click", (e) => {
    e.target.parentElement.remove();
  });

  input2.addEventListener("click", (e) => {
    if (input2.checked === true) {
      p.style.textDecoration = "line-through";
    }
    if (input2.checked === false) {
      p.style.textDecoration = "none";
    }
  });

  if (input.value.trim() === "") {
    return alert("ты че э");
  }

  li.append(p);
  li.prepend(input2);
  list.append(li);
  li.append(deleteButton);

  input.value = "";

  input2.style.width = "45px";
  deleteButton.id = "buttonOne";
  input2.classList.add("input2");
});
