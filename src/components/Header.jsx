const courseStatus = ["Active", "Upcoming", "Completed", "All"]

function Header() {
  return (
    <div className="header">
        <h1 className=" text-2xl font-extrabold p-7">My Cources (3)</h1>
        <div className="course-status">
            {courseStatus.map( s => <div key={s}>{s}</div>)}
        </div>
    </div>
  )
}

export default Header
