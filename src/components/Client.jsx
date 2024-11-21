
const Client = () => {
    return (
        <div>

<h2 className="text-3xl text-lime-500 font-bold text-left mb-8">
          Common FAQ
        </h2>

  <div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" defaultChecked />
  <div className="collapse-title text-xl font-medium">What is CareerNavigator?</div>
  <div className="collapse-content">
    <p>CareerNavigator is an online platform designed to help individuals explore career options, receive personalized counseling, and find resources to achieve their career goals. Whether you're a student, a recent graduate, or someone looking to switch careers, CareerNavigator provides expert advice and tools to guide your journey.</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title text-xl font-medium">How does Career Counseling work on CareerNavigator?</div>
  <div className="collapse-content">
    <p>Career counseling on CareerNavigator involves personalized sessions with experienced professionals who will help you assess your skills, interests, and goals. We offer one-on-one consultations, career assessments, and guidance on how to achieve your career aspirations.</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title text-xl font-medium"> Do I need to create an account to access career counseling?</div>
  <div className="collapse-content">
    <p>Yes, you need to create an account to access personalized career counseling and use additional features on CareerNavigator. Creating an account allows us to tailor recommendations and follow up on your progress.</p>
  </div>
</div>

<div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title text-xl font-medium"> Can CareerNavigator help me find a job?</div>
  <div className="collapse-content">
    <p>While we don't directly provide job placements, CareerNavigator helps by guiding you through resume building, interview preparation, and job search strategies. Additionally, our career counselors can advise you on how to approach job hunting in your specific field.</p>
  </div>
</div>

        </div>
    );
};

export default Client;