import firebase from 'firebase';

export default {
  name: 'Login',
  data() {
    return {
      email: "",
      password: "",
      emailError: "",
      passwordError: "",
      loginError: "",
    }
  },
  methods: {
    login(event) {
      let user = firebase.auth().currentUser;
      //   user.updateProfile({
      //     displayName: "m.shouman",
      //   }).then(() => {
      //     let displayName = user.displayName;
      //     console.log(displayName);
      //   }, (error) => {
      //     // An error happened.
      //   });
      if (!user) {
        firebase.auth().signInWithEmailAndPassword(this.email, this.password)
          .then((firebaseUser) => {
            this.$router.push('home');
          }).catch((error) => {
            this.$dialog.alert({
              title: 'Error',
              message: error.message,
              type: 'is-danger',
              hasIcon: true,
              icon: 'times-circle',
              iconPack: 'fa'
            });
          });
      }
    },
  },
  computed: {

  }
}
