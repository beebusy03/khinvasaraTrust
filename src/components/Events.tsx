import { useState } from 'react';

const years = ['2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2018', '2020', '2021'];

const Events = () => {
  const [activeYear, setActiveYear] = useState('2021');

  return (
    <section className="events-section" id="events">
      <div className="section-header">
        <span className="section-badge"><i className="fas fa-calendar-alt"></i> Our Journey</span>
        <h2>Events & Milestones</h2>
        <p>Our commitment to social service through the years</p>
      </div>
      <div className="events-container">
        <div className="formation-box">
          <h3><i className="fas fa-landmark"></i> Trust Formation</h3>
          <p>The Trust was conceptualised and constituted in the year 2007 and was registered under the Societies Registration Act, 1860 on <strong>12th February, 2007</strong></p>
        </div>

        <div className="years-grid">
          {years.map((year) => (
            <span
              key={year}
              className={`year-badge ${activeYear === year ? 'active' : ''}`}
              onClick={() => setActiveYear(year)}
            >
              {year}
            </span>
          ))}
        </div>

        {/* Year 2021 */}
        {activeYear === '2021' && (
          <div className="featured-event">
            <div className="featured-event-header">
              <span className="event-year">Year 2021</span>
              <h3>Umed Pariwar - COVID Vaccination Drives</h3>
              <span className="category"><i className="fas fa-heartbeat"></i> Category: Health</span>
            </div>
            <div className="featured-event-content">
              <p>The COVID-19 pandemic has demonstrated the interconnected nature of our world – and that no one is safe until everyone is safe. The pandemic has been one of the greatest health crises in recorded history. Thanks to rapid advances in science and technology, the light at the end of the tunnel is getting closer.</p>
              
              <p>Intellectually Development Disable people are an integral part of our society and in current situation Covid-19 vaccination of these members is equally important. It is important that the vaccination is done in their comfort zone through on location vaccination drive or otherwise it is a hard task to take these members to a vaccination center.</p>
              
              <p><strong>Khinvasara Pariwar Trust in association with Pune Municipal Corporation (PMC)</strong> has carried out a vaccination drive at Umed Parivar Wadki for first and second dose of Covishield vaccine. It was PMC's first on site vaccination drive out of Pune municipal boundary.</p>
              
              <p>The drive was conducted on <strong>24th July 2021</strong> for the first dose and on <strong>23rd October 2021</strong> for the second dose. More than 34 team members of Umed Parivar alongwith their staff have been vaccinated successfully.</p>
              
              <p>Our Trust thanks PMC's doctors and the vaccination drive team's co-operation for carrying out this activity effortlessly and in an organized manner for both doses. Umed Parivar Trust has thanked our Trust for making this Vaccination drive successful for their team members.</p>

              <div className="event-highlights">
                <div className="highlight-item">
                  <i className="fas fa-syringe"></i>
                  <h4>34+</h4>
                  <p>People Vaccinated</p>
                </div>
                <div className="highlight-item">
                  <i className="fas fa-calendar-check"></i>
                  <h4>2</h4>
                  <p>Vaccination Drives</p>
                </div>
                <div className="highlight-item">
                  <i className="fas fa-hospital"></i>
                  <h4>PMC</h4>
                  <p>Partnership</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Year 2020 */}
        {activeYear === '2020' && (
          <div className="featured-event">
            <div className="featured-event-header">
              <span className="event-year">Year 2020</span>
              <h3>Umed Pariwar - Electricity Infrastructure</h3>
              <span className="category"><i className="fas fa-heartbeat"></i> Category: Health</span>
            </div>
            <div className="featured-event-content">
              <p>Umed Pariwar is an organization working for the rehabilitation of Intellectually Development Disable persons. It has well equipped residential facility in Wadki-Hadapsar – close to Pune. It provides mentoring and training of these special persons to help them to become acceptable and functional members of the society. The organization is private and depends on charity from individual doners and corporates for its operation.</p>
              
              <p>A major challenge faced by the organization was erratic supply of power supply. The single-phase power supply made equipment like water pumps not usable. On approaching MSEDCL to resolve the issue, the organization was asked to install a transformer and power line at their own cost, which was about Rs 7 Lakhs.</p>
              
              <p>To help Umed Pariwar to overcome this problem, <strong>Khinvasara Pariwar Trust in association with Mahati Powerlines and M/s G.V Lele</strong> supplied and installed 200 KVA Transformer and HT equipment.</p>
              
              <p>The project was completed in the <strong>first quarter of 2020</strong>. Installation of the transformer has resulted in the following improvements:</p>

              <ul className="event-list">
                <li><i className="fas fa-check-circle"></i> Continuous electricity supply is now available leading to proper usage of electrical equipment</li>
                <li><i className="fas fa-check-circle"></i> Elimination of power fluctuation has resulted in reduced maintenance of equipment</li>
                <li><i className="fas fa-check-circle"></i> With regulated 3 phase supply it is now possible to operate grid connected solar power plant reducing the electricity bill</li>
              </ul>

              <div className="event-highlights">
                <div className="highlight-item">
                  <i className="fas fa-bolt"></i>
                  <h4>200 KVA</h4>
                  <p>Transformer Capacity</p>
                </div>
                <div className="highlight-item">
                  <i className="fas fa-rupee-sign"></i>
                  <h4>₹7 Lakhs</h4>
                  <p>Project Cost</p>
                </div>
                <div className="highlight-item">
                  <i className="fas fa-handshake"></i>
                  <h4>3</h4>
                  <p>Partner Organizations</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Year 2018 */}
        {activeYear === '2018' && (
          <div className="featured-event">
            <div className="featured-event-header">
              <span className="event-year">Year 2018</span>
              <h3>Solar Electricity Generation</h3>
              <span className="category"><i className="fas fa-leaf"></i> Category: Environment, Education</span>
            </div>
            <div className="featured-event-content">
              <p>With about 300 clear and sunny days in a year, India has massive potential to drastically reduce dependence on polluting, fossil fuels for energy generation and move to solar power generation. This will be extremely beneficial to the environment and economy of the country. As a small step in this direction, the Khinvasara Parivar Trust decided to help an educational institute reduce their electricity bills by donating a solar power generating system.</p>
              
              <p>Members of the Trust ideated, conceptualised and planned the entire project. On <strong>15th August 2018</strong>, Khinvasara Parivar Trust handed over a "3.25 Kw Solar Power" generating system to <strong>Jeevan Vidya Mandir School, Ghodegaon, Maharashtra</strong>. This project has been executed by Solarich System Pune. Mr. Pranav Shah of Solarich System developed the system and was also present at its inauguration. The total cost of the project is Rs.3 lakhs.</p>
              
              <p>The life of this system is <strong>25 years</strong> and through net metering system will save on the electricity bill of the school. Expected savings annually are approx Rs.45000 for the next 25 years. Along with financial savings, the project will also save approx <strong>2500 trees from being cut down</strong> or <strong>65 tonnes of coal</strong> which would have been used for generating thermal based MSEB electricity.</p>
              
              <p>Through this project, the Khinvasara Parivar Trust has succeeded in helping the school and has also made a solid contribution towards a Clean Environment.</p>

              <p>For the inauguration function held on 15th August, 2018, Khinvasara Family members along with Mrs.Sunanda Kale, Mr. Ajitseth Kale and many other dignitaries were present. This is the first Solar project in area constructed for social institute.</p>

              <div className="event-details-box">
                <h4><i className="fas fa-info-circle"></i> Project Details</h4>
                <div className="details-grid">
                  <div className="detail-item">
                    <span className="detail-label">Location:</span>
                    <span className="detail-value">Jeevan Vidya Mandir School, Ghodegaon</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Power Capacity:</span>
                    <span className="detail-value">3.25 Kw</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Project Cost:</span>
                    <span className="detail-value">₹ 3,00,000</span>
                  </div>
                </div>
              </div>

              <div className="event-highlights">
                <div className="highlight-item">
                  <i className="fas fa-solar-panel"></i>
                  <h4>3.25 Kw</h4>
                  <p>Power Generation</p>
                </div>
                <div className="highlight-item">
                  <i className="fas fa-rupee-sign"></i>
                  <h4>₹45,000</h4>
                  <p>Annual Savings</p>
                </div>
                <div className="highlight-item">
                  <i className="fas fa-tree"></i>
                  <h4>2500</h4>
                  <p>Trees Saved</p>
                </div>
                <div className="highlight-item">
                  <i className="fas fa-clock"></i>
                  <h4>25 Years</h4>
                  <p>System Life</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Year 2016 */}
        {activeYear === '2016' && (
          <div className="featured-event">
            <div className="featured-event-header">
              <span className="event-year">Year 2016</span>
              <h3>Shet Tale (Farm Pond)</h3>
              <span className="category"><i className="fas fa-leaf"></i> Category: Environment</span>
            </div>
            <div className="featured-event-content">
              <p>According to the International Water Institute, over 70% of water drawals are on account of agriculture. This figure shows the importance of availability of water for sustenance of farming. If water is available, crops will survive, farmers will thrive and the food chain will sustain. In times of drought, the lack of water has a major impact on farmers and a cascading effect on every person. This was very apparent over the last couple of years in several drought-hit districts of Maharashtra.</p>
              
              <p>With the intention of alleviating the hardships caused by drought to some extent, the Trust embarked upon the task of building a <strong>farm pond in the Shantivan area of Arvi village, Zilla Beed</strong> in Maharashtra.</p>

              <p>This project was possible with the untiring support of <strong>Mr. Deepak Nagargoje from Shantivan</strong>.</p>

              <div className="event-details-box">
                <h4><i className="fas fa-info-circle"></i> Project Details</h4>
                <div className="details-grid">
                  <div className="detail-item">
                    <span className="detail-label">Location:</span>
                    <span className="detail-value">Shantivan, Arvi village, Beed Zilla</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Storage Capacity:</span>
                    <span className="detail-value">88 Lakh Litres</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Project Cost:</span>
                    <span className="detail-value">₹ 2,85,000</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Beneficiary:</span>
                    <span className="detail-value">Mr. Kakasaheb Shinde</span>
                  </div>
                </div>
              </div>

              <div className="event-highlights">
                <div className="highlight-item">
                  <i className="fas fa-water"></i>
                  <h4>88 Lakh</h4>
                  <p>Litres Storage</p>
                </div>
                <div className="highlight-item">
                  <i className="fas fa-rupee-sign"></i>
                  <h4>₹2.85L</h4>
                  <p>Project Cost</p>
                </div>
                <div className="highlight-item">
                  <i className="fas fa-tractor"></i>
                  <h4>Farming</h4>
                  <p>Support</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Year 2015 */}
        {activeYear === '2015' && (
          <div className="featured-event">
            <div className="featured-event-header">
              <span className="event-year">Year 2015</span>
              <h3>Multiple Initiatives</h3>
              <span className="category"><i className="fas fa-star"></i> Categories: Education & Health</span>
            </div>
            <div className="featured-event-content">
              
              {/* Event 1: Science Projects Exhibition */}
              <div className="sub-event">
                <h4 className="sub-event-title"><i className="fas fa-flask"></i> 1. Science Projects Exhibition for School Students</h4>
                <span className="sub-category"><i className="fas fa-graduation-cap"></i> Category: Education</span>
                
                <p>After a very encouraging response received to the science project exhibition conducted by the Trust in Pune in 2014, we decided to expand its reach and take it to Ghodegaon village. Thus, on <strong>22nd January, 2015</strong>, a science project exhibition was held at <strong>Janata Vidya Mandir at Ghodegaon</strong> in collaboration with Shastra Vahini Sanstha, Pune. Mr. Jondhale (प्रशासकीय अधिकारी - Jagtik Radio Durbin) was the chief guest at this event.</p>
                
                <p><strong>Thirty projects</strong> from various streams of science were displayed at this exhibition. A total of <strong>800 students</strong> from standards 5 to 8 visited the exhibition. Volunteers from Shastra Vahini Sanstha explained the projects to the students and enthusiastically answered all their questions. Books were also made available to the students at a concessional rate to help them with building their own science projects.</p>

                <div className="event-highlights">
                  <div className="highlight-item">
                    <i className="fas fa-microscope"></i>
                    <h4>30</h4>
                    <p>Projects Displayed</p>
                  </div>
                  <div className="highlight-item">
                    <i className="fas fa-user-graduate"></i>
                    <h4>800</h4>
                    <p>Students Attended</p>
                  </div>
                  <div className="highlight-item">
                    <i className="fas fa-school"></i>
                    <h4>Std 5-8</h4>
                    <p>Target Group</p>
                  </div>
                </div>
              </div>

              <div className="event-divider"></div>

              {/* Event 2: Health Camp */}
              <div className="sub-event">
                <h4 className="sub-event-title"><i className="fas fa-heartbeat"></i> 2. Health Camp - Haemoglobin Testing</h4>
                <span className="sub-category"><i className="fas fa-medkit"></i> Category: Health</span>
                
                <p>In association with and with full support of the <strong>Sterlite Group</strong>, a haemoglobin check-up camp was organised in Ambavane village, Taluka Velhe, Zilla Pune. Dr. Vijay Pitale and an entire team of technicians travelled from Ahmednagar to help conduct the testing.</p>

                <div className="event-details-box">
                  <h4><i className="fas fa-info-circle"></i> Camp Details</h4>
                  <div className="details-grid">
                    <div className="detail-item">
                      <span className="detail-label">Venue:</span>
                      <span className="detail-value">Jeevan Jyoti Mahila Sakshmikaran Kendra, Ambavane village</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Timings:</span>
                      <span className="detail-value">9:00 AM to 3:00 PM</span>
                    </div>
                  </div>
                </div>
                
                <p><strong>300 women and girls</strong> from Ambavane and surrounding villages got their haemoglobin checked at the camp. The team of doctors and technicians explained the results to each individual and suggested any remedial measures. Lunch was provided to everyone by the Trust and everyone who got tested was also given a packet of black dates to help increase their haemoglobin levels.</p>

                <div className="event-highlights">
                  <div className="highlight-item">
                    <i className="fas fa-female"></i>
                    <h4>300</h4>
                    <p>Women & Girls Tested</p>
                  </div>
                  <div className="highlight-item">
                    <i className="fas fa-user-md"></i>
                    <h4>Dr. Vijay Pitale</h4>
                    <p>Lead Doctor</p>
                  </div>
                  <div className="highlight-item">
                    <i className="fas fa-handshake"></i>
                    <h4>Sterlite</h4>
                    <p>Partnership</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Year 2014 */}
        {activeYear === '2014' && (
          <div className="featured-event">
            <div className="featured-event-header">
              <span className="event-year">Year 2014</span>
              <h3>Multiple Initiatives</h3>
              <span className="category"><i className="fas fa-star"></i> Categories: Health & Education</span>
            </div>
            <div className="featured-event-content">
              
              {/* Event 1: Multi-focus Health Camp */}
              <div className="sub-event">
                <h4 className="sub-event-title"><i className="fas fa-heartbeat"></i> 1. Multi-focus Health Camp - Heart Ailments, Mouth and Breast Cancer</h4>
                <span className="sub-category"><i className="fas fa-medkit"></i> Category: Health</span>
                
                <p>A medical camp was conducted on <strong>5th June, 2014</strong> at Dimbhe village near Ghodegaon. This was a multi-focus camp, conducted with the gracious help and support of the esteemed <strong>Grant Medical Foundation - Ruby Hall Clinic, Pune</strong>.</p>
                
                <p>The medical camp carried out a screening of patients and generated awareness in three main areas:</p>

                <ul className="event-list">
                  <li><i className="fas fa-check-circle"></i> Heart ailments (for patients above 40 years of age)</li>
                  <li><i className="fas fa-check-circle"></i> Mouth cancer</li>
                  <li><i className="fas fa-check-circle"></i> Breast cancer</li>
                </ul>

                <div className="event-details-box">
                  <h4><i className="fas fa-info-circle"></i> Camp Details</h4>
                  <div className="details-grid">
                    <div className="detail-item">
                      <span className="detail-label">Venue:</span>
                      <span className="detail-value">Primary Healthcare Centre, Dimbhe Village</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Timings:</span>
                      <span className="detail-value">9:00 AM to 2:00 PM</span>
                    </div>
                  </div>
                </div>
                
                <p><strong>Dr. P.K. Grant</strong>, the distinguished head of Grant Medical Foundation, and his colleagues examined the patients at the camp. For the patients advised further treatment, it will be provided at subsidised rates at Ruby Hall Clinic, Pune.</p>

                <div className="event-highlights">
                  <div className="highlight-item">
                    <i className="fas fa-heart"></i>
                    <h4>3</h4>
                    <p>Focus Areas</p>
                  </div>
                  <div className="highlight-item">
                    <i className="fas fa-hospital"></i>
                    <h4>Ruby Hall</h4>
                    <p>Partnership</p>
                  </div>
                  <div className="highlight-item">
                    <i className="fas fa-user-md"></i>
                    <h4>Dr. P.K. Grant</h4>
                    <p>Lead Doctor</p>
                  </div>
                </div>
              </div>

              <div className="event-divider"></div>

              {/* Event 2: Science Projects Exhibition */}
              <div className="sub-event">
                <h4 className="sub-event-title"><i className="fas fa-flask"></i> 2. Science Projects Exhibition for School Students</h4>
                <span className="sub-category"><i className="fas fa-graduation-cap"></i> Category: Education</span>
                
                <p>Science is considered as one of the tough subjects by students and parents. In addition to that, it is now compulsory in schools to make science projects. The grades given for these projects are considered during science grading. The scientific knowledge provided in school is bookish as implementation of this knowledge is lacking.</p>
                
                <p><strong>"Shastravahini"</strong> is an institution established by Mr. Madhav Khare, whose main aim is to help children do their own projects in model making such as Model aircrafts, Ships, Houses and buildings, Landscapes, Working toys etc.</p>
                
                <p>On above grounds, the Trust decided to conduct scientific exhibition <strong>"How to make Projects"</strong> in association with "Shastravahini" for students, parents and teachers in Pune. The exhibition included various projects in Optics, Equilibrium, Mechanics, Electrical Connections, Oscillations, Geometry, Geography, Aero-modeling, scientific games, Handicraft skills etc.</p>
                
                <p>Exhibition inauguration was done by <strong>Dr. Sanjay Chordia</strong> (Founder and Chairman Suryadatta Management Inst). More than <strong>550 people</strong> visited in two days and found that the exhibition was helpful for them. Many of them have also enrolled for getting trained as Resource person.</p>

                <div className="event-highlights">
                  <div className="highlight-item">
                    <i className="fas fa-users"></i>
                    <h4>550+</h4>
                    <p>Visitors</p>
                  </div>
                  <div className="highlight-item">
                    <i className="fas fa-calendar-day"></i>
                    <h4>2 Days</h4>
                    <p>Duration</p>
                  </div>
                  <div className="highlight-item">
                    <i className="fas fa-lightbulb"></i>
                    <h4>Multiple</h4>
                    <p>Project Streams</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Year 2013 */}
        {activeYear === '2013' && (
          <div className="featured-event">
            <div className="featured-event-header">
              <span className="event-year">Year 2013</span>
              <h3>Multiple Initiatives</h3>
              <span className="category"><i className="fas fa-star"></i> Categories: Health, Environment & Education</span>
            </div>
            <div className="featured-event-content">
              
              {/* Event 1: Health Camp - Haemoglobin */}
              <div className="sub-event">
                <h4 className="sub-event-title"><i className="fas fa-heartbeat"></i> 1. Health Camp - Haemoglobin</h4>
                <span className="sub-category"><i className="fas fa-medkit"></i> Category: Health</span>
                
                <p>A Haemoglobin check-up camp was conducted for girl students of <strong>B. D. Kale College, Ghodegaon</strong> on <strong>12th January, 2013</strong>. A camp like this was needed to increase awareness about the importance of a proper haemoglobin level for a human body. This camp was conducted in association with Ahmednagar based <strong>"Premraj Munot(Nevaskar) Trust"</strong>.</p>

                <div className="event-details-box">
                  <h4><i className="fas fa-info-circle"></i> Camp Highlights</h4>
                  <ul className="event-list">
                    <li><i className="fas fa-check-circle"></i> Camp inauguration was blessed by Shri. Devendraji Shah, Chairman & Managing Director, Gowardhan Udyog</li>
                    <li><i className="fas fa-check-circle"></i> Other honorable guests included Mr. Kailasji Kale (President, Ambegaon Taluka Vidya Vikas Mandal), Dr. Vijayji Pitale, Mr. Sharadji Munot</li>
                    <li><i className="fas fa-check-circle"></i> Inauguration started with Pushpanjali to Swami Vivekanandji on his 150th jayanti</li>
                    <li><i className="fas fa-check-circle"></i> A team of 6 medical representatives from Ahmednagar conducted the check-ups</li>
                    <li><i className="fas fa-check-circle"></i> About 300 students (including ~290 girls) plus 25 Khinvasara parivar members were tested</li>
                    <li><i className="fas fa-check-circle"></i> Free medicines were offered for those with low hemoglobin</li>
                    <li><i className="fas fa-check-circle"></i> Free "Black dates" packets (~300) were distributed</li>
                    <li><i className="fas fa-check-circle"></i> Free lunch was provided to patients</li>
                  </ul>
                </div>

                <div className="event-highlights">
                  <div className="highlight-item">
                    <i className="fas fa-users"></i>
                    <h4>300+</h4>
                    <p>Students Tested</p>
                  </div>
                  <div className="highlight-item">
                    <i className="fas fa-user-md"></i>
                    <h4>6</h4>
                    <p>Medical Representatives</p>
                  </div>
                  <div className="highlight-item">
                    <i className="fas fa-female"></i>
                    <h4>~290</h4>
                    <p>Girls Tested</p>
                  </div>
                </div>
              </div>

              <div className="event-divider"></div>

              {/* Event 2: CFL Bulb Distribution - Talekarwadi */}
              <div className="sub-event">
                <h4 className="sub-event-title"><i className="fas fa-lightbulb"></i> 2. CFL Bulb Distribution - Talekarwadi</h4>
                <span className="sub-category"><i className="fas fa-leaf"></i> Category: Environment</span>
                
                <p>The Trust had organised an event to replace the incandescent bulbs of an entire village with CFL bulbs on <strong>12th January, 2013</strong>. This followed on the successful event in 2012 and the village selected for this event was <strong>Talekarwadi</strong> which is around 5 Km. from Ghodegaon on the Sal-Dhakale road.</p>
                
                <p><strong>Talekarwadi</strong> has received the "Adarsh Gram Panchayat" from Prime Minister of India and special appreciation from former Presidents of India like Hon. Dr. A.P.J. Abdul Kalam.</p>
                
                <p>During this event, we distributed about <strong>150 CFL bulbs</strong> in the village. The purpose of CFL bulb distribution was to save electricity and, in turn, to support the nation in the efforts to protect the environment. About <strong>50 families</strong> from Talekarwadi took advantage of this program. We replaced all 40W, 60W and 100W bulbs with CFL bulbs. There was remarkable response from villagers of Talekarwadi to this endeavor.</p>

                <div className="event-highlights">
                  <div className="highlight-item">
                    <i className="fas fa-lightbulb"></i>
                    <h4>150</h4>
                    <p>CFL Bulbs Distributed</p>
                  </div>
                  <div className="highlight-item">
                    <i className="fas fa-home"></i>
                    <h4>50</h4>
                    <p>Families Benefited</p>
                  </div>
                  <div className="highlight-item">
                    <i className="fas fa-award"></i>
                    <h4>Adarsh Gram</h4>
                    <p>Award Winner Village</p>
                  </div>
                </div>
              </div>

              <div className="event-divider"></div>

              {/* Event 3: Educational Scholarships */}
              <div className="sub-event">
                <h4 className="sub-event-title"><i className="fas fa-graduation-cap"></i> 3. Educational Scholarships</h4>
                <span className="sub-category"><i className="fas fa-book"></i> Category: Education</span>
                
                <p><strong>5 students (4 girls and 1 boy)</strong> from B. D. Kale College were offered educational help during the inauguration function of the haemoglobin check-up camp organised on <strong>12th January, 2013</strong>. The help was in the form of a scholarship of <strong>Rs.2000 each</strong>. The students were selected from a shortlist vetted by the college principal and after applying a set of defined parameters.</p>

                <div className="event-highlights">
                  <div className="highlight-item">
                    <i className="fas fa-user-graduate"></i>
                    <h4>5</h4>
                    <p>Students</p>
                  </div>
                  <div className="highlight-item">
                    <i className="fas fa-rupee-sign"></i>
                    <h4>₹2,000</h4>
                    <p>Per Student</p>
                  </div>
                  <div className="highlight-item">
                    <i className="fas fa-female"></i>
                    <h4>4</h4>
                    <p>Girls</p>
                  </div>
                </div>
              </div>

              <div className="event-divider"></div>

              {/* Event 4: CFL Bulb Distribution - Ugalewadi */}
              <div className="sub-event">
                <h4 className="sub-event-title"><i className="fas fa-lightbulb"></i> 4. CFL Bulb Distribution - Ugalewadi</h4>
                <span className="sub-category"><i className="fas fa-leaf"></i> Category: Environment</span>
                
                <p>Continuing with our mission to help the environment, the Trust had organised an event to replace the incandescent bulbs of a village with CFL bulbs on <strong>22nd September, 2013</strong>. A total of <strong>180 bulbs</strong> were replaced with CFLs in the village of <strong>Ugalewadi, near Shinoli</strong>.</p>
                
                <p>The Trust received a lot of help from B. D. Kale College, Ghodegaon in conducting this event successfully. Besides the members of the trust, other prominent personalities present at the event included Prof. Jadhav (Principal - B.D.Kale College), Mr. Shankarbhai Shah (a respected businessman from Shinoli), Mr. Borhade and Ugale Guruji.</p>

                <div className="event-highlights">
                  <div className="highlight-item">
                    <i className="fas fa-lightbulb"></i>
                    <h4>180</h4>
                    <p>Bulbs Replaced</p>
                  </div>
                  <div className="highlight-item">
                    <i className="fas fa-map-marker-alt"></i>
                    <h4>Ugalewadi</h4>
                    <p>Village</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Year 2012 */}
        {activeYear === '2012' && (
          <div className="featured-event">
            <div className="featured-event-header">
              <span className="event-year">Year 2012</span>
              <h3>CFL Bulb Distribution - Dhakale Village</h3>
              <span className="category"><i className="fas fa-leaf"></i> Category: Environment</span>
            </div>
            <div className="featured-event-content">
              <p>CFLs use significantly less energy -- <strong>75 percent less energy</strong> than incandescent light bulbs (the regular bulbs). A 20-watt CFL gives light equivalent to a 75-watt incandescent bulb. Of course, using less energy means electricity bills get reduced. This also reduces toxic emissions from coal-powered energy generation plants since the energy consumption reduction leads to a reduction in energy generated.</p>
              
              <p>To create awareness about this and to demonstrate with practical use to a rural populace, the Trust organised an event to replace the incandescent bulbs of an entire village - <strong>Dhakale, Maharashtra</strong> - with CFL bulbs on <strong>27th May, 2012</strong>.</p>
              
              <p>The event was well received and got complete co-operation from the villagers of Dhakale. A few weeks before the event, a thorough survey was conducted (by students of B.D.Kale college and Trust members) to get an idea of energy consumption in the village by individual households.</p>
              
              <p>On the day of the event, more than <strong>200 incandescent bulbs</strong> were replaced by CFLs and the event was graced by the presence of <strong>Mrs. Anita Nighot</strong> (Head, Ghodegaon Panchayat Samiti), <strong>Mr. Bansode</strong> (Representative of electricity board) and <strong>Mrs. Dangat</strong> (Sarpanch - Dhakale village).</p>
              
              <p>Officials of the regional electricity board also commended the initiative taken by Khinvasara Trust and encouraged the members to keep up the good work. The Trust was ably assisted by <strong>Prof. Jadhav</strong>, Principal of B.D.Kale College and his students in organising the event.</p>

              <div className="event-highlights">
                <div className="highlight-item">
                  <i className="fas fa-lightbulb"></i>
                  <h4>200+</h4>
                  <p>Bulbs Replaced</p>
                </div>
                <div className="highlight-item">
                  <i className="fas fa-bolt"></i>
                  <h4>75%</h4>
                  <p>Energy Savings</p>
                </div>
                <div className="highlight-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <h4>Dhakale</h4>
                  <p>Village</p>
                </div>
                <div className="highlight-item">
                  <i className="fas fa-handshake"></i>
                  <h4>B.D. Kale</h4>
                  <p>College Support</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Year 2011 */}
        {activeYear === '2011' && (
          <div className="featured-event">
            <div className="featured-event-header">
              <span className="event-year">Year 2011</span>
              <h3>Multiple Initiatives</h3>
              <span className="category"><i className="fas fa-star"></i> Categories: Education & Health</span>
            </div>
            <div className="featured-event-content">
              
              {/* Event 1: Science Projects Exhibition */}
              <div className="sub-event">
                <h4 className="sub-event-title"><i className="fas fa-flask"></i> 1. Science Projects Exhibition for School Students</h4>
                <span className="sub-category"><i className="fas fa-graduation-cap"></i> Category: Education</span>
                
                <p>Science is considered as one of the tough subjects by students and parents. In addition to that, it is now compulsory in schools to make science projects. The grades given for these projects are considered during science grading. The scientific knowledge provided in school is bookish as implementation of this knowledge is lacking.</p>
                
                <p><strong>"Shastravahini"</strong> is an institution established by Mr. Madhav Khare, whose main aim is to help children do their own projects in model making such as Model aircrafts, Ships, Houses and buildings, Landscapes, Working toys etc.</p>
                
                <p>On above grounds, the Trust decided to conduct scientific exhibition <strong>"How to make Projects"</strong> in association with "Shastravahini" for students, parents and teachers in Pune. The exhibition included various projects in Optics, Equilibrium, Mechanics, Electrical Connections, Oscillations, Geometry, Geography, Aero-modeling, scientific games, Handicraft skills etc.</p>
                
                <p>Exhibition inauguration was done by <strong>Dr. Sanjay Chordia</strong> (Founder and Chairman Suryadatta Management Inst). More than <strong>550 people</strong> visited in two days and found that the exhibition was helpful for them. Many of them have also enrolled for getting trained as Resource person.</p>

                <div className="event-highlights">
                  <div className="highlight-item">
                    <i className="fas fa-users"></i>
                    <h4>550+</h4>
                    <p>Visitors</p>
                  </div>
                  <div className="highlight-item">
                    <i className="fas fa-calendar-day"></i>
                    <h4>2 Days</h4>
                    <p>Duration</p>
                  </div>
                  <div className="highlight-item">
                    <i className="fas fa-lightbulb"></i>
                    <h4>Multiple</h4>
                    <p>Project Streams</p>
                  </div>
                </div>
              </div>

              <div className="event-divider"></div>

              {/* Event 2: Health Camp – Orthopedic */}
              <div className="sub-event">
                <h4 className="sub-event-title"><i className="fas fa-bone"></i> 2. Health Camp – Orthopedic</h4>
                <span className="sub-category"><i className="fas fa-medkit"></i> Category: Health</span>
                
                <p>In association with <strong>Sancheti Hospital, Pune</strong>, the Trust organized an Orthopedic Health Camp at B.D.Kale College campus at Ghodegaon on <strong>14th May 2011</strong>. This camp was arranged on the occasion of third "Vardhapan Din" of Trust foundation.</p>

                <div className="event-details-box">
                  <h4><i className="fas fa-info-circle"></i> Camp Highlights</h4>
                  <ul className="event-list">
                    <li><i className="fas fa-check-circle"></i> Health Camp was inaugurated by <strong>Shri. Dilip Walse Patil</strong> (Speaker, Maharashtra State Assembly)</li>
                    <li><i className="fas fa-check-circle"></i> Deep Prajwalan was done by <strong>Padma Vibhushan Dr. K.H. Sancheti</strong></li>
                    <li><i className="fas fa-check-circle"></i> Other Honorable guests: Shree. Arun Gire (Vice President Pune Jilha Parisad), Shree. Jaisingh Kale, Prof. Indrajit Jadhav</li>
                    <li><i className="fas fa-check-circle"></i> Team of 4 resident doctors, 2 consultants, 4 Physiotherapists and Padmabhushan Dr. K.H. Sancheti conducted the camp</li>
                    <li><i className="fas fa-check-circle"></i> BDM (Bone Density Machine) facility was provided</li>
                    <li><i className="fas fa-check-circle"></i> Total <strong>262 patients</strong> registered for the camp</li>
                    <li><i className="fas fa-check-circle"></i> Patients from Ghodegaon & surrounding villages attended</li>
                    <li><i className="fas fa-check-circle"></i> Free medicines provided by pharmaceutical companies (Mankind, Apex, Emcure etc.)</li>
                    <li><i className="fas fa-check-circle"></i> Free lunch was provided to patients</li>
                  </ul>
                </div>

                <div className="event-highlights">
                  <div className="highlight-item">
                    <i className="fas fa-users"></i>
                    <h4>262</h4>
                    <p>Patients Registered</p>
                  </div>
                  <div className="highlight-item">
                    <i className="fas fa-user-md"></i>
                    <h4>10+</h4>
                    <p>Medical Staff</p>
                  </div>
                  <div className="highlight-item">
                    <i className="fas fa-hospital"></i>
                    <h4>Sancheti</h4>
                    <p>Hospital Partnership</p>
                  </div>
                </div>
              </div>

              <div className="event-divider"></div>

              {/* Event 3: Donation – Furniture for College E-Library */}
              <div className="sub-event">
                <h4 className="sub-event-title"><i className="fas fa-book-reader"></i> 3. Donation – Furniture for College E-Library</h4>
                <span className="sub-category"><i className="fas fa-graduation-cap"></i> Category: Education</span>
                
                <p>B.D. Kale College, one of important part of the Health camps organized by Khinvasara Pariwar Trust, was sanctioned an <strong>'E-Library'</strong> in their school and college. It was main aim of the school to provide students access to 'E-Books'. Not only this, to provide access to variety of information through internet.</p>
                
                <p>For successful implementation of this, there was need of creating basic infrastructure like internet connection, furniture, computers, cabins etc. Trust helped them by way of <strong>providing furniture for 'E-Library'</strong>.</p>

                <div className="event-highlights">
                  <div className="highlight-item">
                    <i className="fas fa-couch"></i>
                    <h4>Furniture</h4>
                    <p>Donated</p>
                  </div>
                  <div className="highlight-item">
                    <i className="fas fa-laptop"></i>
                    <h4>E-Library</h4>
                    <p>Infrastructure</p>
                  </div>
                  <div className="highlight-item">
                    <i className="fas fa-school"></i>
                    <h4>B.D. Kale</h4>
                    <p>College</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Year 2010 */}
        {activeYear === '2010' && (
          <div className="featured-event">
            <div className="featured-event-header">
              <span className="event-year">Year 2010</span>
              <h3>Multiple Initiatives</h3>
              <span className="category"><i className="fas fa-star"></i> Categories: Health & Education</span>
            </div>
            <div className="featured-event-content">
              
              {/* Event 1: Dental and Oral Health Camp */}
              <div className="sub-event">
                <h4 className="sub-event-title"><i className="fas fa-tooth"></i> 1. Health Camp – Dental and Oral Health</h4>
                <span className="sub-category"><i className="fas fa-medkit"></i> Category: Health</span>
                
                <p>Considering the fact that rural population, both male and female, are more addicted to tobacco and tobacco products, they are more prone to dental diseases. Also hospitals with advance techniques and equipments as well as doctors are not available in villages.</p>
                
                <p>Keeping these in mind, on <strong>2nd May 2009</strong>, at Ghodegaon, Khinvasara Trust had arranged a <strong>free Dental and Oral Health camp</strong>.</p>

                <div className="event-details-box">
                  <h4><i className="fas fa-info-circle"></i> Camp Highlights</h4>
                  <ul className="event-list">
                    <li><i className="fas fa-check-circle"></i> Children and adults, both male and female, of all age groups were examined</li>
                    <li><i className="fas fa-check-circle"></i> <strong>Dr. Anjali Gandhi, Dr. Rajendra Gandhi, Dr. Sangita</strong> and their associates (total team of 10) attended the patients</li>
                    <li><i className="fas fa-check-circle"></i> Very informative lecture and slide show presented by Dr. Anjali Gandhi and Dr. Sangita</li>
                    <li><i className="fas fa-check-circle"></i> Free lunch was offered to all patients</li>
                    <li><i className="fas fa-check-circle"></i> Opening was done by Maharashtra State Assembly, <strong>Shri. Dilip Walse Patil</strong></li>
                  </ul>
                </div>

                <div className="event-details-box">
                  <h4><i className="fas fa-chart-bar"></i> Camp Outcomes</h4>
                  <ul className="event-list">
                    <li><i className="fas fa-check-circle"></i> Response was excellent - more than <strong>315 patients</strong> were examined</li>
                    <li><i className="fas fa-check-circle"></i> <strong>180 cases</strong> were referred for further treatment at Pune</li>
                    <li><i className="fas fa-check-circle"></i> More than <strong>40 extractions</strong> were done on the spot</li>
                  </ul>
                </div>

                <div className="event-highlights">
                  <div className="highlight-item">
                    <i className="fas fa-users"></i>
                    <h4>315+</h4>
                    <p>Patients Examined</p>
                  </div>
                  <div className="highlight-item">
                    <i className="fas fa-hospital-user"></i>
                    <h4>180</h4>
                    <p>Referrals</p>
                  </div>
                  <div className="highlight-item">
                    <i className="fas fa-tooth"></i>
                    <h4>40+</h4>
                    <p>Extractions Done</p>
                  </div>
                  <div className="highlight-item">
                    <i className="fas fa-user-md"></i>
                    <h4>10</h4>
                    <p>Medical Team</p>
                  </div>
                </div>
              </div>

              <div className="event-divider"></div>

              {/* Event 2: Donation to College – Benches */}
              <div className="sub-event">
                <h4 className="sub-event-title"><i className="fas fa-chair"></i> 2. Donation to College – Computer Tables</h4>
                <span className="sub-category"><i className="fas fa-graduation-cap"></i> Category: Education</span>
                
                <p>B.D. Kale College, at Ghodegaon was sanctioned a <strong>B.C.S. degree</strong> to be conducted in their college. For this, there was requirement of 20 computer tables.</p>
                
                <p>To respect the fact that the college provided the Trust space and other facilities for successful completion of Dental Camp, Trust has donated <strong>10 computer tables</strong> to college, being one of the major objects of Trust of providing assistance for furtherance of education in society.</p>

                <div className="event-highlights">
                  <div className="highlight-item">
                    <i className="fas fa-desktop"></i>
                    <h4>10</h4>
                    <p>Computer Tables</p>
                  </div>
                  <div className="highlight-item">
                    <i className="fas fa-graduation-cap"></i>
                    <h4>B.C.S.</h4>
                    <p>Degree Support</p>
                  </div>
                  <div className="highlight-item">
                    <i className="fas fa-school"></i>
                    <h4>B.D. Kale</h4>
                    <p>College</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Year 2009 */}
        {activeYear === '2009' && (
          <div className="featured-event">
            <div className="featured-event-header">
              <span className="event-year">Year 2009</span>
              <h3>Multiple Initiatives</h3>
              <span className="category"><i className="fas fa-star"></i> Categories: Health & Education</span>
            </div>
            <div className="featured-event-content">
              
              {/* Event 1: Health Camp – Diabetes and Heart Diseases */}
              <div className="sub-event">
                <h4 className="sub-event-title"><i className="fas fa-heartbeat"></i> 1. Health Camp – Diabetes and Heart Diseases</h4>
                <span className="sub-category"><i className="fas fa-medkit"></i> Category: Health</span>
                
                <p>After the general study of serious diseases and how it is geographically spread, the conclusion was that majority of patients from villages are not detected and thus the disease is discovered at a very late stage. The common diseases were Diabetes, Heart attacks, Cancer and AIDS, to mention a few. So the Trust decided to conduct a free Health camp for Diabetes and Heart diseases.</p>
                
                <p>On <strong>May 3, 2009</strong> at Ghodegaon, the Trust in collaboration with <strong>Anandrishiji Hospital, Ahmadnagar</strong> had arranged a 'Free Health camp for Diabetes and Heart disease'. Response was very good and almost more than <strong>360 patients</strong> were examined.</p>

                <div className="event-details-box">
                  <h4><i className="fas fa-stethoscope"></i> Tests Conducted (Free of Cost)</h4>
                  <ul className="event-list">
                    <li><i className="fas fa-check-circle"></i> Blood sugar testing</li>
                    <li><i className="fas fa-check-circle"></i> ECG testing</li>
                    <li><i className="fas fa-check-circle"></i> General Check up</li>
                    <li><i className="fas fa-check-circle"></i> 2D Echo test for 70 patients who required it</li>
                  </ul>
                </div>

                <div className="event-details-box">
                  <h4><i className="fas fa-rupee-sign"></i> Subsidized Treatment Rates at Anandrishiji Hospital</h4>
                  <div className="details-grid">
                    <div className="detail-item">
                      <span className="detail-label">Bypass Surgery:</span>
                      <span className="detail-value">₹ 45,000</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Angioplasty:</span>
                      <span className="detail-value">₹ 50,000</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">BMV:</span>
                      <span className="detail-value">₹ 12,000</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Angiography:</span>
                      <span className="detail-value">₹ 4,000</span>
                    </div>
                  </div>
                  <p><em>All charges inclusive of all medication</em></p>
                </div>

                <div className="event-details-box">
                  <h4><i className="fas fa-info-circle"></i> Camp Highlights</h4>
                  <ul className="event-list">
                    <li><i className="fas fa-check-circle"></i> Camp was inaugurated by Maharashtra State Finance Minister <strong>Shri. Dilip Walse Patil</strong></li>
                    <li><i className="fas fa-check-circle"></i> Closing ceremony was solemnised by <strong>M.P Shivajirao Patil</strong></li>
                    <li><i className="fas fa-check-circle"></i> Experts: Dr. Sandeep Tadas (Cardiac Surgeon), Dr. Abhijit Pathak (Cardiologist), Dr. Vasant Katariya, and many more</li>
                    <li><i className="fas fa-check-circle"></i> Latest technology equipments were made available</li>
                    <li><i className="fas fa-check-circle"></i> A team of <strong>25 doctors, nurses and staff</strong> from Anandrishiji Hospital attended</li>
                    <li><i className="fas fa-check-circle"></i> Free lunch offered to all patients</li>
                    <li><i className="fas fa-check-circle"></i> Camp was highly appreciated by local media (Lokmat, Kesari, Sakal)</li>
                  </ul>
                </div>

                <div className="event-details-box">
                  <h4><i className="fas fa-chart-bar"></i> Camp Outcomes</h4>
                  <ul className="event-list">
                    <li><i className="fas fa-check-circle"></i> People from all age groups attended - from children as young as 6 months to senior citizens above 80 years</li>
                    <li><i className="fas fa-check-circle"></i> People from various places: Khed, Junner, Manchar, Nimdole, Panse, Kurkundi and many small 'vadis'</li>
                    <li><i className="fas fa-check-circle"></i> More than <strong>360 patients</strong> were examined</li>
                    <li><i className="fas fa-check-circle"></i> More than <strong>60 cases</strong> were referred for further treatment</li>
                  </ul>
                </div>

                <div className="event-highlights">
                  <div className="highlight-item">
                    <i className="fas fa-users"></i>
                    <h4>360+</h4>
                    <p>Patients Examined</p>
                  </div>
                  <div className="highlight-item">
                    <i className="fas fa-user-md"></i>
                    <h4>25</h4>
                    <p>Medical Staff</p>
                  </div>
                  <div className="highlight-item">
                    <i className="fas fa-hospital-user"></i>
                    <h4>60+</h4>
                    <p>Referrals</p>
                  </div>
                  <div className="highlight-item">
                    <i className="fas fa-heart"></i>
                    <h4>70</h4>
                    <p>2D Echo Tests</p>
                  </div>
                </div>
              </div>

              <div className="event-divider"></div>

              {/* Event 2: Water Cooler Donation */}
              <div className="sub-event">
                <h4 className="sub-event-title"><i className="fas fa-tint"></i> 2. Water Cooler Donation</h4>
                <span className="sub-category"><i className="fas fa-graduation-cap"></i> Category: Education</span>
                
                <p>B.D. Kale College, the place where the Trust's Health camp was organized, is the only college in Ghodegaon. At the time of organizing Health camp, there was major hurdle of pure drinking water. This was also highlighted by the principal in his speech while pointing out that the students suffer a lot because of the impure water.</p>
                
                <p>To help the students and staff of the college, the Trust donated a <strong>water cooler</strong> which was installed in the college building. As a result of this, clean and pure water is made available to students thereby reducing the chances of infections and contributing to their good health.</p>

                <div className="event-highlights">
                  <div className="highlight-item">
                    <i className="fas fa-tint"></i>
                    <h4>1</h4>
                    <p>Water Cooler</p>
                  </div>
                  <div className="highlight-item">
                    <i className="fas fa-school"></i>
                    <h4>B.D. Kale</h4>
                    <p>College</p>
                  </div>
                  <div className="highlight-item">
                    <i className="fas fa-heartbeat"></i>
                    <h4>Health</h4>
                    <p>Improvement</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Year 2008 */}
        {activeYear === '2008' && (
          <div className="featured-event">
            <div className="featured-event-header">
              <span className="event-year">Year 2008</span>
              <h3>First Initiatives</h3>
              <span className="category"><i className="fas fa-star"></i> Categories: Community Service & Education</span>
            </div>
            <div className="featured-event-content">
              
              {/* Event 1: Food Grain Donation */}
              <div className="sub-event">
                <h4 className="sub-event-title"><i className="fas fa-seedling"></i> 1. Food Grain Donation</h4>
                <span className="sub-category"><i className="fas fa-hands-helping"></i> Category: Community Service</span>
                
                <p><strong>St. John's Home for Women and Children</strong>, located at 808, Guruwar Peth, Panchhaud, Pune- 411042 is constituted for the purpose of rehabilitation of children and women. Its Licence number is 110, under the "Women's and Children's Maintenance Act".</p>
                
                <p>It is run by <strong>"Society of St. Mary The Virgin In India"</strong> with Public Trust Registration no as "F-1881 (Pune). It houses orphans and handicapped children, children of separated couples, sex workers and elderly people among others. The institution runs not only an old age home but also a school for these orphan children.</p>
                
                <p>After studying the way it is run and their difficulties and requirements, the Trust decided to donate <strong>food grains sufficient for one month requirement</strong>.</p>

                <div className="event-details-box">
                  <h4><i className="fas fa-info-circle"></i> Beneficiary Details</h4>
                  <div className="details-grid">
                    <div className="detail-item">
                      <span className="detail-label">Organization:</span>
                      <span className="detail-value">St. John's Home for Women and Children</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Location:</span>
                      <span className="detail-value">808, Guruwar Peth, Panchhaud, Pune- 411042</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Run By:</span>
                      <span className="detail-value">Society of St. Mary The Virgin In India</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Donation:</span>
                      <span className="detail-value">Food grains for 1 month</span>
                    </div>
                  </div>
                </div>

                <div className="event-highlights">
                  <div className="highlight-item">
                    <i className="fas fa-wheat-awn"></i>
                    <h4>1 Month</h4>
                    <p>Food Grains Supply</p>
                  </div>
                  <div className="highlight-item">
                    <i className="fas fa-home"></i>
                    <h4>St. John's</h4>
                    <p>Home for Women & Children</p>
                  </div>
                  <div className="highlight-item">
                    <i className="fas fa-hands-helping"></i>
                    <h4>Rehabilitation</h4>
                    <p>Support</p>
                  </div>
                </div>
              </div>

              <div className="event-divider"></div>

              {/* Event 2: Chair Donation */}
              <div className="sub-event">
                <h4 className="sub-event-title"><i className="fas fa-chair"></i> 2. Chair Donation</h4>
                <span className="sub-category"><i className="fas fa-graduation-cap"></i> Category: Education</span>
                
                <p><strong>"Jeevan Shikshan Mandir"</strong> is a school located at Ghodegaon, Tal- Ambegaon, Maharashtra. At the time of discussion with principal of the school, it was brought to our notice that the school library was devoid of chairs causing inconvenience to students.</p>
                
                <p>To ensure that students have a library environment conducive to studying, the Trust decided to <strong>donate chairs to the school library</strong>.</p>

                <div className="event-details-box">
                  <h4><i className="fas fa-info-circle"></i> Beneficiary Details</h4>
                  <div className="details-grid">
                    <div className="detail-item">
                      <span className="detail-label">School:</span>
                      <span className="detail-value">Jeevan Shikshan Mandir</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Location:</span>
                      <span className="detail-value">Ghodegaon, Tal- Ambegaon, Maharashtra</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Donation:</span>
                      <span className="detail-value">Chairs for School Library</span>
                    </div>
                  </div>
                </div>

                <div className="event-highlights">
                  <div className="highlight-item">
                    <i className="fas fa-chair"></i>
                    <h4>Chairs</h4>
                    <p>Donated</p>
                  </div>
                  <div className="highlight-item">
                    <i className="fas fa-book-open"></i>
                    <h4>Library</h4>
                    <p>Infrastructure</p>
                  </div>
                  <div className="highlight-item">
                    <i className="fas fa-school"></i>
                    <h4>Jeevan Shikshan</h4>
                    <p>Mandir School</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default Events;