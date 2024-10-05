export default function Float() {
  return (
    <div id="wd-float-divs">
      <h2>Float</h2>
      <img
        src="/images/reactjs.jpg"
        width={150}
        style={{ float: 'left' }}
        alt="React JS Logo" // Add meaningful alt text
      />
      <p>
        Lorem ipsum dolor sit amet...
      </p>
      <img
        src="/images/reactjs.jpg"
        width={150}
        style={{ float: 'right' }}
        alt="React JS Logo" // Add meaningful alt text
      />
      <p>
        Lorem ipsum dolor sit amet...
      </p>
      <img
        src="/images/reactjs.jpg"
        width={150}
        style={{ float: 'left' }}
        alt="React JS Logo" // Add meaningful alt text
      />
      <p>
        Lorem ipsum dolor sit amet...
      </p>
    </div>
  );
}
