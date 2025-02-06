import { useActionState } from "react";
import styles from "./App.module.css";

function saveUser(prevState, formData) {
  const firstName = formData.get("firstName");
  const lastName = formData.get("lastName");

  return {
    message: `${firstName} ${lastName}`,
    fieldData: { firstName, lastName },
  };
}

function App() {
  const [data, formAction] = useActionState(saveUser, "");
  return (
    <div>
      <h1>Full Name Display</h1>
      <form className={styles.forms} action={formAction}>
        <label>
          First Name:
          <input
            type="text"
            id="firstName"
            name="firstName"
            defaultValue={data?.fieldData?.firstName}
            required
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            id="lastName"
            name="lastName"
            defaultValue={data?.fieldData?.lastName}
            required
          />
        </label>

        <button className={styles.formButton} type="submit">
          Submit
        </button>
      </form>
      {data?.message && (
        <p style={{ marginTop: "10px" }}>Full Name: {data?.message}</p>
      )}
    </div>
  );
}

export default App;
