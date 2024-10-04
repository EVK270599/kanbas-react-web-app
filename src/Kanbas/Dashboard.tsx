import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2>
      <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {/* Repeat this block for each course */}
          {[1, 2, 3, 4, 5].map((courseId) => (
            <div key={courseId} className="wd-dashboard-course col" style={{ width: '300px' }}>
              <div className="card rounded-3 overflow-hidden">
                <Link
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                  to={`/Kanbas/Courses/${courseId}/Home`}
                >
                  <img src="/images/reactjs.jpg" width="100%" height={160} alt={`CS1234 React JS (${courseId})`} />
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">CS1234 React JS</h5>
                    <p className="wd-dashboard-course-title card-text">Full Stack software developer</p>
                    <button className="btn btn-primary"> Go </button>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
