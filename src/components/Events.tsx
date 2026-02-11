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
      </div>
    </section>
  );
};

export default Events;