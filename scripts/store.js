
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

  function findAndToggleChecked(id) {
    const item = this.findById(id);
    item.checked = !item.checked;
  }

  function findAndUpdateName(id, newName) {
    try {
      Item.validateName(newName);
      const selectedItem = this.findById(id);
      selectedItem.name = newName;
    } catch (error) {
      console.log(error.message);
    }
  }
  const findAndDelete = id => {
    const index = items.findIndex(item => item.id === id);
    items.splice(index, 1);
  };

  function toggleCheckedFilter () {
    this.hideCheckedItems = !this.hideCheckedItems;
  }

  function setSearchTerm (val) {
    this.searchTerm = val;
  }


  return {
    items,
    hideCheckedItems,
    searchTerm,
    findById,
    addItem,
    findAndToggleChecked,
    findAndUpdateName,
    findAndDelete,
    toggleCheckedFilter,
    setSearchTerm
  };

}() );
