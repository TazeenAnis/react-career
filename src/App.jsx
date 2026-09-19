import Navbar from '../src/components/Navbar'
import CategoryCard from './components/CategoryCard'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import JobCard from './components/JobCard'
import './App.css'
import CompanyCard from './components/CompanyCard'
import SearchBar from './components/SearchBar'

function App() {

  return (
    <>
      <Navbar />
      <HeroSection />
      <section className="py-4">

        <div className="container">

          <h2 className="text-center fw-bold mb-4">
            Find Your Next Opportunity
          </h2>

          <div className="row justify-content-center">

            <div className="col-md-8">

              <SearchBar />

            </div>

          </div>

        </div>

      </section>

      <section className="py-5">

        <div className="container">

          <h2 className="text-center mb-4">
            Popular Job Categories
          </h2>

          <div className="row g-4">

            <div className="col-md-3">
              <CategoryCard
                title="Web Development"
                jobs="120"
              />
            </div>

            <div className="col-md-3">
              <CategoryCard
                title="Data Science"
                jobs="85"
              />
            </div>

            <div className="col-md-3">
              <CategoryCard
                title="UI/UX Design"
                jobs="65"
              />
            </div>

            <div className="col-md-3">

              <CategoryCard
                title="Mobile Development"
                jobs="75"
              />
            </div>

            <div className="col-md-3">

              <CategoryCard
                title="Digital Marketing"
                jobs="90"
              />
            </div>

            <div className="col-md-3">

              <CategoryCard
                title="Cybersecurity"
                jobs="55"
              />
            </div>


          </div>

        </div>

      </section>

      <section className="py-5 bg-light">

        <div className="container">

          <div className="d-flex justify-content-between
                        align-items-center mb-4">

            <h2>
              Featured Jobs
            </h2>

            <button className="btn btn-outline-primary">
              View All Jobs
            </button>

          </div>

          <div className="row g-4">

            <div className="col-md-4">
              <JobCard
                title="Frontend React Developer"
                company="TechSolutions"
                location="Karachi"
                type="Full Time"
                salary="Rs. 100,000 - 150,000"
              />
            </div>

            <div className="col-md-4">
              <JobCard
                title="Python Developer"
                company="CodeWorks"
                location="Lahore"
                type="Full Time"
                salary="Rs. 120,000 - 180,000"
              />
            </div>

            <div className="col-md-4">
              <JobCard
                title="UI/UX Designer"
                company="CreativeStudio"
                location="Islamabad"
                type="Part Time"
                salary="Rs. 80,000 - 120,000"
              />
            </div>
            <div className="col-md-4">
              <JobCard
                title="Data Analyst"
                company="DataMind"
                location="Karachi"
                type="Full Time"
                salary="Rs. 90,000 - 140,000"
              />
            </div>
            <div className="col-md-4">
              <JobCard
                title="Digital Marketing Executive"
                company="MarketPro"
                location="Karachi"
                type="Full Time"
                salary="Rs. 70,000 - 110,000"
              />
            </div>
            <div className="col-md-4">
              <JobCard
                title="Junior React Developer"
                company="WebCraft"
                location="Lahore"
                type="Internship"
                salary="Rs. 30,000 - 50,000"
              />
            </div>

          </div>

        </div>

      </section>

      <section className="py-5">
        <div className="container">

          <h2 className="text-center fw-bold mb-4">
            Companies Hiring Now
          </h2>

          <div className="row g-4">

            <div className="col-md-6 col-lg-3">
              <CompanyCard
                name="TechSolutions"
                industry="Software Development"
                location="Karachi"
                openings="12"
              />
            </div>

            <div className="col-md-6 col-lg-3">
              <CompanyCard
                name="CodeWorks"
                industry="Technology"
                location="Lahore"
                openings="8"
              />
            </div>

            <div className="col-md-6 col-lg-3">
              <CompanyCard
                name="CreativeStudio"
                industry="Design & Media"
                location="Islamabad"
                openings="6"
              />
            </div>

            <div className="col-md-6 col-lg-3">
              <CompanyCard
                name="DataMind"
                industry="Data & AI"
                location="Karachi"
                openings="15"
              />
            </div>

          </div>

        </div>
      </section>

      <Footer />

    </>
  )
}

export default App
