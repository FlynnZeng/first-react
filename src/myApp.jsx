import axios from "axios";

function MyApp() {

    async function getStudentData() {
        const res = await axios.get('/api/students');
        console.log(res)
    }


    return (
        <>
            <button onClick={getStudentData}> click me</button>
        </>
    );
}

export default MyApp;
