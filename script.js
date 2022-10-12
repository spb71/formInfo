let form = document.getElementById("formSubmission");

let table = document.getElementById('data');
form.addEventListener("submit", (e) => {
    e.preventDefault();
    submit();
})


const submit = () => {
    let id = document.getElementById("idNum").value;
    let firstName = document.getElementById("fName").value;
    let lastName = document.getElementById("lName").value;
    let phoneNumber = document.getElementById("phoneNo").value;
    let addr = document.getElementById("address").value;



    let newArray = [id, firstName, lastName, phoneNumber, addr];
    newArray.forEach((item) => {
        var li = document.createElement("li");
        var text = document.createTextNode(item);
        li.appendChild(text);
        table.appendChild(li);
    })
    form.reset();
}




function readFile() {
    document.getElementById("inputFile").addEventListener('change', function () {
        var fr = new FileReader();
        fr.onload = function () {
            document.getElementById('output').textContent = fr.result;
        }
        fr.readAsText(this.files[0])
    })
}

readFile()