function loadTable() {
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", "http://localhost:3000/api/user");
  xhttp.send();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var trHTML = ''; 
      const objects = JSON.parse(this.responseText);
      for (let object of objects) {
        trHTML += '<tr>';
        trHTML += '<td>'+object['_id']+'</td>';
        trHTML += '<td>'+object['firstName']+'</td>';
        trHTML += '<td>'+object['lastName']+'</td>';
        trHTML += '<td>'+object['mobile_no']+'</td>';
        trHTML += '<td>'+object['email']+'</td>';
        trHTML += '<td><button type="button" class="btn btn-outline-secondary" style="margin-right:10px" onclick="showUserEditBox('+object['_id']+')">Edit</button>';
        trHTML += '<button type="button" class="btn btn-outline-danger" onclick="userDelete('+object['_id']+')">Del</button></td>';
        trHTML += "</tr>";
      }
      document.getElementById("mytable").innerHTML = trHTML;
    }
  };
}

loadTable();

function showUserCreateBox() {
  Swal.fire({
    title: 'Create user',
    html:
      '<input id="id" type="hidden">' +
      '<input id="fname" class="swal2-input" placeholder="First Name">' +
      '<input id="lname" class="swal2-input" placeholder="Last Name">' +
      '<input id="mobile_no" class="swal2-input" placeholder="mobile no">' +
      '<input id="email" type="email" class="swal2-input" placeholder="Email">',
    focusConfirm: false,
    preConfirm: () => {
      userCreate();
    }
  })
  
}

function userCreate() {
  const firstName = document.getElementById("fname").value;
  const lastName = document.getElementById("lname").value;
  const mobile_no = document.getElementById("mobile_no").value;
  const email = document.getElementById("email").value;
    
  const xhttp = new XMLHttpRequest();
  xhttp.open("POST", "http://localhost:3000/api/user");
  xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhttp.send(JSON.stringify({
    "firstName": firstName, "lastName": lastName, "mobile_no": mobile_no, "email": email
  }));
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      const objects = JSON.parse(this.responseText);
      Swal.fire("User added successfully");
      loadTable();
      window.open('index.html', '_blank');

    }
  };
}

function userDelete(id) {
  const xhttp = new XMLHttpRequest();
  xhttp.open("DELETE", "http://localhost:3000/api/user/"+id);
  xhttp.send();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4) {
      Swal.fire('User Deleted Successfully');
      loadTable();
    } 
  };
}

function showUserEditBox(id) {
  console.log(id);
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", "http://localhost:3000/api/user/"+id);
  xhttp.send();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      const objects = JSON.parse(this.responseText);
      const user = objects[0];
      Swal.fire({
        title: 'Edit User',
        html:
          '<input id="id" type="hidden" value='+user['_id']+'>' +
          '<input id="fname" class="swal2-input" placeholder="First" value="'+user['firstName']+'">' +
          '<input id="lname" class="swal2-input" placeholder="Last" value="'+user['lastName']+'">' +
          '<input id="mobile_no" class="swal2-input" placeholder="mobile no" value="'+user['mobile_no']+'">' +
          '<input id="email" class="swal2-input" placeholder="Email" value="'+user['email']+'">',
        focusConfirm: false,
        preConfirm: () => {
          userEdit();
        }
      })
    }
  };
}

function userEdit() {
  const id = document.getElementById("id").value;
  const firstName = document.getElementById("fname").value;
  const lastName = document.getElementById("lname").value;
  const mobile_no = document.getElementById("mobile_no").value;
  const email = document.getElementById("email").value;
    
  const xhttp = new XMLHttpRequest();
  xhttp.open("PUT", "http://localhost:3000/api/user/"+id);
  xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhttp.send(JSON.stringify({ 
    "id": id, "firstName": firstName, "lastName": lastName, "mobile_no": mobile_no, "email": email
  }));
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      const objects = JSON.parse(this.responseText);
      Swal.fire("User edited Successfully");
      loadTable();
    }
  };
}
