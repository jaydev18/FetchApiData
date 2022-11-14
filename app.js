fetch("https://jsonplaceholder.typicode.com/posts")
  .then((apiData) => {
    return apiData.json();
  })
  .then((objectData) => {
    // console.log(objectData);
    let tableData = "";
    objectData.map((values) => {
      tableData += `
        <tr>
            <td>${values.userId}</td>
            <td>${values.id}</td>
            <td>${values.title}</td>
            <td>${values.body}</td>
          </tr>
        `;
    });
    document.querySelector("#tableBody").innerHTML = tableData;
  });
