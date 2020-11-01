export default function NewsletterForm() {
  return (
    <div
      id="mlb2-2157310"
      className="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-2157310"
    >
      <form
        className="ml-block-form flex-ns mb3"
        action="https://app.mailerlite.com/webforms/submit/n6v2g4"
        data-code="n6v2g4"
        method="post"
        target="_blank"
      >
        <div className="flex-auto mb2 mb0-ns mr2-ns relative">
          <input
            type="text"
            className="form-control w-100"
            data-inputmask=""
            id="newsletter-fname"
            name="fields[name]"
            placeholder="First Name"
            autoComplete="name"
          />
          <label htmlFor="newsletter-fname">First Name</label>
        </div>
        <div className="flex-auto mb2 mb0-ns mr2-ns relative">
          <input
            type="email"
            className="form-control w-100"
            data-inputmask=""
            id="newsletter-email"
            name="fields[email]"
            placeholder="Email"
            autoComplete="email"
          />
          <label htmlFor="newsletter-email">Email</label>
        </div>

        <button
          className="btn mb3 w-100 w-auto-ns mb0-ns raise bg-primary primary white"
          type="submit"
        >
          Subscribe
        </button>
        <button
          disabled="disabled"
          type="button"
          className="btn mb3 w-100 w-auto-ns mb0-ns bg-primary loading"
          style={{ display: "none" }}
          aria-label="Subscribing"
        >
          <div className="ml-form-embedSubmitLoad">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </button>

        <input type="hidden" name="ml-submit" value="1" />
      </form>
      <div
        className="ml-form-successBody row-success"
        style={{ display: "none" }}
      >
        <div className="ml-form-successContent tc">
          <h4 className="f3 primary b">Thank You!</h4>
          <p>You are now signed up for my newsletters.</p>
        </div>
      </div>
      <script
        dangerouslySetInnerHTML={{
          __html: `function ml_webform_success_2157310(){var r=ml_jQuery||jQuery;r(".ml-subscribe-form-2157310 .row-success").show(),r(".ml-subscribe-form-2157310 .row-form").hide()}`,
        }}
      ></script>
      <img
        src="https://track.mailerlite.com/webforms/o/2157310/n6v2g4?vc25f966922c0a35ad9c2401af6506ef1"
        width="1"
        height="1"
        style={{
          maxWidth: 1,
          maxHeight: 1,
          visibility: "hidden",
          padding: 0,
          margin: 0,
          display: "block",
        }}
        alt="."
        border="0"
      />
      <script
        src="https://static.mailerlite.com/js/w/webforms.min.js?vc25f966922c0a35ad9c2401af6506ef1"
        type="text/javascript"
      ></script>
    </div>
  );
}
