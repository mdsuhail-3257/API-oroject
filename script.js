document.addEventListener('DOMContentLoaded', () => {
    const itemsList = document.getElementById('items-list');
    const itemForm = document.getElementById('item-form');
    const itemName = document.getElementById('item-name');
  
    // Function to fetch items from the API
    const fetchItems = async () => {
      const response = await fetch('http://localhost:3000/api/items');
      const items = await response.json();
      itemsList.innerHTML = '';
      items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item.name;
        itemsList.appendChild(li);
      });
    };
  
    // Function to add a new item via the API
    const addItem = async (event) => {
      event.preventDefault();
      const name = itemName.value;
      const response = await fetch('http://localhost:3000/api/items', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name }),
      });
      const newItem = await response.json();
      const li = document.createElement('li');
      li.textContent = newItem.name;
      itemsList.appendChild(li);
      itemName.value = '';
    };
  
    // Fetch items on initial load
    fetchItems();
  
    // Add event listener to the form
    itemForm.addEventListener('submit', addItem);
  });
  