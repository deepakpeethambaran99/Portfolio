const companies = [
    "https://www.python.org/static/community_logos/python-logo-generic.svg",
    "https://static.djangoproject.com/img/logos/django-logo-positive.svg",
    "https://asset.brandfetch.io/idm9RBBGnw/idX_L1sVqY.png",
    `${process.env.PUBLIC_URL}/assets/icons/logo.svg`,
    `${process.env.PUBLIC_URL}/assets/icons/javascript.svg`,
    `${process.env.PUBLIC_URL}/assets/icons/html5.svg`,
    `${process.env.PUBLIC_URL}/assets/icons/css-logo.svg`,
  ];
   
function SkillIcons() {
    return (
      <section id="companies">
        <div className="py-14">
          <div className="container">
            <h3 className="gitfolio-underline section-heading text-2xl font-semibold text-gray-500">
                My Expertise
            </h3>
            <div className="relative mt-6">
              <div className="flex justify-center">
                {companies.map((logo, idx) => (
                  <img
                    key={idx}
                    src={logo}
                    className="h-10 w-40 px-2 dark:brightness-0 dark:invert"
                    alt={logo}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }


function Skills() {
  return (
    <>
        <div id="gitfolio-skills" className="mt-6">
            <SkillIcons />
        </div>
    </>
  );
}

export default Skills;
