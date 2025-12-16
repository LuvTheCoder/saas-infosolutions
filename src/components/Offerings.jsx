import OfferingCard from "./OfferingCard";

function Offering() {
  const offerings = [
    {
      heading: "IT Networking",
      description:
        "End-to-end active, passive and wireless networking solutions designed for scalability and reliability.",
      image:
        "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1170&auto=format&fit=crop",
      link: "/solutions/active-it-networking",
    },
    {
      heading: "IT Security",
      description:
        "Cyber, physical and logical security solutions to protect critical enterprise assets.",
      image:
        "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg",
      link: "/solutions/it-security",
    },
    {
      heading: "Cloud Computing",
      description:
        "Scalable IaaS, PaaS and SaaS solutions enabling agility and business continuity.",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
      link: "/solutions/it-security",
    },
    {
      heading: "IT Infrastructure & Support",
      description:
        "Servers, storage, backup, AMC and IT support outsourcing for seamless operations.",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475",
      link: "/solutions/it-security",
    },
    {
      heading: "Digital Productivity & Automation",
      description:
        "Workflow automation, BI and productivity monitoring solutions.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      link: "/solutions/digital-productivity",
    },
    {
      heading:"IT Software & Tools",
      description:"Modern IT environments require multiple tools for daily operations.",
      image:"https://images.pexels.com/photos/106344/pexels-photo-106344.jpeg",
      link:"/solutions/it-software"
    }
  ];

  return (
    <section className="bg-gray-50 py-16">
      {/* tighter container */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-6">

        {/* HEADER */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-semibold text-blue-900 mb-4">
            Our Offerings
          </h2>
          <p className="text-gray-600 max-w-3xl">
            End-to-end IT solutions designed to make organizations future ready.
          </p>
        </div>

        {/* GRID */}
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-6
          "
        >
          {offerings.map((item, index) => (
            <OfferingCard key={index} data={item} />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Offering;

