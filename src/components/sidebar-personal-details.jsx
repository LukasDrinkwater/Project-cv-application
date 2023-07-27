import { useState } from "react";

// Component that creates the personal details box
function PersonalDetailsBox() {
  return (
    <div className="peronalDetailsContainer">
      <h2>Personal Details</h2>
      <FullnameInput />
      <EmailInput />
      <PhoneNumberInput />
      <AddressInput />
    </div>
  );
}

// Component for the heading
// function PersonalDetailsHeading() {
//   return (
//     <div>
//       <p>Personal Details</p>
//     </div>
//   );
// }

// Component for Full name
function FullnameInput() {
  const [fullNameValue, setFullName] = useState("");

  return (
    <div className="fullNameInputContainer">
      <p>Full name</p>
      <input
        type="text"
        value={fullNameValue}
        placeholder="First and last name"
        onChange={(event) => setFullName(event.target.value)}
      />
    </div>
  );
}

// Component for email
function EmailInput() {
  const [emailValue, setEmail] = useState("");

  return (
    <div className="emailInputContainer">
      <p>Email</p>
      <input
        type="email"
        value={emailValue}
        placeholder="Email"
        onChange={(event) => setEmail(event.tagert.value)}
      />
    </div>
  );
}

// Component for phone number
function PhoneNumberInput() {
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <div className="phoneNumberInputContainer">
      <p>Phone Number</p>
      <input
        type="text"
        value={phoneNumber}
        placeholder="Phone number"
        onChange={(event) => setPhoneNumber(event.target.value)}
      />
    </div>
  );
}

// Component for address
function AddressInput() {
  const [address, setAddress] = useState("");

  return (
    <div className="addressInputContainer">
      <p>Address</p>
      <input
        type="text"
        value={address}
        placeholder="City/Town/Country"
        onChange={(event) => setAddress(event.target.value)}
      />
    </div>
  );
}

export { PersonalDetailsBox };
