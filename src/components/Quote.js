import Navbar from './Navbar';

const Quote = () => (
  <>
    <Navbar />
    <section className="quote">
      <h4 style={{ fontWeight: '500', fontSize: '30px' }}>
        Mathematics is not about numbers, equations, computations, or
        algorithms: it is about understanding. –William Paul Thurston
      </h4>
    </section>
  </>
);

export default Quote;
