// Autor: DuPont9029
// Description: This file contains the functions to make requests to the API



// Get requests 

function get (url, variablebool, variable) {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (variablebool) {
                variable = data
            }
            else {
                 console.log(data)
            }
        })

        .catch(error => {
            console.error(error);
        });

}


function getxml(url, variablebool, variable) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                console.log(JSON.stringify(xhr.responseText));
                    if (variablebool) {
                        variable = JSON.stringify(xhr.responseText);
                    }
            } else {
                console.error('Error:', xhr.status);
            }
        }
    };
    xhr.send();
}


// Post requests

function post(url, data, headers, variablebool, variable, callback) {
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            ...headers
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`Network response was not ok, status: ${response.status}`);
        }
        return response.json();
    })
    .then(responseData => {
        const responseText = JSON.stringify(responseData);
        console.log(responseText);
        
        if (variablebool) {
            variable = responseText;
        }

        if (callback) {
            callback(responseData);
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function postxml(url, data, headers, variablebool, variable, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    
    for (const key in headers) {
        xhr.setRequestHeader(key, headers[key]);
    }
    
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 201) {
                const responseText = JSON.stringify(xhr.responseText);
                console.log(responseText);

                if (variablebool) {
                    variable = responseText;
                }

                if (callback) {
                    callback(JSON.parse(xhr.responseText));
                }
            } else {
                console.error('Error:', xhr.status);
            }
        }
    };

    xhr.onerror = function (error) {
        console.error('Request error:', error);
    };

    xhr.send(JSON.stringify(data));
}

