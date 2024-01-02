
const newItemForm = document.getElementById("new-item-form")
const itemInput = document.getElementById("item-input")
const list = document.getElementById("list")

newItemForm.addEventListener("submit", e  => {
     e.preventDefault()

     const newItem = document.createElement('div')
     newItem.classList.add("list-item")
     newItem.innerText = itemInput.value 

     list.appendChild(newItem)

     itemInput.value = ""

     newItem.addEventListener("click", () => {
        list.removed(newItem)
     })
})