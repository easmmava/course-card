import CourseCard from "./CourseCard";
const courses = [
  {
    id: 1,
    title: "React js",
    description: "description 1",
    imgUrl: "../../public/images/React_JS.png",
    rate: "5",
    tags: ["react.js", "frontend"],
    start: "2022-03-07T20:46:30.6152",
    status: "Completed",
  },
  {
    id: 2,
    title: "Node js",
    description: "description 2",
    imgUrl: "../../public/images/React_JS2.png",
    rate: "4.5",
    tags: ["Node.js", "backend"],
    start: "2023-07-01T20:46:30.6152",
    status: "Upcoming",
  },
  {
    id: 3,
    title: "JS",
    description: "description 3",
    imgUrl: "../../public/images/React_JS3.jpg",
    rate: "5",
    tags: ["js", "frontend"],
    start: "2021-05-01T20:46:30.6152",
    status: "Active",
  },
];

function CourseList() {
  return (
    <div>
      {courses.map((course) => {
        return <CourseCard key={course.id} course={course} />;
      })}
    </div>
  );
}

export default CourseList;
