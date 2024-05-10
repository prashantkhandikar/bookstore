document.addEventListener('DOMContentLoaded', () => {
    const booksContainer = document.getElementById('books');
    const addBookForm = document.getElementById('addBookForm');
  
    addBookForm.addEventListener('submit', async (e) => {
      e.preventDefault();
  
      const title = document.getElementById('title').value;
      const author = document.getElementById('author').value;
      const price = document.getElementById('price').value;
      const description = document.getElementById('description').value;
  
      const response = await fetch('/api/books', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title, author, price, description })
      });
  
      const data = await response.json();
      console.log(data); // Log the newly added book
  
      // Clear the form
      addBookForm.reset();
    });
  
    // Fetch 
    async function fetchBooks() {
      const response = await fetch('/api/books');  }
  
    fetchBooks();
  });