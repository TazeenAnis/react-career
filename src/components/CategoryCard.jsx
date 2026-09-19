function CategoryCard({ title, jobs }) {
    return (
        <div className="card h-100 shadow-sm">

            <div className="card-body text-center">

                <h5 className="card-title">
                    {title}
                </h5>

                <p className="card-text text-muted">
                    {jobs} Jobs Available
                </p>

                <button className="btn btn-outline-primary">
                    Explore
                </button>

            </div>

        </div>
    );
}

export default CategoryCard;