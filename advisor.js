const programData = {
  "program": "Associate of Arts at Daytona State College",
  "courses": [
    {
        //year 1
        "id": "SLS1122",
        "name": "Managing Your Success",
        "credits": 3,
        "prerequisites": [],
        "info": "This course is the starting point."
      },
      {
        "id": "MAT1033",
        "name": "Intermediate Algebra",
        "credits": 3,
        "prerequisites": [],
        "info": ""
      },
      {
        "id": "ENC1101",
        "name": "Introduction to Composition",
        "credits": 3,
        "prerequisites": ["SLS1122"],
        "info": ""
      },
      {
        "id": "MAC1101",
        "name": "College Algebra",
        "credits": 3,
        "prerequisites": ["MAT1033","SLS1122"],
        "info": "Students must select either MAC1101 or MGF2130, but not both."
      },
      {
        "id": "MGF2130",
        "name": "Mathematical Thinking",
        "credits": 3,
        "prerequisites": ["SLS1122","MAT1033"],
        "info": "Students must select either MAC1101 or MGF2130, but not both."
      },
      {
        "id": "ARH1000",
        "name": "Art Appreciation",
        "credits": 3,
        "prerequisites": ["SLS1122"],
        "info": ""
      },
      {
        "id": "HUM2020",
        "name": "Introduction to Humanities*",
        "credits": 3,
        "prerequisites": ["SLS1122"],
        "info": ""
      },
      {
        "id": "END1102",
        "name": "Writing with Research",
        "credits": 3,
        "prerequisites": ["SLS1122","ENC1101"],
        "info": ""
      },
      {
        "id": "AST1002",
        "name": "Astronomy",
        "credits": 3,
        "prerequisites": ["SLS1122","MAT1033"],
        "info": "Students must select either AST1002 or BSC1005, but not both."
      },
    {
        "id": "BSC1005",
        "name": "Survey for Biology",
        "credits": 3,
        "prerequisites": ["SLS1122","ENC1101"],
        "info": "Students must select either AST1002 or BSC1005, but not both."
      },
      {
        "id": "STA2023",
        "name": "Elementary Statistics",
        "credits": 3,
        "prerequisites": ["SLS1122","MAC1101"],
        "info": ""
      },
      {
        "id": "INR2002",
        "name": "International Relations*",
        "credits": 3,
        "prerequisites": ["SLS1122"],
        "info": ""
      },
      {
        "id": "SYN2000",
        "name": "Introduction to Sociology",
        "credits": 3,
        "prerequisites": ["SLS1122"],
        "info": ""
      },

      {
        "id": "HUN1201",
        "name": "Human Nutrition",
        "credits": 3,
        "prerequisites": ["SLS1122","ENC1101","ARH1000","END1102","STA2023","INR2002","SYN2000",["MAC1101","MGF2130"],["AST1002","BSC1005"]],
        "info": ""
      },
      {
        "id": "SPC2608",
        "name": "Oral Communications/Research/Presentation Skills",
        "credits": 3,
        "prerequisites": ["SLS1122","ENC1101","ARH1000","END1102","STA2023","INR2002","SYN2000",["MAC1101","MGF2130"],["AST1002","BSC1005"]],
        "info": ""
      },
      {
        "id": "AMH2010",
        "name": "United States History to 1877",
        "credits": 3,
        "prerequisites": ["SLS1122","ENC1101","ARH1000","END1102","STA2023","INR2002","SYN2000",["MAC1101","MGF2130"],["AST1002","BSC1005"]],
        "info": "Students must select either AMH2010 or POS2041, but not both."
      },
      {
        "id": "POS2041",
        "name": "U.S. Federal Government",
        "credits": 3,
        "prerequisites": ["SLS1122","ENC1101","ARH1000","END1102","STA2023","INR2002","SYN2000",["MAC1101","MGF2130"],["AST1002","BSC1005"]],
        "info": "Students must select either AMH2010 or POS2041, but not both."
      },
      {
        "id": "GEO2000",
        "name": "World Geography *",
        "credits": 3,
        "prerequisites": ["SLS1122","ENC1101","ARH1000","END1102","STA2023","INR2002","SYN2000",["MAC1101","MGF2130"],["AST1002","BSC1005"]],
        "info": ""
      },
      {
        "id": "ASL2140",
        "name": "American Sign Language 1",
        "credits": 3,
        "prerequisites": ["SLS1122"],
        "info": ""
      },
      {
        "id": "GEO2420",
        "name": "Cultural Geography",
        "credits": 3,
        "prerequisites": ["SLS1122","ENC1101","ARH1000","END1102","STA2023","INR2002","SYN2000",["MAC1101","MGF2130"],["AST1002","BSC1005"]],
        "info": ""
      },
      {
        "id": "MUL1010",
        "name": "Music Appreciation",
        "credits": 3,
        "prerequisites": ["SLS1122","ENC1101","ARH1000","END1102","STA2023","INR2002","SYN2000",["MAC1101","MGF2130"],["AST1002","BSC1005"]],
      "info": "Students must select either MUL1010 or REL2300, but not both."
      },
    {
        "id": "REL2300",
        "name": "World Religion",
        "credits": 3,
        "prerequisites": ["SLS1122","ENC1101","ARH1000","END1102","STA2023","INR2002","SYN2000",["MAC1101","MGF2130"],["AST1002","BSC1005"]],
      "info": "Students must select either MUL1010 or REL2300, but not both."
      },
      {
        "id": "ASL2150",
        "name": "American Sign Language 2",
        "credits": 3,
        "prerequisites": ["SLS1122","ENC1101","ARH1000","END1102","STA2023","INR2002","SYN2000","ASL2140",["MAC1101","MGF2130"],["AST1002","BSC1005"]],
        "info": ""
      },
      {
        "id": "PSY1012",
        "name": "General Psychology",
        "credits": 3,
        "prerequisites": ["SLS1122","ENC1101","ARH1000","END1102","STA2023","INR2002","SYN2000",["MAC1101","MGF2130"],["AST1002","BSC1005"]],
      "info": "Students must select either PSY1012 or AMH2020, but not both."
      },
    {
        "id": "AMH2020",
        "name": "United States History 1865-Present",
        "credits": 3,
        "prerequisites": ["SLS1122","ENC1101","ARH1000","END1102","STA2023","INR2002","SYN2000",["MAC1101","MGF2130"],["AST1002","BSC1005"]],
      "info": "Students must select either PSY1012 or AMH2020, but not both."
      },
      {
        "id": "LIT2000",
        "name": "Literature and Culture",
        "credits": 3,
        "prerequisites": ["SLS1122","ENC1101","ARH1000","END1102","STA2023","INR2002","SYN2000",["MAC1101","MGF2130"],["AST1002","BSC1005"]],
      "info": ""
      },
  ]
};

