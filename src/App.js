// import React from "react";

// function App() {
//   return (
//     <div>
//       <h1>Hello, React!</h1>
//       <p>This is a simple React app.</p>
//     </div>
//   );
// }

// export default App;

import React from "react";

function App() {
  const [data, setData] = React.useState(null);
  // fetch data from an api
  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((result) => setData(result));
  }, []);
  console.log(data, "chck data");
  // now let take an fake apis
  // now lets count the length of the data
  const dataLen = data && data.length;
  return (
    <div>
      <p>Total Data: {dataLen} </p>
      {data &&
        data.map((item, index) => (
          <React.Fragment key={index}>
            <div style={{ backgroundColor: "#f0f0f0f0", marginBottom: 10 }}>
              <p>userId:- {item.userId} </p>
              <p>Title :- {item.title} </p>
            </div>
          </React.Fragment>
        ))}
    </div>
  );
}

export default App;
