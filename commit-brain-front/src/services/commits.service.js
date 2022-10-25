import axios from "axios";

const s_getCommits = async () => {
    try {
        const result = await axios.get('http://localhost:8000/commit-brain');
        return result;
    } catch (e) {
        return false;
    }

}

export default s_getCommits;