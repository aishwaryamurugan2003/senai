import React from 'react';
import { Mail, GraduationCap, Award, BookOpen, User, Building, MapPin, Mic, FileText, Briefcase, Activity } from 'lucide-react';
import { motion } from 'framer-motion';
import './Director.css';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const headerVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
};

const Director = () => {
  return (
    <div className="director-page" style={{ paddingTop: '160px', paddingBottom: '80px' }}>
      <div className="container">
        
        <motion.div 
          className="director-profile-header"
          variants={headerVariants}
          initial="hidden"
          animate="show"
        >
          <motion.img 
            initial={{ rotate: -10, scale: 0.8, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
            src="https://che.iitm.ac.in/wp-content/uploads/2018/06/Raghunathan-Rengaswamy.jpg" 
            alt="Prof. Raghunathan Rengaswamy" 
            className="director-image" 
          />
          <div className="director-info">
            <h1 className="director-name">Raghunathan Rengaswamy</h1>
            <p className="director-titles">Fellow INAE, Marti Mannariah Gurunath Institute Chair Professor</p>
            <p className="director-position">Head, Walmart Center for Tech Excellence</p>
            <p className="director-dept">Department of Data Science and Artificial Intelligence & Department of Chemical Engineering</p>
            <p className="director-inst">IIT Madras, India</p>
            
            <div className="director-contact">
              <a href="mailto:raghur@iitm.ac.in" className="contact-link"><Mail size={18} /> raghur@iitm.ac.in</a>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="director-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div className="content-section" variants={itemVariants}>
            <h2 className="section-title"><User size={24} /> Professional Experience</h2>
            <ul className="timeline-list">
              <li><strong>Aug 2013 – Present:</strong> Professor, Department of Chemical Engineering IIT Madras</li>
              <li><strong>April 2011 – Aug 2013:</strong> Professor, Department of Chemical Engineering IIT Madras</li>
              <li><strong>Jan 2009 – Aug 2013:</strong> Professor, Department of Chemical Engineering and Co-Director, Process Control and Optimization Consortium (PCOC), Texas Tech University.</li>
              <li><strong>June 2008 – Dec 2008:</strong> Professor, Department of Chemical and Biomolecular Engineering, Clarkson University.</li>
              <li><strong>Jan 2002 – May 2008:</strong> Associate Professor, Department of Chemical Engineering, Clarkson University (Awarded Tenure in 2006).</li>
              <li><strong>Jan 2001 – Dec 2001:</strong> Visiting Assistant Professor, School of Chemical Engineering, Purdue University.</li>
              <li><strong>Jan 1996 – Dec 2000:</strong> Assistant Professor, Department of Chemical Engineering, IIT Bombay.</li>
              <li><strong>Aug 1995 – Dec 1995:</strong> Senior Engineer, Asea Brown Boveri (ABB), Bangalore, India.</li>
              <li><strong>Aug 1990 – June 1995:</strong> Research and Teaching Assistantships, School of Chemical Engineering, Purdue University, USA.</li>
            </ul>
          </motion.div>

          <motion.div className="content-section" variants={itemVariants}>
            <h2 className="section-title"><GraduationCap size={24} /> Education</h2>
            <ul className="timeline-list">
              <li>
                <strong>Ph.D. (1995)</strong> - Chemical Engineering, Purdue University, West Lafayette, USA<br />
                <em>Thesis: A Framework for Integrating Process Monitoring, Diagnosis and Supervisory Control</em>
              </li>
              <li>
                <strong>B. Tech (1990)</strong> - Chemical Engineering, Indian Institute of Technology, Madras<br />
                <em>Thesis: An Expert System for VLE Equation Selection</em>
              </li>
            </ul>
          </motion.div>

          <motion.div className="content-section" variants={itemVariants}>
            <h2 className="section-title"><Activity size={24} /> Research Interests</h2>
            <ul className="bullet-list">
              <li>Machine Learning and AI algorithms</li>
              <li>Systems Biology</li>
              <li>Droplet Microfluidic Systems</li>
              <li>Fuel Cell and Battery Technologies</li>
              <li>Distributed monitoring of environmental parameters</li>
            </ul>
          </motion.div>

          <motion.div className="content-section" variants={itemVariants}>
            <h2 className="section-title"><Award size={24} /> Honors and Awards</h2>
            <ul className="timeline-list">
              <li><strong>2023:</strong> The Institution of Engineers (India) Eminent Engineer Award</li>
              <li><strong>2019:</strong> Marti Mannarriah Gurunath Institute Chair Professor</li>
              <li><strong>2018:</strong> YBG Varma Award for Excellence in Teaching, IIT Madras</li>
              <li><strong>2017:</strong> Fellow, Indian National Academy of Engineering</li>
              <li><strong>2006:</strong> Graham Faculty Research Award, Clarkson University</li>
              <li><strong>2002-2005:</strong> IFAC Best Paper Prize for the paper in Engineering Applications of Artificial Intelligence</li>
              <li><strong>2003:</strong> Omega Chi Epsilon, Professor of the Year Award (Chemical Engineering), Clarkson University</li>
              <li><strong>2000:</strong> Indian National Academy of Engineering (INAE) Young Engineer Award</li>
              <li><strong>1999:</strong> Guided a project "Qualitative Simulation in Process Engineering" that was selected by the INAE as one of the most innovative bachelor's projects.</li>
              <li><strong>1991-1993:</strong> David Ross Fellowship at Purdue, USA</li>
              <li><strong>1986-1990:</strong> Awarded Undergraduate Merit scholarship while at IIT Madras</li>
            </ul>
          </motion.div>

          <motion.div className="content-section" style={{ gridColumn: '1 / -1' }} variants={itemVariants}>
            <h2 className="section-title"><Building size={24} /> Editorial, Advisory, and Policy Activities</h2>
            <div className="scrollable-content">
              <ul className="bullet-list">
                <li>Audit of Niti Aayog Data Governance Quality Index (DGQI) Framework 2024</li>
                <li>Internationalization of Higher Education in India, Niti Aayog policy report 2024</li>
                <li>Jury member CII Industrial AI awards 2023</li>
                <li>Jury member for GITA Global Technology Development Awards 2021</li>
                <li>Board Member, IITM Foundation, USA</li>
                <li>Member, Board of Trustees, IIT Madras Alumni Charitable Trust</li>
                <li>Advisor, CII for their Center of Excellence in Data Science and AI</li>
                <li>Member CII International Liasons Sub-committee, Southern Region</li>
                <li>Core member, DST-PAC, Chemical and Environmental Engineering</li>
                <li>Task Force Member, Department of Biotechnology, India 2014 - 2017</li>
                <li>National Research Council Member, NMRL, Ambernath, India</li>
                <li>International Programming Committee, ADCHEM 2015, Whistler, Canada</li>
                <li>International Programming Committee, DYCOPS 2013, Mumbai, India</li>
                <li>Co-guest-editor for an issue on "Data Analysis: Methods and Applications" (IJAESAM, 2012)</li>
                <li>Co-guest-editor for an issue on Fuel Cell Technologies (IJHE, 2011)</li>
                <li>Associate Editor for the AIChE section of the American Control Conference, Seattle, 2008</li>
                <li>Technical Program Committee, International Symposium on Resilient Control Systems (2009 & 2010)</li>
                <li>International Advisory Committee, Fuel Cell Technologies, FUCETECH 2009</li>
              </ul>
            </div>
          </motion.div>

          <motion.div className="content-section" style={{ gridColumn: '1 / -1' }} variants={itemVariants}>
            <h2 className="section-title"><MapPin size={24} /> Grants, Contracts and Consultancy</h2>
            <div className="scrollable-content">
              <ul className="bullet-list">
                <li>New AI-based methods for bizjet prognostic/predictive maintenance, Dassault Aviation, 2024-2026.</li>
                <li>IoT based alert system to monitor access control, PPEs monitoring and Health Vitals, HFE, 2024.</li>
                <li>Risk-reward predictions for energy tender, HFE, 2024.</li>
                <li>Study of Impact of Air Pollution on non-smoker associated Lung Cancer... BIRAC, 2025-2026.</li>
                <li>Center of Excellence for Engineering and Retail Analytics, Walmart, 2023-2028.</li>
                <li>Assessing the Data Governance and Quality Index (DGQI) of Niti-Aayog, 2023-2024.</li>
                <li>Therapeutic Resistance and Relapse Prediction Model for Pediatrics Acute Lymphoblastic Leukemia using AI, ICMR, 2023-2024.</li>
                <li>Development of a tool for designing capacity for energy sources... Hero Future Energies, 2023.</li>
                <li>Artificial Intelligence based Model for formulation and process design, Pfizer, 2023.</li>
                <li>Anomaly Detection, Apple Inc., 2023-2024.</li>
                <li>NLP for Analysis of Customer Feedback, SGRI, 2023.</li>
                <li>AI Scientist for Net Carbon Zero India, Dun & Bradstreet, 2022.</li>
                <li>Hyperlocal air pollution monitoring using mobile monitoring for Gurugram and Mumbai, NSE, 2021-2024.</li>
                <li>Digital Twin for Induction Furnace Process, Saint Gobain Research India, 2021 & 2020.</li>
                <li>Analytics for RCB, Royal Challengers Bangalore, 2020-2021.</li>
                <li>New AI-based methods for bizjets prognostic/predictive maintenance, Dassault Aviation, France, 2020-2022.</li>
                <li>Analytics for Cricket, ESPNCricinfo, 2018-2019.</li>
                <li>Study of association of air pollution on pregnancy outcomes in a semi-urban district in North India, THSTI, 2019-2020.</li>
                <li>Preterm birth risk in pregnant women – prediction using machine learning models, BIRAC & Gates foundation, 2019-2020.</li>
                <li>Predictive Maintenance, Mahindra & Mahindra, 2019.</li>
                <li>Towards accelerated product design with domain knowledge augmented machine learning models, FORD, 2019-2021.</li>
                <li>Genetic engineering of microbes and regulation of charge transfer dynamics for high performance biophotovoltaics, Indo-Swiss grant (DBT & SNF).</li>
                <li>Modeling and Data Analytics of Aluminum Smelters (Modules 2, 3, 4), GE, 2017-2018.</li>
                <li>Enabling technologies for enhancing access of medicines in India through point-of-demand production, UAY.</li>
                <li>A Computational Pipeline for Identifying the Context of Key Mutations in Cancer Genomes, DBT, 2017-2020.</li>
                <li>Development of Tubular PEM Fuel Cells, Naval Research Board (NRB), 2017-2020.</li>
                <li>Data Analytics / Optimization Approach for Aluminum Smelting Process, GE, 2016-2019.</li>
                <li>Corporate Manpower Development & 3D printing of drug particles, GDPL, 2016-2017.</li>
                <li>Entrainment of Rhythms for Improved Cancer Therapy, DST, 2017-2020.</li>
                <li>Development of 10 kW/50 kWh Redox Flow Battery System, IMPRINT, 2017.</li>
                <li>Understanding Dynamic Drop Formation in 2-D Channels and Development of a Rational Design Framework, DST, 2014-2016.</li>
                <li>Rapid Diagnostics of Batteries for Efficient Power Management, US DOD, 2014.</li>
                <li>RBIC CARS project on development of a master controller for a network of PAFC stacks, NMRL, 2012-2013.</li>
                <li>Development of a Computational Tool for Modeling, Simulation, and Design of Next Generation Discrete Droplet Microfluidic Systems, NSF, 2013-2014.</li>
                <li>Engineering Massively Parallelized Fluidic Processors, NSF, 2011-2014.</li>
                <li>Model-Based Sensor Placement for Component Condition Monitoring... Fossil Energy Systems, DOE, 2011-2013.</li>
                <li>Development of Controller Performance Assessment and Mitigation Technology, NSF, 2010-2013.</li>
                <li>Development of Nonlinear Estimators, Honeywell, 2007.</li>
                <li>Development of Tubular PEM Fuel Cells, NYSERDA, 2008-2010.</li>
                <li>Integrated Framework for Stiction Detection and Compensation in Control Loops, NSF, 2006-2009.</li>
                <li>Solid State Proton Conducting Direct Methanol Fuel Cells (Reliance Industries / Stanford Fuel Cell Consortium), 2007-2010.</li>
                <li>Fuel Specific SOFC Design and Control, Nanodynamics, 2005-2008.</li>
                <li>Theoretical and Experimental Study of Multivariable Control of PEM Fuel Cells, ACS-PRF, 2005-2007.</li>
                <li>Advanced Diagnostics of PEM Fuel Cells & Stiction Compensation, NYSERDA, 2005-2006.</li>
                <li>Performance Monitoring of Control Loops, Honeywell, 2004-2005.</li>
                <li>Issues in Non-Equilibrium Reactive Distillation, NSF, 2004-2007.</li>
                <li>... and over 20 other historic grants / consulting projects (1996 - 2005) involving ABB, KBR, Tata Honeywell, NOCIL, and Indian Space Research Organization (ISRO).</li>
              </ul>
            </div>
          </motion.div>
          
          <motion.div className="content-section" variants={itemVariants}>
            <h2 className="section-title"><BookOpen size={24} /> Books & Book Chapters</h2>
            <ul className="bullet-list">
              <li>R. Rengaswamy, B. Srinivasan, N.P. Bhatt, <strong>"Process control fundamentals: analysis, design, assessment, and diagnosis"</strong>, CRC Press, FL, USA, 2020.</li>
              <li>R. Rengaswamy, R. Suresh, <strong>"Data Science for Engineers"</strong>, CRC Press, FL, USA, 2022.</li>
              <li>D.E. Eapen, S.R. Suseendiran, R. Rengaswamy, "Phosphoric acid fuel cells", Compendium of hydrogen energy, Volume 3, Woodhead Publishing, 2015.</li>
              <li>P Bhalla, S Sahoo, R Rengaswamy, D Karunagaran, GK Suraishkumar, "Constraint-Based Modeling to Understand ROS-Mediated Effects in Cancer", Handbook of Oxidative Stress in Cancer, 2020.</li>
              <li>V. Venkatasubramanian and R. Rengaswamy, "Statistical and Clustering Techniques in Neural Networks", Neural Networks for Chemical Engineers, Elsevier Science, 1995.</li>
            </ul>
          </motion.div>

          <motion.div className="content-section" variants={itemVariants}>
            <h2 className="section-title"><FileText size={24} /> Patents & Trade Journals</h2>
            <ul className="bullet-list">
              <li><strong>US7797082:</strong> "Apparatus and Method for Stiction Compensation in a Process Control System", Inventors: Srinivasan Ranganathan and Raghunathan Rengaswamy.</li>
              <li><strong>US9779189B2:</strong> "System and Method for Simulation and Design of Discrete Droplet Microfluidic Systems", Inventors: Jeevan Maddala and Raghunathan Rengaswamy.</li>
              <li><strong>Publications:</strong> "Improve Process Operations with Online Fault Detection and Diagnosis", Chemical Industry Digest, 1999.</li>
              <li><strong>Publications:</strong> "Smart city planning in India - A perspective on temporal and spatial data collection and analytics...", The Institute of Electrical Engineers of Japan, 2015.</li>
            </ul>
          </motion.div>

          <motion.div className="content-section" style={{ gridColumn: '1 / -1' }} variants={itemVariants}>
            <h2 className="section-title"><Mic size={24} /> Invited Talks & Lectures</h2>
            <div className="scrollable-content">
              <ul className="bullet-list">
                <li>Numerous invited industrial talks in the areas of data science, AI, manufacturing data analytics, 2017-Present.</li>
                <li>"AI for Science and Engineering", CSIR Foundation Day speaker at NCL, Pune, 2021.</li>
                <li>"Data Analytics – Case Studies" Confederation of Indian Industry (CII), Chennai, India, 2016.</li>
                <li>"Big data Analytics – Promise and Performance" TekUnite, Honeywell, Bangalore, India, 2015.</li>
                <li>"Overview of Optimization Techniques and Applications in Product Development", Ford facility, Chennai, India, 2015.</li>
                <li>"Controller Performance Assesment" and "Nonlinear State Estimation", BARC, Mumbai, India, 2013-2014.</li>
                <li>"A Stick in a Haystack: Identifying Process Operational Problems", Keynote Lecture at TIMA, Chennai, India, 2013.</li>
                <li>"Enhancing the Performance of Fossil Energy Systems through Information Maximization", Plenary Lecture, ESMOC, Durgapur, 2013.</li>
                <li>"Systems Engineering of PEM Fuel Cells – A Review of Possibilities", Plenary lecture at FUCETECH, Mumbai, 2009.</li>
                <li>"Sensor Network Design for State Awareness", 1st International Symposium on Resilient Control, Idaho Falls, 2008.</li>
                <li>"Modeling, Control and Diagnostics of PEM Fuel Cells", GM Research / GE John Welch Technology Center / University of Rhode Island.</li>
                <li>Multiple keynote and plenary addresses at major global institutions including Univ. of Alberta, Honeywell, KBR, UOP, and Lund University, Sweden.</li>
                <li>Over 130 technical talks delivered at major engineering conferences globally.</li>
              </ul>
            </div>
          </motion.div>

          <motion.div className="content-section" style={{ gridColumn: '1 / -1' }} variants={itemVariants}>
            <h2 className="section-title"><GraduationCap size={24} /> Academic Teaching & Mentorship</h2>
            <div className="scrollable-content">
              <ul className="timeline-list">
                <li><strong>Graduate Student Supervision:</strong> Guided over 39+ completed PhDs, numerous postdoctoral researchers, masters candidates, and undergraduate researchers over the span of 28+ years at IIT Madras, Texas Tech University, Clarkson University, and IIT Bombay.</li>
                <li><strong>Courses Taught (IIT Madras):</strong> Modern Control Theory, Simulation Lab, Instrumentation and Process Control.</li>
                <li><strong>Courses Taught (Texas Tech University):</strong> Advanced Chemical Engineering Techniques, Process Optimization, Chemical Process Design and Simulation.</li>
                <li><strong>Courses Taught (Clarkson University):</strong> Chemical Engineering Analysis, Design I & II, Process Dynamics and Control.</li>
                <li><strong>Courses Taught (Purdue & IIT Bombay):</strong> Mathematical & Statistical Methods, Artificial Intelligence in Process Engineering, Process Modeling.</li>
                <li><strong>Curriculum Development:</strong> Introduced Fuel Cell-Electrolyzer Experiments and Computer Control Liquid Level experiments at Clarkson University; Developed new courses on Artificial Intelligence in Process Engineering at IIT Bombay.</li>
                <li><strong>Summer Institutes:</strong> Delivered major workshops on "Nonlinear State Estimation" and "Controller Performance Assessment" at major industry setups (Honeywell, Reliance).</li>
              </ul>
            </div>
          </motion.div>

          <motion.div className="content-section" variants={itemVariants}>
            <h2 className="section-title"><Briefcase size={24} /> Professional & University Services</h2>
            <ul className="bullet-list">
              <li><strong>Peer Review:</strong> Active reviewer for AIChE Journal, Automatica, IEEE Transactions (Automatic Control, Industrial Electronics, Nuclear Science), Chemical Engineering Science, Journal of Process Control, and others.</li>
              <li><strong>University Services:</strong> Chair of Graduate Committee, Member of Scholarship & UG Committees at TTU & Clarkson; Secretary for DPGC at IIT Bombay.</li>
              <li><strong>Professional Memberships:</strong> American Institute of Chemical Engineers (AIChE).</li>
              <li><strong>Organizing Roles:</strong> Co-chairman for Process Operations (PSE), IFAC conference sessions, Tutorial sessions on Oscillation Diagnosis at ACC.</li>
            </ul>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
};

export default Director;
