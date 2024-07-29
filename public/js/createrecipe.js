const createrecipeFormHandler = async (event) => {
    event.preventDefault();
    const title = document.querySelector('#title-recipe').value.trim();
    const description = document.querySelector('#description-recipe').value.trim();
    const instructions = document.querySelector('#instructions-recipe').value.trim();
  
    if (title && description && instructions) {
  
      const response = await fetch('/api/users/createrecipe', {
        method: 'POST',
        body: JSON.stringify({ title, description, instructions }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to create recipe');
      }
    }
  };

  document
  .querySelector('.createrecipe-form')
  .addEventListener('submit', createrecipeFormHandler);