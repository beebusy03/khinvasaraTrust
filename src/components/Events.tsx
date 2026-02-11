import { useState } from 'react'

const years = ['2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2018', '2020', '2021']

const Events = () => {
  const [activeYear, setActiveYear] = useState('2021')

  return (
    <section id="events" className="py-28 px-[5%] bg-gray-50">
      {/* Section Header */}
      <div className="text-center max-w-[750px] mx-auto mb-20">
        <span className="section-badge">
          <i className="fas fa-calendar-alt"></i> Our Journey
        </span>
        <h2 className="font-serif text-4xl md:text-5xl text-dark mb-5 leading-tight tracking-tight">
          Events & Milestones
        </h2>
        <p className="text-text-light text-lg leading-relaxed">
          Our commitment to social service through the years
        </p>
      </div>

      <div className="max-w-[1300px] mx-auto">
        {/* Formation Box */}
        <div className="gradient-primary text-white p-12 rounded-2xl text-center mb-20 shadow-custom-lg">
          <h3 className="font-serif text-3xl mb-4">
            <i className="fas fa-landmark mr-3"></i> Trust Formation
          </h3>
          <p className="text-lg opacity-95 max-w-[700px] mx-auto leading-relaxed">
            The Trust was conceptualised and constituted in the year 2007 and was registered under the Societies Registration Act, 1860 on <strong>12th February, 2007</strong>
          </p>
        </div>

        {/* Years Grid */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {years.map((year) => (
            <span
              key={year}
              onClick={() => setActiveYear(year)}
              className={`bg-white text-primary py-3.5 px-8 rounded-lg font-semibold text-base cursor-pointer transition-all duration-300 border-2 shadow-custom-sm hover:-translate-y-1 hover:shadow-custom-md hover:border-primary ${
                activeYear === year
                  ? 'bg-secondary text-white -translate-y-1 shadow-custom-md border-secondary'
                  : 'border-transparent'
              }`}
            >
              {year}
            </span>
          ))}
        </div>

        {/* Featured Event - 2021 */}
        {activeYear === '2021' && (
          <div className="bg-white rounded-2xl overflow-hidden shadow-custom-lg mt-8">
            <div className="gradient-primary text-white p-10">
              <span className="inline-block bg-white/20 py-1.5 px-5 rounded-full text-sm mb-5 font-medium">
                Year 2021
              </span>
              <h3 className="text-3xl mb-3 leading-snug font-semibold">
                Umed Pariwar - COVID Vaccination Drives
              </h3>
              <span className="inline-flex items-center gap-2 bg-white/20 py-1.5 px-5 rounded-full text-base">
                <i className="fas fa-heartbeat"></i> Category: Health
              </span>
            </div>
            <div className="p-12">
              <p className="text-text-light leading-relaxed mb-6 text-lg">
                The COVID-19 pandemic has demonstrated the interconnected nature of our world – and that no one is safe until everyone is safe. The pandemic has been one of the greatest health crises in recorded history. Thanks to rapid advances in science and technology, the light at the end of the tunnel is getting closer.
              </p>
              <p className="text-text-light leading-relaxed mb-6 text-lg">
                Intellectually Development Disable people are an integral part of our society and in current situation Covid-19 vaccination of these members is equally important. It is important that the vaccination is done in their comfort zone through on location vaccination drive or otherwise it is a hard task to take these members to a vaccination center.
              </p>
              <p className="text-text-light leading-relaxed mb-6 text-lg">
                <strong className="text-dark">Khinvasara Pariwar Trust in association with Pune Municipal Corporation (PMC)</strong> has carried out a vaccination drive at Umed Parivar Wadki for first and second dose of Covishield vaccine. It was PMC's first on site vaccination drive out of Pune municipal boundary.
              </p>
              <p className="text-text-light leading-relaxed mb-6 text-lg">
                The drive was conducted on <strong className="text-dark">24th July 2021</strong> for the first dose and on <strong className="text-dark">23rd October 2021</strong> for the second dose. More than 34 team members of Umed Parivar alongwith their staff have been vaccinated successfully.
              </p>
              <p className="text-text-light leading-relaxed text-lg">
                Our Trust thanks PMC's doctors and the vaccination drive team's co-operation for carrying out this activity effortlessly and in an organized manner for both doses. Umed Parivar Trust has thanked our Trust for making this Vaccination drive successful for their team members.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 pt-12 border-t border-gray-200">
                {[
                  { icon: 'fas fa-syringe', value: '34+', label: 'People Vaccinated' },
                  { icon: 'fas fa-calendar-check', value: '2', label: 'Vaccination Drives' },
                  { icon: 'fas fa-hospital', value: 'PMC', label: 'Partnership' },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="text-center p-8 bg-gray-50 rounded-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-custom-md"
                  >
                    <i className={`${item.icon} text-4xl text-primary mb-5`}></i>
                    <h4 className="text-3xl text-dark mb-1 font-bold">{item.value}</h4>
                    <p className="text-text-light text-base">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Events