let takenCourses = [];

function updateCourseList() {
    const takenList = document.getElementById('takenCourses');
    const availableList = document.getElementById('availableCourses');
    
    takenList.innerHTML = '';
    availableList.innerHTML = '';
    
    programData.courses.forEach(course => {
        if (takenCourses.includes(course.id)) {
            takenList.innerHTML += `<li>${course.id} - ${course.name}</li>`;
        } else if (canTakeCourse(course) && !course.hidden) {
            const li = document.createElement('li');
            li.innerHTML = `
                <div class="course-info">
                    <strong>${course.id} - ${course.name}</strong>
                    <span class="info">${course.info}</span>
                </div>
                <div class="course-actions">
                    <button onclick="takeCourse('${course.id}')">Take Course</button>
                </div>`;
            availableList.appendChild(li);
        }
    });
}

function canTakeCourse(course) {
    if (course.prerequisites.length === 0) return true;
    
    return course.prerequisites.every(prereq => {
        if (Array.isArray(prereq)) {
            return prereq.some(p => takenCourses.includes(p));
        } else {
            return takenCourses.includes(prereq);
        }
    });
}

function takeCourse(courseId) {
    takenCourses.push(courseId);
    
    // the "or" cases
    const orPairs = [
        ["MAC1101", "MGF2130"],
        ["AST1002", "BSC1005"],
        ["AMH2010", "POS2041"],
        ["MUL1010", "REL2300"],
        ["PSY1012", "AMH2020"]
    ];
    
    for (let pair of orPairs) {
        if (pair.includes(courseId)) {
            const otherCourseId = pair.find(id => id !== courseId);
            const otherCourse = programData.courses.find(c => c.id === otherCourseId);
            if (otherCourse) otherCourse.hidden = true;
            break;
        }
    }
    
    updateCourseList();
}

function initialize() {
    // the "or" prerequisite cases
    programData.courses.forEach(course => {
        if (course.id === "STA2023") {
            course.prerequisites = ["SLS1122", ["MAC1101", "MGF2130"]];
        }
    });

    updateCourseList();
}

window.onload = initialize;
