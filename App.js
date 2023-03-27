import {Posts} from "./components/posts";
import {UsersSelect} from "./components/users-select";
import {useEffect} from "react";
import {getUsers} from "./actions";
import {connect} from "react-redux";
import {Header} from "./components/header";
import styles from './App.module.css'

function AppWrapper({getUsers}) {
    useEffect(() => {
        getUsers()
    }, [])


  return (
    <div className="App">
        <Header title={'Posts'}/>
        <div className={styles.App}>
            <UsersSelect />
            <Posts/>
        </div>
    </div>
  );
}

const mapDispatchToProps = {getUsers}

const App = connect(null, mapDispatchToProps)(AppWrapper)

export default App;
