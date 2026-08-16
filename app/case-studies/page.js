import Link from "next/link";

export default function CaseStudies() {
  return (
    <section className="work">
      <h1>Selected work</h1>
      <p className="work-intro">
        Finance data is where the numbers have to be right. These are problems
        we&apos;ve solved: revenue that arrives from three systems and
        doesn&apos;t agree, contracts that live on paper instead of in code, and
        payouts that take a fortnight because someone has to check everything by
        hand.
      </p>
      <p className="work-disclaimer">
        Some of this work was delivered as Museni Nexus engagements; some
        in-house, before the practice. Clients are unnamed and figures are
        rounded.
      </p>

      <article className="work-item work-feature">
        <div className="work-num">01</div>
        <h2>Creator royalty engine and ERP invoice automation</h2>
        <div className="work-meta">
          Subscription media · BigQuery, dbt, Airflow, Python, Dynamics 365
          Business Central
        </div>
        <p className="work-standfirst">
          A European podcast and audiobook streaming platform pays revenue shares
          to hundreds of creators and publishers every month. The numbers came
          from three systems that never agreed.
        </p>

        <div className="cs-statement">
          <div className="cs-statement-label">Outcome</div>
          <dl>
            <div className="cs-line">
              <dt>Monthly payout cycle</dt>
              <dd><span className="cs-was">18 days</span> → 7 days</dd>
            </div>
            <div className="cs-line">
              <dt>Contract logic</dt>
              <dd>Tested, versioned, reviewable</dd>
            </div>
            <div className="cs-line">
              <dt>Anomalies</dt>
              <dd>Caught before payout</dd>
            </div>
            <div className="cs-line">
              <dt>Warehouse cost</dt>
              <dd>Down ~70%</dd>
            </div>
            <div className="cs-line cs-total">
              <dt>Annual saving</dt>
              <dd>~€1.2M</dd>
            </div>
          </dl>
        </div>

        <h3 className="cs-label">The situation</h3>
        <p>
          Each contract carried its own logic: different revenue splits,
          different minimum guarantees, different rules for how streams and
          subscriptions convert into money owed.
        </p>
        <p>
          The process ran on manual exports, spreadsheets and institutional
          memory. Every month, finance spent up to 18 days assembling numbers
          from systems that didn&apos;t naturally agree — streaming data from the
          product platform, revenue data from billing, contract terms from
          documents. Errors were hard to catch, disputes were hard to resolve,
          and the people who understood the process were a single point of
          failure.
        </p>

        <h3 className="cs-label">The problem underneath</h3>
        <p>
          This wasn&apos;t a spreadsheet problem. It was a reconciliation problem:
          three systems, each with its own version of the truth, and a set of
          contractual rules that existed only on paper.
        </p>
        <p className="cs-pull">
          Any automation that didn&apos;t first make the numbers agree would just
          produce wrong answers faster.
        </p>

        <h3 className="cs-label">What we built</h3>
        <p>Working on the client&apos;s BigQuery, dbt and Airflow stack:</p>
        <ul className="cs-built">
          <li>
            <b>Encoded the contracts as code</b>
            Every revenue-share rule, minimum guarantee and edge case from the
            agreements became tested, versioned transformation logic — reviewable
            by finance, not buried in anyone&apos;s head.
          </li>
          <li>
            <b>Built the reconciliation layer first</b>
            Before a single payout was computed, we modelled how streaming,
            billing and contract data map onto each other, and made disagreements
            visible instead of silent — with automated outlier tests that flag
            anomalies for finance to investigate before money moves.
          </li>
          <li>
            <b>Automated the pipeline end to end</b>
            From raw platform data to payout-ready figures, orchestrated on a
            monthly schedule, with data-quality tests at every stage and alerts
            when something needs a human.
          </li>
        </ul>

        <h3 className="cs-label">The results</h3>
        <p>
          Payout cycle time fell from 18 days to 7, with a clear path to
          same-week payouts, and roughly <strong>€1.2M in annual savings</strong> from
          correctly applied contract logic and eliminated manual effort.
          Re-architecting the models also cut warehouse costs by roughly 70%.
        </p>
        <p>
          Anomalies now surface <em>before</em> payouts go out. Finance
          investigates exceptions instead of rebuilding everything from scratch
          each month. And the process survives personnel changes: the rules live
          in tested code, not in one person&apos;s memory.
        </p>

        <h3 className="cs-label">Why it matters beyond this client</h3>
        <p>
          Every business that shares revenue — with creators, publishers, artists,
          partners or affiliates — runs some version of this problem. The systems
          never agree out of the box. The contracts are always more complicated
          than the first spreadsheet assumed.
        </p>
        <p>
          The fix is the same discipline every time: reconcile first, encode the
          rules, automate with tests, and keep humans in the loop for exceptions.
        </p>
      </article>

      <article className="work-item">
        <div className="work-num">02</div>
        <h2>Cross-source wholesale reconciliation</h2>
        <div className="work-meta">
          Global retail distribution · Snowflake, dbt, Python, REST APIs
        </div>
        <p>
          A brand selling through wholesalers across several continents needed to
          know what retailers were actually selling from the shelf, not just what
          had been shipped to them. The obstacle wasn&apos;t volume — it was that
          every partner exported a different format, currency and tax treatment
          varied by market, and no shared entity IDs existed between the internal
          ERP and the partners&apos; reports. Sell-in and sell-out simply
          didn&apos;t tie.
        </p>
        <p>
          We built a reconciliation engine that ingests the messy exports as they
          come, and entity-matching logic that bridges internal product masters
          to external partner records without canonical keys. Discrepancy tests
          flag mismatched volumes, pricing gaps and missing settlement records
          automatically, rather than someone finding them in a spreadsheet weeks
          later.
        </p>
        <p className="work-outcome">
          One audit-ready source of truth for cross-border margin, and finance
          sees discrepancies as they appear rather than at quarter end.
        </p>
      </article>

      <article className="work-item">
        <div className="work-num">03</div>
        <h2>Audit-ready reporting for a regulated financial platform</h2>
        <div className="work-meta">Fintech · Cloud warehouse, dbt, SQL, CI/CD</div>
        <p>
          In regulated finance, a reconciliation error isn&apos;t a dashboard
          problem — it&apos;s a compliance problem. Every downstream metric has to
          trace back to the raw ledger event.
        </p>
        <p>
          We built and maintained the staging, intermediate and mart layers
          behind regulated reporting, with testing that goes beyond uniqueness
          and null checks to custom balance assertions, plus CI/CD and version
          control so lineage is auditable end to end.
        </p>
        <p className="work-outcome">
          The standard was simple: the numbers tie to the source, exactly.
        </p>
      </article>

      <article className="work-item">
        <div className="work-num">04</div>
        <h2>Turning warehouse data into a product</h2>
        <div className="work-meta">
          Consumer subscription · Warehouse, reverse ETL, Python
        </div>
        <p>
          User engagement data was sitting in the warehouse where no
          customer-facing system could reach it.
        </p>
        <p>
          We modelled raw behavioural data into personalised, production-ready
          payloads and pushed them back out to the applications customers
          actually touch.
        </p>
        <p className="work-outcome">
          It became an end-of-year personalised experience feature — analytics
          turned into something users could see, during the highest-traffic weeks
          of the year.
        </p>
      </article>

      <div className="work-closing">
        <h2>Recognise any of this?</h2>
        <p>
          Payouts that take too long. Numbers that don&apos;t tie. Contract logic
          that lives in one person&apos;s head. Invoices posted by hand.
        </p>
        <Link className="cta-button" href="/contact">
          Book a 15-minute technical call
        </Link>
      </div>
    </section>
  );
}
