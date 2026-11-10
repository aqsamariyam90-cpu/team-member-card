import MemberCard from "./components/MemberCard";
import "./App.css";
function App() {
    let members = [
        {
            id: 1,
            name: "Aqsa Maryam",
            role: "Frontend Developer",
            description: "I enjoy creating websites using HTML, CSS and React."
        },
        {
            id: 2,
            name: "Ali Ahmed",
            role: "Backend Developer",
            description: "I work with server-side development."
        },
        {
            id: 3,
            name: "Sara Khan",
            role: "UI Designer",
            description: "I enjoy designing simple interfaces."
        },
        {
            id: 4,
            name: "Ahmed Raza",
            role: "Web Developer",
            description: "I create responsive websites."
        },
        {
            id: 5,
            name: "Ayesha Noor",
            role: "Graphic Designer",
            description: "I create creative graphic designs."
        },
        {
            id: 6,
            name: "Usman Ali",
            role: "React Developer",
            description: "I build user interfaces using React."
        }
    ];
    return (
        <div className="container mt-4">
            <h1 className="text-center mb-4">Our Team Members</h1>
            <div className="row">
                {members.map((member) => (
                    <div className="col-md-4 mb-4" key={member.id}>
                        <MemberCard
                            name={member.name}
                            role={member.role}
                            description={member.description}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
export default App;