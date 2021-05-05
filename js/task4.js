let academyAuditori = [
    {
        room: 22,
        nameRoom: "IOS",
        faculty: "IT",
        numberOfPlaces: 15,
    },
    {
        room: 23,
        nameRoom: "FE",
        faculty: "IT",
        numberOfPlaces: 10,
    },

    {
        room: 25,
        nameRoom: "Backend",
        faculty: "IT",
        numberOfPlaces: 15,
    },

    {
        room: 27,
        nameRoom: "PHP",
        faculty: "IT",
        numberOfPlaces: 10,
    },

    {
        room: 29,
        nameRoom: "Android",
        faculty: "IT",
        numberOfPlaces: 15,
    },

    {
        room: 34,
        nameRoom: "WEB",
        faculty: "Design",
        numberOfPlaces: 18,
    },

    {
        room: 35,
        nameRoom: "Designer",
        faculty: "Design",
        numberOfPlaces: 12,
    },

    {
        room: 37,
        nameRoom: "Architect",
        faculty: "Design",
        numberOfPlaces: 12,
    },

]

//Вывод на экран всех аудиторий;
function classRoom() {
    for (const info of academyAuditori) {
        console.log(`Аудитория №${info.room}, название: ${info.nameRoom}, факультет:${info.faculty},количество мест: ${info.numberOfPlaces}`);
    }
    console.log("\n");
};

classRoom();


//Вывод на экран аудиторий для указанного факультета;
function separateClassRoom(roomClass, facultyName) {
    for (let i = 0; i < roomClass.length; i++) {
        if (facultyName === roomClass[i].faculty) {
            console.log("При факультете: " + facultyName + " есть следующиеаудитории " + roomClass[i].nameRoom)
        }
    }
};

separateClassRoom(academyAuditori, "IT");


//Вывод на экран только тех аудиторий, которые подходят для переданной группы.
// Объект-группа состоит из названия, количества студентов и названия факультета;

const groups = [
    {
        nameGrup: "A1",
        numberOfPlaces: 15,
        faculty: "IT",
    },
    {
        nameGrup: "A2",
        numberOfPlaces: 12,
        faculty: "Design",
    }
]


const result = groups.reduce((accumulator, current) => {
    const freeRooms = academyAuditori.filter((element) => element.numberOfPlaces === current.numberOfPlaces && element.faculty === current.faculty
    );
    return accumulator.concat(freeRooms);
}, []);
console.log(result);

//Функция сортировки аудиторий по количеству мест;
function sortAcademyAuditori() {
    return [...academyAuditori.sort((a, b) => {
        return (a.numberOfPlaces - b.numberOfPlaces)
    }).map(nameRoom => { return { ...nameRoom } })
    ];
}
const sortedAcademyAuditori = sortAcademyAuditori(academyAuditori);
console.log(sortedAcademyAuditori);



//Функция сортировки аудиторий по названию (по алфавиту).

academyAuditori.sort((a, b) => {
    if (a.nameRoom < b.nameRoom) { return -1; };
    if (a.nameRoom > b.nameRoom) { return 1; };
    return 0;
});
console.log(academyAuditori.sort());