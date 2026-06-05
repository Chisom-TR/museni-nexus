export default function Home() {
    return (

        <>
            <div className="hero">
                <h1>Transforming Data into <span className="gradient-text">Strategic Advantage</span></h1>
                <p>
                    Expert data engineering, digital process automation, and enterprise
                    architecture — turning your raw data into decisions that move the
                    business forward.
                </p>
                <a className="cta-button" href="#">Get Your Free Consultation</a>
            </div>


            <section className="services">
                <div className="card">
                    <h3>Data Analytics Engineering</h3>
                    <p>Pipelines, warehouses, and dashboards that turn scattered data into a single, trustworthy source of truth.</p>
                </div>
                <div className="card">
                    <h3>Digital Process Automation</h3>
                    <p>Replace slow, manual workflows with reliable automation — freeing your team for the work that needs a human.</p>
                </div>
                    <div className="card">
                    <h3>Enterprise Digital Architecture</h3>
                    <p>Scalable, secure system design that connects your tools and data into one coherent, future-ready platform.</p>
                </div>
            </section>
        </>
    );
}