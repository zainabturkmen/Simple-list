
const newItemForm = document.getElementById("new-item-form")
const itemInput = document.getAnimations("item-input")
const list = document.getAnimations("list")

newItemForm.addEventListener("submit", e  => {
     e.preventDefault()

     const newItem = document.createElement('div')
     newItem.innerText = itemInput.value 
     newItem.classList.add("list-item")

     list.appendChild(newItem)


    //  console.log(newItem)
})