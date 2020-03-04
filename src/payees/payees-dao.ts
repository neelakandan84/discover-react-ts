function getPayees() {
  return fetch('http://localhost:8000/api/v1/banking/payees?_delay=2500')
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        // What do we do with status >= 400?
        return Promise.reject({
          message: 'Bad status',
          status: response.status,
        });
      }
    })
    .catch(handleError);
}

function handleError(error: any) {
  // How should we handle an error?
  if (error.message) {
    return Promise.reject(error);
  } else {
    return Promise.reject({
      message: 'Unknown DAO error',
    });
  }
}

const dao = {
  getPayees
};

export { dao };
