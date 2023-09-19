const createPostFormHandler = async (event) => {

  try {
    event.preventDefault();
    const title = document.querySelector("#title").value.trim();
    const price = document.querySelector("#price").value.trim();
    const description = document.querySelector("#description").value.trim();
    const location = document.querySelector("#location").value.trim();
    const contact = document.querySelector("#contact").value.trim();
    const image = document.querySelector("#image").value.trim();
    const similarItem = document.querySelector("#similarItem").value.trim();
    const subjectId = document.querySelector("#category").value.trim();

    if (title && description && price && location) {
      const payload = {
        title,
        description,
        price,
        location,
        contact,
        image,
        similarItem,
        subject_id: subjectId,
        date: new Date(),
      };

      const response = await fetch('/api/posts/', {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        debug('------------This response is okay------------', response);
        debug(payload);

        localStorage.setItem('data', JSON.stringify(payload));
        document.location.replace('/');
      } else {
        alert('Could not make a post: Need to fill out all required fields');
      }
    }
  } catch (error) {
    console.error(error);
  }
};

document
  .querySelector('.createpost-form')
  .addEventListener('submit', createPostFormHandler);
