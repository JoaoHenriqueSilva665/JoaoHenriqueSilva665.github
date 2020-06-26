const ItemsToCollect = document.querySelectorAll(".items-grid li");

for (const item of ItemsToCollect) {
  item.addEventListener("click", handleSelectedItem);
}  

const collesctedItems = document.querySelector("input[name=items]")
let selectedItems = []

function handleSelectedItem(event) {
  const ItemLi = event.target 
  ItemLi.classList.toggle("selected");
  const ItemId = ItemLi.dataset.id

  
  const AlredySeleceted = selectedItems.findIndex((item) => {
    const ItemFound = item == ItemId
    return ItemFound
  })

  if (AlredySeleceted != -1) {
      const filteredItem = selectedItems.filter((item)=> {
      const itemIsDifferent = item != ItemId
      return itemIsDifferent
    })
    selectedItems = filteredItem
  }else{
    selectedItems.push(ItemId)
  }
  collesctedItems.value = selectedItems
}

