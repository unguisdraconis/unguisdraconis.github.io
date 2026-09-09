import { Capabilities } from './components/Capabilities.jsx'
import { Contact } from './components/Contact.jsx'
import { Education } from './components/Education.jsx'
import { Experience } from './components/Experience.jsx'
import { Hero } from './components/Hero.jsx'
import { LearningStudies } from './components/LearningStudies.jsx'
import { Resume } from './components/Resume.jsx'
import { SelectedWork } from './components/SelectedWork.jsx'
import { Service } from './components/Service.jsx'
import { SiteHeader } from './components/SiteHeader.jsx'
import { SkipLink } from './components/SkipLink.jsx'
import { capabilityGroups } from './content/capabilities.js'
import { education, professionalDevelopment } from './content/education.js'
import { experience } from './content/experience.js'
import { profile } from './content/profile.js'
import { projects } from './content/projects.js'
import { publicResume } from './content/resume.js'
import { presentations, service } from './content/service.js'
import { studies } from './content/studies.js'

function App() {
  return (
    <>
      <SkipLink />
      <div id="top" className="site-shell">
        <SiteHeader name={profile.name} />
        <main id="main-content">
          <Hero profile={profile} />
          <SelectedWork projects={projects} />
          <Capabilities groups={capabilityGroups} />
          <LearningStudies studies={studies} />
          <Education education={education} development={professionalDevelopment} />
          <Experience experience={experience} />
          <Service presentations={presentations} service={service} />
          <Resume profile={profile} resume={publicResume} />
          <Contact profile={profile} invitation={publicResume.contactInvitation} />
        </main>
        <footer className="site-footer">
          <p>Jeremiah King</p>
          <p>Research data management · Digital curation · Data visualization</p>
        </footer>
      </div>
    </>
  )
}

export default App
