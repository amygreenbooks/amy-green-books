import "../styles/main.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="sans-serif">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
