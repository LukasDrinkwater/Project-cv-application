import { useState } from "react";

// Component that creates the personal details box
function PersonalDetailsBox() {
  return (
    <div className="personalDetailsContainer">
      <h2>Personal Details</h2>
      <form>
        <FullnameInput />
        <EmailInput />
        <PhoneNumberInput />
        <AddressInput />
      </form>
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
      <label>Full name</label>
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
      <label>Email</label>
      <input
        type="email"
        value={emailValue}
        placeholder="Email"
        onChange={(event) => setEmail(event.target.value)}
      />
    </div>
  );
}

// Component for phone number
function PhoneNumberInput() {
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <div className="phoneNumberInputContainer">
      <label>Phone Number</label>
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
      <label>Address</label>
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
