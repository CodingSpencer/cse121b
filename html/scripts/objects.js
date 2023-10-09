const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
  
  sects: [
      {sectionNum: 1, roomNum: "STC 113", enrolled: 23, days: "MWF", instructor: "Bro H",},
      {sectionNum: 2, roomNum: "STC 156", enrolled: 67, days: "Th", instructor: "Sis K",}
  ],
  enrollStudent: function (sectionNum) {
    // find the right section...Array.findIndex will work here
    const sectionIndex = this.sects.findIndex(
      (section) => section.sectionNum == sectionNum
    );
    if (sectionIndex >= 0) {
      this.sects[sectionIndex].enrolled++;
      displaySect(this.sects);
    }
  },
  dropStudent: function (sectionNum) {
    // find the right section...Array.findIndex will work here
    const sectionIndex = this.sects.findIndex(
      (section) => section.sectionNum == sectionNum
    );
    if (sectionIndex >= 0) {
      this.sects[sectionIndex].enrolled--;
      displaySect(this.sects);
    }
  },
};

function displayCourse(course) {
  const courseName = document.querySelector("#courseName");
  const courseCode = document.querySelector("#courseCode");
  courseName.textContent = course.name;
  courseCode.textContent = course.code;
}

function displaySect(sections) {
  const html = sections.map(
    (section) => `<tr>
    <td>${section.sectionNum}</td>
    <td>${section.roomNum}</td>
    <td>${section.enrolled}</td>
    <td>${section.days}</td>
    <td>${section.instructor}</td></tr>`
  );
  document.querySelector("#sections").innerHTML = html.join("");
}

document.querySelector("#enrollStudent").addEventListener("click", function() {
  const sectionNum = document.querySelector("#sectionNumber").value;
  aCourse.enrollStudent(sectionNum);
});

document.querySelector("#dropStudent").addEventListener("click", function() {
  const sectionNum = document.querySelector("#sectionNumber").value;
  aCourse.dropStudent(sectionNum);
});

displayCourse(aCourse);
displaySect(aCourse.sects);
