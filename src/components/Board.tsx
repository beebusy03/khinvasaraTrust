const boardRoles = [
  { icon: 'fas fa-user-tie', label: '1 Chairman' },
  { icon: 'fas fa-user-edit', label: '1 Secretary' },
  { icon: 'fas fa-calculator', label: 'Treasurers' },
  { icon: 'fas fa-users', label: '3 Other Members' },
]

const Board = () => {
  return (
    <section className="py-28 px-[5%] bg-white">
      {/* Section Header */}
      <div className="text-center max-w-[750px] mx-auto mb-20">
        <span className="section-badge">
          <i className="fas fa-users-cog"></i> Governance
        </span>
        <h2 className="font-serif text-4xl md:text-5xl text-dark mb-5 leading-tight tracking-tight">
          Board of Trustees
        </h2>
        <p className="text-text-light text-lg leading-relaxed">
          Dedicated leadership ensuring transparent and effective operations
        </p>
      </div>

      <div className="max-w-[900px] mx-auto text-center bg-gray-50 p-14 rounded-2xl shadow-custom-md">
        <p className="text-text-light text-lg mb-10 leading-relaxed">
          The board of the Khinvasara Trust constitutes seven members committed to serving humanity and ensuring transparent operations of the trust.
        </p>
        <div className="flex justify-center gap-8 flex-wrap">
          {boardRoles.map((role, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-white py-5 px-8 rounded-full shadow-custom-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-custom-md"
            >
              <i className={`${role.icon} text-primary text-xl`}></i>
              <span className="font-semibold text-text-primary">{role.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Board