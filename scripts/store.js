
'use strict';
/* global cuid, Item */

const store = (function () {
  let items = [
    { id: cuid(), name: 'apples', checked: false },
    { id: cuid(), name: 'oranges', checked: false },
    { id: cuid(), name: 'milk', checked: true },
    { id: cuid(), name: 'bread', checked: false }
  ];
  let hideCheckedItems = false;
  let searchTerm = '';

  const findById = id => {
    return items.find(item => item.id === id);
  };

  const addItem = name => {
    try {
      Item.validateName(name);
      items.push(Item.create(name));
    } catch (error) {
      console.log(error.message);
    }
  };

  const findAndToggleChecked = id => {
    const selectedItem = this.findById(id);
    selectedItem.checked = !selectedItem;
  };

  function findAndUpdateName(id, newName) {
    try {
      Item.validateName(newName);
      const selectedItem = this.findById(id);
      selectedItem = newName;
    } catch (error) {
      console.log(error.message);
    }
  }
  const findAndDelete = id => {
    const index = items.findIndex(item => item.id === id);
    items.splice(index, 1);
  };


  return {
    items,
    hideCheckedItems,
    searchTerm,
    findById,
    addItem,
    findAndToggleChecked,
    findAndUpdateName,
    findAndDelete
  };

}() );
