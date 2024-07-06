document.getElementById('actualizarBoton').addEventListener('click', function() {
    var loader = document.getElementById('loader');
    var content = document.getElementById('content');
    var tableBody = document.getElementById('user-table-body');

    /* Se indica la carga (loader)  */
    loader.classList.remove('d-none');

    /* Se envía la petición AJAX */
    fetch('https://reqres.in/api/users?delay=3')
      .then(response => response.json())
      .then(data => {
        /*  */
        tableBody.innerHTML = '';

        /* Se recorrer los usuarios y se añadieron los registros a la tabla */
        data.data.forEach(user => { /* Se obtienen los datos de la API */
          var row = `
            <tr>
              <td>${user.id}</td>
              <td>${user.first_name}</td>
              <td>${user.last_name}</td>
              <td>${user.email}</td>
              <td><img src="${user.avatar}" alt="Avatar de ${user.first_name}" "img"avatar-img"></td>
            </tr>
          `;
          tableBody.innerHTML += row;
        });

        /* se oculta el loader y se visualiza la información  */
        loader.classList.add('d-none');
        content.classList.remove('d-none');
      })
      .catch(error => {
        console.error('Error al obtener usuarios:', error);
             });
  });