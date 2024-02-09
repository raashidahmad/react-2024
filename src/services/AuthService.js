export function getAuthToken() {
    let token = localStorage.getItem('token');
    if (token) {
        return token;
    }
    return null;
}

export function setAuthToken() {
    localStorage.setItem("token", "passkey");
}

export function Logout() {
    localStorage.removeItem("token");
}