* {

    margin: 0;

    padding: 0;

    box-sizing: border-box;

    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

}



body {

    background: linear-gradient(135deg, #ff0000, #cc0000);

    min-height: 100vh;

    display: flex;

    justify-content: center;

    align-items: center;

    padding: 20px;

}



.mainContainer {

    width: 100%;

    max-width: 1000px;

}



.container {

    background: rgba(255, 255, 255, 0.9);

    backdrop-filter: blur(10px);

    border-radius: 20px;

    padding: 30px;

    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);

}



.header {

    text-align: center;

    margin-bottom: 30px;

}



.header h1 {

    color: #1a1a1a;

    margin-bottom: 20px;

    font-size: 2.5rem;

}



.search-box {

    display: flex;

    gap: 10px;

    justify-content: center;

    margin-bottom: 20px;

}



.search-box input {

    padding: 12px 20px;

    border: 2px solid #e0e0e0;

    border-radius: 30px;

    width: 100%;

    max-width: 400px;

    font-size: 1rem;

    outline: none;

    transition: border-color 0.3s ease;

}



.search-box input:focus {

    border-color: #00b4d8;

}



.search-box button {

    background: #00b4d8;

    border: none;

    width: 45px;

    height: 45px;

    border-radius: 50%;

    cursor: pointer;

    transition: background 0.3s ease;

}



.search-box button:hover {

    background: #0077b6;

}



.search-box button i {

    color: white;

    font-size: 1.2rem;

}



.unit-toggle {

    display: flex;

    gap: 10px;

    justify-content: center;

    margin-bottom: 20px;

}



.unit-toggle button {

    padding: 8px 20px;

    border: 2px solid #00b4d8;

    background: transparent;

    color: #00b4d8;

    border-radius: 20px;

    cursor: pointer;

    transition: all 0.3s ease;

}



.unit-toggle button.active {

    background: #00b4d8;

    color: white;

}



.weather-info {

    display: flex;

    flex-direction: column;

    gap: 30px;

}



.current-weather {

    display: flex;

    align-items: center;

    gap: 30px;

    padding: 20px;

    background: rgba(255, 255, 255, 0.5);

    border-radius: 15px;

}



.weather-icon img {

    width: 120px;

    height: 120px;

}



.weather-details {

    flex-grow: 1;

}



.city {

    font-size: 1.8rem;

    color: #1a1a1a;

    margin-bottom: 10px;

}



.temperature {

    font-size: 3rem;

    font-weight: bold;

    color: #1a1a1a;

    margin-bottom: 10px;

}



.description {

    font-size: 1.2rem;

    color: #666;

    margin-bottom: 15px;

    text-transform: capitalize;

}



.additional-info {

    display: grid;

    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));

    gap: 15px;

}



.additional-info p {

    color: #666;

    font-size: 1rem;

}



.forecast {

    background: rgba(255, 255, 255, 0.5);

    border-radius: 15px;

    padding: 20px;

}



.forecast h3 {

    color: #1a1a1a;

    margin-bottom: 20px;

    text-align: center;

}



.forecast-container {

    display: grid;

    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));

    gap: 20px;

}



.forecast-item {

    background: rgba(255, 255, 255, 0.7);

    padding: 15px;

    border-radius: 10px;

    text-align: center;

}



.forecast-item img {

    width: 50px;

    height: 50px;

    margin-bottom: 10px;

}



.forecast-item .date {

    font-size: 0.9rem;

    color: #666;

    margin-bottom: 5px;

}



.forecast-item .temp {

    font-size: 1.2rem;

    font-weight: bold;

    color: #1a1a1a;

}



@media (max-width: 768px) {

    .current-weather {

        flex-direction: column;

        text-align: center;

    }

    

    .additional-info {

        justify-items: center;

    }

    

    .container {

        padding: 20px;

    }

}
