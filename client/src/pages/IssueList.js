// import React from "react";
// import Wish from "../components/Issue";

// function IssueList() {
//   const [wishes, setWishes] = React.useState([]);

//   async function fetchWishes() {
//     const response = await fetch("http://localhost:8888/wishes");
//     const newWishes = await response.json();
//     setWishes(newWishes);
//   }

//   React.useEffect(() => {
//     fetchWishes();
//   }, []);

//   return (
//     <div>
//       {wishes.map(wish => (
//         <Wish key={wish.id} title={wish.title} priority={wish.priority} />
//       ))}
//     </div>
//   );
// }

// export default Wishlist;

// //

// import React from "react";
// import styled from "@emotion/styled";

// function IssueList() {
//   async function handleOnClick(event) {
//     event.preventDefault();
//     await fetch("http://localhost:8080/issues", {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({
//         typ,
//         timedate
//       })
//     });
//     setTyp("");
//     setTimedate("");
//   }

//   return <button onClick={handleOnClick}>Get all issues from server</button>;
// }

// export default IssueList;
