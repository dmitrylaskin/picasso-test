const baseUrl = 'https://jsonplaceholder.typicode.com/'

export const getPosts = (id) =>
    fetch(`${baseUrl}posts?userId=${id}`, {
        method: 'GET',
    }).then(data => data.json())
        .catch(error => error);

export const getUsers = () =>
    fetch(`${baseUrl}users`, {
        method: 'GET',
    }).then(data => data.json())
        .catch(error => error);

export const getComments = (id) =>
    fetch(`${baseUrl}posts/${id}/comments`, {
        method: 'GET',
    }).then(data => data.json())
        .catch(error => error);