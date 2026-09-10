import React from "react";
import Button from "./Button";
import Input from "./Input";

function Form() {
  const arr = ["Item 1", "Item 2"];
  return (
    <div>
      <Input id="email" label="Email" required />
      <Input id="password" type="password" label="Password" />
      <Button items={arr} />
    </div>
  );
}

// function Form() {
//   return (
//     <>
//       <p>
//         <label htmlFor="nome">Nome</label>
//         <Input />
//       </p>
//       <p>
//         <label htmlFor="mail">Email</label>
//         <Input />
//       </p>
//       <Button />
//     </>
//   );
// }

export default Form;
