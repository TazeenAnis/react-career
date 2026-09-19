function JobCard({
    title,
    company,
    location,
    type,
    salary
}) {

    function handleViewJob() {
        alert(
            `You selected ${title} at ${company}`
        );
    }

    function handleSaveJob() {
        alert(`${title} has been saved.`);
    }

    return (
        <div className="card h-100 shadow-sm">

            <div className="card-body">

                <span className="badge bg-success mb-2">
                    {type}
                </span>

                <h5 className="card-title">
                    {title}
                </h5>

                <p className="text-muted mb-1">
                    {company}
                </p>

                <p className="mb-1">
                    📍 {location}
                </p>

                <p className="fw-bold">
                    {salary}
                </p>

                <button
                    className="btn btn-primary"
                    onClick={handleViewJob}
                >
                    View Job
                </button>

                <button
                    className="btn btn-outline-secondary ms-2"
                    onClick={handleSaveJob}
                >
                    Save Job
                </button>

            </div>

        </div>
    );
}

export default JobCard;