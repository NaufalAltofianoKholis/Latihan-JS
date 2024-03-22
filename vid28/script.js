document.querySelector("#klik").addEventListener("click",tampil);

function tampil(){
    let url ="tblmenu.json";
    fetch(url)
    .then(response => response.json())
    .then(function (data){
        let output="<h1>DATA MENU</h1> <table> <th>Menu</th> <th>Harga</th> <th>Warna</th>"
        data.forEach(element => {
            output+=`<tr>
            <td>${element.menu}</td>
            <td>${element.harga}</td>
            <td>${element.warna[0]}</td>
            </tr>`
        });
        output +="</tr></table>"
        document.querySelector("#isi").innerHTML=output;
    }
    )
   
}