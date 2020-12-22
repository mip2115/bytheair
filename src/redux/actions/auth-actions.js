export const signIn = (credentials) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then((response) => {
        console.log("login succeeded");
        const { uid } = response.user;
        // firestore
        //   .collection("users")
        //   .doc("YN0NfRopHrbkNYWSugoFSDSAE3I2")
        //   .get()
        //   .then((resp) => {
        //     const profile = resp.data();
        //     dispatch({ type: "LOGIN_SUCCESS", payload: profile });
        //   });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: "LOGIN_ERROR", err });
      });
  };
};

export const signOut = () => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    console.log("SIGNING OUT USER in actions");
    const firebase = getFirebase();

    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: "SIGNOUT_SUCCESS" });
      });
  };
};

export const signUp = (newUser) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    firebase
      .auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then((resp) => {
        return firestore
          .collection("users")
          .doc(resp.user.uid)
          .set({
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            initials: newUser.firstName[0] + newUser.lastName[0],
          });
      })
      .then(() => {
        dispatch({ type: "SIGNUP_SUCCESS" });
      })
      .catch((err) => {
        dispatch({ type: "SIGNUP_ERROR", err });
      });
  };
};
