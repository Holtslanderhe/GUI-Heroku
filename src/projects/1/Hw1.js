import {useState} from "react";

const myKey = process.env.REACT_APP_APOD_API_KEY;

function Hw1() {
    const [desc, setDesc] = useState("place holder for APOD");
    const [url, setUrl] = useState("https://via.placeholder.com/150");

    function fetchAPOD() {
        let reqUrl = "https://api.nasa.gov/planetary/apod?api_key=" + myKey;

        fetch(reqUrl)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                const {copyright, date, explanation, hdurl, media_type, service_version, title, url} = data
                console.log(url);
                setUrl(url);
                setDesc(explanation);
            })
            .catch(error => {console.log(error)})
    }

    if (process.env.REACT_APP_APOD_API_KEY) {
        return (
            <div>
                <div>
                    <h1>Homework 1</h1>
                    <button onClick={fetchAPOD}>NASA Astronomy Picture of the Day</button>
                    <div>
                        <img src={url} />
                        <p>{desc}</p>
                    </div>
                </div>
            </div>
        );
    }
    else {
        return (
            <div>
                <div>
                    <h1>Homework 1</h1>
                    <p>No Api key for you!</p>
                    <div>
                        <img src={url} />
                        <p>{desc}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Hw1;