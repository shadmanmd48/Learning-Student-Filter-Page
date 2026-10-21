const students = [
    {
        name:"Riya Sharma",
        marks: 85,
        class: "10th",
        address : "Delhi"
    },
    {
        name:"Rahul verma",
        marks : 77,
        class: "10th",
        address:"Kolkata"
    },
    {
        name: "Ananya Singh",
        marks: 81,
        class: "10th",
        address:"Bengaluru"
    },
    {
        name: "Nipun Singh",
        marks: 82,
        class: "10th",
        address:"Bengaluru"
    },
    {
        name: " Rohan Thakur",
        marks: 59,
        class: "10th",
        address:"Pune"
    },
    {
        name: "Arish Ashraf",
        marks: 91,
        class: "10th",
        address:"Chakradharpur"
    },
    {
        name: "Jaideep Roy",
        marks: 90,
        class: "10th",
        address:"Kolkata"
    },
    {
        name: "Nirmal Bakshi",
        marks: 85,
        class: "10th",
        address:"CKP"
    },
    {
        name: "Rishi Raj",
        marks: 95,
        class: "10th",
        address:"Jamshedpur"
    },
    {
        name: "Md.Shadman",
        marks: 92,
        class: "10th",
        address:"Chakradharpur"
    },
    {
        name: "Md.Hamza",
        marks: 97,
        class: "10th",
        address:"Kolkata"
    },
];
const container = document.getElementById("student-container");
const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");

function displayStudents(studentList){
    container.innerHTML = "";

    if(studentList.length  === 0){
        container.innerHTML = "<p> Student not found </p>";
        return;
    }

    studentList.forEach(function(student){
    container.innerHTML += `<div class="student-card">
                            <h3>${student.name}</h3>
                            <p>Class : ${student.class}</p>
                            <p>Marks : ${student.marks}</p>
                            <p>Address : ${student.address}</p>
                            </div>`;
    });
}
displayStudents(students);

searchBtn.addEventListener("click" , function(){
    const searchValue = searchInput.value.toLowerCase();

     const filteredStudents = students.filter(function(student){
        return student.name.toLocaleLowerCase().includes(searchValue);
    });
    // console.log("Filtered Students:" , filteredStudents)s
    displayStudents(filteredStudents)
});






 