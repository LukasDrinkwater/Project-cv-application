import { useState } from "react";

// Component that creates the personal details box
function PersonalDetailsBox() {
  return (
    <div>
      <PersonalDetailsHeading></PersonalDetailsHeading>
      <FullnameInput></FullnameInput>
      <EmailInput></EmailInput>
      <PhoneNumberInput></PhoneNumberInput>
      <AddressInput></AddressInput>
    </div>
  );
}

// Component for the heading
function PersonalDetailsHeading() {
  return (
    <div>
      <h1>Personal Details</h1>
    </div>
  );
}

// Component for Full name
function FullnameInput() {
  const [fullNameValue, setFullName] = useState("First and last name");

  return (
    <div className="fullNameInputContainer">
      <h2>Full name</h2>
      <input
        type="text"
        value={fullNameValue}
        onChange={(event) => setFullName(event.target.value)}
      />
    </div>
  );
}

// Component for email
function EmailInput() {
  const [emailValue, setEmail] = useState("Email");

  return (
    <div className="emailInputContainer">
      <h2>Email</h2>
      <input
        type="email"
        value={emailValue}
        onChange={(event) => setEmail(event.tagert.value)}
      />
    </div>
  );
}

// Component for phone number
function PhoneNumberInput() {
  const [phoneNumber, setPhoneNumber] = useState("Phone number");

  return (
    <div className="phoneNumberInputContainer">
      <h2>Phone Number</h2>
      <input
        type="text"
        value={phoneNumber}
        onChange={(event) => setPhoneNumber(event.target.value)}
      />
    </div>
  );
}

// Component for address
function AddressInput() {
  const [address, setAddress] = useState("City/Town Country");

  return (
    <div className="addressInputContainer">
      <h2>Address</h2>
      <input
        type="text"
        value={address}
        onChange={(event) => setAddress(event.target.value)}
      />
    </div>
  );
}

export { PersonalDetailsBox };
