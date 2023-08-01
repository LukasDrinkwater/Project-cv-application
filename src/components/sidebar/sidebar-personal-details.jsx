import { useState } from "react";

// Component that creates the personal details box
function PersonalDetailsBox(props) {
  const fullNameValue = props.fullNameValue;
  const setFullName = props.setFullName;

  const emailValue = props.emailValue;
  const setEmail = props.setEmail;

  const phoneNumber = props.phoneNumber;
  const setPhoneNumber = props.setPhoneNumber;

  const address = props.address;
  const setAddress = props.setAddress;

  return (
    <div className="personalDetailsContainer">
      <h2>Personal Details</h2>
      <form>
        <FullnameInput
          fullNameValue={fullNameValue}
          setFullName={setFullName}
        />
        <EmailInput emailValue={emailValue} setEmail={setEmail} />
        <PhoneNumberInput
          phoneNumber={phoneNumber}
          setPhoneNumber={setPhoneNumber}
        />
        <AddressInput address={address} setAddress={setAddress} />
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
function FullnameInput(props) {
  // const [fullNameValue, setFullName] = useState("");
  const fullNameValue = props.fullNameValue;
  const setFullName = props.setFullName;
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
function EmailInput(props) {
  // const [emailValue, setEmail] = useState("");
  const emailValue = props.emailValue;
  const setEmail = props.setEmail;

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
function PhoneNumberInput(props) {
  // const [phoneNumber, setPhoneNumber] = useState("");
  const phoneNumber = props.phoneNumber;
  const setPhoneNumber = props.setPhoneNumber;

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
function AddressInput(props) {
  // const [address, setAddress] = useState("");
  const address = props.address;
  const setAddress = props.setAddress;

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
