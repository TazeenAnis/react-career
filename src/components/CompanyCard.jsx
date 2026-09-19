function CompanyCard({ name, industry, location, openings }) {
    return (
        <div className="card h-100 shadow-sm">
            <div className="card-body">
                <h5 className="card-title">{name}</h5>

                <p className="text-muted mb-1">
                    {industry}
                </p>

                <p className="mb-1">
                    📍 {location}
                </p>

                <p className="fw-bold">
                    {openings} Open Positions
                </p>

                <button className="btn btn-outline-primary">
                    View Company
                </button>
            </div>
        </div>
    );
}

export default CompanyCard;