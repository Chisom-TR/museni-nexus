// The first year of professional experience. Set this once — the number in the
// copy below is calculated from it, so it grows by 1 automatically each year.
const EXPERIENCE_START_YEAR = 2019;
const yearsExperience = new Date().getFullYear() - EXPERIENCE_START_YEAR;

export default function About() {
  return (
    <section className="about">
      <h1>About Museni Nexus</h1>

      <p>
        Museni Nexus is a boutique data and analytics consultancy. We help
        companies turn fragmented, unreliable data into infrastructure they can
        build decisions on.
      </p>

      <p>
        Behind the name is over {yearsExperience} years of hands-on experience across
        fintech, digital media, and consumer-product companies — designing data
        platforms, automating finance and reporting workflows, and integrating
        the messy, often disagreeing systems that most businesses actually run
        on. We bring that same senior, in-the-weeds standard to every
        engagement.
      </p>

      <p>
        We work in the modern data stack — BigQuery, Snowflake, dbt, Airflow,
        Looker — but the tools matter less than the outcome: data your team
        trusts, processes that run themselves, and architecture that still makes
        sense a year from now.
      </p>

      <h2>How we work</h2>
      <ul>
        <li>
          <strong>Senior-led, hands-on. </strong> You work directly with an
          experienced engineer, not a layer of account managers.
        </li>
        <li>
          <strong>Built to outlast us. </strong> Everything we deliver is tested,
          documented, and handed over so your team can own it.
        </li>
        <li>
          <strong>Business first. </strong> We start from the decision you&apos;re
          trying to make, then build the data to support it.
        </li>
      </ul>
    </section>
  );
}
