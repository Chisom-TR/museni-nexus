export default function Services() {
  return (
    <section className="services-page">
      <h1>Services</h1>

      <article id="data-analytics-engineering" className="service">
        <h2>Data Analytics Engineering</h2>
        <p className="service-tagline">A single, trustworthy source of truth.</p>
        <p>
          We design and build the pipelines, warehouses, and reporting layers
          that turn scattered, inconsistent data into something your whole team
          can rely on — from ingestion to dashboard. That includes the modeling,
          testing, and reconciliation work that finally makes the numbers agree.
        </p>
        <p className="service-includes-label">Includes</p>
        <ul>
          <li>Cloud warehouse design (BigQuery, Snowflake)</li>
          <li>dbt modeling &amp; transformation</li>
          <li>Pipeline orchestration (Airflow)</li>
          <li>Self-serve dashboards (Looker, Tableau)</li>
          <li>Data-quality testing &amp; monitoring</li>
        </ul>
      </article>

      <article id="digital-process-automation" className="service">
        <h2>Digital Process Automation</h2>
        <p className="service-tagline">Less manual work, fewer errors.</p>
        <p>
          We replace slow, repetitive workflows — invoicing, reporting, payouts,
          reconciliations — with dependable automated systems. Your team stops
          shuttling data between spreadsheets and tools, and gets back the hours
          for work that needs a human.
        </p>
        <p className="service-includes-label">Includes</p>
        <ul>
          <li>Finance &amp; reporting automation</li>
          <li>System-to-system integrations (APIs, webhooks)</li>
          <li>Scheduled data workflows</li>
          <li>Automated alerting &amp; anomaly detection</li>
          <li>Maintainable documentation</li>
        </ul>
      </article>

      <article id="enterprise-digital-architecture" className="service">
        <h2>Enterprise Digital Architecture</h2>
        <p className="service-tagline">One coherent, future-ready platform.</p>
        <p>
          We design the structure that connects your tools, data, and teams into
          a single coherent system — scalable, secure, and documented. Whether
          you&apos;re consolidating fragmented sources or planning for growth, we
          make the architectural calls that hold up over time.
        </p>
        <p className="service-includes-label">Includes</p>
        <ul>
          <li>Data platform &amp; warehouse architecture</li>
          <li>Multi-source system integration</li>
          <li>Source-of-truth &amp; governance design</li>
          <li>Cloud architecture (GCP, AWS)</li>
          <li>Technical strategy &amp; documentation</li>
        </ul>
      </article>
    </section>
  );
}
