import "./CourseList.css";

function CourseCard({ course }) {
  return (
    <div className="course-item">
      <div className="course-item__img">
        <img src={course.imgUrl} alt={course.title} />
      </div>
      <div className="course-item__detail">
        <div className="course-item__body">
          <div>
            <p className="title">{course.title}</p>
            <p className="description">{course.description}</p>
          </div>
          <div className="rate">🌟 {course.rate}</div>
        </div>
        <div className="course-item__footer">
          <div className="tags">
            {course.tags.map((tag) => (
              <button key={tag.id} className="badge badge--secondary">
                {tag}
              </button>
            ))}
          </div>
          <div className="caption">
            <div className="date">
              {new Date(course.start).toLocaleDateString("en-Us", {
                month: "short",
                year: "numeric",
                day: "numeric",
              })}
            </div>
            <div
              className={`badge ${
                course.status === "Active"
                  ? "badge--primary"
                  : course.status === "Completed"
                  ? "badge--secondary"
                  : "badge--danger"
              }`}
            >
              {course.status}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
