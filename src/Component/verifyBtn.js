// import { useState } from 'react';
// // import { makeStyle } from '@material-ui/styles'


// function VerifyButton() {
//   const [isVerified, setIsVerified] = useState(false);

//   async function handleVerifyClick() {
//     try {
//       const authResult = await window.gapi.auth2.getAuthInstance().signIn();
//       const email = authResult.getBasicProfile().getEmail();
//       // Use the email to verify the user
//       setIsVerified(true);
//     } catch (error) {
//       console.error('Error verifying user:', error);
//     }
//   }
//   return (
//     <button onClick={handleVerifyClick} disabled={isVerified} 
//         style={{background:'black',padding:'10px',color:'white', margin:'auto',display:'grid',alignItems:'center'}}>
//       {isVerified ? 'Verified' : 'Verify with Gmail'}
//     </button>
//   );
// }

// export default VerifyButton;