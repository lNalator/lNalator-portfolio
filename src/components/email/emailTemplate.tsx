export const EmailTemplate = ({ name, email, subject, message }) => (
  <div>
    <h3>Nom : {name}</h3>
    <h3>Email : {email}</h3>
    <h3>Sujet: {subject}</h3>
    <h3>Message: {message}</h3>
  </div>
);
