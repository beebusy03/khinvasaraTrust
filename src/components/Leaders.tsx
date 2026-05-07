const leaders: { name: string; role?: string }[] = [
  { name: "Shantilal Khinvasara", role: "Chairman" },
  { name: "Rahul Khinvasara", role: "Secretary" },
  { name: "Sachin Khinvasara", role: "Treasurer" },
  { name: "Sanket Khinvasara", role: "Committee Member" },
  { name: "Nilesh Khinvasara", role: "Committee Member" },
  { name: "Nayan Khinvasara", role: "Committee Member" },
  { name: "Swapnil Khinvasara", role: "Committee Member" },
  { name: "Arun Khinvasara", role: "Member" },
  { name: "Vikas Khinvasara", role: "Member" },
  { name: "Parag Khinvasara", role: "Member" },
  { name: "Nandini Khinvasara", role: "Member" },
  { name: "Tushar Khinvasara", role: "Member" },
  { name: "Meena Pokharna", role: "Member" },
  { name: "Abhay Pokharna", role: "Member" },
  { name: "Sheetal Gugale", role: "Member" },
  { name: "Yogesh Meher", role: "Member" },
  { name: "Anjali Lodha", role: "Member" },
  { name: "Shreyas Khinvasara", role: "Member" },
  { name: "Sunanda Kale", role: "Member" },
];

const Leaders = () => {
  return (
    <section className="leaders">
      <div className="section-header">
        <span className="section-badge"><i className="fas fa-user-tie"></i> Leadership</span>
        <h2>Trust Leaders</h2>
        <p>Visionaries dedicated to making a difference in society</p>
      </div>
      <div className="leaders-container">
        {leaders.map((leader) => (
          <div className="leader-card" key={leader.name}>
            <h3>{leader.name}</h3>
            {leader.role && <p className="role">{leader.role}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Leaders;