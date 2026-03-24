export default function MarketingHeading() {
  return (
    <section className="mkt-figma-head">
      {/* Title */}
      <div className="mkt-figma-title-wrap">
        <h2 className="mkt-figma-title">tailored strategies</h2>

        <div className="mkt-figma-line" aria-hidden="true">
          <svg width="322" height="3" viewBox="0 0 322 3" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.5 1.5H320.5" stroke="black" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </div>

        <h3 className="mkt-figma-subtitle">real results</h3>
      </div>

      {/* Paragraph */}
      <div className="mkt-figma-para-wrap">
        <p className="mkt-figma-para">
          our approach is built on understanding your brand, leveraging data-driven insights &amp; constantly optimizing
          for the best results. We use cutting-edge AI technology, collaborate closely with you &amp; maintain full
          transparency to ensure your growth journey is seamless
        </p>
      </div>
    </section>
  );
}
